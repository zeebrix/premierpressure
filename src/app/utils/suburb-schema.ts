import { generateLocalBusinessSchema, combineSchemas } from './local-business-schema';

/**
 * Generates combined schema for suburb pages
 * Includes LocalBusiness + Service + FAQ schema
 */
export function generateSuburbSchema(suburbName: string, faqSchema: any) {
  const serviceSchema = {
    "@type": "Service",
    "@id": `https://premierpressuresolutionswa.com.au/suburbs/${suburbName.toLowerCase().replace(/\s+/g, '-')}#service`,
    "serviceType": `Pressure Cleaning ${suburbName}`,
    "name": `Pressure Cleaning Services in ${suburbName}`,
    "description": `Professional pressure cleaning services in ${suburbName}, Perth. House washing, driveway cleaning, roof cleaning, and more. Servicing ${suburbName} and surrounding areas.`,
    "provider": {
      "@id": "https://premierpressuresolutionswa.com.au/#business"
    },
    "areaServed": {
      "@type": "City",
      "name": suburbName,
      "containedIn": {
        "@type": "City",
        "name": "Perth"
      }
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": `${suburbName} Pressure Cleaning Services`,
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "House Washing"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Driveway Cleaning"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Roof Cleaning"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Paver Cleaning"
          }
        }
      ]
    }
  };

  return combineSchemas(
    generateLocalBusinessSchema(),
    serviceSchema,
    faqSchema
  );
}
