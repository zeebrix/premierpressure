import type { Metadata } from 'next';
import { suburbs } from '@/data/suburbs';
import '@/styles/fonts.css';
import '@/styles/tailwind.css';

const SITE_URL = 'https://www.premierpressuresolutions.com.au';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Premier Pressure Solutions WA | Professional Pressure Cleaning Perth',
    template: '%s | Premier Pressure Solutions WA',
  },
  description:
    "Perth's trusted pressure cleaning experts. House washing, driveway cleaning, roof cleaning & more. Servicing 70+ Perth suburbs. Get your free quote today! ☎ 0452 579 657",
  authors: [{ name: 'Premier Pressure Solutions WA' }],
  robots: { index: true, follow: true },
  openGraph: {
    type: 'website',
    locale: 'en_AU',
    siteName: 'Premier Pressure Solutions WA',
    url: SITE_URL,
    images: [{ url: `${SITE_URL}/og-image.jpg` }],
  },
  twitter: {
    card: 'summary_large_image',
    images: [`${SITE_URL}/og-image.jpg`],
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/manifest.json',
  other: {
    'theme-color': '#0a1628',
    'msapplication-TileColor': '#0a1628',
    'mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'black-translucent',
    'apple-mobile-web-app-title': 'Premier Pressure WA',
    'geo.region': 'AU-WA',
    'geo.placename': 'Perth',
    'geo.position': '-31.9505;115.8605',
    ICBM: '-31.9505, 115.8605',
  },
};

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Premier Pressure Solutions WA',
  image: `${SITE_URL}/logo.png`,
  description:
    'Professional pressure cleaning services in Perth, Western Australia. Specialising in house washing, driveway cleaning, roof cleaning and more.',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Perth',
    addressRegion: 'WA',
    addressCountry: 'AU',
  },
  telephone: '+61452579657',
  email: 'contact@premierpressuresolutions.com.au',
  url: SITE_URL,
  priceRange: '$$',
  areaServed: [
    { '@type': 'City', name: 'Perth' },
    ...suburbs.map((s) => ({ '@type': 'City', name: s.name })),
  ],
  serviceArea: {
    '@type': 'GeoCircle',
    geoMidpoint: { '@type': 'GeoCoordinates', latitude: -31.9505, longitude: 115.8605 },
    geoRadius: '50000',
  },
  sameAs: ['https://www.facebook.com/premierpressuresolutionswa'],
};

import { Header } from '@/app/components/header';
import { Footer } from '@/app/components/footer';
import { ScrollToTop } from '@/app/components/scroll-to-top';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </head>
      <body>
        <div className="min-h-screen flex flex-col">
          <ScrollToTop />
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
