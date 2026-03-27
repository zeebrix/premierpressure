import { Helmet } from 'react-helmet-async';
import { SuburbHero } from '../../components/suburb/suburb-hero';
import { SuburbServices } from '../../components/suburb/suburb-services';
import { SuburbWhyChoose } from '../../components/suburb/suburb-why-choose';
import { SuburbProcess } from '../../components/suburb/suburb-process';
import { SuburbFAQ } from '../../components/suburb/suburb-faq';
import { BeforeAfterGallery } from '../../components/before-after-gallery';
import { GoogleReviews } from '../../components/google-reviews';
import { QuoteForm } from '../../components/quote-form';
import { StickyCallButton } from '../../components/sticky-call-button';
import { generateSuburbFAQSchema } from '../../utils/suburb-faq-schema';

export default function Harrisdale() {
  const faqSchema = generateSuburbFAQSchema('Harrisdale');
  
  return (
    <>
      <StickyCallButton />
      <Helmet>
        <title>Pressure Cleaning Harrisdale WA | House & Driveway Washing | Premier Pressure Solutions WA</title>
        <meta name="description" content="Professional pressure cleaning services in Harrisdale. Specialising in house washing, driveway cleaning, roof cleaning & more. Serving Harrisdale homes. Call 0452 579 657!" />
        <meta name="keywords" content="pressure cleaning Harrisdale, house washing Harrisdale, driveway cleaning Harrisdale, roof cleaning Harrisdale, Harrisdale pressure washing" />
        <link rel="canonical" href="https://premierpressuresolutionswa.com.au/suburbs/harrisdale" />
        
        {/* FAQ Schema */}
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
      </Helmet>
      <SuburbHero suburbName="Harrisdale" tagline="Pressure Cleaning Harrisdale - Family Community Care" description="Professional pressure cleaning for Harrisdale's modern family homes. Expert services for this thriving southern suburbs community." />
      <SuburbServices suburbName="Harrisdale" />
      <BeforeAfterGallery />
      <SuburbWhyChoose suburbName="Harrisdale" />

      <SuburbProcess suburbName="Harrisdale" />

      <SuburbFAQ suburbName="Harrisdale" />
      <GoogleReviews />
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0a1628] mb-8 text-center">Get Your Free Quote Today</h2>
            <QuoteForm />
          </div>
        </div>
      </section>
    </>
  );
}