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

export default function Melville() {
  const faqSchema = generateSuburbFAQSchema('Melville');
  
  return (
    <>
      <StickyCallButton />
      <Helmet>
        <title>Pressure Cleaning Melville WA | House & Driveway Washing | Premier Pressure Solutions WA</title>
        <meta name="description" content="Professional pressure cleaning in Melville. House washing, driveway & roof cleaning specialists. Expert service for local homes. Call 0452 579 657!" />
        <meta name="keywords" content="pressure cleaning Melville, house washing Melville, driveway cleaning Melville, roof cleaning Melville, Melville pressure washing" />
        <link rel="canonical" href="https://premierpressuresolutionswa.com.au/suburbs/melville" />
        
        {/* FAQ Schema */}
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
      </Helmet>

      <SuburbHero
        suburbName="Melville"
        tagline="Pressure Cleaning Melville - Trusted Local Service"
        description="Quality pressure cleaning for Melville homes and businesses. Professional exterior cleaning services for Melville's diverse properties."
      />

      <SuburbServices suburbName="Melville" />
      <BeforeAfterGallery />
      <SuburbWhyChoose suburbName="Melville" />

      <SuburbProcess suburbName="Melville" />

      <SuburbFAQ suburbName="Melville" />

      <GoogleReviews />

      <section id="quote" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-[#0a1628] mb-4">
                Get Your Free Quote - Melville
              </h2>
              <p className="text-lg text-gray-600">
                Expert pressure cleaning services in Melville
              </p>
            </div>
            <QuoteForm />
          </div>
        </div>
      </section>
    </>
  );
}