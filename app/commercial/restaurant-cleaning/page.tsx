import type { Metadata } from 'next';
import { RestaurantCleaningContent } from './restaurant-cleaning-content';
import { generateBreadcrumbSchema } from '@/app/utils/local-business-schema';

const SITE_URL = 'https://www.premierpressuresolutions.com.au';

export const metadata: Metadata = {
  title: {
    absolute: 'Restaurant Exterior Cleaning Perth | Premier Pressure Solutions WA',
  },
  description:
    "Professional restaurant, café & hospitality exterior cleaning across Perth. Streak-free windows, outdoor dining, facades & awnings. Flexible scheduling around service hours.",
  alternates: { canonical: `${SITE_URL}/commercial/restaurant-cleaning` },
  openGraph: { url: `${SITE_URL}/commercial/restaurant-cleaning` },
};

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: 'Home', path: '' },
  { name: 'Commercial', path: '/commercial' },
  { name: 'Restaurant Cleaning', path: '/commercial/restaurant-cleaning' },
]);

export default function RestaurantCleaningPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <RestaurantCleaningContent />
    </>
  );
}
