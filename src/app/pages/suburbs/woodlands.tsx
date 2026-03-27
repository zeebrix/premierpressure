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

export default function Woodlands() {
  const faqSchema = generateSuburbFAQSchema('Woodlands');
  
  return (
    <>
      <StickyCallButton />
      <Helmet>
        <title>Pressure Cleaning Woodlands WA | House & Driveway Washing | Premier Pressure Solutions WA</title>
        <meta name="description" content="Professional pressure cleaning services in Woodlands. Specialising in house washing, driveway cleaning, roof cleaning & more. Serving Woodlands homes. Call 0452 579 657!" />
        <meta name="keywords" content="pressure cleaning Woodlands, house washing Woodlands, driveway cleaning Woodlands, roof cleaning Woodlands, Woodlands pressure washing" />
        <link rel="canonical" href="https://premierpressuresolutionswa.com.au/suburbs/woodlands" />
        
        {/* FAQ Schema */}
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
      </Helmet>
      <SuburbHero suburbName="Woodlands" tagline="Pressure Cleaning Woodlands - Quality Residential Care" description="Expert pressure cleaning for Woodlands' family homes and established properties. Professional services for Perth's leafy residential suburb." />
      <SuburbServices suburbName="Woodlands" />
      <BeforeAfterGallery />
      <SuburbWhyChoose suburbName="Woodlands" />

      <SuburbProcess suburbName="Woodlands" />

      <SuburbFAQ suburbName="Woodlands" />
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