import Link from 'next/link';
import { suburbs } from '@/data/suburbs';

// Curated set of higher-intent suburbs shown as quick links on service pages.
// Falls back to the first 24 suburbs if none of these slugs are present.
const POPULAR_SLUGS = [
  'cottesloe', 'nedlands', 'subiaco', 'claremont', 'south-perth', 'applecross',
  'scarborough', 'joondalup', 'hillarys', 'duncraig', 'mount-lawley', 'victoria-park',
  'mosman-park', 'floreat', 'churchlands', 'wembley', 'melville', 'booragoon',
  'karrinyup', 'stirling', 'bayswater', 'como', 'trigg', 'north-beach',
];

export function ServiceAreaLinks() {
  const popular = suburbs.filter((s) => POPULAR_SLUGS.includes(s.slug));
  const list = popular.length > 0 ? popular : suburbs.slice(0, 24);

  return (
    <section className="py-14 bg-gray-50 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-[#0a1628] mb-3">
          Pressure Cleaning Across Perth Suburbs
        </h2>
        <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
          We bring this service to homes and businesses right across the Perth metro area. Find your local area:
        </p>
        <div className="flex flex-wrap justify-center gap-2 max-w-5xl mx-auto">
          {list.map((s) => (
            <Link
              key={s.slug}
              href={`/${s.slug}`}
              className="px-3 py-1.5 rounded-full bg-white border border-gray-200 text-sm text-[#0a1628] hover:border-[#00d4ff] hover:text-[#00d4ff] transition-colors"
            >
              Pressure Cleaning {s.name}
            </Link>
          ))}
        </div>
        <Link
          href="/areas"
          className="inline-block mt-8 text-[#00d4ff] font-semibold hover:underline"
        >
          View all service areas →
        </Link>
      </div>
    </section>
  );
}
