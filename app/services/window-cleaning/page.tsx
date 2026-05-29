import type { Metadata } from 'next';
import { ServiceHero } from '@/app/components/service/service-hero';
import { ServiceTrust } from '@/app/components/service/service-trust';
import { WindowBeforeAfter } from '@/app/components/service/window-before-after';
import { ServiceBenefits } from '@/app/components/service/service-benefits';
import { ServiceProcess } from '@/app/components/service/service-process';
import { ServiceReviews } from '@/app/components/service/service-reviews';
import { ServiceFAQ } from '@/app/components/service/service-faq';
import { ServiceCTA } from '@/app/components/service/service-cta';
import {
  generateLocalBusinessSchema,
  generateServiceSchema,
  combineSchemas,
  generateBreadcrumbSchema,
} from '@/app/utils/local-business-schema';

const SITE_URL = 'https://www.premierpressuresolutions.com.au';

export const metadata: Metadata = {
  title: {
    absolute: 'Professional Window Cleaning in Perth | Premier Pressure Solutions WA',
  },
  description:
    'Expert window cleaning services in Perth. Streak-free results for residential properties. Inside and out. Free quotes. Fully insured.',
  alternates: {
    canonical: `${SITE_URL}/window-cleaning`,
  },
  openGraph: { url: `${SITE_URL}/window-cleaning`, type: 'website', locale: 'en_AU', siteName: 'Premier Pressure Solutions WA', images: [{ url: 'https://www.premierpressuresolutions.com.au/og-image.jpg', width: 1200, height: 630 }] },
};

