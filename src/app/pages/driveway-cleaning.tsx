import { ServiceHero } from '../components/service/service-hero';
import { ServiceTrust } from '../components/service/service-trust';
import { DrivewayBeforeAfter } from '../components/service/driveway-before-after';
import { ServiceBenefits } from '../components/service/service-benefits';
import { ServiceProcess } from '../components/service/service-process';
import { ServiceReviews } from '../components/service/service-reviews';
import { ServiceFAQ } from '../components/service/service-faq';
import { ServiceCTA } from '../components/service/service-cta';
import { SEO } from '../components/seo';
import { generateLocalBusinessSchema, generateServiceSchema, combineSchemas } from '../utils/local-business-schema';

export function DrivewayCleaningPage() {
  const serviceData = {
    title: 'Professional Driveway Cleaning in Perth',
    subtitle: 'Expert pressure cleaning services that restore your driveway\'s appearance and increase your property value',
    metaDescription: 'Professional driveway cleaning services in Perth. Remove oil stains, mould, and grime with our expert pressure cleaning. Free quotes. Fully insured.',
    heroImage: 'pressure cleaning driveway',
    
    reviews: [
      {
        name: 'Sarah Mitchell',
        date: '2 weeks ago',
        rating: 5,
        text: 'Absolutely blown away by the transformation of our driveway! All the oil stains from years of parking are completely gone. The team was professional, on time, and cleaned up perfectly. Highly recommend for driveway cleaning in Perth.',
        avatar: 'SM',
      },
      {
        name: 'James Robertson',
        date: '1 month ago',
        rating: 5,
        text: 'Our concrete driveway looked brand new after Premier Pressure Solutions WA finished. They removed stubborn tyre marks and stains I thought were permanent. Great communication and fair pricing. Will definitely use again.',
        avatar: 'JR',
      },
      {
        name: 'Emma Thompson',
        date: '3 weeks ago',
        rating: 5,
        text: 'Called them for driveway cleaning before selling our house. The difference was incredible - like going back 10 years! They were careful around the garden and left everything spotless. Best decision for our home sale prep.',
        avatar: 'ET',
      },
    ],
    
    benefits: {
      intro: `Your driveway is one of the first things visitors notice about your property. Over time, driveways accumulate oil stains, tyre marks, mould, algae, and general grime that diminish your home's curb appeal and can even create safety hazards. At Premier Pressure Solutions WA, we specialise in professional driveway cleaning services across Perth, using commercial-grade equipment and proven techniques to restore your driveway to like-new condition.

Our Perth-based team understands the unique challenges facing local driveways—from red dirt staining to coastal salt buildup. Whether you have a concrete driveway, paved surface, or exposed aggregate, we have the expertise and equipment to deliver outstanding results without causing damage to your surface.

We use controlled high-pressure cleaning methods combined with eco-friendly cleaning solutions to break down stubborn stains and remove years of buildup. Our approach not only improves the appearance of your driveway but also extends its lifespan by removing contaminants that can cause deterioration over time.`,
      
      points: [
        'Remove stubborn oil stains, tyre marks, and organic growth',
        'Restore original colour and appearance',
        'Increase property value and curb appeal',
        'Prevent slip hazards from algae and moss buildup',
        'Extend the lifespan of your driveway surface',
        'Safe for all driveway materials including concrete, pavers, and aggregate',
        'Eco-friendly cleaning solutions that are safe for gardens and pets',
        'Professional results backed by full insurance coverage',
      ],
      
      closingCopy: `Don't let a dirty driveway bring down your property's appearance. Our professional driveway cleaning services in Perth deliver transformative results that last. We take pride in our attention to detail, reliable service, and commitment to customer satisfaction. Every job is completed to the highest standard, with before and after photos provided to showcase the dramatic improvement.`,
    },
    
    process: [
      {
        title: 'Inspection',
        description: 'We assess your driveway\'s condition, identify problem areas, and determine the best cleaning approach for your specific surface type.',
      },
      {
        title: 'Pre-Treatment',
        description: 'Stubborn stains and heavy buildup are treated with professional-grade cleaning solutions to break down contaminants.',
      },
      {
        title: 'Pressure Cleaning',
        description: 'Using commercial equipment, we thoroughly clean your driveway with controlled pressure settings safe for your surface.',
      },
      {
        title: 'Optional Sealing',
        description: 'Protect your investment with our premium sealing service that prevents future staining and extends surface life.',
      },
    ],
    
    faqs: [
      {
        question: 'How much does driveway cleaning cost in Perth?',
        answer: 'Driveway cleaning costs in Perth typically range from $150 to $400 depending on the size, condition, and type of surface. We provide free, no-obligation quotes and can give you an accurate price after assessing your specific driveway. Factors that influence cost include driveway size, level of staining, surface material, and whether sealing is required.',
      },
      {
        question: 'Can pressure cleaning damage my driveway?',
        answer: 'When performed correctly by professionals, pressure cleaning will not damage your driveway. We use controlled pressure settings appropriate for each surface type—concrete, pavers, or exposed aggregate. Our experienced technicians know exactly how much pressure to use to achieve excellent results while protecting your investment. DIY pressure cleaning with incorrect settings is what typically causes damage.',
      },
      {
        question: 'How often should I have my driveway cleaned?',
        answer: 'Most Perth driveways benefit from professional cleaning every 12-18 months. However, this can vary based on factors like tree coverage (which increases organic growth), traffic levels, and proximity to the coast. High-traffic driveways or those in shaded areas may need more frequent cleaning. Regular maintenance cleaning prevents deep staining and extends your driveway\'s lifespan.',
      },
      {
        question: 'Do I need to seal my driveway after cleaning?',
        answer: 'While sealing isn\'t mandatory, it\'s highly recommended for most driveways. Sealing after cleaning provides several benefits: it protects against future oil stains, prevents weed growth in paver joints, enhances colour, and makes future cleaning easier. For concrete driveways, sealing can prevent moisture penetration and surface deterioration. We offer premium sealing services as an add-on to our cleaning packages.',
      },
      {
        question: 'Can you remove oil stains from concrete driveways?',
        answer: 'Yes, we specialize in removing oil stains from concrete driveways. Oil stains require specialized treatment—we use commercial-grade degreasers and hot water pressure cleaning to break down and lift oil from porous concrete surfaces. While very old or deeply penetrated oil stains may leave slight shadows, we can typically achieve 80-95% stain removal. For best results with oil stains, earlier treatment is better, and sealing after cleaning will prevent future oil from penetrating the concrete.',
      },
      {
        question: 'How long does driveway cleaning take?',
        answer: 'A standard residential driveway cleaning typically takes 2-4 hours depending on size and condition. This includes setup, pre-treatment time, pressure cleaning, and cleanup. If you\'re adding sealing service, allow an additional 1-2 hours plus drying time. We\'ll provide a time estimate when we quote your job, and we always work efficiently to minimize disruption to your day.',
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
      'Professional Driveway Cleaning Perth',
      serviceData.metaDescription,
      '/residential/driveway-cleaning',
      ['Concrete Driveway Cleaning', 'Paver Driveway Cleaning', 'Oil Stain Removal', 'Driveway Sealing']
    ),
    faqSchema
  );

  return (
    <main>
      <SEO
        title={serviceData.title}
        description={serviceData.metaDescription}
        canonical="/residential/driveway-cleaning"
        structuredData={structuredData}
      />
      <ServiceHero
        title={serviceData.title}
        subtitle={serviceData.subtitle}
        imageQuery={serviceData.heroImage}
        backgroundImage="https://iigpdyyiqskohqejmqob.supabase.co/storage/v1/object/sign/make-bb20e683-images/general/1771566714143-4676ebb7-30fe-4f2c-9324-5bdc3754e29b.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9hMjhhMmJhNi1lYjVhLTQ5OGQtODVlMC0wZTUxMmZiNDJhNzIiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJtYWtlLWJiMjBlNjgzLWltYWdlcy9nZW5lcmFsLzE3NzE1NjY3MTQxNDMtNDY3NmViYjctMzBmZS00ZjJjLTkzMjQtNWJkYzM3NTRlMjliLnBuZyIsImlhdCI6MTc3MTU2NjcxNCwiZXhwIjoxODAzMTAyNzE0fQ.Q74LcydeJaKo-Ngy7bcFweBy_g-8bMNpsiPT0SxbklQ"
      />
      <ServiceTrust />
      <DrivewayBeforeAfter serviceName="driveway" />
      <ServiceBenefits
        intro={serviceData.benefits.intro}
        points={serviceData.benefits.points}
        closing={serviceData.benefits.closingCopy}
        serviceName="Driveway Cleaning"
      />
      <ServiceProcess steps={serviceData.process} />
      <ServiceReviews reviews={serviceData.reviews} />
      <ServiceFAQ faqs={serviceData.faqs} serviceName="driveway cleaning" />
      <ServiceCTA 
        serviceName="Driveway"
        descriptionPlaceholder="Tell us about your driveway cleaning needs..."
      />
    </main>
  );
}