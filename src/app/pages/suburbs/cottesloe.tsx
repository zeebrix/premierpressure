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
import { generateSuburbSchema } from '../../utils/suburb-schema';

export default function Cottesloe() {
  const faqSchema = generateSuburbFAQSchema('Cottesloe');
  const combinedSchema = generateSuburbSchema('Cottesloe', faqSchema);
  
  return (
    <>
      <StickyCallButton />
      <Helmet>
        <title>Pressure Cleaning Cottesloe WA | House & Driveway Washing | Premier Pressure Solutions WA</title>
        <meta name="description" content="Professional pressure cleaning services in Cottesloe. Premium coastal property care for house washing, driveway cleaning & more. Call 0452 579 657!" />
        <meta name="keywords" content="pressure cleaning Cottesloe, house washing Cottesloe, driveway cleaning Cottesloe, coastal cleaning Cottesloe, Cottesloe pressure washing" />
        <link rel="canonical" href="https://premierpressuresolutionswa.com.au/suburbs/cottesloe" />
        
        {/* FAQ Schema */}
        <script type="application/ld+json">
          {JSON.stringify(combinedSchema)}
        </script>
      </Helmet>

      <SuburbHero
        suburbName="Cottesloe"
        tagline="Pressure Cleaning Cottesloe - Beachside Property Specialists"
        description="Expert pressure cleaning for Cottesloe's premium beachside properties. From salt spray removal to limestone restoration, we keep your coastal home looking pristine."
      />

      <SuburbServices suburbName="Cottesloe" />
      <BeforeAfterGallery />
      <SuburbWhyChoose suburbName="Cottesloe" />

      <SuburbProcess suburbName="Cottesloe" />

      <SuburbFAQ suburbName="Cottesloe" />

      <GoogleReviews />

      <section id="quote" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-[#0a1628] mb-4">
                Get Your Free Quote - Cottesloe
              </h2>
              <p className="text-lg text-gray-600">
                Fast, reliable pressure cleaning services in Cottesloe. Contact us today!
              </p>
            </div>
            <QuoteForm />
          </div>
        </div>
      </section>
    </>
  );
}