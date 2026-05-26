import type { Metadata } from 'next';
import { SchoolCleaningContent } from './school-cleaning-content';

const SITE_URL = 'https://www.premierpressuresolutions.com.au';

export const metadata: Metadata = {
  title: {
    absolute: 'School Pressure Cleaning Perth | Premier Pressure Solutions WA',
  },
  description:
    'Specialised school & education facility pressure cleaning across Perth. Child-safe cleaning of playgrounds, walkways, sports courts & buildings. Flexible holiday scheduling.',
  alternates: { canonical: `${SITE_URL}/commercial/school-cleaning` },
};

export default function SchoolCleaningPage() {
  return <SchoolCleaningContent />;
}
