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

export default function Warwick() {
  const faqSchema = generateSuburbFAQSchema('Warwick');
  
  return (
    <>
      <StickyCallButton />
      <Helmet>
        <title>Pressure Cleaning Warwick WA | House & Driveway Washing | Premier Pressure Solutions WA</title>
        <meta name="description" content="Professional pressure cleaning in Warwick. House washing, driveway & roof cleaning specialists. Expert service for local homes. Call 0452 579 657!" />
        <meta name="keywords" content="pressure cleaning Warwick, house washing Warwick, driveway cleaning Warwick, roof cleaning Warwick, Warwick pressure washing" />
        <link rel="canonical" href="https://premierpressuresolutionswa.com.au/suburbs/warwick" />
        
        {/* FAQ Schema */}
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
      </Helmet>
      <SuburbHero suburbName="Warwick" tagline="Pressure Cleaning Warwick - Local Property Care" description="Expert pressure cleaning for Warwick's residential properties. Professional services for this vibrant northern suburbs community." />
      <SuburbServices suburbName="Warwick" />
      <BeforeAfterGallery />
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0a1628] mb-4">Our Work in Warwick</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">See the transformation we've delivered for Warwick homeowners</p>
          </div>
          <BeforeAfterGallery category="driveway" limit={6} />
        </div>
      </section>
      <SuburbWhyChoose suburbName="Warwick" />
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0a1628] mb-8 text-center">About Pressure Cleaning in Warwick</h2>
            <div className="prose prose-lg max-w-none space-y-6 text-gray-700">
              <p>Warwick's convenient location and family-friendly atmosphere make it a popular northern suburb. Our professional pressure cleaning services keep homes and driveways looking their best year-round.</p>
              <div className="bg-[#00d4ff]/10 border-l-4 border-[#00d4ff] p-6 mt-8">
                <h4 className="font-bold text-[#0a1628] mb-2">New Customer Offer - 10% Off!</h4>
                <p className="mb-0">First-time customers in Warwick receive 10% off their first pressure cleaning service. Call us today on <a href="tel:+61452579657" className="text-[#00d4ff] font-semibold hover:underline">0452 579 657</a> to book.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <SuburbProcess suburbName="Warwick" />

      <SuburbFAQ suburbName="Warwick" />
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