import { Hono } from "npm:hono";
import { cors } from "npm:hono/cors";
import { logger } from "npm:hono/logger";
import * as kv from "./kv_store.tsx";
import { createClient } from "jsr:@supabase/supabase-js@2";

const app = new Hono();

// Initialize Supabase client
const supabase = createClient(
  Deno.env.get('SUPABASE_URL') ?? '',
  Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? '',
);

// Create storage bucket on startup
const BUCKET_NAME = 'make-bb20e683-images';
const { data: buckets } = await supabase.storage.listBuckets();
const bucketExists = buckets?.some(bucket => bucket.name === BUCKET_NAME);
if (!bucketExists) {
  await supabase.storage.createBucket(BUCKET_NAME, { public: false });
  console.log(`Created storage bucket: ${BUCKET_NAME}`);
}

// Enable logger
app.use('*', logger(console.log));

// Enable CORS for all routes and methods
app.use(
  "/*",
  cors({
    origin: "*",
    allowHeaders: ["Content-Type", "Authorization"],
    allowMethods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    exposeHeaders: ["Content-Length"],
    maxAge: 600,
  }),
);

// Health check endpoint
app.get("/make-server-bb20e683/health", (c) => {
  return c.json({ status: "ok" });
});

// Upload image endpoint
app.post("/make-server-bb20e683/images/upload", async (c) => {
  try {
    const formData = await c.req.formData();
    const file = formData.get('file') as File;
    const category = formData.get('category') as string || 'general';
    const description = formData.get('description') as string || '';

    if (!file) {
      return c.json({ error: 'No file provided' }, 400);
    }

    // Generate unique filename
    const timestamp = Date.now();
    const fileExt = file.name.split('.').pop();
    const fileName = `${category}/${timestamp}-${crypto.randomUUID()}.${fileExt}`;

    // Convert File to ArrayBuffer
    const arrayBuffer = await file.arrayBuffer();
    const buffer = new Uint8Array(arrayBuffer);

    // Upload to Supabase Storage
    const { data: uploadData, error: uploadError } = await supabase.storage
      .from(BUCKET_NAME)
      .upload(fileName, buffer, {
        contentType: file.type,
        upsert: false,
      });

    if (uploadError) {
      console.error('Upload error:', uploadError);
      return c.json({ error: `Failed to upload image: ${uploadError.message}` }, 500);
    }

    // Create signed URL (valid for 1 year)
    const { data: urlData } = await supabase.storage
      .from(BUCKET_NAME)
      .createSignedUrl(fileName, 31536000);

    // Store metadata in KV store
    const imageId = crypto.randomUUID();
    const metadata = {
      id: imageId,
      fileName,
      category,
      description,
      uploadedAt: new Date().toISOString(),
      signedUrl: urlData?.signedUrl,
      originalName: file.name,
      size: file.size,
      type: file.type,
      showInGallery: false, // Default to hidden until manually enabled
    };

    await kv.set(`image:${imageId}`, metadata);

    return c.json({ 
      success: true, 
      image: metadata 
    });

  } catch (error) {
    console.error('Error uploading image:', error);
    return c.json({ error: `Failed to upload image: ${error.message}` }, 500);
  }
});

// List images endpoint
app.get("/make-server-bb20e683/images", async (c) => {
  try {
    const category = c.req.query('category');
    const prefix = category ? `image:${category}` : 'image:';
    
    const images = await kv.getByPrefix(prefix);
    
    // Refresh signed URLs if needed (check if older than 30 days)
    const refreshedImages = await Promise.all(
      images.map(async (img: any) => {
        const uploadDate = new Date(img.uploadedAt);
        const daysSinceUpload = (Date.now() - uploadDate.getTime()) / (1000 * 60 * 60 * 24);
        
        if (daysSinceUpload > 30) {
          const { data: urlData } = await supabase.storage
            .from(BUCKET_NAME)
            .createSignedUrl(img.fileName, 31536000);
          
          if (urlData?.signedUrl) {
            img.signedUrl = urlData.signedUrl;
            await kv.set(`image:${img.id}`, img);
          }
        }
        
        return img;
      })
    );

    // Sort by position (if exists) or uploadedAt
    const sortedImages = refreshedImages.sort((a: any, b: any) => {
      if (typeof a.position === 'number' && typeof b.position === 'number') {
        return a.position - b.position;
      }
      return new Date(a.uploadedAt).getTime() - new Date(b.uploadedAt).getTime();
    });

    return c.json({ images: sortedImages });
  } catch (error) {
    console.error('Error listing images:', error);
    return c.json({ error: `Failed to list images: ${error.message}` }, 500);
  }
});

