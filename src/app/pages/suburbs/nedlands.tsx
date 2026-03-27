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

export default function Nedlands() {
  const faqSchema = generateSuburbFAQSchema('Nedlands');
  
  return (
    <>
      <StickyCallButton />
      <Helmet>
        <title>Pressure Cleaning Nedlands WA | House & Driveway Washing | Premier Pressure Solutions WA</title>
        <meta name="description" content="Professional pressure cleaning services in Nedlands. Premium riverside property care for house washing, driveway cleaning & more. Call 0452 579 657!" />
        <meta name="keywords" content="pressure cleaning Nedlands, house washing Nedlands, driveway cleaning Nedlands, Nedlands pressure washing" />
        <link rel="canonical" href="https://premierpressuresolutionswa.com.au/suburbs/nedlands" />
        
        {/* FAQ Schema */}
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
      </Helmet>

      <SuburbHero
        suburbName="Nedlands"
        tagline="Pressure Cleaning Nedlands - Premium Riverside Property Care"
        description="Professional pressure cleaning for Nedlands' prestigious riverside homes. Expert care for luxury properties, from limestone driveways to waterfront patios. Servicing Nedlands, Dalkeith, and Hollywood."
      />

      <SuburbServices suburbName="Nedlands" />
      <BeforeAfterGallery />
      <SuburbWhyChoose suburbName="Nedlands" />

      <SuburbProcess suburbName="Nedlands" />

      <SuburbFAQ suburbName="Nedlands" />

      <GoogleReviews />

      <section id="quote" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-[#0a1628] mb-4">
                Request Your Free Quote - Nedlands
              </h2>
              <p className="text-lg text-gray-600">
                Premium pressure cleaning services for Nedlands properties
              </p>
            </div>
            <QuoteForm />
          </div>
        </div>
      </section>
    </>
  );
}