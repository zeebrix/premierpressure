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

export default function Duncraig() {
  const faqSchema = generateSuburbFAQSchema('Duncraig');
  
  return (
    <>
      <Helmet>
        <title>Pressure Cleaning Duncraig WA | House & Driveway Washing | Premier Pressure Solutions WA</title>
        <meta name="description" content="Professional pressure cleaning in Duncraig. House washing, driveway & roof cleaning specialists. Expert service for local homes. Call 0452 579 657!" />
        <meta name="keywords" content="pressure cleaning Duncraig, house washing Duncraig, driveway cleaning Duncraig, roof cleaning Duncraig, Duncraig pressure washing" />
        <link rel="canonical" href="https://premierpressuresolutionswa.com.au/suburbs/duncraig" />
        
        {/* FAQ Schema */}
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
      </Helmet>
      <StickyCallButton />
      <SuburbHero suburbName="Duncraig" tagline="Pressure Cleaning Duncraig - Local Experts" description="Expert pressure cleaning for Duncraig's residential properties. Professional services for established homes in this popular northern suburb." />
      <SuburbServices suburbName="Duncraig" />
      
      <BeforeAfterGallery />

      <SuburbWhyChoose suburbName="Duncraig" />

      <SuburbProcess suburbName="Duncraig" />

      <SuburbFAQ suburbName="Duncraig" />

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0a1628] mb-4">Our Work in Duncraig</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">See the transformation we've delivered for Duncraig homeowners</p>
          </div>
          <BeforeAfterCarousel category="driveway" limit={6} />
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