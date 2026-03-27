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

export default function HenleyBrook() {
  const faqSchema = generateSuburbFAQSchema('Henley Brook');
  
  return (
    <>
      <StickyCallButton />
      <Helmet>
        <title>Pressure Cleaning Henley Brook WA | House & Driveway Washing | Premier Pressure Solutions WA</title>
        <meta name="description" content="Professional pressure cleaning in Henley Brook. House washing, driveway & roof cleaning specialists. Expert service. Call 0452 579 657!" />
        <meta name="keywords" content="pressure cleaning Henley Brook, house washing Henley Brook, driveway cleaning Henley Brook, roof cleaning Henley Brook, Henley Brook pressure washing" />
        <link rel="canonical" href="https://premierpressuresolutionswa.com.au/suburbs/henley-brook" />
        
        {/* FAQ Schema */}
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
      </Helmet>
      <SuburbHero suburbName="Henley Brook" tagline="Pressure Cleaning Henley Brook - Premium Property Care" description="Professional pressure cleaning for Henley Brook's quality homes and estates. Expert services for this sought-after eastern corridor suburb." />
      <SuburbServices suburbName="Henley Brook" />
      <BeforeAfterGallery />
      <SuburbWhyChoose suburbName="Henley Brook" />

      <SuburbProcess suburbName="Henley Brook" />

      <SuburbFAQ suburbName="Henley Brook" />
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