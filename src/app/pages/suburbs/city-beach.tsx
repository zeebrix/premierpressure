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

export default function CityBeach() {
  const faqSchema = generateSuburbFAQSchema('City Beach');
  
  return (
    <>
      <StickyCallButton />
      <Helmet>
        <title>Pressure Cleaning City Beach WA | House & Driveway Washing | Premier Pressure Solutions WA</title>
        <meta name="description" content="Professional pressure cleaning services in City Beach. Coastal property specialists for house washing, driveway cleaning & more. Call 0452 579 657!" />
        <meta name="keywords" content="pressure cleaning City Beach, house washing City Beach, driveway cleaning City Beach, coastal cleaning City Beach, City Beach pressure washing" />
        <link rel="canonical" href="https://premierpressuresolutionswa.com.au/suburbs/city-beach" />
        
        {/* FAQ Schema */}
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
      </Helmet>

      <SuburbHero
        suburbName="City Beach"
        tagline="Pressure Cleaning City Beach - Coastal Property Experts"
        description="Specialist pressure cleaning for City Beach's premium coastal properties. Expert salt spray removal, limestone restoration, and complete exterior cleaning services."
      />

      <SuburbServices suburbName="City Beach" />
      <BeforeAfterGallery />
      <SuburbWhyChoose suburbName="City Beach" />

      <SuburbProcess suburbName="City Beach" />

      <SuburbFAQ suburbName="City Beach" />

      <GoogleReviews />

      <section id="quote" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-[#0a1628] mb-4">
                Get Your Free Quote - City Beach
              </h2>
              <p className="text-lg text-gray-600">
                Professional pressure cleaning for coastal properties
              </p>
            </div>
            <QuoteForm />
          </div>
        </div>
      </section>
    </>
  );
}