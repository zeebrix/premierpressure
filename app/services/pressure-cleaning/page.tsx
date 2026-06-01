import type { Metadata } from 'next';
import { PressureCleaningContent } from './pressure-cleaning-content';
import { generateBreadcrumbSchema } from '@/app/utils/local-business-schema';

const SITE_URL = 'https://www.ppsexteriorcleaning.com.au';

export const metadata: Metadata = {
  title: {
    absolute:
      'Pressure Cleaning Perth | Expert Pressure Washing Services WA | PPS Exterior Cleaning',
  },
  description:
    'Professional pressure cleaning services in Perth. Expert house washing, driveway cleaning, roof cleaning & more. Licensed, insured, 10% off for new customers. Call 0488 844 911',
  alternates: {
    canonical: `${SITE_URL}/pressure-cleaning`,
  },
  openGraph: { url: `${SITE_URL}/pressure-cleaning`, type: 'website', locale: 'en_AU', siteName: 'PPS Exterior Cleaning', images: [{ url: 'https://www.ppsexteriorcleaning.com.au/og-image.jpg', width: 1200, height: 630 }] },
};

const faqs = [
  {
    question: 'What is professional pressure cleaning?',
    answer:
      'Professional pressure cleaning (also called pressure washing or high-pressure cleaning) uses specialized equipment to blast away dirt, grime, mould, and stains from exterior surfaces. Our commercial-grade systems deliver superior results compared to DIY equipment, safely cleaning driveways, houses, roofs, and more without causing damage.',
  },
  {
    question: 'How much does pressure cleaning cost in Perth?',
    answer:
      'Pressure cleaning costs in Perth vary based on surface type, size, and condition. Driveways typically range from $150-$400, house washing from $300-$800, and roof cleaning from $400-$1200. We offer free quotes and 10% off for new customers. Contact us for an accurate estimate based on your specific needs.',
  },
  {
    question: 'Is pressure washing safe for all surfaces?',
    answer:
      'We use appropriate pressure levels for each surface type. High-pressure cleaning works perfectly for concrete driveways and pathways, while delicate surfaces like painted walls, limestone, and roof tiles require soft washing at lower pressure. Our experienced technicians assess each job to determine the safest, most effective cleaning method.',
  },
  {
    question: 'How often should I pressure clean my property?',
    answer:
      "We recommend pressure cleaning driveways and pathways annually, house exteriors every 1-2 years, and roofs every 2-3 years. Perth's coastal climate accelerates mould and algae growth, so properties near the beach may need more frequent cleaning. Regular maintenance prevents permanent staining and extends surface life.",
  },
];

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Pressure Cleaning Perth',
  description:
    'Professional pressure cleaning services in Perth. Expert house washing, driveway cleaning, roof cleaning, and more. Licensed, insured, 10% off for new customers.',
  provider: {
    '@type': 'LocalBusiness',
    name: 'PPS Exterior Cleaning',
    image: 'https://www.ppsexteriorcleaning.com.au/logo.png',
    telephone: '0488 844 911',
    areaServed: {
      '@type': 'City',
      name: 'Perth',
      address: {
        '@type': 'PostalAddress',
        addressRegion: 'WA',
        addressCountry: 'AU',
      },
    },
  },
  serviceType: 'Pressure Cleaning',
  areaServed: {
    '@type': 'City',
    name: 'Perth',
  },
  offers: {
    '@type': 'Offer',
    availability: 'https://schema.org/InStock',
    priceSpecification: {
      '@type': 'PriceSpecification',
      priceCurrency: 'AUD',
    },
  },
};

const faqStructuredData = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((faq) => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: faq.answer,
    },
  })),
};

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: 'Home', path: '' },
  { name: 'Services', path: '/pressure-cleaning' },
  { name: 'Pressure Cleaning', path: '/pressure-cleaning' },
]);

export default function PressureCleaningPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <PressureCleaningContent />
    </>
  );
}
