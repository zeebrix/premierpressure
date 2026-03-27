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

export default function Booragoon() {
  const faqSchema = generateSuburbFAQSchema('Booragoon');
  
  return (
    <>
      <Helmet>
        <title>Pressure Cleaning Booragoon WA | House & Driveway Washing | Premier Pressure Solutions WA</title>
        <meta name="description" content="Professional pressure cleaning in Booragoon. House washing, driveway & roof cleaning specialists. Expert service for local homes. Call 0452 579 657!" />
        <meta name="keywords" content="pressure cleaning Booragoon, house washing Booragoon, driveway cleaning Booragoon, roof cleaning Booragoon, Booragoon pressure washing" />
        <link rel="canonical" href="https://premierpressuresolutionswa.com.au/suburbs/booragoon" />
        
        {/* FAQ Schema */}
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
      </Helmet>

      <StickyCallButton />

      <SuburbHero
        suburbName="Booragoon"
        tagline="Pressure Cleaning Booragoon - Reliable Property Care"
        description="Professional pressure cleaning for Booragoon homes and properties. From family homes to townhouses, we deliver quality results across Booragoon."
      />

      <SuburbServices suburbName="Booragoon" />
      <BeforeAfterGallery />
      <SuburbWhyChoose suburbName="Booragoon" />

      <SuburbProcess suburbName="Booragoon" />

      <SuburbFAQ suburbName="Booragoon" />

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0a1628] mb-8 text-center">
              Pressure Cleaning Services in Booragoon
            </h2>
            
            <div className="prose prose-lg max-w-none space-y-6 text-gray-700">
              <p>
                Booragoon is a well-established family suburb offering excellent amenities and quality housing. Our 
                pressure cleaning services help Booragoon homeowners keep their properties looking their best year-round.
              </p>

              <h3 className="text-2xl font-bold text-[#0a1628] mt-8 mb-4">
                Family Home Specialists
              </h3>
              <p>
                We understand the needs of Booragoon families. Our efficient service minimizes disruption while 
                delivering thorough cleaning results. We're experienced with all property types common to the area, 
                from brick homes to rendered exteriors.
              </p>

              <h3 className="text-2xl font-bold text-[#0a1628] mt-8 mb-4">
                Complete Booragoon Coverage
              </h3>
              <p>
                We service all areas including Marmion Street, Riseley Street, Winterfold Road, and surrounds. Whether 
                you're near Garden City or in a quieter residential pocket, we provide reliable pressure cleaning services.
              </p>

              <h3 className="text-2xl font-bold text-[#0a1628] mt-8 mb-4">
                Our Booragoon Services
              </h3>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>House Washing:</strong> Complete exterior cleaning for family homes</li>
                <li><strong>Driveway Cleaning:</strong> Restore concrete and paver driveways</li>
                <li><strong>Roof Cleaning:</strong> Safe cleaning for all roof types</li>
                <li><strong>Patio & Alfresco Cleaning:</strong> Clean outdoor entertaining areas</li>
                <li><strong>Window Cleaning:</strong> Streak-free window cleaning</li>
                <li><strong>Fence Cleaning:</strong> Restore Colorbond and timber fences</li>
              </ul>

              <div className="bg-[#00d4ff]/10 border-l-4 border-[#00d4ff] p-6 mt-8">
                <h4 className="font-bold text-[#0a1628] mb-2">New Customer Offer - 10% Off!</h4>
                <p className="mb-0">
                  First-time customers in Booragoon receive 10% off their first service. 
                  Call <a href="tel:+61452579657" className="text-[#00d4ff] font-semibold hover:underline">0452 579 657</a> today.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <GoogleReviews />

      <section id="quote" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-[#0a1628] mb-4">
                Get Your Free Quote - Booragoon
              </h2>
              <p className="text-lg text-gray-600">
                Professional pressure cleaning for Booragoon
              </p>
            </div>
            <QuoteForm />
          </div>
        </div>
      </section>
    </>
  );
}