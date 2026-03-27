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

export default function Doubleview() {
  const faqSchema = generateSuburbFAQSchema('Doubleview');
  
  return (
    <>
      <StickyCallButton />
      <Helmet>
        <title>Pressure Cleaning Doubleview WA | House & Driveway Washing | Premier Pressure Solutions WA</title>
        <meta name="description" content="Professional pressure cleaning in Doubleview. House washing, driveway & roof cleaning specialists. Expert service for local homes. Call 0452 579 657!" />
        <meta name="keywords" content="pressure cleaning Doubleview, house washing Doubleview, driveway cleaning Doubleview, roof cleaning Doubleview, Doubleview pressure washing" />
        <link rel="canonical" href="https://premierpressuresolutionswa.com.au/suburbs/doubleview" />
        
        {/* FAQ Schema */}
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
      </Helmet>

      <SuburbHero
        suburbName="Doubleview"
        tagline="Pressure Cleaning Doubleview - Local Experts"
        description="Quality pressure cleaning for Doubleview homes. Professional house washing, driveway cleaning, and exterior care services."
      />

      <SuburbServices suburbName="Doubleview" />
      <BeforeAfterGallery />
      <SuburbWhyChoose suburbName="Doubleview" />

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0a1628] mb-4">
              Our Work in Doubleview
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              See the results for Doubleview properties
            </p>
          </div>
          <BeforeAfterGallery category="driveway" limit={6} />
        </div>
      </section>

      <SuburbProcess suburbName="Doubleview" />

      <SuburbFAQ suburbName="Doubleview" />

      <GoogleReviews />

      <section id="quote" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-[#0a1628] mb-4">
                Get Your Free Quote - Doubleview
              </h2>
              <p className="text-lg text-gray-600">
                Professional pressure cleaning for Doubleview
              </p>
            </div>
            <QuoteForm />
          </div>
        </div>
      </section>
    </>
  );
}