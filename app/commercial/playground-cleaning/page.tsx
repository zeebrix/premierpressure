import type { Metadata } from 'next';
import { PlaygroundCleaningContent } from './playground-cleaning-content';
import { generateBreadcrumbSchema } from '@/app/utils/local-business-schema';

const SITE_URL = 'https://www.premierpressuresolutions.com.au';

export const metadata: Metadata = {
  title: {
    absolute: 'Playground Pressure Cleaning Perth | Premier Pressure Solutions WA',
  },
  description:
    "Safe, child-friendly playground pressure cleaning for Perth schools, child care centres, councils & strata properties. Non-toxic solutions. Equipment-safe methods.",
  alternates: { canonical: `${SITE_URL}/commercial/playground-cleaning` },
  openGraph: { url: `${SITE_URL}/commercial/playground-cleaning`, type: 'website', locale: 'en_AU', siteName: 'Premier Pressure Solutions WA', images: [{ url: 'https://www.premierpressuresolutions.com.au/og-image.jpg', width: 1200, height: 630 }] },
};

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: 'Home', path: '' },
  { name: 'Commercial', path: '/commercial' },
  { name: 'Playground Cleaning', path: '/commercial/playground-cleaning' },
]);

export default function PlaygroundCleaningPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <PlaygroundCleaningContent />
    </>
  );
}
