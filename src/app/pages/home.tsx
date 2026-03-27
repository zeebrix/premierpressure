import { HeroSection } from '../components/hero-section';
import { TrustIndicators } from '../components/trust-indicators';
import { ServicesShowcase } from '../components/services-showcase';
import { HowItWorks } from '../components/how-it-works';
import { FinalCTA } from '../components/final-cta';
import { SEO } from '../components/seo';
import { BeforeAfterGallery } from '../components/before-after-gallery';
import { TestimonialsCarousel } from '../components/testimonials-carousel';
import { MapPin } from 'lucide-react';

export function HomePage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://premierpressuresolutionswa.com.au",
    "name": "Premier Pressure Solutions WA",
    "image": "https://premierpressuresolutionswa.com.au/og-image.png",
    "url": "https://premierpressuresolutionswa.com.au",
    "telephone": "+61452579657",
    "email": "info@premierpressuresolutionswa.com.au",
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Perth",
      "addressRegion": "WA",
      "addressCountry": "AU"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": -31.9505,
      "longitude": 115.8605
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        "opens": "07:00",
        "closes": "18:00"
      }
    ],
    "sameAs": [],
    "description": "Perth's trusted pressure cleaning specialists offering professional residential and commercial services. Driveways, house washing, roof cleaning, and more. Fully insured.",
    "areaServed": [
      {
        "@type": "City",
        "name": "Perth",
        "@id": "https://www.wikidata.org/wiki/Q3183"
      },
      {
        "@type": "State",
        "name": "Western Australia"
      }
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Pressure Cleaning Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Driveway Cleaning",
            "description": "Professional pressure cleaning for driveways and concrete surfaces"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "House Washing",
            "description": "Exterior house washing and cleaning services"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Roof Cleaning",
            "description": "Safe and effective roof cleaning and restoration"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Paver Cleaning & Sealing",
            "description": "Professional paver cleaning and sealing services"
          }
        }
      ]
    }
  };

  return (
    <>
      <SEO 
        title="Professional Pressure Cleaning Services in Perth"
        description="Premier Pressure Solutions WA offers expert pressure cleaning services across Perth. Driveways, house washing, roof cleaning, pavers & more. 10% off for new customers. Call 0452 579 657."
        keywords="pressure cleaning perth, pressure washing perth, driveway cleaning, house washing, roof cleaning, paver cleaning, limestone cleaning"
        canonical="/"
        preloadImages={[
          'https://iigpdyyiqskohqejmqob.supabase.co/storage/v1/object/public/make-bb20e683-images/general/1772546534545-3460df8e-5613-401a-be7d-a720ad396872.webp'
        ]}
        structuredData={structuredData}
      />
      <HeroSection />
      <TrustIndicators />
      <BeforeAfterGallery />
      <ServicesShowcase />
      <HowItWorks />

      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <div className="inline-flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 bg-[#00d4ff]/10 rounded-full mb-4 sm:mb-6">
              <MapPin className="w-7 h-7 sm:w-8 sm:h-8 text-[#00d4ff]" />
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0a1628] mb-3 sm:mb-4">
              Servicing Perth & Surrounds
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto mb-6 sm:mb-8">
              We proudly serve homes and businesses across the greater Perth metropolitan area.
            </p>
          </div>

          {/* Embedded Google Map */}
          <div className="mb-6 sm:mb-8">
            <div className="w-full max-w-4xl mx-auto rounded-lg overflow-hidden shadow-lg border border-gray-200">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d433082.15314154816!2d115.54954834531247!3d-32.002804927054164!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x630a0ba2d38509af%3A0x486bd1fdab99e5ba!2sPremier%20Pressure%20Solutions%20WA!5e0!3m2!1sen!2sau!4v1771988994275!5m2!1sen!2sau" 
                width="100%" 
                height="400" 
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Premier Pressure Solutions WA Service Area Map"
              />
            </div>
          </div>

          {/* Link to Areas Page */}
          <div className="text-center">
            <a
              href="/areas"
              className="inline-flex items-center justify-center gap-2 bg-[#00d4ff] text-[#0a1628] px-6 sm:px-8 py-3 sm:py-4 rounded-lg transition-all hover:bg-[#00c4ef] shadow-lg hover:shadow-xl font-semibold text-base sm:text-lg min-h-[56px] touch-manipulation"
            >
              <MapPin className="w-5 h-5" />
              <span>View All Service Areas</span>
            </a>
            <p className="mt-3 sm:mt-4 text-sm sm:text-base text-gray-600">
              Browse our complete list of suburbs and regions across Perth
            </p>
          </div>
        </div>
      </section>

      <TestimonialsCarousel />
      <FinalCTA />
    </>
  );
}