// Update image order endpoint
app.put("/make-server-bb20e683/images/reorder", async (c) => {
  try {
    const body = await c.req.json();
    const { imageIds } = body;

    if (!Array.isArray(imageIds)) {
      return c.json({ error: 'imageIds must be an array' }, 400);
    }

    // Update position for each image
    await Promise.all(
      imageIds.map(async (imageId: string, index: number) => {
        const metadata = await kv.get(`image:${imageId}`);
        if (metadata) {
          metadata.position = index;
          await kv.set(`image:${imageId}`, metadata);
        }
      })
    );

    return c.json({ success: true, message: 'Image order updated successfully' });
  } catch (error) {
    console.error('Error updating image order:', error);
    return c.json({ error: `Failed to update image order: ${error.message}` }, 500);
  }
});

// Toggle image visibility in gallery
app.put("/make-server-bb20e683/images/:id/toggle-gallery", async (c) => {
  try {
    const imageId = c.req.param('id');
    const metadata = await kv.get(`image:${imageId}`);

    if (!metadata) {
      return c.json({ error: 'Image not found' }, 404);
    }

    // Toggle the showInGallery field
    metadata.showInGallery = !metadata.showInGallery;
    await kv.set(`image:${imageId}`, metadata);

    return c.json({ 
      success: true, 
      showInGallery: metadata.showInGallery,
      message: `Image ${metadata.showInGallery ? 'enabled' : 'disabled'} in gallery` 
    });
  } catch (error) {
    console.error('Error toggling gallery visibility:', error);
    return c.json({ error: `Failed to toggle gallery visibility: ${error.message}` }, 500);
  }
});

// Migrate all existing images to have showInGallery field
app.post("/make-server-bb20e683/images/migrate-gallery-field", async (c) => {
  try {
    const allImages = await kv.getByPrefix('image:');
    let updateCount = 0;

    for (const image of allImages) {
      // Only update if showInGallery field doesn't exist
      if (image.showInGallery === undefined) {
        image.showInGallery = false;
        await kv.set(`image:${image.id}`, image);
        updateCount++;
      }
    }

    return c.json({ 
      success: true, 
      message: `Migration complete. Updated ${updateCount} images.`,
      totalImages: allImages.length,
      updatedImages: updateCount
    });
  } catch (error) {
    console.error('Error migrating images:', error);
    return c.json({ error: `Failed to migrate images: ${error.message}` }, 500);
  }
});

// Delete image endpoint
app.delete("/make-server-bb20e683/images/:id", async (c) => {
  try {
    const imageId = c.req.param('id');
    const metadata = await kv.get(`image:${imageId}`);

    if (!metadata) {
      return c.json({ error: 'Image not found' }, 404);
    }

    // Delete from storage
    const { error: deleteError } = await supabase.storage
      .from(BUCKET_NAME)
      .remove([metadata.fileName]);

    if (deleteError) {
      console.error('Delete error:', deleteError);
      return c.json({ error: `Failed to delete image: ${deleteError.message}` }, 500);
    }

    // Delete metadata from KV store
    await kv.del(`image:${imageId}`);

    return c.json({ success: true, message: 'Image deleted successfully' });
  } catch (error) {
    console.error('Error deleting image:', error);
    return c.json({ error: `Failed to delete image: ${error.message}` }, 500);
  }
});

