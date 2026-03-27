import { ServiceHero } from '../components/service/service-hero';
import { ServiceTrust } from '../components/service/service-trust';
import { HouseWashingBeforeAfter } from '../components/service/house-washing-before-after';
import { ServiceBenefits } from '../components/service/service-benefits';
import { ServiceProcess } from '../components/service/service-process';
import { ServiceReviews } from '../components/service/service-reviews';
import { ServiceFAQ } from '../components/service/service-faq';
import { ServiceCTA } from '../components/service/service-cta';
import { SEO } from '../components/seo';
import { generateLocalBusinessSchema, generateServiceSchema, combineSchemas } from '../utils/local-business-schema';

export function HouseWashingPage() {
  const serviceData = {
    title: 'Professional House Washing in Perth',
    subtitle: 'Complete exterior cleaning that transforms your home\'s appearance and protects your investment',
    metaDescription: 'Expert house washing services in Perth. Remove dirt, mould, and grime from all exterior surfaces. Restore your home\'s beauty. Free quotes. Fully insured.',
    
    reviews: [
      {
        name: 'Michelle Taylor',
        date: '2 weeks ago',
        rating: 5,
        text: 'Our house looked 20 years old due to dirt and mould. After Premier Pressure Solutions WA washed it, it looks brand new! They cleaned the walls, eaves, fascias - everything. Absolutely thrilled with the transformation.',
        avatar: 'MT',
      },
      {
        name: 'Andrew Wilson',
        date: '3 weeks ago',
        rating: 5,
        text: 'Exceptional house washing service! They were careful around our plants and windows while removing all the green mould from our weatherboards. The house looks incredible. Highly professional team.',
        avatar: 'AW',
      },
      {
        name: 'Lisa Henderson',
        date: '1 month ago',
        rating: 5,
        text: 'We get our house washed annually now after seeing the amazing results. Removes all the Perth dirt and coastal salt. They take care with everything and the results last for ages. Best investment for home maintenance!',
        avatar: 'LH',
      },
    ],
    
    benefits: {
      intro: `Your home's exterior is constantly exposed to Perth's harsh conditions—from red dust and dirt to mould, mildew, and pollution buildup. Over time, these elements make even well-maintained homes look tired and neglected, diminishing curb appeal and potentially affecting your property's value. Regular house washing is essential maintenance that protects your investment and keeps your home looking its best. At Premier Pressure Solutions WA, we specialise in professional house washing services across Perth, using safe, effective techniques that restore your home's appearance without causing damage.

Our experienced team understands that different surfaces require different approaches. We use soft washing for delicate areas like painted weatherboards, render, and eaves, while applying controlled pressure cleaning for more durable surfaces like brick and concrete. This tailored approach ensures exceptional cleaning results while protecting your home's exterior from damage that can occur with inexperienced or overly aggressive cleaning methods.

We don't just blast away surface dirt—we treat mould and mildew at the source, clean gutters and downpipes, remove cobwebs and wasp nests, and restore all external surfaces to like-new condition. Whether you're preparing to sell, hosting an event, or simply want to enjoy a beautiful, well-maintained home, our comprehensive house washing service delivers outstanding results that transform your property's entire appearance.`,
      
      points: [
        'Complete exterior transformation in a single service',
        'Safe soft washing for delicate surfaces',
        'Controlled pressure cleaning for durable materials',
        'Remove mould, mildew, dirt, and pollution stains',
        'Clean all walls, eaves, fascias, and soffits',
        'Include gutters, downpipes, and outdoor fixtures',
        'Eco-friendly cleaning solutions',
        'Fully insured with public liability coverage',
      ],
      
      closingCopy: `Experience the dramatic transformation that professional house washing brings to your Perth home. Our meticulous approach and proven techniques deliver results that make your house look years younger. We take pride in every job, treating your home with the same care and attention we'd give our own. Trust Premier Pressure Solutions WA to restore your home's beauty and protect your investment.`,
    },
    
    process: [
      {
        title: 'Property Assessment',
        description: 'We inspect your home\'s exterior to identify surface types, problem areas, mould growth, and any delicate features requiring special attention.',
      },
      {
        title: 'Preparation & Protection',
        description: 'Gardens, outdoor furniture, and fixtures are protected. We ensure all windows and doors are properly sealed and secure any loose items.',
      },
      {
        title: 'Pre-Treatment',
        description: 'Heavily soiled areas, mould, and mildew are pre-treated with professional cleaning solutions that break down organic growth and stubborn stains.',
      },
      {
        title: 'Soft Wash or Pressure Clean',
        description: 'We apply the appropriate cleaning method for each surface—gentle soft washing for painted and delicate surfaces, controlled pressure for brick and concrete.',
      },
      {
        title: 'Detail Work & Final Rinse',
        description: 'Gutters, eaves, fixtures, and hard-to-reach areas receive detailed attention. Everything is thoroughly rinsed, leaving your home spotlessly clean.',
      },
    ],
    
    faqs: [
      {
        question: 'How much does house washing cost in Perth?',
        answer: 'Professional house washing in Perth typically costs $350-$800 for most homes, depending on the size, number of storeys, surface condition, and accessibility. A standard single-storey three-bedroom home usually costs $400-$550, while two-storey homes range from $600-$800. Larger properties or homes with extensive mould requiring heavy treatment may cost more. We provide free, detailed quotes after inspecting your property to give you an accurate price.',
      },
      {
        question: 'How often should I have my house washed?',
        answer: 'Most Perth homes benefit from professional house washing every 12-18 months. Homes in coastal areas, near busy roads, or under heavy tree coverage may need annual cleaning due to salt spray, pollution, or organic debris. Properties in low-dust suburban areas can sometimes extend to 2 years between washes. Regular cleaning prevents buildup that becomes harder to remove and protects your paintwork and exterior surfaces from long-term damage.',
      },
      {
        question: 'Will pressure washing damage my home\'s exterior?',
        answer: 'When performed by experienced professionals using proper techniques and equipment, house washing is completely safe. We use soft washing (low-pressure with specialized cleaning solutions) for delicate surfaces like weatherboards, render, and painted surfaces. Controlled pressure washing is reserved for durable surfaces like brick and concrete. We never use excessive pressure that could damage surfaces, force water behind cladding, or strip paint. This is why professional service is essential—inexperienced operators frequently cause costly damage.',
      },
      {
        question: 'Can you remove mould and mildew from my house?',
        answer: 'Yes, removing mould and mildew is a key part of our house washing service. Perth\'s humidity, especially in winter and in shaded areas, promotes mould and mildew growth on exterior surfaces. We use professional anti-fungal treatments that kill mould at the root, then wash it away completely. Our treatments help prevent rapid regrowth, though mould may eventually return in persistently damp, shaded areas due to environmental conditions. Regular cleaning is the best prevention.',
      },
      {
        question: 'Do you clean gutters as part of house washing?',
        answer: 'We clean the external surfaces of gutters, downpipes, and fascias as part of our standard house washing service. However, cleaning inside gutters (removing leaves and debris) is a separate service due to the additional time, safety equipment, and disposal requirements involved. We can provide gutter cleaning as an add-on service if needed. Many customers combine both services for complete exterior maintenance.',
      },
      {
        question: 'How long does house washing take?',
        answer: 'A typical single-storey three-bedroom home takes 3-4 hours to wash completely. Two-storey homes generally take 4-6 hours depending on size and complexity. Larger homes, properties with heavy mould requiring extended treatment time, or difficult-to-access areas may take longer. We work efficiently while maintaining our high standards, and we\'ll give you an estimated timeframe when we provide your quote.',
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
      'Professional House Washing Perth',
      serviceData.metaDescription,
      '/residential/house-washing',
      ['Exterior Wall Cleaning', 'Mould Removal', 'Soft Washing', 'Gutter Cleaning']
    ),
    faqSchema
  );

  return (
    <main>
      <SEO
        title={serviceData.title}
        description={serviceData.metaDescription}
        canonical="/residential/house-washing"
        structuredData={structuredData}
      />
      <ServiceHero
        title={serviceData.title}
        subtitle={serviceData.subtitle}
        imageQuery={serviceData.heroImage}
        backgroundImage="https://iigpdyyiqskohqejmqob.supabase.co/storage/v1/object/sign/make-bb20e683-images/general/1771566508786-8b595574-6e72-4a28-bea9-d38def9cc0e4.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9hMjhhMmJhNi1lYjVhLTQ5OGQtODVlMC0wZTUxMmZiNDJhNzIiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJtYWtlLWJiMjBlNjgzLWltYWdlcy9nZW5lcmFsLzE3NzE1NjY1MDg3ODYtOGI1OTU1NzQtNmU3Mi00YTI4LWJlYTktZDM4ZGVmOWNjMGU0LnBuZyIsImlhdCI6MTc3MTU2NjUwOSwiZXhwIjoxODAzMTAyNTA5fQ.lH3Agv4Uv4MgaIkmS_jN41UQIbo4_B_lb6DKAPYZx2s"
      />
      <ServiceTrust />
      <HouseWashingBeforeAfter serviceName="house" />
      <ServiceBenefits
        intro={serviceData.benefits.intro}
        points={serviceData.benefits.points}
        closing={serviceData.benefits.closingCopy}
        serviceName="House Washing"
      />
      <ServiceProcess steps={serviceData.process} />
      <ServiceReviews reviews={serviceData.reviews} />
      <ServiceFAQ faqs={serviceData.faqs} serviceName="house washing" />
      <ServiceCTA 
        serviceName="House"
        descriptionPlaceholder="Tell us about your house washing needs..."
      />
    </main>
  );
}