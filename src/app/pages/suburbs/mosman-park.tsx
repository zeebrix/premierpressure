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

export default function MosmanPark() {
  const faqSchema = generateSuburbFAQSchema('Mosman Park');
  
  return (
    <>
      <StickyCallButton />
      <Helmet>
        <title>Pressure Cleaning Mosman Park WA | House & Driveway Washing | Premier Pressure Solutions WA</title>
        <meta name="description" content="Professional pressure cleaning services in Mosman Park. Premium riverside property care for house washing, driveway cleaning & more. Call 0452 579 657!" />
        <meta name="keywords" content="pressure cleaning Mosman Park, house washing Mosman Park, driveway cleaning Mosman Park, Mosman Park pressure washing" />
        <link rel="canonical" href="https://premierpressuresolutionswa.com.au/suburbs/mosman-park" />
        
        {/* FAQ Schema */}
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
      </Helmet>

      <SuburbHero
        suburbName="Mosman Park"
        tagline="Pressure Cleaning Mosman Park - Heritage & Modern Property Care"
        description="Professional pressure cleaning for Mosman Park's beautiful homes. Expert care for heritage properties, modern residences, and everything in between."
      />

      <SuburbServices suburbName="Mosman Park" />
      <BeforeAfterGallery />
      <SuburbWhyChoose suburbName="Mosman Park" />

      <SuburbProcess suburbName="Mosman Park" />

      <SuburbFAQ suburbName="Mosman Park" />

      <GoogleReviews />

      <section id="quote" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-[#0a1628] mb-4">
                Get Your Free Quote - Mosman Park
              </h2>
              <p className="text-lg text-gray-600">
                Expert pressure cleaning services in Mosman Park
              </p>
            </div>
            <QuoteForm />
          </div>
        </div>
      </section>
    </>
  );
}