// Submit quote form endpoint
app.post("/make-server-bb20e683/submit-quote", async (c) => {
  try {
    const body = await c.req.json();
    const { name, email, phone, address, service, message, suburb, description, formType } = body;

    // Validate required fields
    if (!name || !phone) {
      return c.json({ error: 'Name and phone are required' }, 400);
    }

    // Get Resend API key from environment
    const resendApiKey = Deno.env.get('RESEND_API_KEY');
    
    // Email sending is optional - form will still work without it
    let emailSent = false;

    // Determine which form was submitted
    const isQuoteForm = formType === 'quote' || (email && address && service);
    
    // Build email content based on form type
    let emailHtml = '';
    let emailSubject = '';
    
    if (isQuoteForm) {
      emailSubject = `New Quote Request from ${name}`;
      emailHtml = `
        <!DOCTYPE html>
        <html>
          <head>
            <style>
              body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
              .container { max-width: 600px; margin: 0 auto; padding: 20px; }
              .header { background: linear-gradient(135deg, #0a1628 0%, #0d1f3a 100%); color: white; padding: 30px; border-radius: 10px 10px 0 0; }
              .header h1 { margin: 0; font-size: 24px; }
              .content { background: #f9fafb; padding: 30px; border-radius: 0 0 10px 10px; }
              .field { margin-bottom: 20px; }
              .label { font-weight: bold; color: #0a1628; margin-bottom: 5px; display: block; }
              .value { background: white; padding: 12px; border-radius: 5px; border-left: 3px solid #00d4ff; }
              .highlight { background: #00d4ff; color: #0a1628; padding: 15px; border-radius: 5px; margin-top: 20px; font-weight: bold; }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h1>🎯 New Quote Request</h1>
                <p style="margin: 10px 0 0 0; opacity: 0.9;">Premier Pressure Solutions WA</p>
              </div>
              <div class="content">
                <div class="field">
                  <span class="label">👤 Customer Name:</span>
                  <div class="value">${name}</div>
                </div>
                
                <div class="field">
                  <span class="label">📧 Email:</span>
                  <div class="value">${email || 'Not provided'}</div>
                </div>
                
                <div class="field">
                  <span class="label">📞 Phone:</span>
                  <div class="value">${phone}</div>
                </div>
                
                <div class="field">
                  <span class="label">📍 Property Address:</span>
                  <div class="value">${address || 'Not provided'}</div>
                </div>
                
                <div class="field">
                  <span class="label">🔧 Service Required:</span>
                  <div class="value">${service || 'Not specified'}</div>
                </div>
                
                ${message ? `
                <div class="field">
                  <span class="label">💬 Additional Details:</span>
                  <div class="value">${message}</div>
                </div>
                ` : ''}
                
                <div class="highlight">
                  ⚡ New customer eligible for 10% discount!
                </div>
              </div>
            </div>
          </body>
        </html>
      `;
    } else {
      // ServiceCTA form
      emailSubject = `New Service Inquiry from ${name}`;
      emailHtml = `
        <!DOCTYPE html>
        <html>
          <head>
            <style>
              body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
              .container { max-width: 600px; margin: 0 auto; padding: 20px; }
              .header { background: linear-gradient(135deg, #0a1628 0%, #0d1f3a 100%); color: white; padding: 30px; border-radius: 10px 10px 0 0; }
              .header h1 { margin: 0; font-size: 24px; }
              .content { background: #f9fafb; padding: 30px; border-radius: 0 0 10px 10px; }
              .field { margin-bottom: 20px; }
              .label { font-weight: bold; color: #0a1628; margin-bottom: 5px; display: block; }
              .value { background: white; padding: 12px; border-radius: 5px; border-left: 3px solid #00d4ff; }
              .highlight { background: #00d4ff; color: #0a1628; padding: 15px; border-radius: 5px; margin-top: 20px; font-weight: bold; }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h1>📋 New Service Inquiry</h1>
                <p style="margin: 10px 0 0 0; opacity: 0.9;">Premier Pressure Solutions WA</p>
              </div>
              <div class="content">
                <div class="field">
                  <span class="label">👤 Customer Name:</span>
                  <div class="value">${name}</div>
                </div>
                
                <div class="field">
                  <span class="label">📞 Phone:</span>
                  <div class="value">${phone}</div>
                </div>
                
                <div class="field">
                  <span class="label">📍 Suburb:</span>
                  <div class="value">${suburb || 'Not provided'}</div>
                </div>
                
                ${description ? `
                <div class="field">
                  <span class="label">📝 Job Description:</span>
                  <div class="value">${description}</div>
                </div>
                ` : ''}
                
                <div class="highlight">
                  ⚡ New customer eligible for 10% discount!
                </div>
              </div>
            </div>
          </body>
        </html>
      `;
    }

    // Send email using Resend API if API key is configured
    if (resendApiKey) {
      try {
        const response = await fetch('https://api.resend.com/emails', {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${resendApiKey}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            from: 'Premier Pressure Solutions <noreply@premierpressuresolutionswa.com.au>',
            to: ['maharzain76@gmail.com'],
            subject: emailSubject,
            html: emailHtml,
          }),
        });

        const result = await response.json();

        if (!response.ok) {
          console.error('Resend API error:', result);
          // Don't fail the entire request - just log the error
          console.log('Continuing without email notification...');
        } else {
          emailSent = true;
          console.log('Email sent successfully via Resend');
        }
      } catch (emailError) {
        console.error('Error sending email:', emailError);
        console.log('Continuing without email notification...');
      }
    } else {
      console.log('RESEND_API_KEY not configured - skipping email notification');
    }

    // Store submission in KV store for record keeping
    const submissionId = crypto.randomUUID();
    const submissionData = {
      id: submissionId,
      name,
      email,
      phone,
      address,
      service,
      message,
      suburb,
      description,
      formType: isQuoteForm ? 'quote' : 'service',
      submittedAt: new Date().toISOString(),
      emailSent,
    };

    await kv.set(`submission:${submissionId}`, submissionData);

    return c.json({ 
      success: true, 
      message: 'Quote request submitted successfully',
      submissionId 
    });

  } catch (error) {
    console.error('Error submitting quote:', error);
    return c.json({ error: `Failed to submit quote: ${error.message}` }, 500);
  }
});

Deno.serve(app.fetch);