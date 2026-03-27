import { SuburbHero } from '../../components/suburb/suburb-hero';
import { SuburbServices } from '../../components/suburb/suburb-services';
import { SuburbWhyChoose } from '../../components/suburb/suburb-why-choose';
import { SuburbProcess } from '../../components/suburb/suburb-process';
import { SuburbFAQ } from '../../components/suburb/suburb-faq';
import { Helmet } from 'react-helmet-async';
import { BeforeAfterCarousel } from '../../components/before-after-carousel';
import { BeforeAfterGallery } from '../../components/before-after-gallery';
import { GoogleReviews } from '../../components/google-reviews';
import { QuoteForm } from '../../components/quote-form';
import { StickyCallButton } from '../../components/sticky-call-button';
import { generateSuburbFAQSchema } from '../../utils/suburb-faq-schema';
import { generateSuburbSchema } from '../../utils/suburb-schema';

export default function Joondalup() {
  const faqSchema = generateSuburbFAQSchema('Joondalup');
  const combinedSchema = generateSuburbSchema('Joondalup', faqSchema);
  
  return (
    <>
      <StickyCallButton />
      <Helmet>
        <title>Pressure Cleaning Joondalup WA | House & Driveway Washing | Premier Pressure Solutions WA</title>
        <meta name="description" content="Professional pressure cleaning in Joondalup. House washing, driveway & roof cleaning specialists serving Joondalup CBD. Call 0452 579 657!" />
        <meta name="keywords" content="pressure cleaning Joondalup, house washing Joondalup, driveway cleaning Joondalup, roof cleaning Joondalup, Joondalup pressure washing" />
        <link rel="canonical" href="https://premierpressuresolutionswa.com.au/suburbs/joondalup" />
        
        {/* FAQ Schema */}
        <script type="application/ld+json">
          {JSON.stringify(combinedSchema)}
        </script>
      </Helmet>
      <SuburbHero suburbName="Joondalup" tagline="Pressure Cleaning Joondalup - Northern Suburbs Hub" description="Expert pressure cleaning for Joondalup's residential and commercial properties. Professional services for Perth's thriving northern suburbs center." />
      <SuburbServices suburbName="Joondalup" />
      <BeforeAfterGallery />
      <SuburbWhyChoose suburbName="Joondalup" />
      <SuburbProcess suburbName="Joondalup" />

      <SuburbFAQ suburbName="Joondalup" />
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