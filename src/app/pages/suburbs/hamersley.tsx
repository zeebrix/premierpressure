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

export default function Hamersley() {
  const faqSchema = generateSuburbFAQSchema('Hamersley');
  
  return (
    <>
      <StickyCallButton />
      <Helmet>
        <title>Pressure Cleaning Hamersley WA | House & Driveway Washing | Premier Pressure Solutions WA</title>
        <meta name="description" content="Professional pressure cleaning in Hamersley. House washing, driveway & roof cleaning specialists. Expert service for local homes. Call 0452 579 657!" />
        <meta name="keywords" content="pressure cleaning Hamersley, house washing Hamersley, driveway cleaning Hamersley, roof cleaning Hamersley, Hamersley pressure washing" />
        <link rel="canonical" href="https://premierpressuresolutionswa.com.au/suburbs/hamersley" />
        
        {/* FAQ Schema */}
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
      </Helmet>
      <SuburbHero suburbName="Hamersley" tagline="Pressure Cleaning Hamersley - Established Home Care" description="Expert pressure cleaning for Hamersley's established homes and properties. Professional services for Perth's mature residential suburb." />
      <SuburbServices suburbName="Hamersley" />
      <BeforeAfterGallery />
      <SuburbWhyChoose suburbName="Hamersley" />

      <SuburbProcess suburbName="Hamersley" />

      <SuburbFAQ suburbName="Hamersley" />
      <GoogleReviews />
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0a1628] mb-8 text-center">Get Your Free Quote Today</h2>
            <QuoteForm />
          </div>
        </div>
      </section>
    </>
  );
}