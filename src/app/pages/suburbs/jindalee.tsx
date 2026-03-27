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

export default function Jindalee() {
  const faqSchema = generateSuburbFAQSchema('Jindalee');
  
  return (
    <>
      <StickyCallButton />
      <Helmet>
        <title>Pressure Cleaning Jindalee WA | House & Driveway Washing | Premier Pressure Solutions WA</title>
        <meta name="description" content="Professional pressure cleaning services in Jindalee. Coastal property specialists for house washing, driveway cleaning & more. Call 0452 579 657!" />
        <meta name="keywords" content="pressure cleaning Jindalee, house washing Jindalee, driveway cleaning Jindalee, coastal cleaning Jindalee, Jindalee pressure washing" />
        <link rel="canonical" href="https://premierpressuresolutionswa.com.au/suburbs/jindalee" />
        
        {/* FAQ Schema */}
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
      </Helmet>
      <SuburbHero suburbName="Jindalee" tagline="Pressure Cleaning Jindalee - Coastal Property Care" description="Expert pressure cleaning for Jindalee's beachside properties. Professional services designed for coastal living and salt spray protection." />
      <SuburbServices suburbName="Jindalee" />
      <BeforeAfterGallery />
      <SuburbWhyChoose suburbName="Jindalee" />

      <SuburbProcess suburbName="Jindalee" />

      <SuburbFAQ suburbName="Jindalee" />
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