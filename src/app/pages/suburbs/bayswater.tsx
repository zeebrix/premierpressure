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

export default function Bayswater() {
  const faqSchema = generateSuburbFAQSchema('Bayswater');
  
  return (
    <>
      <Helmet>
        <title>Pressure Cleaning Bayswater WA | House & Driveway Washing | Premier Pressure Solutions WA</title>
        <meta name="description" content="Professional pressure cleaning in Bayswater. House washing, driveway & roof cleaning specialists. Expert service for local homes. Call 0452 579 657!" />
        <meta name="keywords" content="pressure cleaning Bayswater, house washing Bayswater, driveway cleaning Bayswater, roof cleaning Bayswater, Bayswater pressure washing" />
        <link rel="canonical" href="https://premierpressuresolutionswa.com.au/suburbs/bayswater" />
        
        {/* FAQ Schema */}
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
      </Helmet>

      <StickyCallButton />

      <SuburbHero
        suburbName="Bayswater"
        tagline="Pressure Cleaning Bayswater - Reliable Service"
        description="Quality pressure cleaning for Bayswater homes. Professional exterior cleaning services for Bayswater properties."
      />

      <SuburbServices suburbName="Bayswater" />
      <BeforeAfterGallery />
      <SuburbWhyChoose suburbName="Bayswater" />

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0a1628] mb-4">
              Our Work in Bayswater
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Quality results for Bayswater homeowners
            </p>
          </div>
          <BeforeAfterCarousel category="house" limit={6} />
        </div>
      </section>

      <SuburbProcess suburbName="Bayswater" />

      <SuburbFAQ suburbName="Bayswater" />

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0a1628] mb-8 text-center">
              Pressure Cleaning Services in Bayswater
            </h2>
            
            <div className="prose prose-lg max-w-none space-y-6 text-gray-700">
              <p>
                Bayswater is a well-established eastern suburbs location with diverse housing and excellent amenities. 
                Our pressure cleaning services help Bayswater homeowners maintain their properties year-round.
              </p>

              <h3 className="text-2xl font-bold text-[#0a1628] mt-8 mb-4">
                Complete Property Cleaning
              </h3>
              <p>
                We service all property types in Bayswater, delivering professional results with efficient service. 
                Our team is experienced and fully equipped for all your pressure cleaning needs.
              </p>

              <h3 className="text-2xl font-bold text-[#0a1628] mt-8 mb-4">
                All Bayswater Areas Covered
              </h3>
              <p>
                We service King William Street, Guildford Road, and all surrounding areas. Our reliable service makes 
                us the trusted choice for Bayswater property owners.
              </p>

              <h3 className="text-2xl font-bold text-[#0a1628] mt-8 mb-4">
                Our Bayswater Services
              </h3>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>House Washing:</strong> Complete exterior cleaning</li>
                <li><strong>Driveway Cleaning:</strong> Restore driveways and paths</li>
                <li><strong>Roof Cleaning:</strong> Safe roof cleaning services</li>
                <li><strong>Window Cleaning:</strong> Professional window services</li>
                <li><strong>Patio Cleaning:</strong> Refresh outdoor areas</li>
                <li><strong>Fence Cleaning:</strong> Restore fences to like-new</li>
              </ul>

              <div className="bg-[#00d4ff]/10 border-l-4 border-[#00d4ff] p-6 mt-8">
                <h4 className="font-bold text-[#0a1628] mb-2">New Customer Offer - 10% Off!</h4>
                <p className="mb-0">
                  First-time customers in Bayswater receive 10% off. 
                  Call <a href="tel:+61452579657" className="text-[#00d4ff] font-semibold hover:underline">0452 579 657</a> to book.
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
                Get Your Free Quote - Bayswater
              </h2>
              <p className="text-lg text-gray-600">
                Professional pressure cleaning for Bayswater
              </p>
            </div>
            <QuoteForm />
          </div>
        </div>
      </section>
    </>
  );
}