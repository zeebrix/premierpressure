/**
 * Generates consistent LocalBusiness schema for all pages
 * This ensures NAP (Name, Address, Phone) consistency across the entire site
 */
export function generateLocalBusinessSchema() {
  return {
    "@type": "LocalBusiness",
    "@id": "https://premierpressuresolutionswa.com.au/#business",
    "name": "Premier Pressure Solutions WA",
    "image": "https://premierpressuresolutionswa.com.au/logo.png",
    "url": "https://premierpressuresolutionswa.com.au",
    "telephone": "+61452579657",
    "email": "info@premierpressuresolutionswa.com.au",
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Perth",
      "addressRegion": "WA",
      "addressCountry": "AU"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": -31.9505,
      "longitude": 115.8605
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      "opens": "07:00",
      "closes": "18:00"
    },
    "areaServed": {
      "@type": "City",
      "name": "Perth"
    }
  };
}

/**
 * Generates Service schema for residential service pages
 */
export function generateServiceSchema(serviceName: string, description: string, canonicalUrl: string, serviceOfferings?: string[]) {
  const schema: any = {
    "@type": "Service",
    "@id": `https://premierpressuresolutionswa.com.au${canonicalUrl}#service`,
    "serviceType": serviceName,
    "name": serviceName,
    "description": description,
    "provider": {
      "@id": "https://premierpressuresolutionswa.com.au/#business"
    },
    "areaServed": {
      "@type": "City",
      "name": "Perth"
    }
  };

  // Add specific service offerings if provided
  if (serviceOfferings && serviceOfferings.length > 0) {
    schema.hasOfferCatalog = {
      "@type": "OfferCatalog",
      "name": `${serviceName} Services`,
      "itemListElement": serviceOfferings.map(offering => ({
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": offering
        }
      }))
    };
  }

  return schema;
}

/**
 * Combines multiple schema objects into a @graph structure
 */
export function combineSchemas(...schemas: any[]) {
  return {
    "@context": "https://schema.org",
    "@graph": schemas
  };
}