export default function WindowCleaningPage() {
  const serviceData = {
    title: 'Professional Window Cleaning in Perth',
    subtitle:
      "Crystal clear windows that let the sunshine in and enhance your home's appearance",
    metaDescription:
      'Expert window cleaning services in Perth. Streak-free results for residential properties. Inside and out. Free quotes. Fully insured.',

    reviews: [
      {
        name: 'Sophie Martin',
        date: '2 weeks ago',
        rating: 5,
        text: "Best window cleaning service we've ever used! Every window is spotless inside and out. They even cleaned the tracks and frames. Such a difference to our home's appearance. Highly recommend!",
        avatar: 'SM',
      },
      {
        name: 'Daniel Cooper',
        date: '3 weeks ago',
        rating: 5,
        text: 'Fantastic job on our two-storey windows. They were professional, careful with our garden, and the results are perfect - not a streak in sight. Will definitely be using them regularly.',
        avatar: 'DC',
      },
      {
        name: 'Rachel Green',
        date: '1 month ago',
        rating: 5,
        text: "Thoroughly impressed with their window cleaning service. Our windows were so dirty we could barely see through them. Now they're crystal clear! Great communication and very reasonably priced.",
        avatar: 'RG',
      },
    ],

    benefits: {
      intro: `Clean windows make a remarkable difference to your home or business, flooding interiors with natural light and creating an impressive first impression. However, Perth's conditions—from coastal salt spray to red dirt and hard water deposits—can quickly leave windows looking dull and streaked. Regular DIY cleaning often leaves streaks, watermarks, and missed spots that detract from your property's appearance. At Premier Pressure Solutions WA, we specialise in professional window cleaning services across Perth, delivering flawless, streak-free results that showcase your property at its best.

Our experienced Perth-based team services both residential and commercial properties, from single-storey homes to multi-storey office buildings. We have the equipment, expertise, and insurance necessary to safely clean windows at any height. We don't just wipe down glass—we provide comprehensive window cleaning that includes frames, sills, tracks, and screens, ensuring every aspect of your windows looks immaculate.

We use professional-grade cleaning solutions and pure water technology combined with proper techniques to eliminate streaks, watermarks, salt deposits, and built-up grime. Our methods are safe for all window types including standard glass, tinted windows, and specialty glass. Whether you need a one-time deep clean or prefer regular maintenance cleaning, we deliver consistently excellent results that make your windows look brand new.`,

      points: [
        'Streak-free, crystal-clear results every time',
        'Remove salt spray, dirt, and hard water deposits',
        'Clean inside and outside surfaces',
        'Include frames, sills, tracks, and screens',
        'Safe cleaning of high and hard-to-reach windows',
        'Suitable for homes and commercial properties',
        'Eco-friendly cleaning solutions',
        'Fully insured with public liability coverage',
      ],

      closingCopy: `Experience the difference that professionally cleaned windows make to your property. Our meticulous attention to detail and commitment to streak-free results ensure you'll love looking through your sparkling clean windows. Whether it's your home or business, we deliver the same exceptional standard every time. Trust Premier Pressure Solutions WA for all your window cleaning needs in Perth.`,
    },

    process: [
      {
        title: 'Initial Assessment',
        description:
          'We assess your windows, identify any issues like hard water staining, and determine the best cleaning approach for your specific glass and situation.',
      },
      {
        title: 'Preparation',
        description:
          'Window frames, sills, and tracks are brushed clean to remove loose dirt and debris. Screens are removed for separate cleaning if applicable.',
      },
      {
        title: 'Professional Cleaning',
        description:
          'Using professional cleaning solutions and pure water technology, we clean both inside and outside glass surfaces to achieve perfect, streak-free clarity.',
      },
      {
        title: 'Detail Work & Final Inspection',
        description:
          'Frames, sills, and tracks are wiped down, screens are reinstalled, and we perform a thorough inspection to ensure flawless results.',
      },
    ],

    faqs: [
      {
        question: 'Do I need to be home during the service?',
        answer:
          "For exterior-only cleaning, you don't need to be home as long as we have access. For interior cleaning, someone will need to be present to allow entry and move fragile items if required.",
      },
      {
        question: 'How often should windows be professionally cleaned?',
        answer:
          'Most Perth homes benefit from professional window cleaning every 3-6 months. Homes in coastal areas or near busy roads may need quarterly cleaning due to salt spray and pollution buildup. Homes in suburban areas can often go 6 months between cleans. Commercial properties typically require monthly or quarterly cleaning depending on the business type and location. Regular cleaning prevents buildup that becomes harder to remove and keeps your windows looking their best.',
      },
      {
        question: 'Do you clean inside and outside?',
        answer:
          'Yes, our standard window cleaning service includes both inside and outside surfaces for thorough, comprehensive cleaning. However, we can provide outside-only service if preferred (such as for rental properties or when interiors were recently cleaned). Inside and outside cleaning delivers the best results as it removes both external environmental buildup and internal condensation marks, fingerprints, and household dirt.',
      },
      {
        question: 'Can you remove hard water stains from windows?',
        answer:
          "Yes, we can remove most hard water stains and mineral deposits from windows using specialized treatments. Perth's hard water often leaves stubborn white deposits on glass, especially from sprinkler overspray. While fresh hard water stains are relatively easy to remove, old, heavily built-up deposits may require special treatment and in some cases may have permanently etched the glass. We'll assess your windows and recommend the best approach.",
      },
      {
        question: 'Do you clean window tracks and screens?',
        answer:
          'Yes, our comprehensive window cleaning service includes cleaning of frames, sills, and tracks, as well as window screens where present. Clean tracks ensure smooth window operation and prevent dirt transfer when opening and closing windows. Screens are cleaned separately and reinstalled. This thorough approach ensures your entire window system—not just the glass—looks and functions at its best.',
      },
      {
        question: 'Are you insured to clean high windows?',
        answer:
          "Yes, we are fully insured with comprehensive public liability coverage and have the proper equipment and training to safely clean windows at any height. For two-storey homes, we use extension poles and proper ladder safety procedures. For commercial buildings, we have access to appropriate access equipment or can work with building management's existing systems. Safety is our top priority, and we never take risks that could endanger our team or your property.",
      },
    ],
  };

  // FAQ Schema for Rich Snippets
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: serviceData.faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };

  // Combined Schema with LocalBusiness + Service + FAQ
  const combinedSchema = combineSchemas(
    generateLocalBusinessSchema(),
    generateServiceSchema(
      'Professional Window Cleaning Perth',
      serviceData.metaDescription,
      '/window-cleaning',
      ['Residential Window Cleaning', 'Commercial Window Cleaning', 'Hard Water Stain Removal']
    ),
    faqSchema
  );

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', path: '' },
    { name: 'Services', path: '/window-cleaning' },
    { name: 'Window Cleaning', path: '/window-cleaning' },
  ]);

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(combinedSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <ServiceHero
        title={serviceData.title}
        subtitle={serviceData.subtitle}
        imageQuery=""
        backgroundImage="https://iigpdyyiqskohqejmqob.supabase.co/storage/v1/object/sign/make-bb20e683-images/general/1771566196872-58e166d6-a94c-4da4-911a-e63b1c1ec7b9.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9hMjhhMmJhNi1lYjVhLTQ5OGQtODVlMC0wZTUxMmZiNDJhNzIiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJtYWtlLWJiMjBlNjgzLWltYWdlcy9nZW5lcmFsLzE3NzE1NjYxOTY4NzItNThlMTY2ZDYtYTk0Yy00ZGE0LTkxMWEtZTYzYjFjMWVjN2I5LnBuZyIsImlhdCI6MTc3MTU2NjE5NywiZXhwIjoxODAzMTAyMTk3fQ.BFmSeE43rqY2uf133CYHNZmhbtEwVb_tC3dc8nt8vdI"
      />
      <ServiceTrust />
      <WindowBeforeAfter serviceName="window" />
      <ServiceBenefits
        intro={serviceData.benefits.intro}
        points={serviceData.benefits.points}
        closing={serviceData.benefits.closingCopy}
        serviceName="Window Cleaning"
      />
      <ServiceProcess steps={serviceData.process} />
      <ServiceReviews reviews={serviceData.reviews} />
      <ServiceFAQ faqs={serviceData.faqs} serviceName="window cleaning" />
      <ServiceCTA
        serviceName="Windows"
        serviceLabel="Window Cleaning"
        descriptionPlaceholder="Tell us about your window cleaning needs..."
      />
    </main>
  );
}
