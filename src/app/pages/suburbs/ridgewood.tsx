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

export default function Ridgewood() {
  const faqSchema = generateSuburbFAQSchema('Ridgewood');
  
  return (
    <>
      <StickyCallButton />
      <Helmet>
        <title>Pressure Cleaning Ridgewood WA | House & Driveway Washing | Premier Pressure Solutions WA</title>
        <meta name="description" content="Professional pressure cleaning in Ridgewood. House washing, driveway & roof cleaning specialists. Expert service for local homes. Call 0452 579 657!" />
        <meta name="keywords" content="pressure cleaning Ridgewood, house washing Ridgewood, driveway cleaning Ridgewood, roof cleaning Ridgewood, Ridgewood pressure washing" />
        <link rel="canonical" href="https://premierpressuresolutionswa.com.au/suburbs/ridgewood" />
        
        {/* FAQ Schema */}
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
      </Helmet>
      <SuburbHero suburbName="Ridgewood" tagline="Pressure Cleaning Ridgewood - Quality Home Care" description="Expert pressure cleaning for Ridgewood's established homes and properties. Professional services for Perth's northern suburbs community." />
      <SuburbServices suburbName="Ridgewood" />
      <BeforeAfterGallery />
      <SuburbWhyChoose suburbName="Ridgewood" />

      <SuburbProcess suburbName="Ridgewood" />

      <SuburbFAQ suburbName="Ridgewood" />
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0a1628] mb-8 text-center">About Pressure Cleaning in Ridgewood</h2>
            <div className="prose prose-lg max-w-none space-y-6 text-gray-700">
              <p>Ridgewood's residential properties require professional pressure cleaning to maintain their value and appearance. We provide expert services for established homes and diverse property types.</p>
              <div className="bg-[#00d4ff]/10 border-l-4 border-[#00d4ff] p-6 mt-8">
                <h4 className="font-bold text-[#0a1628] mb-2">New Customer Offer - 10% Off!</h4>
                <p className="mb-0">First-time customers in Ridgewood receive 10% off their first pressure cleaning service. Call us today on <a href="tel:+61452579657" className="text-[#00d4ff] font-semibold hover:underline">0452 579 657</a> to book.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
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