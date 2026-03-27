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

export default function Merriwa() {
  const faqSchema = generateSuburbFAQSchema('Merriwa');
  
  return (
    <>
      <StickyCallButton />
      <Helmet>
        <title>Pressure Cleaning Merriwa WA | House & Driveway Washing | Premier Pressure Solutions WA</title>
        <meta name="description" content="Professional pressure cleaning in Merriwa. House washing, driveway & roof cleaning specialists. Expert service for local homes. Call 0452 579 657!" />
        <meta name="keywords" content="pressure cleaning Merriwa, house washing Merriwa, driveway cleaning Merriwa, roof cleaning Merriwa, Merriwa pressure washing" />
        <link rel="canonical" href="https://premierpressuresolutionswa.com.au/suburbs/merriwa" />
        
        {/* FAQ Schema */}
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
      </Helmet>
      <SuburbHero suburbName="Merriwa" tagline="Pressure Cleaning Merriwa - Family Home Specialists" description="Expert pressure cleaning for Merriwa's family homes and growing community. Professional services for Perth's northern coastal suburb." />
      <SuburbServices suburbName="Merriwa" />
      <BeforeAfterGallery />
      <SuburbWhyChoose suburbName="Merriwa" />

      <SuburbProcess suburbName="Merriwa" />

      <SuburbFAQ suburbName="Merriwa" />
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0a1628] mb-8 text-center">About Pressure Cleaning in Merriwa</h2>
            <div className="prose prose-lg max-w-none space-y-6 text-gray-700">
              <p>Merriwa's family homes and coastal environment require professional pressure cleaning to maintain their appearance. We provide expert services for residential properties and coastal conditions.</p>
              <div className="bg-[#00d4ff]/10 border-l-4 border-[#00d4ff] p-6 mt-8">
                <h4 className="font-bold text-[#0a1628] mb-2">New Customer Offer - 10% Off!</h4>
                <p className="mb-0">First-time customers in Merriwa receive 10% off their first pressure cleaning service. Call us today on <a href="tel:+61452579657" className="text-[#00d4ff] font-semibold hover:underline">0452 579 657</a> to book.</p>
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