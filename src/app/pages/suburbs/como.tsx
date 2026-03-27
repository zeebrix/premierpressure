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

export default function Como() {
  const faqSchema = generateSuburbFAQSchema('Como');
  
  return (
    <>
      <StickyCallButton />
      <Helmet>
        <title>Pressure Cleaning Como WA | House & Driveway Washing | Premier Pressure Solutions WA</title>
        <meta name="description" content="Professional pressure cleaning in Como. House washing, driveway & roof cleaning specialists for riverside homes. Expert service. Call 0452 579 657!" />
        <meta name="keywords" content="pressure cleaning Como, house washing Como, driveway cleaning Como, roof cleaning Como, Como pressure washing" />
        <link rel="canonical" href="https://premierpressuresolutionswa.com.au/suburbs/como" />
        
        {/* FAQ Schema */}
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
      </Helmet>

      <SuburbHero
        suburbName="Como"
        tagline="Pressure Cleaning Como - Riverside Property Experts"
        description="Professional pressure cleaning for Como's beautiful riverside homes. Expert house washing, driveway restoration, and complete exterior cleaning services."
      />

      <SuburbServices suburbName="Como" />
      <BeforeAfterGallery />
      <SuburbWhyChoose suburbName="Como" />

      <SuburbProcess suburbName="Como" />

      <SuburbFAQ suburbName="Como" />

      <GoogleReviews />

      <section id="quote" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-[#0a1628] mb-4">
                Get Your Free Quote - Como
              </h2>
              <p className="text-lg text-gray-600">
                Professional pressure cleaning for riverside properties
              </p>
            </div>
            <QuoteForm />
          </div>
        </div>
      </section>
    </>
  );
}