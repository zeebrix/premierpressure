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

export default function Leederville() {
  const faqSchema = generateSuburbFAQSchema('Leederville');
  
  return (
    <>
      <StickyCallButton />
      <Helmet>
        <title>Pressure Cleaning Leederville WA | House & Driveway Washing | Premier Pressure Solutions WA</title>
        <meta name="description" content="Professional pressure cleaning services in Leederville. Inner-city property care for house washing, driveway cleaning & more. Serving Leederville. Call 0452 579 657!" />
        <meta name="keywords" content="pressure cleaning Leederville, house washing Leederville, driveway cleaning Leederville, inner city cleaning Leederville, Leederville pressure washing" />
        <link rel="canonical" href="https://premierpressuresolutionswa.com.au/suburbs/leederville" />
        
        {/* FAQ Schema */}
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
      </Helmet>

      <SuburbHero
        suburbName="Leederville"
        tagline="Pressure Cleaning Leederville - Inner City Specialists"
        description="Professional pressure cleaning for Leederville homes and businesses. Expert house washing, commercial cleaning, and complete exterior care."
      />

      <SuburbServices suburbName="Leederville" />
      <BeforeAfterGallery />
      <SuburbWhyChoose suburbName="Leederville" />

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0a1628] mb-4">
              Our Work in Leederville
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Quality results for Leederville properties
            </p>
          </div>
          <BeforeAfterGallery category="house" limit={6} />
        </div>
      </section>

      <SuburbProcess suburbName="Leederville" />

      <SuburbFAQ suburbName="Leederville" />

      <GoogleReviews />

      <section id="quote" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-[#0a1628] mb-4">
                Get Your Free Quote - Leederville
              </h2>
              <p className="text-lg text-gray-600">
                Professional pressure cleaning for Leederville
              </p>
            </div>
            <QuoteForm />
          </div>
        </div>
      </section>
    </>
  );
}