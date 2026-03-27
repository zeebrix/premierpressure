# Premier Pressure Solutions WA - Export & Deployment Guide

## 🚀 Quick Export Instructions

Your website is **ready to export**! Follow these steps to build and deploy your site.

---

## 📦 Building for Production

### Step 1: Build the Website

Run the build command to create production-ready files:

```bash
npm run build
```

or if using pnpm:

```bash
pnpm build
```

This will create a `dist` folder containing all your optimized production files.

---

## 📂 What Gets Exported

After building, your `dist` folder will contain:

```
dist/
├── index.html              # Main HTML file
├── assets/
│   ├── js/                 # Optimized JavaScript bundles
│   ├── images/             # Optimized images
│   ├── fonts/              # Font files
│   └── *.css               # Optimized CSS files
├── robots.txt              # SEO robots file
├── sitemap.xml             # XML sitemap
├── manifest.json           # PWA manifest
└── favicon.ico             # Favicon
```

---

## 🌐 Deployment Options

### Option 1: Netlify (Recommended - Easiest)

1. **Sign up** at [netlify.com](https://netlify.com)
2. **Drag and drop** the `dist` folder onto Netlify
3. **Configure redirects** (see below)
4. **Done!** Your site is live

**Netlify Configuration (_redirects file):**
Create a file at `/dist/_redirects`:
```
/* /index.html 200
```

### Option 2: Vercel

1. **Sign up** at [vercel.com](https://vercel.com)
2. **Import** your project from Git or upload the `dist` folder
3. **Configure:**
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Install Command: `npm install`
4. **Deploy!**

### Option 3: Traditional Web Hosting (cPanel/FTP)

1. **Build** your site: `npm run build`
2. **Upload** the entire `dist` folder contents to your web host
3. **Configure** your `.htaccess` file for React Router:

**.htaccess file:**
```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>
```

### Option 4: AWS S3 + CloudFront

1. **Create** an S3 bucket
2. **Upload** `dist` folder contents
3. **Enable** static website hosting
4. **Configure** CloudFront for caching
5. **Set up** Route 53 for custom domain

---

## 🔧 Environment Variables Setup

### Supabase Configuration

Your site uses Supabase for backend functionality. You'll need to set these environment variables:

**For Netlify/Vercel:**
```
VITE_SUPABASE_URL=your_supabase_project_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

**For traditional hosting:**
Create a `.env.production` file:
```
VITE_SUPABASE_URL=your_supabase_project_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

---

## 🎯 Custom Domain Setup

### 1. Point Your Domain

**DNS Settings for premierpressuresolutionswa.com.au:**

| Type  | Name | Value                          |
|-------|------|--------------------------------|
| A     | @    | [Your hosting IP]              |
| CNAME | www  | premierpressuresolutionswa.com.au |

### 2. SSL Certificate

Most modern hosts (Netlify, Vercel) provide **free SSL certificates** automatically.

For traditional hosting, use **Let's Encrypt** for free SSL.

---

## ✅ Pre-Deployment Checklist

Before deploying, verify:

- ✅ All 70+ suburb pages are working
- ✅ Images load correctly (Supabase integration)
- ✅ Forms submit properly (quote requests)
- ✅ Phone numbers are correct (0452 579 657)
- ✅ Email address is correct (contact@premierpressuresolutionswa.com.au)
- ✅ ABN is displayed (if applicable)
- ✅ Google Analytics/tracking code added (if needed)
- ✅ Meta tags and SEO content accurate
- ✅ Sitemap accessible at `/sitemap.xml`
- ✅ Robots.txt accessible at `/robots.txt`

---

## 📊 SEO Configuration

### Google Search Console

1. **Verify** your domain at [search.google.com/search-console](https://search.google.com/search-console)
2. **Submit** your sitemap: `https://premierpressuresolutionswa.com.au/sitemap.xml`

### Bing Webmaster Tools

1. **Verify** at [bing.com/webmasters](https://bing.com/webmasters)
2. **Submit** sitemap

---

## 🖼️ Image Management

Your site uses **Supabase Storage** for before/after images. Make sure:

1. **Supabase bucket** `make-bb20e683-images` is created
2. **Images** are uploaded to the bucket
3. **Bucket policies** allow public read access

---

## 📱 Progressive Web App (PWA)

Your site includes PWA support:

- **Manifest**: `/public/manifest.json`
- **Icons**: Ensure you have app icons in `/public/`
- **Service Worker**: Auto-generated during build

---

## 🚨 Important Notes

### Supabase Backend

Your site uses Supabase Edge Functions. Make sure:

1. **Edge function** is deployed: `/supabase/functions/server/`
2. **Environment variables** are set in Supabase dashboard
3. **CORS** is configured correctly

### React Router

This site uses **React Router** for navigation. All hosting must:

- **Redirect** all routes to `index.html`
- **Preserve** URL path for client-side routing

---

## 🔍 Testing Before Going Live

1. **Build locally**: `npm run build`
2. **Preview build**: `npm run preview` (if available)
3. **Test all pages**: Navigate to each suburb page
4. **Test forms**: Submit a quote request
5. **Check mobile**: Test responsive design
6. **Verify images**: All before/after images load
7. **Test links**: All navigation works

---

## 📞 Support & Maintenance

### Site Structure

- **Main pages**: Home, About, Services, Areas, Contact
- **Service pages**: 8 residential + 8 commercial services
- **Suburb pages**: 70+ optimized suburb landing pages
- **Components**: Reusable React components in `/src/app/components/`

### Making Updates

**To update content:**
1. Edit the relevant component file in `/src/app/`
2. Run `npm run build`
3. Upload the new `dist` folder

**To add new suburb pages:**
1. Create new file in `/src/app/pages/suburbs/`
2. Add route in `/src/app/routes.tsx`
3. Update `/public/sitemap.xml`
4. Rebuild and deploy

---

## 🎉 You're Ready to Launch!

Your Premier Pressure Solutions WA website is **fully built**, **SEO-optimized**, and **ready for production**.

### Next Steps:

1. ✅ Run `npm run build`
2. ✅ Choose your hosting provider
3. ✅ Upload the `dist` folder
4. ✅ Configure domain and SSL
5. ✅ Submit sitemap to search engines
6. ✅ Test everything live
7. ✅ **Go live!** 🚀

---

## 📧 Need Help?

For technical support with deployment, consult your hosting provider's documentation or reach out to a web developer familiar with React/Vite applications.

Good luck with your launch! 🎊
