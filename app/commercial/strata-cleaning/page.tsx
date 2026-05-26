import type { Metadata } from 'next';
import { StrataCleaningContent } from './strata-cleaning-content';

const SITE_URL = 'https://www.premierpressuresolutions.com.au';

export const metadata: Metadata = {
  title: {
    absolute: 'Strata Pressure Cleaning Perth | Premier Pressure Solutions WA',
  },
  description:
    'Professional strata & body corporate pressure cleaning across Perth. Common areas, building exteriors, driveways, pool surrounds & more. Detailed quotes for committee approval.',
  alternates: { canonical: `${SITE_URL}/commercial/strata-cleaning` },
};

export default function StrataCleaningPage() {
  return <StrataCleaningContent />;
}
