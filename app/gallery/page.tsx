import type { Metadata } from 'next';
import GalleryContent from './gallery-content';

const SITE_URL = 'https://www.premierpressuresolutions.com.au';

export const metadata: Metadata = {
  title: { absolute: 'Before & After Gallery | Premier Pressure Solutions WA' },
  description:
    'See the incredible transformations from our pressure cleaning services across Perth. Browse before and after photos of driveways, limestone, roofs, and more.',
  alternates: { canonical: `${SITE_URL}/gallery` },
  openGraph: { url: `${SITE_URL}/gallery`, type: 'website', locale: 'en_AU', siteName: 'Premier Pressure Solutions WA', images: [{ url: 'https://www.premierpressuresolutions.com.au/og-image.jpg', width: 1200, height: 630 }] },
};

export default function GalleryPage() {
  return <GalleryContent />;
}
