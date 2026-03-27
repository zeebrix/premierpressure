/**
 * Generates FAQ schema for suburb pages
 * This matches the FAQs displayed in the SuburbFAQ component
 */
export function generateSuburbFAQSchema(suburbName: string) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": `How much does pressure cleaning cost in ${suburbName}?`,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": `Pressure cleaning costs in ${suburbName} typically range from $200-$600 for residential properties, depending on the service type and size. Driveway cleaning starts from $150, house washing from $300, and roof cleaning from $400. We provide free, no-obligation quotes after assessing your specific property needs. All quotes include equipment, cleaning products, and our satisfaction guarantee.`
        }
      },
      {
        "@type": "Question",
        "name": `Do you service all of ${suburbName}?`,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": `Yes! We proudly service all areas of ${suburbName} and surrounding suburbs. We're local to Perth's northern/southern corridors and can typically schedule services within 3-7 days. Emergency or urgent cleaning can often be arranged within 24-48 hours depending on availability.`
        }
      },
      {
        "@type": "Question",
        "name": "How long does pressure cleaning take?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": `Most residential pressure cleaning jobs in ${suburbName} take 2-5 hours depending on the service. A standard driveway cleaning takes 1-2 hours, full house washing 3-4 hours, and roof cleaning 2-3 hours. We'll provide an accurate timeframe in your quote. You can use the cleaned areas immediately after they dry, usually within 30-60 minutes.`
        }
      },
      {
        "@type": "Question",
        "name": "Do I need to be home during the cleaning?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": `Not necessarily. As long as we have access to water and the areas to be cleaned, we can complete the work while you're away. Many ${suburbName} homeowners provide gate codes or leave areas accessible and we handle everything professionally. We'll send you before and after photos and call when complete.`
        }
      },
      {
        "@type": "Question",
        "name": "Is pressure cleaning safe for my property?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Absolutely. Professional pressure cleaning is safe when done correctly. We adjust pressure levels based on the surface type - lower pressure for delicate surfaces like painted weatherboards and render, higher pressure for concrete and pavers. Our experienced team knows exactly what each surface can handle. We also use eco-friendly, biodegradable cleaning products safe for your gardens, pets, and family."
        }
      },
      {
        "@type": "Question",
        "name": "What payment methods do you accept?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We accept cash, bank transfer, and card payments. Payment is due upon completion of the work. We'll never ask for full payment upfront. For larger commercial jobs, we can arrange payment terms. All quotes are fixed - no hidden fees or surprise charges."
        }
      },
      {
        "@type": "Question",
        "name": "Do you offer a guarantee?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": `Yes! We offer a 100% satisfaction guarantee. If you're not completely happy with the results, we'll return to re-clean the area at no extra cost. We take pride in our work and our reputation in ${suburbName} - your satisfaction is our priority.`
        }
      }
    ]
  };
}
