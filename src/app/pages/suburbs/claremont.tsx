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

export default function Claremont() {
  const faqSchema = generateSuburbFAQSchema('Claremont');
  
  return (
    <>
      <StickyCallButton />
      <Helmet>
        <title>Pressure Cleaning Claremont WA | House & Driveway Washing | Premier Pressure Solutions WA</title>
        <meta name="description" content="Professional pressure cleaning services in Claremont. Premium property care for house washing, driveway cleaning & more. Serving Claremont. Call 0452 579 657!" />
        <meta name="keywords" content="pressure cleaning Claremont, house washing Claremont, driveway cleaning Claremont, roof cleaning Claremont, Claremont pressure washing" />
        <link rel="canonical" href="https://premierpressuresolutionswa.com.au/suburbs/claremont" />
        
        {/* FAQ Schema */}
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
      </Helmet>

      <SuburbHero
        suburbName="Claremont"
        tagline="Pressure Cleaning Claremont - Trusted Local Experts"
        description="Professional pressure cleaning for Claremont's established homes and modern properties. From heritage facades to contemporary driveways, we deliver exceptional results. Servicing Claremont and Swanbourne."
      />

      <SuburbServices suburbName="Claremont" />
      <BeforeAfterGallery />
      <SuburbWhyChoose suburbName="Claremont" />

      <SuburbProcess suburbName="Claremont" />

      <SuburbFAQ suburbName="Claremont" />

      <GoogleReviews />
    </>
  );
}