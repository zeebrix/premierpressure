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

export default function Iluka() {
  const faqSchema = generateSuburbFAQSchema('Iluka');
  
  return (
    <>
      <StickyCallButton />
      <Helmet>
        <title>Pressure Cleaning Iluka WA | House & Driveway Washing | Premier Pressure Solutions WA</title>
        <meta name="description" content="Professional pressure cleaning services in Iluka. Coastal property specialists for house washing, driveway cleaning & more. Call 0452 579 657!" />
        <meta name="keywords" content="pressure cleaning Iluka, house washing Iluka, driveway cleaning Iluka, coastal cleaning Iluka, Iluka pressure washing" />
        <link rel="canonical" href="https://premierpressuresolutionswa.com.au/suburbs/iluka" />
        
        {/* FAQ Schema */}
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
      </Helmet>
      <SuburbHero suburbName="Iluka" tagline="Pressure Cleaning Iluka - Coastal Living Excellence" description="Expert pressure cleaning for Iluka's waterfront properties. Protect your coastal investment with professional services designed for Perth's northern beaches." />
      <SuburbServices suburbName="Iluka" />
      <BeforeAfterGallery />
      <SuburbWhyChoose suburbName="Iluka" />
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0a1628] mb-4">Our Work in Iluka</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">See the transformation we've delivered for Iluka homeowners</p>
          </div>
          <BeforeAfterGallery category="house" limit={6} />
        </div>
      </section>
      <SuburbProcess suburbName="Iluka" />

      <SuburbFAQ suburbName="Iluka" />
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