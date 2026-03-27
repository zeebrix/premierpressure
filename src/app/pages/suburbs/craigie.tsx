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

export default function Craigie() {
  const faqSchema = generateSuburbFAQSchema('Craigie');
  
  return (
    <>
      <Helmet>
        <title>Pressure Cleaning Craigie WA | House & Driveway Washing | Premier Pressure Solutions WA</title>
        <meta name="description" content="Professional pressure cleaning services in Craigie. Specialising in house washing, driveway cleaning, roof cleaning & more. Serving Craigie homes. Call 0452 579 657!" />
        <meta name="keywords" content="pressure cleaning Craigie, house washing Craigie, driveway cleaning Craigie, roof cleaning Craigie, Craigie pressure washing" />
        <link rel="canonical" href="https://premierpressuresolutionswa.com.au/suburbs/craigie" />
        
        {/* FAQ Schema */}
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
      </Helmet>
      <StickyCallButton />
      <SuburbHero suburbName="Craigie" tagline="Pressure Cleaning Craigie - Local Property Care" description="Expert pressure cleaning for Craigie's residential properties. Professional services for driveways, house washing, and outdoor areas." />
      <SuburbServices suburbName="Craigie" />
      
      <BeforeAfterGallery />

      <SuburbWhyChoose suburbName="Craigie" />

      <SuburbProcess suburbName="Craigie" />

      <SuburbFAQ suburbName="Craigie" />
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0a1628] mb-4">Our Work in Craigie</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">See the transformation we've delivered for Craigie homeowners</p>
          </div>
          <BeforeAfterGallery category="house" limit={6} />
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