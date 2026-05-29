import type { Metadata } from 'next';
import AboutContent from './about-content';

const SITE_URL = 'https://www.premierpressuresolutions.com.au';

export const metadata: Metadata = {
  title: { absolute: 'About Us - Professional Pressure Cleaning Perth | Premier Pressure Solutions WA' },
  description:
    "Learn about Premier Pressure Solutions WA, Perth's trusted pressure cleaning specialists. Fully insured, experienced team serving residential & commercial properties across Perth.",
  alternates: { canonical: `${SITE_URL}/about` },
  openGraph: { url: `${SITE_URL}/about`, type: 'website', locale: 'en_AU', siteName: 'Premier Pressure Solutions WA', images: [{ url: 'https://www.premierpressuresolutions.com.au/og-image.jpg', width: 1200, height: 630 }] },
};

export default function AboutPage() {
  return <AboutContent />;
}
