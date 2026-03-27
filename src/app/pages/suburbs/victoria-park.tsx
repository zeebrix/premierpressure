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

export default function VictoriaPark() {
  const faqSchema = generateSuburbFAQSchema('Victoria Park');
  
  return (
    <>
      <StickyCallButton />
      <Helmet>
        <title>Pressure Cleaning Victoria Park WA | House & Driveway Washing | Premier Pressure Solutions WA</title>
        <meta name="description" content="Professional pressure cleaning services in Victoria Park. Inner-city property care for house washing, driveway cleaning & more. Call 0452 579 657!" />
        <meta name="keywords" content="pressure cleaning Victoria Park, house washing Victoria Park, driveway cleaning Victoria Park, inner city cleaning, Victoria Park pressure washing" />
        <link rel="canonical" href="https://premierpressuresolutionswa.com.au/suburbs/victoria-park" />
        
        {/* FAQ Schema */}
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
      </Helmet>

      <SuburbHero
        suburbName="Victoria Park"
        tagline="Pressure Cleaning Victoria Park - Local Experts"
        description="Professional pressure cleaning for Victoria Park homes and businesses. From heritage cottages to modern townhouses, we deliver quality results across Victoria Park."
      />

      <SuburbServices suburbName="Victoria Park" />
      <BeforeAfterGallery />
      <SuburbWhyChoose suburbName="Victoria Park" />

      <SuburbProcess suburbName="Victoria Park" />

      <SuburbFAQ suburbName="Victoria Park" />
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0a1628] mb-8 text-center">
              Pressure Cleaning Services in Victoria Park
            </h2>
            
            <div className="prose prose-lg max-w-none space-y-6 text-gray-700">
              <p>
                Victoria Park is a vibrant inner-city suburb with a diverse mix of residential and commercial properties. 
                Our pressure cleaning services cater to all property types, from character homes to modern developments 
                and busy cafes.
              </p>

              <h3 className="text-2xl font-bold text-[#0a1628] mt-8 mb-4">
                Residential & Commercial Specialists
              </h3>
              <p>
                We service both homes and businesses throughout Victoria Park. Whether you need your house exterior 
                cleaned, cafe frontage refreshed, or commercial property maintained, our team delivers professional 
                results every time.
              </p>

              <h3 className="text-2xl font-bold text-[#0a1628] mt-8 mb-4">
                All Victoria Park Areas
              </h3>
              <p>
                We cover Albany Highway, Gloucester Street, Shepparton Road, and all surrounding areas. Our local 
                knowledge and experience mean we understand Victoria Park properties inside and out.
              </p>

              <h3 className="text-2xl font-bold text-[#0a1628] mt-8 mb-4">
                Our Victoria Park Services
              </h3>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>House Washing:</strong> Complete exterior cleaning for all home types</li>
                <li><strong>Driveway & Path Cleaning:</strong> Restore concrete and paver surfaces</li>
                <li><strong>Commercial Pressure Cleaning:</strong> Shopfronts, cafes, and business premises</li>
                <li><strong>Roof Cleaning:</strong> Safe cleaning for all roof types</li>
                <li><strong>Window Cleaning:</strong> Professional window cleaning services</li>
                <li><strong>Graffiti Removal:</strong> Quick removal of unwanted graffiti</li>
              </ul>

              <div className="bg-[#00d4ff]/10 border-l-4 border-[#00d4ff] p-6 mt-8">
                <h4 className="font-bold text-[#0a1628] mb-2">New Customer Offer - 10% Off!</h4>
                <p className="mb-0">
                  First-time customers in Victoria Park receive 10% off their first service. 
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
                Get Your Free Quote - Victoria Park
              </h2>
              <p className="text-lg text-gray-600">
                Professional pressure cleaning for Victoria Park
              </p>
            </div>
            <QuoteForm />
          </div>
        </div>
      </section>
    </>
  );
}