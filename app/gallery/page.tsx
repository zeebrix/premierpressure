import type { Metadata } from 'next';
import GalleryContent from './gallery-content';

const SITE_URL = 'https://www.premierpressuresolutions.com.au';

export const metadata: Metadata = {
  title: { absolute: 'Before & After Gallery | Premier Pressure Solutions WA' },
  description:
    'See the incredible transformations from our pressure cleaning services across Perth. Browse before and after photos of driveways, limestone, roofs, and more.',
  alternates: { canonical: `${SITE_URL}/gallery` },
  openGraph: { url: `${SITE_URL}/gallery` },
};

export default function GalleryPage() {
  return <GalleryContent />;
}
