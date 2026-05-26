import type { Metadata } from 'next';
import AreasContent from './areas-content';

const SITE_URL = 'https://www.premierpressuresolutions.com.au';

export const metadata: Metadata = {
  title: { absolute: 'Service Areas Perth | Pressure Cleaning Across 26+ Suburbs | Premier Pressure Solutions WA' },
  description:
    'Premier Pressure Solutions WA services 26+ suburbs across Perth including Cottesloe, Subiaco, Nedlands, Claremont, South Perth & more. Professional pressure cleaning for your local area.',
  alternates: { canonical: `${SITE_URL}/areas` },
};

export default function AreasPage() {
  return <AreasContent />;
}
