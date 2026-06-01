import type { Metadata } from 'next';
import AreasContent from './areas-content';

const SITE_URL = 'https://www.ppsexteriorcleaning.com.au';

export const metadata: Metadata = {
  title: { absolute: 'Service Areas Perth | Pressure Cleaning Across 26+ Suburbs | PPS Exterior Cleaning' },
  description:
    'PPS Exterior Cleaning services 26+ suburbs across Perth including Cottesloe, Subiaco, Nedlands, Claremont, South Perth & more. Professional pressure cleaning for your local area.',
  alternates: { canonical: `${SITE_URL}/areas` },
  openGraph: { url: `${SITE_URL}/areas`, type: 'website', locale: 'en_AU', siteName: 'PPS Exterior Cleaning', images: [{ url: 'https://www.ppsexteriorcleaning.com.au/og-image.jpg', width: 1200, height: 630 }] },
};

export default function AreasPage() {
  return <AreasContent />;
}
