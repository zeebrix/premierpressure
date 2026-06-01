import type { Metadata } from 'next';
import { BuildingWashingContent } from './building-washing-content';
import { generateBreadcrumbSchema } from '@/app/utils/local-business-schema';

const SITE_URL = 'https://www.ppsexteriorcleaning.com.au';

export const metadata: Metadata = {
  title: {
    absolute: 'Commercial Building Washing Perth | PPS Exterior Cleaning',
  },
  description:
    "Professional commercial building washing across Perth. Soft washing & pressure cleaning for facades, glass, render, concrete & metal cladding. Fully insured. Free quotes.",
  alternates: { canonical: `${SITE_URL}/commercial/building-washing` },
  openGraph: { url: `${SITE_URL}/commercial/building-washing`, type: 'website', locale: 'en_AU', siteName: 'PPS Exterior Cleaning', images: [{ url: 'https://www.ppsexteriorcleaning.com.au/og-image.jpg', width: 1200, height: 630 }] },
};

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: 'Home', path: '' },
  { name: 'Commercial', path: '/commercial' },
  { name: 'Building Washing', path: '/commercial/building-washing' },
]);

export default function BuildingWashingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <BuildingWashingContent />
    </>
  );
}
