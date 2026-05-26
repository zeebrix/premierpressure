import type { Metadata } from 'next';
import { RestaurantCleaningContent } from './restaurant-cleaning-content';

const SITE_URL = 'https://www.premierpressuresolutions.com.au';

export const metadata: Metadata = {
  title: {
    absolute: 'Restaurant Exterior Cleaning Perth | Premier Pressure Solutions WA',
  },
  description:
    "Professional restaurant, café & hospitality exterior cleaning across Perth. Streak-free windows, outdoor dining, facades & awnings. Flexible scheduling around service hours.",
  alternates: { canonical: `${SITE_URL}/commercial/restaurant-cleaning` },
};

export default function RestaurantCleaningPage() {
  return <RestaurantCleaningContent />;
}
