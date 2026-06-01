import type { Metadata } from 'next';
import { CommercialPressureCleaningContent } from './commercial-pressure-cleaning-content';

const SITE_URL = 'https://www.ppsexteriorcleaning.com.au';

export const metadata: Metadata = {
  title: {
    absolute: 'Commercial Pressure Cleaning Perth | PPS Exterior Cleaning',
  },
  description:
    "Perth's trusted commercial pressure cleaning specialists. Building washing, strata, schools, shopping centres, restaurants, industrial & playground cleaning. Fully insured.",
  alternates: { canonical: `${SITE_URL}/commercial` },
  openGraph: { url: `${SITE_URL}/commercial`, type: 'website', locale: 'en_AU', siteName: 'PPS Exterior Cleaning', images: [{ url: 'https://www.ppsexteriorcleaning.com.au/og-image.jpg', width: 1200, height: 630 }] },
};

export default function CommercialPressureCleaningPage() {
  return <CommercialPressureCleaningContent />;
}
