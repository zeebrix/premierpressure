import type { MetadataRoute } from 'next';
import { suburbs } from '@/data/suburbs';

const SITE_URL = 'https://www.ppsexteriorcleaning.com.au';

const staticPaths = [
  '/',
  '/about',
  '/contact',
  '/areas',
  '/gallery',
  '/terms',
  // Residential services
  '/pressure-cleaning',
  '/house-washing',
  '/driveway-cleaning',
  '/roof-cleaning',
  '/window-cleaning',
  '/paver-cleaning',
  '/concrete-cleaning',
  '/limestone-cleaning',
  '/pool-patio-cleaning',
  '/presale-cleaning',
  // Commercial
  '/commercial',
  '/commercial/building-washing',
  '/commercial/strata-cleaning',
  '/commercial/school-cleaning',
  '/commercial/shopping-centre-cleaning',
  '/commercial/restaurant-cleaning',
  '/commercial/industrial-washing',
  '/commercial/playground-cleaning',
  // Resources
  '/resources',
  '/resources/pricing-guide',
  '/resources/preparation-checklist',
  '/resources/cleaning-frequency',
  '/resources/diy-vs-professional',
  '/resources/organic-staining-guide',
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const staticEntries = staticPaths.map((path) => ({
    url: `${SITE_URL}${path === '/' ? '' : path}`,
    lastModified: now,
    changeFrequency: 'weekly' as const,
    priority: path === '/' ? 1.0 : path.endsWith('-cleaning') || path === '/house-washing' ? 0.9 : 0.8,
  }));
  const suburbEntries = suburbs.map((s) => ({
    url: `${SITE_URL}/${s.slug}`,
    lastModified: now,
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }));
  return [...staticEntries, ...suburbEntries];
}
