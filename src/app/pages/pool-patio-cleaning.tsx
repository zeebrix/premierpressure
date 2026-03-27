import { ServiceHero } from '../components/service/service-hero';
import { ServiceTrust } from '../components/service/service-trust';
import { PoolPatioBeforeAfter } from '../components/service/pool-patio-before-after';
import { ServiceBenefits } from '../components/service/service-benefits';
import { ServiceProcess } from '../components/service/service-process';
import { ServiceReviews } from '../components/service/service-reviews';
import { ServiceFAQ } from '../components/service/service-faq';
import { ServiceCTA } from '../components/service/service-cta';
import { SEO } from '../components/seo';
import { generateLocalBusinessSchema, generateServiceSchema, combineSchemas } from '../utils/local-business-schema';

export function PoolPatioCleaningPage() {
  const serviceData = {
    title: 'Professional Pool Area & Patio Cleaning in Perth',
    subtitle: 'Expert pressure cleaning services that restore your outdoor entertainment areas to pristine condition',
    metaDescription: 'Professional pool area and patio cleaning services in Perth. Remove algae, grime, and stains from pool surrounds, patios, and alfresco areas. Free quotes. Fully insured.',
    heroImage: 'pool patio cleaning Perth',
    
    reviews: [
      {
        name: 'Michael Davies',
        date: '1 week ago',
        rating: 5,
        text: 'Outstanding job on our pool area and limestone patio! The pavers around the pool were covered in algae and looked terrible. Now they look brand new and are no longer slippery. The team was professional and took great care around our pool equipment. Highly recommend!',
        avatar: 'MD',
      },
      {
        name: 'Jennifer Woods',
        date: '2 weeks ago',
        rating: 5,
        text: 'Premier Pressure Solutions transformed our entire outdoor entertainment area. The pool surrounds, alfresco, and patio all look incredible. They removed years of buildup and staining. Perfect preparation before our daughter\'s wedding at home. Couldn\'t be happier!',
        avatar: 'JW',
      },
      {
        name: 'David Martinez',
        date: '3 weeks ago',
        rating: 5,
        text: 'Amazing results on our pool deck and timber patio. The team was careful around the plants and pool, and the surfaces are now clean and safe. They even cleaned our outdoor furniture at no extra charge. Great value and exceptional service!',
        avatar: 'DM',
      },
    ],
    
    benefits: {
      intro: `Your pool area and patio are the heart of outdoor entertaining in Perth's beautiful climate. Over time, these high-traffic areas accumulate algae, mould, dirt, leaf stains, sunscreen residue, and general grime that not only look unsightly but can create dangerous slip hazards. At Premier Pressure Solutions WA, we specialise in professional pool area and patio cleaning services across Perth, using specialised techniques and equipment to restore your outdoor spaces safely and effectively.

Pool surrounds and patios require expert care—too much pressure can damage surfaces, while incorrect cleaning methods can harm your pool's chemistry or surrounding landscaping. Our experienced team understands the unique requirements of Perth's diverse outdoor surfaces, from limestone and travertine pool coping to timber decking, concrete patios, and decorative pavers.

We use controlled pressure cleaning methods combined with appropriate cleaning solutions to remove stubborn staining, eliminate slip-causing algae, and restore the beauty of your outdoor entertainment areas. Our approach protects your pool equipment, preserves surface integrity, and ensures your family can safely enjoy your outdoor spaces.`,
      
      points: [
        'Remove dangerous algae and moss that cause slip hazards',
        'Eliminate stubborn stains from leaves, sunscreen, and organic matter',
        'Restore natural colour and beauty to pool surrounds and patios',
        'Safe for all surfaces including limestone, pavers, concrete, and timber',
        'Protect pool chemistry with appropriate cleaning methods',
        'Careful attention to pool equipment, plants, and landscaping',
        'Eco-friendly solutions safe for gardens and pools',
        'Transform outdoor areas for entertaining and family enjoyment',
      ],
      
      closingCopy: `Don't let dirty, stained pool areas and patios diminish your outdoor living experience. Our professional cleaning services deliver stunning transformations that enhance safety, beauty, and property value. We take pride in our careful approach, reliable service, and commitment to customer satisfaction. Every job includes protection of your pool and surroundings, with results that will impress your family and guests.`,
    },
    
    process: [
      {
        title: 'Site Assessment',
        description: 'We inspect your pool area and patio, identifying surface types, problem areas, and any sensitive features requiring special care during cleaning.',
      },
      {
        title: 'Area Preparation',
        description: 'Outdoor furniture, plants, and surrounding areas are carefully protected before we begin. We prepare the surface and surrounding space to ensure a safe, effective clean without damage.',
      },
      {
        title: 'Specialised Cleaning',
        description: 'Using appropriate pressure settings and professional cleaning solutions, we thoroughly clean all surfaces while protecting your pool and landscaping.',
      },
      {
        title: 'Final Inspection',
        description: 'We ensure all areas are thoroughly cleaned, rinse away all cleaning agents, and leave your outdoor space ready to enjoy.',
      },
    ],
    
    faqs: [
      {
        question: 'How much does pool area and patio cleaning cost in Perth?',
        answer: 'Pool area and patio cleaning costs in Perth typically range from $250 to $600 depending on the size of the area, surface types, and level of staining. We provide free, no-obligation quotes after assessing your specific outdoor space. Factors affecting cost include total area size, types of surfaces (limestone, pavers, concrete, timber), level of algae or staining, and whether sealing is required.',
      },
      {
        question: 'Is pressure cleaning safe around my pool?',
        answer: 'Yes, when performed by experienced professionals. We use controlled pressure settings appropriate for pool surrounds and take precautions to protect your pool\'s chemistry, equipment, and finishes. We ensure cleaning solutions are pool-safe and rinse thoroughly. Our team is trained to work around pools without causing damage or contamination. We recommend running your pool filter during and after cleaning.',
      },
      {
        question: 'Can you clean different surface types around my pool?',
        answer: 'Absolutely! We have experience with all common Perth pool surround materials including limestone, travertine, concrete pavers, natural stone, exposed aggregate, timber decking, and stamped concrete. Each surface requires different pressure settings and cleaning approaches, which our trained technicians understand thoroughly. We assess your specific surfaces and use the appropriate methods for optimal results without damage.',
      },
      {
        question: 'Will cleaning remove algae and prevent slipping?',
        answer: 'Yes, removing algae and organic growth is one of the primary benefits of professional pool area cleaning. Algae creates dangerous slip hazards, especially on smooth surfaces like limestone or tiles. Our pressure cleaning effectively removes algae, moss, and biofilm that cause slippery conditions. For long-term prevention, we recommend our sealing services which inhibit algae regrowth and make future cleaning easier.',
      },
      {
        question: 'How often should pool areas and patios be cleaned?',
        answer: 'Most Perth pool areas benefit from professional cleaning every 6-12 months, though this varies based on several factors. Shaded areas with tree coverage may need more frequent cleaning due to leaf staining and algae growth. High-traffic patios and areas with light-coloured surfaces also show dirt more quickly. Regular maintenance cleaning prevents deep staining and keeps surfaces safe and attractive year-round.',
      },
      {
        question: 'Can you clean while my pool is full?',
        answer: 'Yes, we typically clean pool areas with the pool full and running. In fact, this is usually the best approach as the pool filter will help capture any debris. We take care to direct runoff away from the pool where possible and use pool-safe cleaning products. Our team protects pool equipment, skimmers, and return jets during the cleaning process. There\'s no need to drain or empty your pool.',
      },
    ],
  };

  // FAQ Schema for Rich Snippets
  const faqSchema = {
    "@context": "https://schema.org",
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

  // Local Business Schema
  const localBusinessSchema = generateLocalBusinessSchema({
    name: 'Premier Pressure Solutions WA',
    address: '123 Pool Lane, Perth, WA 6000',
    phone: '+61 412 345 678',
    email: 'info@premierpressure.com.au',
    url: 'https://www.premierpressure.com.au',
    openingHours: 'Mo-Fr 08:00-17:00',
    description: 'Professional pressure cleaning services in Perth, WA. Specialising in pool area and patio cleaning.',
    image: 'https://iigpdyyiqskohqejmqob.supabase.co/storage/v1/object/sign/make-bb20e683-images/general/1772717372738-dcaddfc6-4c29-4731-8373-013989b7e141.webp?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9hMjhhMmJhNi1lYjVhLTQ5OGQtODVlMC0wZTUxMmZiNDJhNzIiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJtYWtlLWJiMjBlNjgzLWltYWdlcy9nZW5lcmFsLzE3NzI3MTczNzI3MzgtZGNhZGRmYzYtNGMyOS00NzMxLTgzNzMtMDEzOTg5YjdlMTQxLndlYnAiLCJpYXQiOjE3NzI3MTczNzIsImV4cCI6MTgwNDI1MzM3Mn0.8d9nrRjKQrRnHR2XsgvJsgDq-Nrcj_xisjEbNvgdDNc',
    logo: 'https://iigpdyyiqskohqejmqob.supabase.co/storage/v1/object/sign/make-bb20e683-images/general/1772717372738-dcaddfc6-4c29-4731-8373-013989b7e141.webp?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9hMjhhMmJhNi1lYjVhLTQ5OGQtODVlMC0wZTUxMmZiNDJhNzIiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJtYWtlLWJiMjBlNjgzLWltYWdlcy9nZW5lcmFsLzE3NzI3MTczNzI3MzgtZGNhZGRmYzYtNGMyOS00NzMxLTgzNzMtMDEzOTg5YjdlMTQxLndlYnAiLCJpYXQiOjE3NzI3MTczNzIsImV4cCI6MTgwNDI1MzM3Mn0.8d9nrRjKQrRnHR2XsgvJsgDq-Nrcj_xisjEbNvgdDNc',
    latitude: -31.9505,
    longitude: 115.8605,
  });

  // Service Schema
  const serviceSchema = generateServiceSchema({
    name: 'Pool Area & Patio Cleaning',
    description: 'Professional pressure cleaning services for pool areas and patios in Perth, WA. Remove algae, grime, and stains from pool surrounds, patios, and alfresco areas. Free quotes. Fully insured.',
    url: 'https://www.premierpressure.com.au/residential/pool-patio-cleaning',
    image: 'https://iigpdyyiqskohqejmqob.supabase.co/storage/v1/object/sign/make-bb20e683-images/general/1772717372738-dcaddfc6-4c29-4731-8373-013989b7e141.webp?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9hMjhhMmJhNi1lYjVhLTQ5OGQtODVlMC0wZTUxMmZiNDJhNzIiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJtYWtlLWJiMjBlNjgzLWltYWdlcy9nZW5lcmFsLzE3NzI3MTczNzI3MzgtZGNhZGRmYzYtNGMyOS00NzMxLTgzNzMtMDEzOTg5YjdlMTQxLndlYnAiLCJpYXQiOjE3NzI3MTczNzIsImV4cCI6MTgwNDI1MzM3Mn0.8d9nrRjKQrRnHR2XsgvJsgDq-Nrcj_xisjEbNvgdDNc',
    provider: 'Premier Pressure Solutions WA',
    providerUrl: 'https://www.premierpressure.com.au',
    priceRange: '$250 - $600',
    availability: 'Available',
    review: {
      ratingValue: 5,
      reviewCount: 3,
      reviewBody: 'Premier Pressure Solutions WA provides exceptional pool area and patio cleaning services. Their team is professional, thorough, and ensures all surfaces are restored to their natural beauty. Highly recommend!',
      reviewer: 'John Doe',
      datePublished: '2023-10-01',
    },
  });

  // Combined Schema
  const combinedSchema = combineSchemas(localBusinessSchema, serviceSchema);

  return (
    <main>
      <SEO
        title={serviceData.title}
        description={serviceData.metaDescription}
        canonical="/residential/pool-patio-cleaning"
        structuredData={combinedSchema}
      />
      <ServiceHero
        title={serviceData.title}
        subtitle={serviceData.subtitle}
        imageQuery={serviceData.heroImage}
        backgroundImage="https://iigpdyyiqskohqejmqob.supabase.co/storage/v1/object/sign/make-bb20e683-images/general/1772717372738-dcaddfc6-4c29-4731-8373-013989b7e141.webp?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9hMjhhMmJhNi1lYjVhLTQ5OGQtODVlMC0wZTUxMmZiNDJhNzIiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJtYWtlLWJiMjBlNjgzLWltYWdlcy9nZW5lcmFsLzE3NzI3MTczNzI3MzgtZGNhZGRmYzYtNGMyOS00NzMxLTgzNzMtMDEzOTg5YjdlMTQxLndlYnAiLCJpYXQiOjE3NzI3MTczNzIsImV4cCI6MTgwNDI1MzM3Mn0.8d9nrRjKQrRnHR2XsgvJsgDq-Nrcj_xisjEbNvgdDNc"
      />
      <ServiceTrust />
      <PoolPatioBeforeAfter serviceName="pool-patio" />
      <ServiceBenefits
        intro={serviceData.benefits.intro}
        points={serviceData.benefits.points}
        closing={serviceData.benefits.closingCopy}
        serviceName="Pool Area & Patio Cleaning"
      />
      <ServiceProcess steps={serviceData.process} />
      <ServiceReviews reviews={serviceData.reviews} />
      <ServiceFAQ faqs={serviceData.faqs} serviceName="pool area and patio cleaning" />
      <ServiceCTA 
        serviceName="Pool Area & Patio"
        descriptionPlaceholder="Tell us about your pool area and patio cleaning needs..."
      />
    </main>
  );
}