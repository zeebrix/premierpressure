import { suburbs } from '@/data/suburbs';

const SITE_URL = 'https://www.premierpressuresolutions.com.au';

/**
 * areaServed as an array of all serviced suburbs (plus Perth overall).
 * Audit #05: list every suburb the business serves, not just "City: Perth".
 */
function buildAreaServed() {
  return [
    { "@type": "City", "name": "Perth" },
    ...suburbs.map((s) => ({ "@type": "City", "name": s.name })),
  ];
}

/**
 * Generates consistent LocalBusiness schema for all pages
 * This ensures NAP (Name, Address, Phone) consistency across the entire site
 */
export function generateLocalBusinessSchema() {
  return {
    "@type": "LocalBusiness",
    "@id": `${SITE_URL}/#business`,
    "name": "Premier Pressure Solutions WA",
    "image": `${SITE_URL}/logo.png`,
    "url": SITE_URL,
    "telephone": "+61452579657",
    "email": "info@premierpressuresolutions.com.au",
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
    "areaServed": buildAreaServed()
  };
}

/**
 * Generates BreadcrumbList schema (Audit #05).
 * Pass ordered crumbs from Home → … → current page.
 */
export function generateBreadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, i) => ({
      "@type": "ListItem",
      "position": i + 1,
      "name": item.name,
      "item": `${SITE_URL}${item.path}`
    }))
  };
}

/**
 * Generates Service schema for residential service pages
 */
export function generateServiceSchema(serviceName: string, description: string, canonicalUrl: string, serviceOfferings?: string[]) {
  const schema: any = {
    "@type": "Service",
    "@id": `https://www.premierpressuresolutions.com.au${canonicalUrl}#service`,
    "serviceType": serviceName,
    "name": serviceName,
    "description": description,
    "provider": {
      "@id": "https://www.premierpressuresolutions.com.au/#business"
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