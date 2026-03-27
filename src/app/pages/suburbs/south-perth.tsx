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

export default function SouthPerth() {
  const faqSchema = generateSuburbFAQSchema('South Perth');
  
  return (
    <>
      <StickyCallButton />
      <Helmet>
        <title>Pressure Cleaning South Perth WA | House & Driveway Washing | Premier Pressure Solutions WA</title>
        <meta name="description" content="Professional pressure cleaning services in South Perth. Premium riverside property care for house washing, driveway cleaning & more. Call 0452 579 657!" />
        <meta name="keywords" content="pressure cleaning South Perth, house washing South Perth, driveway cleaning South Perth, South Perth pressure washing" />
        <link rel="canonical" href="https://premierpressuresolutionswa.com.au/suburbs/south-perth" />
        
        {/* FAQ Schema */}
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
      </Helmet>

      <SuburbHero
        suburbName="South Perth"
        tagline="Pressure Cleaning South Perth - Professional Property Care"
        description="Quality pressure cleaning for South Perth homes and apartments. From riverside properties to suburban homes, we deliver outstanding results across South Perth."
      />

      <SuburbServices suburbName="South Perth" />
      <BeforeAfterGallery />
      <SuburbWhyChoose suburbName="South Perth" />

      <SuburbProcess suburbName="South Perth" />

      <SuburbFAQ suburbName="South Perth" />

      <GoogleReviews />

      <section id="quote" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-[#0a1628] mb-4">
                Get Your Free Quote - South Perth
              </h2>
              <p className="text-lg text-gray-600">
                Professional pressure cleaning for South Perth
              </p>
            </div>
            <QuoteForm />
          </div>
        </div>
      </section>
    </>
  );
}