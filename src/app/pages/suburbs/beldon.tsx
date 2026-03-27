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

export default function Beldon() {
  const faqSchema = generateSuburbFAQSchema('Beldon');
  
  return (
    <>
      <Helmet>
        <title>Pressure Cleaning Beldon WA | House & Driveway Washing | Premier Pressure Solutions WA</title>
        <meta name="description" content="Professional pressure cleaning services in Beldon. Specialising in house washing, driveway cleaning, roof cleaning & more. Serving Beldon homes. Call 0452 579 657!" />
        <meta name="keywords" content="pressure cleaning Beldon, house washing Beldon, driveway cleaning Beldon, roof cleaning Beldon, Beldon pressure washing" />
        <link rel="canonical" href="https://premierpressuresolutionswa.com.au/suburbs/beldon" />
        
        {/* FAQ Schema */}
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
      </Helmet>
      <StickyCallButton />
      <SuburbHero suburbName="Beldon" tagline="Pressure Cleaning Beldon - Family Home Care" description="Professional pressure cleaning for Beldon's family homes. Expert services to keep your property looking pristine year-round." />
      <SuburbServices suburbName="Beldon" />
      
      <BeforeAfterGallery />

      <SuburbWhyChoose suburbName="Beldon" />

      <SuburbProcess suburbName="Beldon" />

      <SuburbFAQ suburbName="Beldon" />
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0a1628] mb-4">Our Work in Beldon</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">See the transformation we've delivered for Beldon homeowners</p>
          </div>
          <BeforeAfterCarousel category="driveway" limit={6} />
        </div>
      </section>
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0a1628] mb-8 text-center">About Pressure Cleaning in Beldon</h2>
            <div className="prose prose-lg max-w-none space-y-6 text-gray-700">
              <p>Beldon's well-established community deserves quality pressure cleaning services. We provide professional cleaning for homes, driveways, and outdoor entertainment areas.</p>
              <div className="bg-[#00d4ff]/10 border-l-4 border-[#00d4ff] p-6 mt-8">
                <h4 className="font-bold text-[#0a1628] mb-2">New Customer Offer - 10% Off!</h4>
                <p className="mb-0">First-time customers in Beldon receive 10% off their first pressure cleaning service. Call us today on <a href="tel:+61452579657" className="text-[#00d4ff] font-semibold hover:underline">0452 579 657</a> to book.</p>
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