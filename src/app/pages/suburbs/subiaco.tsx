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

export default function Subiaco() {
  const suburbName = 'Subiaco';
  const faqSchema = generateSuburbFAQSchema(suburbName);
  
  return (
    <>
      <StickyCallButton />
      <Helmet>
        <title>Pressure Cleaning Subiaco WA | House & Driveway Washing | Premier Pressure Solutions WA</title>
        <meta 
          name="description" 
          content="Professional pressure cleaning services in Subiaco. Heritage home specialists, driveway cleaning, roof washing & more. Serving Subiaco & Daglish. Call 0452 579 657!" 
        />
        <meta 
          name="keywords" 
          content="pressure cleaning Subiaco, house washing Subiaco, driveway cleaning Subiaco, heritage home cleaning Subiaco, Subiaco pressure washing" 
        />
        <link rel="canonical" href="https://premierpressuresolutionswa.com.au/suburbs/subiaco" />
        
        {/* FAQ Schema */}
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
      </Helmet>

      <SuburbHero
        suburbName="Subiaco"
        tagline="Pressure Cleaning Subiaco - Heritage Home Specialists"
        description="Expert pressure cleaning for Subiaco's character homes and modern properties. Gentle care for heritage surfaces, powerful cleaning for driveways and patios. Trusted by Subiaco residents and property managers."
      />

      <SuburbServices suburbName="Subiaco" />
      <BeforeAfterGallery />
      <SuburbWhyChoose suburbName="Subiaco" />

      <SuburbProcess suburbName="Subiaco" />

      <SuburbFAQ suburbName="Subiaco" />

      <GoogleReviews />

      <section id="quote" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-[#0a1628] mb-4">
                Get Your Free Quote - Subiaco
              </h2>
              <p className="text-lg text-gray-600">
                Professional pressure cleaning services in Subiaco. Book now!
              </p>
            </div>
            <QuoteForm />
          </div>
        </div>
      </section>
    </>
  );
}