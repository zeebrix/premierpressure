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

export default function Karrinyup() {
  const faqSchema = generateSuburbFAQSchema('Karrinyup');
  
  return (
    <>
      <StickyCallButton />
      <Helmet>
        <title>Pressure Cleaning Karrinyup WA | House & Driveway Washing | Premier Pressure Solutions WA</title>
        <meta name="description" content="Professional pressure cleaning services in Karrinyup. Premium property care for house washing, driveway cleaning & more. Serving Karrinyup. Call 0452 579 657!" />
        <meta name="keywords" content="pressure cleaning Karrinyup, house washing Karrinyup, driveway cleaning Karrinyup, roof cleaning Karrinyup, Karrinyup pressure washing" />
        <link rel="canonical" href="https://premierpressuresolutionswa.com.au/suburbs/karrinyup" />
        
        {/* FAQ Schema */}
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
      </Helmet>

      <SuburbHero
        suburbName="Karrinyup"
        tagline="Pressure Cleaning Karrinyup - Quality Property Care"
        description="Professional pressure cleaning for Karrinyup homes. Expert house washing, driveway cleaning, and complete exterior care services."
      />

      <SuburbServices suburbName="Karrinyup" />
      <BeforeAfterGallery />
      <SuburbWhyChoose suburbName="Karrinyup" />

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0a1628] mb-4">
              Our Work in Karrinyup
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Quality results for Karrinyup homeowners
            </p>
          </div>
          <BeforeAfterGallery category="house" limit={6} />
        </div>
      </section>

      <SuburbProcess suburbName="Karrinyup" />

      <SuburbFAQ suburbName="Karrinyup" />

      <GoogleReviews />

      <section id="quote" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-[#0a1628] mb-4">
                Get Your Free Quote - Karrinyup
              </h2>
              <p className="text-lg text-gray-600">
                Professional pressure cleaning for Karrinyup
              </p>
            </div>
            <QuoteForm />
          </div>
        </div>
      </section>
    </>
  );
}