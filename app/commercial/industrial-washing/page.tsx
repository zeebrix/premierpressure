import type { Metadata } from 'next';
import { IndustrialWashingContent } from './industrial-washing-content';
import { generateBreadcrumbSchema } from '@/app/utils/local-business-schema';

const SITE_URL = 'https://www.premierpressuresolutions.com.au';

export const metadata: Metadata = {
  title: {
    absolute: 'Industrial Pressure Washing Perth | Premier Pressure Solutions WA',
  },
  description:
    "Heavy-duty industrial pressure washing for Perth manufacturing & warehouses. Factory floors, loading docks, machinery & yards cleaned to safety standards. Fully insured.",
  alternates: { canonical: `${SITE_URL}/commercial/industrial-washing` },
  openGraph: { url: `${SITE_URL}/commercial/industrial-washing` },
};

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: 'Home', path: '' },
  { name: 'Commercial', path: '/commercial' },
  { name: 'Industrial Washing', path: '/commercial/industrial-washing' },
]);

export default function IndustrialWashingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <IndustrialWashingContent />
    </>
  );
}
