import type { Metadata } from 'next';
import { StrataCleaningContent } from './strata-cleaning-content';
import { generateBreadcrumbSchema } from '@/app/utils/local-business-schema';

const SITE_URL = 'https://www.premierpressuresolutions.com.au';

export const metadata: Metadata = {
  title: {
    absolute: 'Strata Pressure Cleaning Perth | Premier Pressure Solutions WA',
  },
  description:
    'Professional strata & body corporate pressure cleaning across Perth. Common areas, building exteriors, driveways, pool surrounds & more. Detailed quotes for committee approval.',
  alternates: { canonical: `${SITE_URL}/commercial/strata-cleaning` },
  openGraph: { url: `${SITE_URL}/commercial/strata-cleaning` },
};

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: 'Home', path: '' },
  { name: 'Commercial', path: '/commercial' },
  { name: 'Strata Cleaning', path: '/commercial/strata-cleaning' },
]);

export default function StrataCleaningPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <StrataCleaningContent />
    </>
  );
}
