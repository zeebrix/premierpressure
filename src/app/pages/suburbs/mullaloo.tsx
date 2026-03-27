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

export default function Mullaloo() {
  const faqSchema = generateSuburbFAQSchema('Mullaloo');
  
  return (
    <>
      <StickyCallButton />
      <Helmet>
        <title>Pressure Cleaning Mullaloo WA | House & Driveway Washing | Premier Pressure Solutions WA</title>
        <meta name="description" content="Professional pressure cleaning services in Mullaloo. Coastal property specialists for house washing, driveway cleaning & more. Call 0452 579 657!" />
        <meta name="keywords" content="pressure cleaning Mullaloo, house washing Mullaloo, driveway cleaning Mullaloo, coastal cleaning Mullaloo, Mullaloo pressure washing" />
        <link rel="canonical" href="https://premierpressuresolutionswa.com.au/suburbs/mullaloo" />
        
        {/* FAQ Schema */}
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
      </Helmet>

      <SuburbHero
        suburbName="Mullaloo"
        tagline="Pressure Cleaning Mullaloo - Beachside Excellence"
        description="Expert pressure cleaning for Mullaloo's coastal properties. Protect your beachside investment with professional cleaning services that combat salt spray and coastal wear."
      />

      <SuburbServices suburbName="Mullaloo" />
      <BeforeAfterGallery />
      <SuburbWhyChoose suburbName="Mullaloo" />

      <SuburbProcess suburbName="Mullaloo" />

      <SuburbFAQ suburbName="Mullaloo" />

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