import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { suburbs, suburbBySlug } from '@/data/suburbs';
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

const SITE_URL = 'https://www.premierpressuresolutions.com.au';

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return suburbs.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const suburb = suburbBySlug.get(slug);
  if (!suburb) return {};
  return {
    title: { absolute: suburb.title },
    description: suburb.description,
    alternates: { canonical: `${SITE_URL}/perth/${suburb.slug}` },
  };
}

export default async function SuburbPage({ params }: Props) {
  const { slug } = await params;
  const suburb = suburbBySlug.get(slug);
  if (!suburb) notFound();

  const faqSchema = generateSuburbFAQSchema(suburb.name);
  const schema = suburb.useCombinedSchema
    ? generateSuburbSchema(suburb.name, faqSchema)
    : faqSchema;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <StickyCallButton />
      <SuburbHero
        suburbName={suburb.name}
        tagline={suburb.heroTagline}
        description={suburb.heroDescription}
      />
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
      <SuburbFAQ suburbName={suburb.name} />
      <GoogleReviews />

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
