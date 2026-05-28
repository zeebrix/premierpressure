import type { Metadata } from 'next';
import { CommercialPressureCleaningContent } from './commercial-pressure-cleaning-content';

const SITE_URL = 'https://www.premierpressuresolutions.com.au';

export const metadata: Metadata = {
  title: {
    absolute: 'Commercial Pressure Cleaning Perth | Premier Pressure Solutions WA',
  },
  description:
    "Perth's trusted commercial pressure cleaning specialists. Building washing, strata, schools, shopping centres, restaurants, industrial & playground cleaning. Fully insured.",
  alternates: { canonical: `${SITE_URL}/commercial` },
  openGraph: { url: `${SITE_URL}/commercial` },
};

export default function CommercialPressureCleaningPage() {
  return <CommercialPressureCleaningContent />;
}
