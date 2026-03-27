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

export default function NorthBeach() {
  const faqSchema = generateSuburbFAQSchema('North Beach');
  
  return (
    <>
      <StickyCallButton />
      <Helmet>
        <title>Pressure Cleaning North Beach WA | House & Driveway Washing | Premier Pressure Solutions WA</title>
        <meta name="description" content="Professional pressure cleaning services in North Beach. Coastal property specialists for house washing, driveway cleaning & more. Call 0452 579 657!" />
        <meta name="keywords" content="pressure cleaning North Beach, house washing North Beach, driveway cleaning North Beach, coastal cleaning, North Beach pressure washing" />
        <link rel="canonical" href="https://premierpressuresolutionswa.com.au/suburbs/north-beach" />
        
        {/* FAQ Schema */}
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
      </Helmet>
      <SuburbHero suburbName="North Beach" tagline="Pressure Cleaning North Beach - Coastal Specialists" description="Expert pressure cleaning for North Beach's seaside homes and properties. Professional services for Perth's vibrant coastal community." />
      <SuburbServices suburbName="North Beach" />
      <BeforeAfterGallery />
      <SuburbWhyChoose suburbName="North Beach" />

      <SuburbProcess suburbName="North Beach" />

      <SuburbFAQ suburbName="North Beach" />
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