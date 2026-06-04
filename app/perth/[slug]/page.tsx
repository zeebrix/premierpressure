import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { suburbs, suburbBySlug } from '@/data/suburbs';
import { suburbContent } from '@/data/suburb-content';
import { SuburbHero } from '@/app/components/suburb/suburb-hero';
import { SuburbServices } from '@/app/components/suburb/suburb-services';
import { SuburbWhyChoose } from '@/app/components/suburb/suburb-why-choose';
import { SuburbProcess } from '@/app/components/suburb/suburb-process';
import { SuburbFAQ } from '@/app/components/suburb/suburb-faq';
import { BeforeAfterGallery } from '@/app/components/before-after-gallery';
import { GoogleReviews } from '@/app/components/google-reviews';
import { QuoteForm } from '@/app/components/quote-form';
import { StickyCallButton } from '@/app/components/sticky-call-button';
import { generateSuburbFAQSchema } from '@/app/utils/suburb-faq-schema';
import { generateSuburbSchema } from '@/app/utils/suburb-schema';
import { generateBreadcrumbSchema } from '@/app/utils/local-business-schema';
import { getSuburbCopy } from '@/app/utils/suburb-intro';

const SITE_URL = 'https://www.ppsexteriorcleaning.com.au';

type Props = { params: Promise<{ slug: string }> };

function getNearbySuburbs(slug: string) {
  const index = suburbs.findIndex((s) => s.slug === slug);
  if (index === -1) return suburbs.slice(0, 6);

  const candidates = [
    ...suburbs.slice(Math.max(0, index - 3), index),
    ...suburbs.slice(index + 1, index + 4),
  ];

  if (candidates.length >= 6) return candidates.slice(0, 6);

  return [
    ...candidates,
    ...suburbs.filter((s) => s.slug !== slug && !candidates.some((c) => c.slug === s.slug)),
  ].slice(0, 6);
}

export function generateStaticParams() {
  return suburbs.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const suburb = suburbBySlug.get(slug);
  if (!suburb) return {};
  const url = `${SITE_URL}/${suburb.slug}`;
  return {
    title: { absolute: suburb.title },
    description: suburb.description,
    alternates: { canonical: url },
    openGraph: { url, title: suburb.title, description: suburb.description, type: 'website', locale: 'en_AU', siteName: 'PPS Exterior Cleaning', images: [{ url: 'https://www.ppsexteriorcleaning.com.au/og-image.jpg', width: 1200, height: 630 }] },
    twitter: {
      card: 'summary_large_image',
      title: suburb.title,
      description: suburb.description,
      images: ['https://www.ppsexteriorcleaning.com.au/og-image.jpg'],
    },
    other: {
      'twitter:url': url,
    },
  };
}

export default async function SuburbPage({ params }: Props) {
  const { slug } = await params;
  const suburb = suburbBySlug.get(slug);
  if (!suburb) notFound();

  const generatedContent = getSuburbCopy(suburb);
  const content = {
    ...generatedContent,
    ...suburbContent[suburb.slug],
  };
  const nearbySuburbs = getNearbySuburbs(suburb.slug);

  // Use suburb-specific FAQs when available so the visible FAQs and the
  // FAQPage schema stay in sync (Audit #04).
  const faqSchema = content?.faqs?.length
    ? {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: content.faqs.map((f) => ({
          '@type': 'Question',
          name: f.question,
          acceptedAnswer: { '@type': 'Answer', text: f.answer },
        })),
      }
    : generateSuburbFAQSchema(suburb.name);
  // Emit the combined LocalBusiness + Service + FAQ schema on every suburb page,
  // with the suburb itself as addressLocality (client request) — not just Perth.
  const schema = generateSuburbSchema(suburb.name, faqSchema);
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', path: '' },
    { name: 'Service Areas', path: '/areas' },
    { name: suburb.name, path: `/${suburb.slug}` },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <StickyCallButton />
      <SuburbHero
        suburbName={suburb.name}
        tagline={suburb.heroTagline}
        description={suburb.heroDescription}
      />
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-[#020B1C] mb-4">
            Pressure Cleaning in {suburb.name}
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">{content.intro}</p>
          <p className="text-gray-600 leading-relaxed">{content.localContext}</p>
        </div>
      </section>
      <SuburbServices suburbName={suburb.name} />
      <SuburbWhyChoose suburbName={suburb.name} />

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#020B1C] mb-4">
              Our Work in {suburb.name}
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              See the transformation we&apos;ve delivered for {suburb.name} homeowners
            </p>
          </div>
          <BeforeAfterGallery />
        </div>
      </section>

      <SuburbProcess suburbName={suburb.name} />
      <SuburbFAQ suburbName={suburb.name} customFaqs={content?.faqs} />
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-[#020B1C] mb-3">
              Suburbs We Also Service Nearby
            </h2>
            <p className="text-gray-600">
              PPS Exterior Cleaning also services nearby Perth suburbs around {suburb.name}.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {nearbySuburbs.map((nearby) => (
              <Link
                key={nearby.slug}
                href={`/${nearby.slug}`}
                className="rounded-lg border border-[#2A3D5E]/15 bg-[#f7f9fc] px-4 py-3 text-center font-semibold text-[#020B1C] transition-all hover:border-[#0057FF] hover:text-[#0057FF] hover:shadow-md"
              >
                {nearby.name}
              </Link>
            ))}
          </div>
        </div>
      </section>
      <GoogleReviews seed={suburb.name} />

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-[#020B1C] mb-8 text-center">
              Get a Free Quote in {suburb.name}
            </h2>
            <QuoteForm />
          </div>
        </div>
      </section>
    </>
  );
}
