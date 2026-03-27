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

export default function Clarkson() {
  const faqSchema = generateSuburbFAQSchema('Clarkson');
  
  return (
    <>
      <Helmet>
        <title>Pressure Cleaning Clarkson WA | House & Driveway Washing | Premier Pressure Solutions WA</title>
        <meta name="description" content="Professional pressure cleaning services in Clarkson. Specialising in house washing, driveway cleaning, roof cleaning & more. Serving Clarkson homes. Call 0452 579 657!" />
        <meta name="keywords" content="pressure cleaning Clarkson, house washing Clarkson, driveway cleaning Clarkson, roof cleaning Clarkson, Clarkson pressure washing" />
        <link rel="canonical" href="https://premierpressuresolutionswa.com.au/suburbs/clarkson" />
        
        {/* FAQ Schema */}
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
      </Helmet>
      <StickyCallButton />
      <SuburbHero suburbName="Clarkson" tagline="Pressure Cleaning Clarkson - Coastal Community Care" description="Expert pressure cleaning for Clarkson's coastal properties and family homes. Professional services for this thriving northern beachside suburb." />
      <SuburbServices suburbName="Clarkson" />
      
      <BeforeAfterGallery />

      <SuburbWhyChoose suburbName="Clarkson" />

      <SuburbProcess suburbName="Clarkson" />

      <SuburbFAQ suburbName="Clarkson" />
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0a1628] mb-8 text-center">About Pressure Cleaning in Clarkson</h2>
            <div className="prose prose-lg max-w-none space-y-6 text-gray-700">
              <p>Clarkson's beachside location and modern family homes require professional pressure cleaning services. We combat salt spray and coastal conditions to protect your property investment.</p>
              <div className="bg-[#00d4ff]/10 border-l-4 border-[#00d4ff] p-6 mt-8">
                <h4 className="font-bold text-[#0a1628] mb-2">New Customer Offer - 10% Off!</h4>
                <p className="mb-0">First-time customers in Clarkson receive 10% off their first pressure cleaning service. Call us today on <a href="tel:+61452579657" className="text-[#00d4ff] font-semibold hover:underline">0452 579 657</a> to book.</p>
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