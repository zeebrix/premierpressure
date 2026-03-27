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

export default function Hocking() {
  const faqSchema = generateSuburbFAQSchema('Hocking');
  
  return (
    <>
      <StickyCallButton />
      <Helmet>
        <title>Pressure Cleaning Hocking WA | House & Driveway Washing | Premier Pressure Solutions WA</title>
        <meta name="description" content="Professional pressure cleaning in Hocking. House washing, driveway & roof cleaning specialists. Expert service for local properties. Call 0452 579 657!" />
        <meta name="keywords" content="pressure cleaning Hocking, house washing Hocking, driveway cleaning Hocking, roof cleaning Hocking, Hocking pressure washing" />
        <link rel="canonical" href="https://premierpressuresolutionswa.com.au/suburbs/hocking" />
        
        {/* FAQ Schema */}
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
      </Helmet>
      <SuburbHero suburbName="Hocking" tagline="Pressure Cleaning Hocking - Residential Excellence" description="Expert pressure cleaning for Hocking's family homes and properties. Professional services for this northern suburbs community." />
      <SuburbServices suburbName="Hocking" />
      <BeforeAfterGallery />
      <SuburbWhyChoose suburbName="Hocking" />

      <SuburbProcess suburbName="Hocking" />

      <SuburbFAQ suburbName="Hocking" />
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