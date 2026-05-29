import type { Metadata } from 'next';
import { MapPin } from 'lucide-react';
import { HeroSection } from '@/app/components/hero-section';
import { TrustIndicators } from '@/app/components/trust-indicators';
import { ServicesShowcase } from '@/app/components/services-showcase';
import { HowItWorks } from '@/app/components/how-it-works';
import { FinalCTA } from '@/app/components/final-cta';
import { BeforeAfterGallery } from '@/app/components/before-after-gallery';
import { TestimonialsCarousel } from '@/app/components/testimonials-carousel';

const SITE_URL = 'https://www.premierpressuresolutions.com.au';

export const metadata: Metadata = {
  title: { absolute: 'Pressure Cleaning Perth | Driveway, House & Roof Washing | Premier Pressure Solutions' },
  description:
    'Premier Pressure Solutions WA offers expert pressure cleaning services across Perth. Driveways, house washing, roof cleaning, pavers & more. 10% off for new customers. Call 0452 579 657.',
  alternates: { canonical: SITE_URL },
  openGraph: {
    url: SITE_URL,
    title: 'Pressure Cleaning Perth | Driveway, House & Roof Washing | Premier Pressure Solutions',
    description:
      'Premier Pressure Solutions WA offers expert pressure cleaning services across Perth. Driveways, house washing, roof cleaning, pavers & more.',
    type: 'website',
    locale: 'en_AU',
    siteName: 'Premier Pressure Solutions WA',
    images: [{ url: 'https://www.premierpressuresolutions.com.au/og-image.jpg', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pressure Cleaning Perth | Driveway, House & Roof Washing | Premier Pressure Solutions',
    description:
      'Premier Pressure Solutions WA offers expert pressure cleaning services across Perth. Driveways, house washing, roof cleaning, pavers & more.',
    images: ['https://www.premierpressuresolutions.com.au/og-image.jpg'],
  },
  other: {
    'twitter:url': SITE_URL,
  },
};

const homeStructuredData = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': SITE_URL,
  name: 'Premier Pressure Solutions WA',
  image: `${SITE_URL}/og-image.png`,
  url: SITE_URL,
  telephone: '+61452579657',
  email: 'info@premierpressuresolutions.com.au',
  priceRange: '$$',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Perth',
    addressRegion: 'WA',
    addressCountry: 'AU',
  },
  geo: { '@type': 'GeoCoordinates', latitude: -31.9505, longitude: 115.8605 },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      opens: '07:00',
      closes: '18:00',
    },
  ],
  description:
    "Perth's trusted pressure cleaning specialists offering professional residential and commercial services. Driveways, house washing, roof cleaning, and more. Fully insured.",
  areaServed: [
    { '@type': 'City', name: 'Perth', '@id': 'https://www.wikidata.org/wiki/Q3183' },
    { '@type': 'State', name: 'Western Australia' },
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Pressure Cleaning Services',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Driveway Cleaning',
          description: 'Professional pressure cleaning for driveways and concrete surfaces',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'House Washing',
          description: 'Exterior house washing and cleaning services',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Roof Cleaning',
          description: 'Safe and effective roof cleaning and restoration',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Paver Cleaning & Sealing',
          description: 'Professional paver cleaning and sealing services',
        },
      },
    ],
  },
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homeStructuredData) }}
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
              Servicing Perth &amp; Surrounds
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto mb-6 sm:mb-8">
              We proudly serve homes and businesses across the greater Perth metropolitan area.
            </p>
          </div>

          <div className="mb-6 sm:mb-8">
            <div className="w-full max-w-4xl mx-auto rounded-lg overflow-hidden shadow-lg border border-gray-200">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d433082.15314154816!2d115.54954834531247!3d-32.002804927054164!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x630a0ba2d38509af%3A0x486bd1fdab99e5ba!2sPremier%20Pressure%20Solutions%20WA!5e0!3m2!1sen!2sau!4v1771988994275!5m2!1sen!2sau"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Premier Pressure Solutions WA Service Area Map"
              />
            </div>
          </div>

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
