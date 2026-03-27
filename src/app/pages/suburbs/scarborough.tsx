import { SuburbHero } from '../../components/suburb/suburb-hero';
import { SuburbServices } from '../../components/suburb/suburb-services';
import { SuburbWhyChoose } from '../../components/suburb/suburb-why-choose';
import { SuburbProcess } from '../../components/suburb/suburb-process';
import { SuburbFAQ } from '../../components/suburb/suburb-faq';
import { Helmet } from 'react-helmet-async';
import { BeforeAfterCarousel } from '../../components/before-after-carousel';
import { BeforeAfterGallery } from '../../components/before-after-gallery';
import { GoogleReviews } from '../../components/google-reviews';
import { QuoteForm } from '../../components/quote-form';
import { StickyCallButton } from '../../components/sticky-call-button';
import { generateSuburbFAQSchema } from '../../utils/suburb-faq-schema';
import { generateSuburbSchema } from '../../utils/suburb-schema';

export default function Scarborough() {
  const faqSchema = generateSuburbFAQSchema('Scarborough');
  const combinedSchema = generateSuburbSchema('Scarborough', faqSchema);
  
  return (
    <>
      <StickyCallButton />
      <Helmet>
        <title>Pressure Cleaning Scarborough WA | House & Driveway Washing | Premier Pressure Solutions WA</title>
        <meta 
          name="description" 
          content="Professional pressure cleaning in Scarborough. Coastal property specialists for house washing, driveway cleaning & more. Call 0452 579 657!" 
        />
        <meta 
          name="keywords" 
          content="pressure cleaning Scarborough, house washing Scarborough, driveway cleaning Scarborough, coastal cleaning, Scarborough pressure washing"
        />
        <link rel="canonical" href="https://premierpressuresolutionswa.com.au/suburbs/scarborough" />
        
        {/* FAQ Schema */}
        <script type="application/ld+json">
          {JSON.stringify(combinedSchema)}
        </script>
      </Helmet>

      <SuburbHero
        suburbName="Scarborough"
        tagline="Pressure Cleaning Scarborough - Beachside Property Specialists"
        description="Expert pressure cleaning for Scarborough's coastal properties. Specialist salt spray removal, house washing, and driveway cleaning for beachside homes."
      />

      <SuburbServices suburbName="Scarborough" />
      <BeforeAfterGallery />
      <SuburbWhyChoose suburbName="Scarborough" />

      <SuburbProcess suburbName="Scarborough" />

      <SuburbFAQ suburbName="Scarborough" />

      <GoogleReviews />

      <section id="quote" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-[#0a1628] mb-4">
                Get Your Free Quote - Scarborough
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