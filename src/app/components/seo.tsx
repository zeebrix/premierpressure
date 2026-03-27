import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  ogImage?: string;
  canonical?: string;
  preloadImages?: string[]; // Critical images to preload for LCP
  structuredData?: object; // JSON-LD structured data
}

export function SEO({ title, description, keywords, ogImage, canonical, preloadImages, structuredData }: SEOProps) {
  const siteUrl = 'https://premierpressuresolutionswa.com.au';
  const defaultImage = `${siteUrl}/og-image.png`;
  const fullTitle = `${title} | Premier Pressure Solutions WA`;
  
  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      {canonical && <link rel="canonical" href={`${siteUrl}${canonical}`} />}
      
      {/* Preconnect to external domains for faster loading */}
      <link rel="preconnect" href="https://iigpdyyiqskohqejmqob.supabase.co" crossOrigin="anonymous" />
      <link rel="dns-prefetch" href="https://iigpdyyiqskohqejmqob.supabase.co" />
      
      {/* Preload critical images for LCP optimization */}
      {preloadImages?.map((imageUrl, index) => (
        <link
          key={index}
          rel="preload"
          as="image"
          href={imageUrl}
          fetchpriority="high"
        />
      ))}
      
      {/* Open Graph Meta Tags */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:image" content={ogImage || defaultImage} />
      <meta property="og:site_name" content="Premier Pressure Solutions WA" />
      {canonical && <meta property="og:url" content={`${siteUrl}${canonical}`} />}
      <meta property="og:locale" content="en_AU" />
      
      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage || defaultImage} />
      
      {/* Additional SEO Tags */}
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      <meta name="author" content="Premier Pressure Solutions WA" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="geo.region" content="AU-WA" />
      <meta name="geo.placename" content="Perth" />
      <meta name="geo.position" content="-31.9505;115.8605" />
      <meta name="ICBM" content="-31.9505, 115.8605" />
      
      {/* Structured Data (JSON-LD) */}
      {structuredData && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      )}
    </Helmet>
  );
}