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

export default function Mindarie() {
  const faqSchema = generateSuburbFAQSchema('Mindarie');
  
  return (
    <>
      <StickyCallButton />
      <Helmet>
        <title>Pressure Cleaning Mindarie WA | House & Driveway Washing | Premier Pressure Solutions WA</title>
        <meta name="description" content="Professional pressure cleaning services in Mindarie. Coastal property specialists for house washing, driveway cleaning & more. Call 0452 579 657!" />
        <meta name="keywords" content="pressure cleaning Mindarie, house washing Mindarie, driveway cleaning Mindarie, coastal cleaning Mindarie, Mindarie pressure washing" />
        <link rel="canonical" href="https://premierpressuresolutionswa.com.au/suburbs/mindarie" />
        
        {/* FAQ Schema */}
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
      </Helmet>
      <SuburbHero suburbName="Mindarie" tagline="Pressure Cleaning Mindarie - Marina & Coastal Experts" description="Expert pressure cleaning for Mindarie's premium marina and coastal properties. Professional services for waterfront living." />
      <SuburbServices suburbName="Mindarie" />
      <BeforeAfterGallery />
      <SuburbWhyChoose suburbName="Mindarie" />

      <SuburbProcess suburbName="Mindarie" />

      <SuburbFAQ suburbName="Mindarie" />
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