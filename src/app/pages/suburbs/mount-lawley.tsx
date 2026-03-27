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

export default function MountLawley() {
  const faqSchema = generateSuburbFAQSchema('Mount Lawley');
  
  return (
    <>
      <StickyCallButton />
      <Helmet>
        <title>Pressure Cleaning Mount Lawley WA | House & Driveway Washing | Premier Pressure Solutions WA</title>
        <meta name="description" content="Professional pressure cleaning services in Mount Lawley. Heritage home specialists for house washing, driveway cleaning & more. Call 0452 579 657!" />
        <meta name="keywords" content="pressure cleaning Mount Lawley, house washing Mount Lawley, driveway cleaning Mount Lawley, heritage home cleaning, Mount Lawley pressure washing" />
        <link rel="canonical" href="https://premierpressuresolutionswa.com.au/suburbs/mount-lawley" />
        
        {/* FAQ Schema */}
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
      </Helmet>

      <SuburbHero
        suburbName="Mount Lawley"
        tagline="Pressure Cleaning Mount Lawley - Character Home Experts"
        description="Specialist pressure cleaning for Mount Lawley's beautiful heritage homes and modern properties. Gentle care for period features, powerful results for driveways and exteriors. Servicing Mt Lawley, Inglewood, and Menora."
      />

      <SuburbServices suburbName="Mount Lawley" />
      <BeforeAfterGallery />
      <SuburbWhyChoose suburbName="Mount Lawley" />

      <SuburbProcess suburbName="Mount Lawley" />

      <SuburbFAQ suburbName="Mount Lawley" />

      <GoogleReviews />

      <section id="quote" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-[#0a1628] mb-4">
                Request Your Free Quote - Mount Lawley
              </h2>
              <p className="text-lg text-gray-600">
                Heritage-sensitive pressure cleaning in Mount Lawley
              </p>
            </div>
            <QuoteForm />
          </div>
        </div>
      </section>
    </>
  );
}