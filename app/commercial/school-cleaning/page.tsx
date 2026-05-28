import type { Metadata } from 'next';
import { SchoolCleaningContent } from './school-cleaning-content';
import { generateBreadcrumbSchema } from '@/app/utils/local-business-schema';

const SITE_URL = 'https://www.premierpressuresolutions.com.au';

export const metadata: Metadata = {
  title: {
    absolute: 'School Pressure Cleaning Perth | Premier Pressure Solutions WA',
  },
  description:
    'Specialised school & education facility pressure cleaning across Perth. Child-safe cleaning of playgrounds, walkways, sports courts & buildings. Flexible holiday scheduling.',
  alternates: { canonical: `${SITE_URL}/commercial/school-cleaning` },
  openGraph: { url: `${SITE_URL}/commercial/school-cleaning` },
};

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: 'Home', path: '' },
  { name: 'Commercial', path: '/commercial' },
  { name: 'School Cleaning', path: '/commercial/school-cleaning' },
]);

export default function SchoolCleaningPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <SchoolCleaningContent />
    </>
  );
}
