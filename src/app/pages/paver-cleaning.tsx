import { ServiceHero } from '../components/service/service-hero';
import { ServiceTrust } from '../components/service/service-trust';
import { PaverBeforeAfter } from '../components/service/paver-before-after';
import { ServiceBenefits } from '../components/service/service-benefits';
import { ServiceProcess } from '../components/service/service-process';
import { ServiceReviews } from '../components/service/service-reviews';
import { ServiceFAQ } from '../components/service/service-faq';
import { ServiceCTA } from '../components/service/service-cta';
import { SEO } from '../components/seo';
import { generateLocalBusinessSchema, generateServiceSchema, combineSchemas } from '../utils/local-business-schema';

export function PaverCleaningPage() {
  const serviceData = {
    title: 'Professional Paver Cleaning & Sealing in Perth',
    subtitle: 'Transform your outdoor pavers with expert cleaning and sealing services that restore beauty and add lasting protection',
    metaDescription: 'Expert paver cleaning and sealing in Perth. Remove stains, weeds, and organic growth. Restore and protect pavers. Free quotes. Fully insured.',
    
    reviews: [
      {
        name: 'Amanda Brooks',
        date: '3 weeks ago',
        rating: 5,
        text: 'Our patio pavers were stained and had weeds everywhere. Premier Pressure Solutions WA cleaned and sealed them perfectly! The colour has come back and they look like new. The sealing makes such a difference. Excellent work!',
        avatar: 'AB',
      },
      {
        name: 'Mark Anderson',
        date: '2 weeks ago',
        rating: 5,
        text: 'Very impressed with the paver cleaning and sealing service. They removed all the efflorescence and stains, re-sanded the joints, and sealed everything. The transformation is incredible. Worth every cent!',
        avatar: 'MA',
      },
      {
        name: 'Karen Stevens',
        date: '1 month ago',
        rating: 5,
        text: 'Outstanding service! Our pool paving and entertaining area looked dull and dirty. After cleaning and sealing, it looks absolutely stunning. They were professional, tidy, and the results speak for themselves.',
        avatar: 'KS',
      },
    ],
    
    benefits: {
      intro: `Paved areas—from driveways and pathways to alfresco entertaining spaces—are a significant investment in your property. However, pavers are subjected to constant exposure to dirt, organic growth, weed invasion, and staining that can make them look aged and neglected. Worse, organic growth between pavers can create slip hazards and cause structural issues as it displaces sand joints. At Premier Pressure Solutions WA, we specialise in professional paver cleaning and sealing services across Perth, delivering transformative results that restore your pavers' original beauty and provide long-lasting protection.

Our Perth-based team has extensive experience working with all types of paving—from traditional clay pavers and concrete pavers to modern limestone and granite paving. We understand that different paver types require different cleaning approaches. Using incorrect methods or pressure settings can damage paver surfaces, displace joint sand, or cause color loss.

We use professional-grade equipment and proven techniques to thoroughly clean pavers, remove organic growth, eliminate weeds from joints, and restore original colors. Following cleaning, we can resand and seal your pavers with premium sealers that lock in the sand, prevent weed growth, protect against staining, and enhance the natural colors of your pavers. Our complete paver restoration service doesn't just clean—it protects your investment for years to come.`,
      
      points: [
        'Remove dirt, stains, moss, and organic growth',
        'Eliminate weeds growing between pavers',
        'Restore original paver colors and appearance',
        'Professional resanding of joints for stability',
        'Premium sealing prevents future weed growth',
        'Protect against oil stains and other contaminants',
        'Enhanced color and wet-look finish options available',
        'Extend paver lifespan and reduce maintenance',
      ],
      
      closingCopy: `Transform tired, stained pavers into beautiful outdoor surfaces you can be proud of. Our professional paver cleaning and sealing services in Perth deliver exceptional results backed by experience and quality products. Whether you need a simple clean or complete restoration with sealing, we have the expertise to exceed your expectations. Invest in your property with our comprehensive paver care services.`,
    },
    
    process: [
      {
        title: 'Inspection & Preparation',
        description: 'We assess your pavers, identify staining and problem areas, and prepare the area by removing furniture and clearing debris.',
      },
      {
        title: 'Deep Cleaning',
        description: 'Using professional pressure cleaning equipment and appropriate cleaning solutions, we thoroughly clean pavers and remove all organic growth and staining.',
      },
      {
        title: 'Weed Removal & Resanding',
        description: 'Weeds are eliminated, old sand is removed from joints, and new high-quality joint sand is applied and compacted for stability.',
      },
      {
        title: 'Sealing',
        description: 'Premium paver sealer is applied to lock in sand, prevent weed growth, protect against stains, and enhance appearance with your choice of finish.',
      },
    ],
    
    faqs: [
      {
        question: 'How much does paver cleaning and sealing cost in Perth?',
        answer: 'Paver cleaning in Perth typically costs $3-$6 per square meter, while sealing adds an additional $5-$10 per square meter depending on the sealer type. A typical 50 square meter area would cost approximately $400-$800 for cleaning and sealing combined. Costs vary based on paver condition, type of paver, extent of staining, and choice of sealer (standard vs. premium). We provide detailed quotes after assessing your specific pavers.',
      },
      {
        question: 'How long does paver sealing last?',
        answer: 'Quality paver sealing typically lasts 3-5 years in Perth conditions, though this varies based on traffic levels, sun exposure, and maintenance. High-traffic areas like driveways may need resealing every 2-3 years, while protected alfresco areas can last 4-5 years or longer. Regular maintenance cleaning extends sealer life. When water no longer beads on the surface or weeds start appearing in joints, it\'s time to reseal.',
      },
      {
        question: 'What\'s the difference between wet-look and natural finish sealers?',
        answer: 'Wet-look sealers create a glossy, enhanced appearance that darkens pavers and makes colors more vibrant—similar to how pavers look when wet. Natural finish sealers protect without significantly changing the appearance, maintaining the original matte look. Wet-look is popular for entertaining areas where enhanced aesthetics are desired, while natural finish suits those preferring the original appearance. Both provide excellent protection; it\'s purely an aesthetic choice.',
      },
      {
        question: 'Can you remove oil stains from pavers?',
        answer: 'Yes, most oil stains can be removed or significantly improved with professional cleaning. We use specialized degreasers and hot water pressure cleaning to break down and lift oil from paver surfaces. Fresh oil stains are easier to remove, but even old, set-in stains can often be eliminated with our professional treatment methods. Sealed pavers are much more resistant to oil staining, making spills easier to clean in the future.',
      },
      {
        question: 'Will sealing prevent all weed growth?',
        answer: 'While sealing dramatically reduces weed growth by locking in joint sand and creating a barrier, it doesn\'t provide 100% weed prevention forever. Properly sealed pavers typically remain weed-free for several years. Any weeds that do appear are usually airborne seeds that land on the surface and are easily removed—they can\'t establish deep roots like they do in unsealed joints. Sealed pavers require far less maintenance than unsealed pavers.',
      },
      {
        question: 'How long before we can use the pavers after sealing?',
        answer: 'Drying times vary based on weather conditions, sealer type, and whether it\'s a water-based or solvent-based sealer. Generally, you should avoid walking on sealed pavers for 2-4 hours and avoid vehicle traffic for 24-48 hours. We recommend waiting 72 hours before placing furniture back. We\'ll provide specific timing based on the sealer used and weather conditions. Proper curing is important for long-lasting results, so following our guidance is essential.',
      },
    ],
  };

  // FAQ Schema for Rich Snippets
  const faqSchema = {
    "@type": "FAQPage",
    "mainEntity": serviceData.faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  // Combined Schema with LocalBusiness + Service + FAQ
  const structuredData = combineSchemas(
    generateLocalBusinessSchema(),
    generateServiceSchema(
      'Professional Paver Cleaning & Sealing Perth',
      serviceData.metaDescription,
      '/residential/paver-cleaning',
      ['Paver Cleaning', 'Paver Sealing', 'Paver Resanding', 'Weed Removal']
    ),
    faqSchema
  );

  return (
    <main>
      <SEO
        title={serviceData.title}
        description={serviceData.metaDescription}
        canonical="/residential/paver-cleaning"
        structuredData={structuredData}
      />
      <ServiceHero
        title={serviceData.title}
        subtitle={serviceData.subtitle}
      />
      <ServiceTrust />
      <PaverBeforeAfter serviceName="paver" />
      <ServiceBenefits
        intro={serviceData.benefits.intro}
        points={serviceData.benefits.points}
        closing={serviceData.benefits.closingCopy}
        serviceName="Paver Cleaning & Sealing"
      />
      <ServiceProcess steps={serviceData.process} />
      <ServiceReviews reviews={serviceData.reviews} />
      <ServiceFAQ faqs={serviceData.faqs} serviceName="paver cleaning and sealing" />
      <ServiceCTA 
        serviceName="Pavers"
        descriptionPlaceholder="Tell us about your paver cleaning and sealing needs..."
      />
    </main>
  );
}