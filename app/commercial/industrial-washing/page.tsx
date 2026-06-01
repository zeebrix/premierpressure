import type { Metadata } from 'next';
import { IndustrialWashingContent } from './industrial-washing-content';
import { generateBreadcrumbSchema } from '@/app/utils/local-business-schema';

const SITE_URL = 'https://www.ppsexteriorcleaning.com.au';

export const metadata: Metadata = {
  title: {
    absolute: 'Industrial Pressure Washing Perth | PPS Exterior Cleaning',
  },
  description:
    "Heavy-duty industrial pressure washing for Perth manufacturing & warehouses. Factory floors, loading docks, machinery & yards cleaned to safety standards. Fully insured.",
  alternates: { canonical: `${SITE_URL}/commercial/industrial-washing` },
  openGraph: { url: `${SITE_URL}/commercial/industrial-washing`, type: 'website', locale: 'en_AU', siteName: 'PPS Exterior Cleaning', images: [{ url: 'https://www.ppsexteriorcleaning.com.au/og-image.jpg', width: 1200, height: 630 }] },
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
