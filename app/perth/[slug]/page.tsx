import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
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

const SITE_URL = 'https://www.premierpressuresolutions.com.au';

type Props = { params: Promise<{ slug: string }> };

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
    openGraph: { url, title: suburb.title, description: suburb.description, type: 'website', locale: 'en_AU', siteName: 'Premier Pressure Solutions WA', images: [{ url: 'https://www.premierpressuresolutions.com.au/og-image.jpg', width: 1200, height: 630 }] },
    twitter: {
      card: 'summary_large_image',
      title: suburb.title,
      description: suburb.description,
      images: ['https://www.premierpressuresolutions.com.au/og-image.jpg'],
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

  const content = suburbContent[suburb.slug];

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
  const schema = suburb.useCombinedSchema
    ? generateSuburbSchema(suburb.name, faqSchema)
    : faqSchema;
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
      {(content?.intro || content?.localContext) && (
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-[#0a1628] mb-4">
              Pressure Cleaning in {suburb.name}
            </h2>
            {content?.intro && (
              <p className="text-lg text-gray-700 leading-relaxed mb-4">{content.intro}</p>
            )}
            {content?.localContext && (
              <p className="text-gray-600 leading-relaxed">{content.localContext}</p>
            )}
          </div>
        </section>
      )}
      <SuburbServices suburbName={suburb.name} />
      <BeforeAfterGallery />
      <SuburbWhyChoose suburbName={suburb.name} />

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0a1628] mb-4">
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
      <GoogleReviews seed={suburb.name} />

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0a1628] mb-8 text-center">
              Get Your Free Quote Today
            </h2>
            <QuoteForm />
          </div>
        </div>
      </section>
    </>
  );
}
