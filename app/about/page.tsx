import type { Metadata } from 'next';
import AboutContent from './about-content';

const SITE_URL = 'https://www.premierpressuresolutions.com.au';

export const metadata: Metadata = {
  title: { absolute: 'About Us - Professional Pressure Cleaning Perth | Premier Pressure Solutions WA' },
  description:
    "Learn about Premier Pressure Solutions WA, Perth's trusted pressure cleaning specialists. Fully insured, experienced team serving residential & commercial properties across Perth.",
  alternates: { canonical: `${SITE_URL}/about` },
};

export default function AboutPage() {
  return <AboutContent />;
}
