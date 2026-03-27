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

export default function Floreat() {
  const faqSchema = generateSuburbFAQSchema('Floreat');
  
  return (
    <>
      <StickyCallButton />
      <Helmet>
        <title>Pressure Cleaning Floreat WA | House & Driveway Washing | Premier Pressure Solutions WA</title>
        <meta name="description" content="Professional pressure cleaning services in Floreat. Premium property care for house washing, driveway cleaning & more. Serving Floreat. Call 0452 579 657!" />
        <meta name="keywords" content="pressure cleaning Floreat, house washing Floreat, driveway cleaning Floreat, roof cleaning Floreat, Floreat pressure washing" />
        <link rel="canonical" href="https://premierpressuresolutionswa.com.au/suburbs/floreat" />
        
        {/* FAQ Schema */}
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
      </Helmet>

      <SuburbHero
        suburbName="Floreat"
        tagline="Pressure Cleaning Floreat - Premium Property Care"
        description="Expert pressure cleaning for Floreat's prestigious homes and properties. From limestone restoration to house washing, we deliver exceptional results for Floreat residents."
      />

      <SuburbServices suburbName="Floreat" />
      <BeforeAfterGallery />
      <SuburbWhyChoose suburbName="Floreat" />

      <SuburbProcess suburbName="Floreat" />

      <SuburbFAQ suburbName="Floreat" />

      <GoogleReviews />

      <section id="quote" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-[#0a1628] mb-4">
                Get Your Free Quote - Floreat
              </h2>
              <p className="text-lg text-gray-600">
                Fast, reliable pressure cleaning services in Floreat. Contact us today!
              </p>
            </div>
            <QuoteForm />
          </div>
        </div>
      </section>
    </>
  );
}