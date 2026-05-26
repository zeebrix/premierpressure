import type { Metadata } from 'next';
import { PlaygroundCleaningContent } from './playground-cleaning-content';

const SITE_URL = 'https://www.premierpressuresolutions.com.au';

export const metadata: Metadata = {
  title: {
    absolute: 'Playground Pressure Cleaning Perth | Premier Pressure Solutions WA',
  },
  description:
    "Safe, child-friendly playground pressure cleaning for Perth schools, child care centres, councils & strata properties. Non-toxic solutions. Equipment-safe methods.",
  alternates: { canonical: `${SITE_URL}/commercial/playground-cleaning` },
};

export default function PlaygroundCleaningPage() {
  return <PlaygroundCleaningContent />;
}
