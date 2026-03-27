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

export default function Wembley() {
  const faqSchema = generateSuburbFAQSchema('Wembley');
  
  return (
    <>
      <StickyCallButton />
      <Helmet>
        <title>Pressure Cleaning Wembley WA | House & Driveway Washing | Premier Pressure Solutions WA</title>
        <meta name="description" content="Professional pressure cleaning in Wembley. House washing, driveway & roof cleaning specialists. Expert service for local homes. Call 0452 579 657!" />
        <meta name="keywords" content="pressure cleaning Wembley, house washing Wembley, driveway cleaning Wembley, roof cleaning Wembley, Wembley pressure washing" />
        <link rel="canonical" href="https://premierpressuresolutionswa.com.au/suburbs/wembley" />
        
        {/* FAQ Schema */}
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
      </Helmet>

      <SuburbHero
        suburbName="Wembley"
        tagline="Pressure Cleaning Wembley - Professional Property Care"
        description="Quality pressure cleaning for Wembley's established homes and properties. Trusted by Wembley residents for house washing, driveway cleaning, and complete exterior care."
      />

      <SuburbServices suburbName="Wembley" />
      <BeforeAfterGallery />
      <SuburbWhyChoose suburbName="Wembley" />

      <SuburbProcess suburbName="Wembley" />

      <SuburbFAQ suburbName="Wembley" />

      <GoogleReviews />

      <section id="quote" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-[#0a1628] mb-4">
                Get Your Free Quote - Wembley
              </h2>
              <p className="text-lg text-gray-600">
                Expert pressure cleaning services in Wembley
              </p>
            </div>
            <QuoteForm />
          </div>
        </div>
      </section>
    </>
  );
}