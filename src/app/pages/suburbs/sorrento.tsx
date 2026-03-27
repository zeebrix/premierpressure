import { Helmet } from 'react-helmet-async';
import { SuburbHero } from '../../components/suburb/suburb-hero';
import { SuburbServices } from '../../components/suburb/suburb-services';
import { SuburbWhyChoose } from '../../components/suburb/suburb-why-choose';
import { SuburbProcess } from '../../components/suburb/suburb-process';
import { SuburbFAQ } from '../../components/suburb/suburb-faq';
import { BeforeAfterCarousel } from '../../components/before-after-carousel';
import { BeforeAfterGallery } from '../../components/before-after-gallery';
import { GoogleReviews } from '../../components/google-reviews';
import { QuoteForm } from '../../components/quote-form';
import { StickyCallButton } from '../../components/sticky-call-button';
import { generateSuburbFAQSchema } from '../../utils/suburb-faq-schema';

export default function Sorrento() {
  const faqSchema = generateSuburbFAQSchema('Sorrento');
  
  return (
    <>
      <StickyCallButton />
      <Helmet>
        <title>Pressure Cleaning Sorrento WA | House & Driveway Washing | Premier Pressure Solutions WA</title>
        <meta name="description" content="Professional pressure cleaning services in Sorrento. Specialising in house washing, driveway cleaning, roof cleaning & more. Serving Sorrento coastal homes. Call 0452 579 657!" />
        <meta name="keywords" content="pressure cleaning Sorrento, house washing Sorrento, driveway cleaning Sorrento, roof cleaning Sorrento, Sorrento pressure washing" />
        <link rel="canonical" href="https://premierpressuresolutionswa.com.au/suburbs/sorrento" />
        
        {/* FAQ Schema */}
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
      </Helmet>
      <SuburbHero suburbName="Sorrento" tagline="Pressure Cleaning Sorrento - Premium Coastal Care" description="Expert pressure cleaning for Sorrento's prestigious beachside properties. Professional services for this exclusive coastal suburb." />
      <SuburbServices suburbName="Sorrento" />
      <BeforeAfterGallery />
      <SuburbWhyChoose suburbName="Sorrento" />

      <SuburbProcess suburbName="Sorrento" />

      <SuburbFAQ suburbName="Sorrento" />
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0a1628] mb-8 text-center">About Pressure Cleaning in Sorrento</h2>
            <div className="prose prose-lg max-w-none space-y-6 text-gray-700">
              <p>Sorrento's premium beachside location and quality homes require specialized pressure cleaning expertise. We provide professional services that combat salt spray and protect your coastal property investment.</p>
              <div className="bg-[#00d4ff]/10 border-l-4 border-[#00d4ff] p-6 mt-8">
                <h4 className="font-bold text-[#0a1628] mb-2">New Customer Offer - 10% Off!</h4>
                <p className="mb-0">First-time customers in Sorrento receive 10% off their first pressure cleaning service. Call us today on <a href="tel:+61452579657" className="text-[#00d4ff] font-semibold hover:underline">0452 579 657</a> to book.</p>
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