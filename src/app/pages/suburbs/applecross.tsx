import { Helmet } from 'react-helmet-async';
import { SuburbHero } from '../../components/suburb/suburb-hero';
import { SuburbServices } from '../../components/suburb/suburb-services';
import { SuburbWhyChoose } from '../../components/suburb/suburb-why-choose';
import { SuburbProcess } from '../../components/suburb/suburb-process';
import { SuburbFAQ } from '../../components/suburb/suburb-faq';
import { BeforeAfterCarousel } from '../../components/before-after-carousel';
import { BeforeAfterGallery } from '../../components/before-after-gallery';
import { GoogleReviews } from '../../components/google-reviews';
import { QuoteForm } from '../../components/quote-form';
import { StickyCallButton } from '../../components/sticky-call-button';
import { generateSuburbFAQSchema } from '../../utils/suburb-faq-schema';

export default function Applecross() {
  const faqSchema = generateSuburbFAQSchema('Applecross');
  
  return (
    <>
      <Helmet>
        <title>Pressure Cleaning Applecross WA | House & Driveway Washing | Premier Pressure Solutions WA</title>
        <meta 
          name="description" 
          content="Professional pressure cleaning in Applecross. Premium house washing, driveway cleaning, roof cleaning & more. Servicing Applecross properties. Call 0452 579 657!" 
        />
        <meta 
          name="keywords" 
          content="pressure cleaning Applecross, house washing Applecross, driveway cleaning Applecross, roof cleaning Applecross, Applecross pressure washing" 
        />
        <link rel="canonical" href="https://premierpressuresolutionswa.com.au/suburbs/applecross" />
        
        {/* FAQ Schema */}
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
      </Helmet>

      <StickyCallButton />

      <SuburbHero
        suburbName="Applecross"
        tagline="Pressure Cleaning Applecross - Premium Property Solutions"
        description="Expert pressure cleaning for Applecross's prestigious riverside properties. Professional house washing, driveway restoration, and complete exterior cleaning services."
      />

      <SuburbServices suburbName="Applecross" />
      <BeforeAfterGallery />
      <SuburbWhyChoose suburbName="Applecross" />

      <SuburbProcess suburbName="Applecross" />

      <SuburbFAQ suburbName="Applecross" />

      <GoogleReviews />

      <section id="quote" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-[#0a1628] mb-4">
                Get Your Free Quote - Applecross
              </h2>
              <p className="text-lg text-gray-600">
                Professional pressure cleaning for Applecross properties
              </p>
            </div>
            <QuoteForm />
          </div>
        </div>
      </section>
    </>
  );
}