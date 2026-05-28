import type { Metadata } from 'next';
import { BuildingWashingContent } from './building-washing-content';
import { generateBreadcrumbSchema } from '@/app/utils/local-business-schema';

const SITE_URL = 'https://www.premierpressuresolutions.com.au';

export const metadata: Metadata = {
  title: {
    absolute: 'Commercial Building Washing Perth | Premier Pressure Solutions WA',
  },
  description:
    "Professional commercial building washing across Perth. Soft washing & pressure cleaning for facades, glass, render, concrete & metal cladding. Fully insured. Free quotes.",
  alternates: { canonical: `${SITE_URL}/commercial/building-washing` },
  openGraph: { url: `${SITE_URL}/commercial/building-washing` },
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
