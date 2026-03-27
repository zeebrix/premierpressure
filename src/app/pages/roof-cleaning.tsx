import { ServiceHero } from '../components/service/service-hero';
import { ServiceTrust } from '../components/service/service-trust';
import { RoofBeforeAfter } from '../components/service/roof-before-after';
import { RoofMethodsComparison } from '../components/service/roof-methods-comparison';
import { RoofTreatmentDetail } from '../components/service/roof-treatment-detail';
import { RoofByNumbers } from '../components/service/roof-by-numbers';
import { ServiceBenefits } from '../components/service/service-benefits';
import { ServiceProcess } from '../components/service/service-process';
import { ServiceReviews } from '../components/service/service-reviews';
import { ServiceFAQ } from '../components/service/service-faq';
import { ServiceCTA } from '../components/service/service-cta';
import { SEO } from '../components/seo';
import { generateLocalBusinessSchema, generateServiceSchema, combineSchemas } from '../utils/local-business-schema';

export function RoofCleaningPage() {
  const serviceData = {
    title: 'Professional Roof Cleaning in Perth',
    subtitle: 'Expert roof cleaning services that remove moss, lichen, and algae to protect and beautify your home',
    metaDescription: 'Professional roof cleaning services in Perth. Remove moss, lichen, and organic growth safely. Extend roof life. Free quotes. Fully insured.',
    heroImage: 'roof pressure cleaning',
    
    reviews: [
      {
        name: 'Robert Taylor',
        date: '4 weeks ago',
        rating: 5,
        text: 'Our roof was covered in moss and looked awful. Premier Pressure Solutions WA transformed it completely! They were professional, worked safely at heights, and the roof looks 20 years younger. Highly recommend their roof cleaning service.',
        avatar: 'RT',
      },
      {
        name: 'Jennifer Moore',
        date: '2 weeks ago',
        rating: 5,
        text: 'Excellent roof cleaning job! They removed all the lichen and algae without damaging any tiles. Very thorough work and cleaned up all the debris. Our neighbours have already asked for their contact details.',
        avatar: 'JM',
      },
      {
        name: 'Peter Hughes',
        date: '1 month ago',
        rating: 5,
        text: 'Top-notch service from start to finish. Our tile roof looks brand new after their cleaning and treatment. They were careful, professional, and the price was very fair. Will be using them annually from now on.',
        avatar: 'PH',
      },
    ],
    
    benefits: {
      intro: `Your roof is one of your home's most important assets, protecting your family and possessions from the elements. However, Perth's climate creates ideal conditions for moss, lichen, algae, and other organic growth that can gradually damage roof tiles and shorten their lifespan. A dirty, moss-covered roof doesn't just look unsightly—it can lead to costly repairs and premature roof replacement. At Premier Pressure Solutions WA, we specialise in professional roof cleaning services across Perth, using safe, effective methods to remove organic growth and restore your roof's appearance and functionality.

Our experienced Perth-based team works with all roof types including terracotta tiles, concrete tiles, Colorbond metal roofing, and more. We understand that roofs require careful handling and the right cleaning approach. Walking on roofs and using incorrect cleaning methods can cause tile breakage, dislodge flashing, or void manufacturer warranties.

We use specialized soft washing techniques combined with professional biocidal treatments to kill and remove moss, lichen, and algae from your roof. Our approach is gentle enough to protect your tiles while being powerful enough to eliminate organic growth completely. Regular roof cleaning not only improves your home's appearance but also extends the life of your roof by preventing moisture retention and tile deterioration.`,
      
      points: [
        'Remove moss, lichen, and algae that damage roof tiles',
        'Prevent moisture retention and tile deterioration',
        'Restore your home\'s curb appeal and value',
        'Extend the lifespan of your roof',
        'Safe working methods compliant with safety regulations',
        'Suitable for terracotta, concrete tiles, and Colorbond roofs',
        'Prevent blocked gutters from organic debris',
        'Fully insured for your peace of mind',
      ],
      
      closingCopy: `Don't let organic growth damage your valuable roof investment. Our professional roof cleaning services in Perth deliver outstanding results while maintaining strict safety standards. We have the experience, equipment, and insurance necessary to clean your roof safely and effectively. Protect your home and enhance its appearance with our expert roof cleaning services.`,
    },
    
    process: [
      {
        title: 'Roof Inspection',
        description: 'We assess your roof\'s condition, identify problem areas, check for broken or loose tiles, and determine the most appropriate cleaning method.',
      },
      {
        title: 'Safety Setup',
        description: 'Proper safety equipment and protection is established, including harnesses, edge protection, and ground-level precautions for complete safety.',
      },
      {
        title: 'Treatment & Cleaning',
        description: 'Biocidal treatment is applied to kill organic growth, followed by gentle soft washing to remove moss, lichen, and debris without damaging tiles.',
      },
      {
        title: 'Gutter Cleaning',
        description: 'All dislodged debris is removed from gutters and downpipes to ensure proper drainage and prevent future problems.',
      },
    ],
    
    faqs: [
      {
        question: 'How much does roof cleaning cost in Perth?',
        answer: 'Roof cleaning costs in Perth typically range from $400 to $1,200 depending on roof size, pitch (steepness), height, type of roofing material, and extent of organic growth. Single-storey homes are less expensive than two-storey properties due to easier access and lower safety requirements. We provide free quotes after assessing your specific roof. The investment in professional cleaning is significantly less than premature roof replacement caused by organic growth damage.',
      },
      {
        question: 'How often should I have my roof cleaned?',
        answer: 'Cleaning frequency depends on your environment and roof type. In humid or tree-heavy areas, clean every 3-5 years with traditional pressure washing or softwashing. With our roof treatment method, this extends to 7-10+ years of protection. Roofs in shaded areas or under trees may need more frequent attention. Regular inspections help determine the best timing for your specific situation.',
      },
      {
        question: 'Is roof cleaning safe for my tiles?',
        answer: 'When performed by professionals using proper methods, roof cleaning is completely safe for your tiles. We use soft washing techniques rather than high-pressure washing, which can damage tiles, dislodge ridge caps, or force water under tiles. Our biocidal treatments kill organic growth without harsh scrubbing. We also understand proper roof walking techniques to prevent tile breakage. DIY roof cleaning often causes damage due to incorrect methods or unsafe practices.',
      },
      {
        question: 'Will roof cleaning damage my gutters or garden?',
        answer: 'No. We take precautions to protect your gutters, gardens, and other property. Gutter guards are noted and worked around carefully. The biocidal treatments we use break down quickly and are safe for gardens when diluted. We rinse gardens before and after treatment if necessary. Any debris removed from the roof is collected and disposed of responsibly rather than left in your gutters or garden beds.',
      },
      {
        question: 'Can you clean Colorbond roofs?',
        answer: 'Yes, we safely clean Colorbond and other metal roofs. Metal roofs accumulate dirt, lichen, and oxidation that diminish their appearance. We use gentle cleaning methods specifically designed for metal roofing that won\'t scratch or damage the protective coating. Regular cleaning of Colorbond roofs maintains their appearance and protective qualities. We avoid high-pressure washing that can force water into roof joints or damage the finish.',
      },
      {
        question: 'Do you offer roof coating or painting after cleaning?',
        answer: 'While we specialize in roof cleaning, we can recommend trusted local roof coating and painting professionals if you\'re interested in these services after cleaning. Roof cleaning is actually an essential first step before any coating or painting—it ensures proper adhesion and long-lasting results. Many of our clients find that after professional cleaning, their roof looks so good that coating isn\'t necessary.',
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
      'Professional Roof Cleaning Perth',
      serviceData.metaDescription,
      '/residential/roof-cleaning',
      ['Tile Roof Cleaning', 'Colorbond Roof Cleaning', 'Moss Removal', 'Lichen Treatment']
    ),
    faqSchema
  );

  return (
    <main>
      <SEO
        title={serviceData.title}
        description={serviceData.metaDescription}
        canonical="/residential/roof-cleaning"
        structuredData={structuredData}
      />
      <ServiceHero
        title={serviceData.title}
        subtitle={serviceData.subtitle}
        imageQuery={serviceData.heroImage}
        backgroundImage="https://iigpdyyiqskohqejmqob.supabase.co/storage/v1/object/sign/make-bb20e683-images/general/1771566061729-726a11fe-e735-444a-a983-1cd3975a6a34.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9hMjhhMmJhNi1lYjVhLTQ5OGQtODVlMC0wZTUxMmZiNDJhNzIiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJtYWtlLWJiMjBlNjgzLWltYWdlcy9nZW5lcmFsLzE3NzE1NjYwNjE3MjktNzI2YTExZmUtZTczNS00NDRhLWE5ODMtMWNkMzk3NWE2YTM0LnBuZyIsImlhdCI6MTc3MTU2NjA2MiwiZXhwIjoxODAzMTAyMDYyfQ.97U3vb4jkgy_Id7SHKfkZKCz_tAuz5ThmaVlynQPCiQ"
      />
      <ServiceTrust />
      <RoofByNumbers />
      <ServiceBenefits
        intro={serviceData.benefits.intro}
        points={serviceData.benefits.points}
        closing={serviceData.benefits.closingCopy}
        serviceName="Roof Cleaning"
      />
      <RoofBeforeAfter serviceName="roof" />
      <RoofMethodsComparison />
      <RoofTreatmentDetail />
      <ServiceProcess steps={serviceData.process} />
      <ServiceReviews reviews={serviceData.reviews} />
      <ServiceFAQ faqs={serviceData.faqs} serviceName="roof cleaning" />
      <ServiceCTA 
        serviceName="Roof"
        descriptionPlaceholder="Tell us about your roof cleaning needs..."
      />
    </main>
  );
}