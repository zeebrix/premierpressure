import type { Metadata } from 'next';
import { OrganicStainingGuideContent } from './organic-staining-guide-content';

const SITE_URL = 'https://www.premierpressuresolutions.com.au';

export const metadata: Metadata = {
  title: {
    absolute: 'Organic Staining Guide: Mould, Algae, Mildew & Lichen Problems | Perth WA',
  },
  description:
    'Complete guide to organic staining problems in Perth. Learn about mould, algae, mildew, and lichen - their causes, health risks, property damage, and professional solutions.',
  alternates: { canonical: `${SITE_URL}/resources/organic-staining-guide` },
  openGraph: { url: `${SITE_URL}/resources/organic-staining-guide`, type: 'website', locale: 'en_AU', siteName: 'Premier Pressure Solutions WA', images: [{ url: 'https://www.premierpressuresolutions.com.au/og-image.jpg', width: 1200, height: 630 }] },
};

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'The Complete Guide to Organic Staining: Mould, Algae, Mildew & Lichen',
  description:
    'Learn about the causes, health risks, and solutions for organic staining including mould, algae, mildew, and lichen on your Perth property. Expert advice from Premier Pressure Solutions WA.',
  author: {
    '@type': 'Organization',
    name: 'Premier Pressure Solutions WA',
  },
  publisher: {
    '@type': 'Organization',
    name: 'Premier Pressure Solutions WA',
    logo: {
      '@type': 'ImageObject',
      url: 'https://www.premierpressuresolutions.com.au/logo.png',
    },
  },
  datePublished: '2026-03-13',
  dateModified: '2026-03-13',
};

export default function OrganicStainingGuidePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <OrganicStainingGuideContent />
    </>
  );
}
