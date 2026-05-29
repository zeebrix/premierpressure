import type { Metadata } from 'next';
import { ShoppingCentreCleaningContent } from './shopping-centre-cleaning-content';
import { generateBreadcrumbSchema } from '@/app/utils/local-business-schema';

const SITE_URL = 'https://www.premierpressuresolutions.com.au';

export const metadata: Metadata = {
  title: {
    absolute: 'Shopping Centre Pressure Cleaning Perth | Premier Pressure Solutions WA',
  },
  description:
    "Professional shopping centre & retail complex pressure cleaning across Perth. After-hours service to clean entrances, walkways, parking & facades without disrupting trading.",
  alternates: { canonical: `${SITE_URL}/commercial/shopping-centre-cleaning` },
  openGraph: { url: `${SITE_URL}/commercial/shopping-centre-cleaning`, type: 'website', locale: 'en_AU', siteName: 'Premier Pressure Solutions WA', images: [{ url: 'https://www.premierpressuresolutions.com.au/og-image.jpg', width: 1200, height: 630 }] },
};

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: 'Home', path: '' },
  { name: 'Commercial', path: '/commercial' },
  { name: 'Shopping Centre Cleaning', path: '/commercial/shopping-centre-cleaning' },
]);

export default function ShoppingCentreCleaningPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <ShoppingCentreCleaningContent />
    </>
  );
}
