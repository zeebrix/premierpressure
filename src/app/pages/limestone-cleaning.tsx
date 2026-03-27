import { ServiceHero } from '../components/service/service-hero';
import { ServiceTrust } from '../components/service/service-trust';
import { LimestoneBeforeAfter } from '../components/service/limestone-before-after';
import { ServiceBenefits } from '../components/service/service-benefits';
import { ServiceProcess } from '../components/service/service-process';
import { ServiceReviews } from '../components/service/service-reviews';
import { ServiceFAQ } from '../components/service/service-faq';
import { ServiceCTA } from '../components/service/service-cta';
import { SEO } from '../components/seo';
import { generateLocalBusinessSchema, generateServiceSchema, combineSchemas } from '../utils/local-business-schema';

export function LimestoneCleaningPage() {
  const serviceData = {
    title: 'Professional Limestone Cleaning in Perth',
    subtitle: 'Specialist cleaning and restoration services that bring your limestone surfaces back to life',
    metaDescription: 'Expert limestone cleaning services in Perth. Restore walls, pavers, and features with gentle, effective cleaning. Free quotes. Fully insured.',
    heroImage: 'limestone wall cleaning',
    
    reviews: [
      {
        name: 'Michael Chen',
        date: '3 weeks ago',
        rating: 5,
        text: 'Our limestone retaining wall was covered in black algae and looked terrible. Premier Pressure Solutions WA did an amazing job - it looks brand new! They were very careful with the delicate stone and the results exceeded our expectations.',
        avatar: 'MC',
      },
      {
        name: 'Linda Patterson',
        date: '1 month ago',
        rating: 5,
        text: 'Fantastic limestone cleaning service! They removed years of staining from our limestone feature wall without any damage. Very knowledgeable about working with natural stone. Would absolutely recommend.',
        avatar: 'LP',
      },
      {
        name: 'David Williams',
        date: '2 weeks ago',
        rating: 5,
        text: 'Professional service from start to finish. Our limestone paving and walls look incredible after cleaning. They also sealed them which has made a huge difference. Great value and highly skilled team.',
        avatar: 'DW',
      },
    ],
    
    benefits: {
      intro: `Limestone is one of Perth's most popular building materials, prized for its natural beauty and durability. However, limestone is also porous and susceptible to staining, organic growth, and weathering. Without proper care, limestone surfaces can become discoloured, develop unsightly black or green staining, and lose their original lustre. At Premier Pressure Solutions WA, we specialise in professional limestone cleaning services across Perth, using gentle yet effective techniques specifically designed for this delicate natural stone.

Our Perth-based team has extensive experience working with all types of limestone surfaces—from retaining walls and house facades to paving and feature walls. We understand that limestone requires a different approach than standard concrete or brick cleaning. Using incorrect pressure settings or harsh chemicals can permanently damage limestone, causing pitting, surface erosion, or colour changes.

We employ specialised low-pressure cleaning methods combined with limestone-safe cleaning solutions to remove dirt, organic growth, efflorescence, and staining while preserving the integrity of your stone. Our approach restores the natural beauty of your limestone without causing damage, and we can also apply protective sealers to help maintain results and prevent future staining.`,
      
      points: [
        'Remove black algae, moss, and organic staining',
        'Eliminate efflorescence (white salt deposits)',
        'Restore natural colour and appearance',
        'Gentle cleaning methods safe for delicate limestone',
        'Prevent permanent damage from DIY cleaning attempts',
        'Extend the lifespan of your limestone surfaces',
        'Optional sealing to protect against future staining',
        'Experienced with all Perth limestone varieties',
      ],
      
      closingCopy: `Don't risk damaging your valuable limestone with inappropriate cleaning methods. Our professional limestone cleaning services in Perth deliver beautiful results while protecting your investment. We understand the unique properties of limestone and adjust our techniques accordingly to ensure safe, effective cleaning every time. Trust our experienced team to restore your limestone to its natural beauty.`,
    },
    
    process: [
      {
        title: 'Assessment',
        description: 'We carefully inspect your limestone to identify the type of staining, degree of organic growth, and determine the safest cleaning approach.',
      },
      {
        title: 'Pre-Treatment',
        description: 'Organic growth and stubborn stains are treated with limestone-safe cleaning solutions designed to break down contaminants without damaging the stone.',
      },
      {
        title: 'Gentle Cleaning',
        description: 'Using low-pressure techniques and soft washing methods, we thoroughly clean your limestone while protecting its delicate surface.',
      },
      {
        title: 'Sealing (Optional)',
        description: 'Apply premium limestone sealer to protect against future staining, enhance colour, and make maintenance easier.',
      },
    ],
    
    faqs: [
      {
        question: 'How much does limestone cleaning cost in Perth?',
        answer: 'Limestone cleaning costs in Perth typically range from $200 to $600 depending on the size of the area, height (for walls), accessibility, and severity of staining. We provide free quotes after assessing your specific limestone surfaces. Factors affecting cost include surface area, level of organic growth or staining, height and access requirements, and whether sealing is required.',
      },
      {
        question: 'Can pressure cleaning damage limestone?',
        answer: 'Yes, high-pressure cleaning can definitely damage limestone. Limestone is a soft, porous stone that can be easily pitted, eroded, or discoloured by excessive pressure or harsh chemicals. That is why professional limestone cleaning services are essential. We use low-pressure washing techniques and limestone-safe cleaning solutions specifically designed to clean effectively without causing damage. DIY pressure cleaning is the most common cause of limestone damage.',
      },
      {
        question: 'Why does my limestone have black stains?',
        answer: 'Black staining on limestone is typically caused by algae, mould, or lichen growth. The porous nature of limestone combined with Perth climate conditions create ideal environments for these organisms to thrive, especially in shaded or damp areas. The black staining penetrates deep into the stone rather than sitting on the surface, which is why simple washing cannot remove it. Professional cleaning with appropriate biocidal treatments is required to kill the organisms and remove the staining.',
      },
      {
        question: 'How often should limestone be cleaned?',
        answer: 'Most Perth limestone surfaces benefit from professional cleaning every 2-3 years. However, limestone in shaded areas, near gardens, or exposed to sprinkler systems may need annual cleaning due to faster organic growth. Regular cleaning prevents deep staining that becomes harder to remove over time. After cleaning, applying a quality sealer can extend the time between cleanings and make future maintenance easier.',
      },
      {
        question: 'What is efflorescence and can it be removed?',
        answer: 'Efflorescence is the white, powdery salt deposit that appears on limestone and other masonry surfaces. It occurs when moisture moves through the stone and brings salts to the surface, which crystallize as the water evaporates. Yes, efflorescence can be removed with professional cleaning, though it may return if moisture issues persist. We can remove existing efflorescence and recommend sealing to help prevent future occurrences.',
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
    url: 'https://www.premierpressuresolutionswa.com.au',
    logo: 'https://iigpdyyiqskohqejmqob.supabase.co/storage/v1/object/sign/make-bb20e683-images/general/1771574477338-80d6d2fc-ec14-4508-b0e8-5bae0c9df45d.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9hMjhhMmJhNi1lYjVhLTQ5OGQtODVlMC0wZTUxMmZiNDJhNzIiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJtYWtlLWJiMjBlNjgzLWltYWdlcy9nZW5lcmFsLzE3NzE1NzQ0NzczMzgtODBkNmQyZmMtZWMxNC00NTA4LWIwZTgtNWJhZTBjOWRmNDVkLnBuZyIsImlhdCI6MTc3MTU3NDQ3NywiZXhwIjoxODAzMTEwNDc3fQ.cUoBmQEnmX6fReUUHoQDoqk5bRZk7JVy95oiobzMJHg',
    address: {
      streetAddress: '123 Main St',
      addressLocality: 'Perth',
      addressRegion: 'WA',
      postalCode: '6000',
      addressCountry: 'Australia'
    },
    telephone: '+61 8 1234 5678',
    email: 'info@premierpressuresolutionswa.com.au',
    openingHoursSpecification: [
      {
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '08:00',
        closes: '17:00'
      }
    ],
    image: 'https://iigpdyyiqskohqejmqob.supabase.co/storage/v1/object/sign/make-bb20e683-images/general/1771574477338-80d6d2fc-ec14-4508-b0e8-5bae0c9df45d.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9hMjhhMmJhNi1lYjVhLTQ5OGQtODVlMC0wZTUxMmZiNDJhNzIiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJtYWtlLWJiMjBlNjgzLWltYWdlcy9nZW5lcmFsLzE3NzE1NzQ0NzczMzgtODBkNmQyZmMtZWMxNC00NTA4LWIwZTgtNWJhZTBjOWRmNDVkLnBuZyIsImlhdCI6MTc3MTU3NDQ3NywiZXhwIjoxODAzMTEwNDc3fQ.cUoBmQEnmX6fReUUHoQDoqk5bRZk7JVy95oiobzMJHg',
    description: 'Premier Pressure Solutions WA provides professional cleaning and restoration services for a wide range of surfaces, including limestone, in Perth and surrounding areas.',
    sameAs: [
      'https://www.facebook.com/PremierPressureSolutionsWA',
      'https://www.instagram.com/premierpressuresolutionswa/'
    ]
  });

  // Service Schema
  const serviceSchema = generateServiceSchema({
    name: 'Limestone Cleaning',
    url: 'https://www.premierpressuresolutionswa.com.au/residential/limestone-cleaning',
    image: 'https://iigpdyyiqskohqejmqob.supabase.co/storage/v1/object/sign/make-bb20e683-images/general/1771574477338-80d6d2fc-ec14-4508-b0e8-5bae0c9df45d.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9hMjhhMmJhNi1lYjVhLTQ5OGQtODVlMC0wZTUxMmZiNDJhNzIiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJtYWtlLWJiMjBlNjgzLWltYWdlcy9nZW5lcmFsLzE3NzE1NzQ0NzczMzgtODBkNmQyZmMtZWMxNC00NTA4LWIwZTgtNWJhZTBjOWRmNDVkLnBuZyIsImlhdCI6MTc3MTU3NDQ3NywiZXhwIjoxODAzMTEwNDc3fQ.cUoBmQEnmX6fReUUHoQDoqk5bRZk7JVy95oiobzMJHg',
    description: 'Professional limestone cleaning services in Perth. Restore walls, pavers, and features with gentle, effective cleaning. Free quotes. Fully insured.',
    provider: {
      name: 'Premier Pressure Solutions WA',
      url: 'https://www.premierpressuresolutionswa.com.au'
    }
  });

  // Combined Schema
  const combinedSchema = combineSchemas(localBusinessSchema, serviceSchema);

  return (
    <main>
      <SEO
        title={serviceData.title}
        description={serviceData.metaDescription}
        canonical="/residential/limestone-cleaning"
        structuredData={combinedSchema}
      />
      <ServiceHero
        title={serviceData.title}
        subtitle={serviceData.subtitle}
        imageQuery={serviceData.heroImage}
        backgroundImage="https://iigpdyyiqskohqejmqob.supabase.co/storage/v1/object/sign/make-bb20e683-images/general/1771574477338-80d6d2fc-ec14-4508-b0e8-5bae0c9df45d.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9hMjhhMmJhNi1lYjVhLTQ5OGQtODVlMC0wZTUxMmZiNDJhNzIiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJtYWtlLWJiMjBlNjgzLWltYWdlcy9nZW5lcmFsLzE3NzE1NzQ0NzczMzgtODBkNmQyZmMtZWMxNC00NTA4LWIwZTgtNWJhZTBjOWRmNDVkLnBuZyIsImlhdCI6MTc3MTU3NDQ3NywiZXhwIjoxODAzMTEwNDc3fQ.cUoBmQEnmX6fReUUHoQDoqk5bRZk7JVy95oiobzMJHg"
      />
      <ServiceTrust />
      <LimestoneBeforeAfter serviceName="limestone" />
      <ServiceBenefits
        intro={serviceData.benefits.intro}
        points={serviceData.benefits.points}
        closing={serviceData.benefits.closingCopy}
        serviceName="Limestone Cleaning"
      />
      <ServiceProcess steps={serviceData.process} />
      <ServiceReviews reviews={serviceData.reviews} />
      <ServiceFAQ faqs={serviceData.faqs} serviceName="limestone cleaning" />
      <ServiceCTA 
        serviceName="Limestone"
        descriptionPlaceholder="Tell us about your limestone cleaning needs..."
      />
    </main>
  );
}