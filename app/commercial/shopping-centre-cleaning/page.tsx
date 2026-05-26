import type { Metadata } from 'next';
import { ShoppingCentreCleaningContent } from './shopping-centre-cleaning-content';

const SITE_URL = 'https://www.premierpressuresolutions.com.au';

export const metadata: Metadata = {
  title: {
    absolute: 'Shopping Centre Pressure Cleaning Perth | Premier Pressure Solutions WA',
  },
  description:
    "Professional shopping centre & retail complex pressure cleaning across Perth. After-hours service to clean entrances, walkways, parking & facades without disrupting trading.",
  alternates: { canonical: `${SITE_URL}/commercial/shopping-centre-cleaning` },
};

export default function ShoppingCentreCleaningPage() {
  return <ShoppingCentreCleaningContent />;
}
