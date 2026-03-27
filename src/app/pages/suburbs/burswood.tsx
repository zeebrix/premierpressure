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

export default function Burswood() {
  const faqSchema = generateSuburbFAQSchema('Burswood');
  
  return (
    <>
      <Helmet>
        <title>Pressure Cleaning Burswood WA | House & Driveway Washing | Premier Pressure Solutions WA</title>
        <meta name="description" content="Professional pressure cleaning services in Burswood. Specialising in house washing, driveway cleaning, roof cleaning & more. Serving Burswood properties. Call 0452 579 657!" />
        <meta name="keywords" content="pressure cleaning Burswood, house washing Burswood, driveway cleaning Burswood, roof cleaning Burswood, Burswood pressure washing" />
        <link rel="canonical" href="https://premierpressuresolutionswa.com.au/suburbs/burswood" />
        
        {/* FAQ Schema */}
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
      </Helmet>

      <SuburbHero
        suburbName="Burswood"
        tagline="Pressure Cleaning Burswood - Riverside Property Care"
        description="Professional pressure cleaning for Burswood homes and apartments. From riverside properties to modern developments, we deliver exceptional results across Burswood."
      />

      <SuburbServices suburbName="Burswood" />
      
      <BeforeAfterGallery />

      <SuburbWhyChoose suburbName="Burswood" />

      <SuburbProcess suburbName="Burswood" />

      <SuburbFAQ suburbName="Burswood" />

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0a1628] mb-8 text-center">
              Pressure Cleaning Services in Burswood
            </h2>
            
            <div className="prose prose-lg max-w-none space-y-6 text-gray-700">
              <p>
                Burswood is a dynamic riverside suburb featuring high-rise apartments, modern developments, and 
                proximity to Perth's premier entertainment venues. Our pressure cleaning services cater to all 
                property types across this vibrant area.
              </p>

              <h3 className="text-2xl font-bold text-[#0a1628] mt-8 mb-4">
                Residential & Commercial Excellence
              </h3>
              <p>
                Whether you own a riverside apartment, townhouse, or commercial property near Crown Perth, our team 
                delivers professional cleaning results. We're experienced with high-rise buildings, strata complexes, 
                and modern developments throughout Burswood.
              </p>

              <h3 className="text-2xl font-bold text-[#0a1628] mt-8 mb-4">
                All Burswood Areas Serviced
              </h3>
              <p>
                We service all areas including Great Eastern Highway, Bolton Avenue, Burswood Road, and the riverside 
                precinct. Our team understands the unique requirements of Burswood properties and delivers reliable 
                service throughout the suburb.
              </p>

              <h3 className="text-2xl font-bold text-[#0a1628] mt-8 mb-4">
                Our Burswood Services
              </h3>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>High-Rise Cleaning:</strong> Safe and professional cleaning for apartment buildings</li>
                <li><strong>Balcony & Terrace Cleaning:</strong> Restore outdoor living spaces with river views</li>
                <li><strong>Driveway & Pathway Cleaning:</strong> Deep clean concrete and paved surfaces</li>
                <li><strong>Strata Cleaning:</strong> Common areas and building exteriors</li>
                <li><strong>Commercial Cleaning:</strong> Business premises and hospitality venues</li>
                <li><strong>Window Cleaning:</strong> Crystal-clear windows for stunning views</li>
              </ul>

              <div className="bg-[#00d4ff]/10 border-l-4 border-[#00d4ff] p-6 mt-8">
                <h4 className="font-bold text-[#0a1628] mb-2">New Customer Offer - 10% Off!</h4>
                <p className="mb-0">
                  First-time customers in Burswood receive 10% off their first service. 
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
                Get Your Free Quote - Burswood
              </h2>
              <p className="text-lg text-gray-600">
                Professional pressure cleaning for Burswood
              </p>
            </div>
            <QuoteForm />
          </div>
        </div>
      </section>
    </>
  );
}