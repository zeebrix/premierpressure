import { ServiceHero } from '../components/service/service-hero';
import { ServiceTrust } from '../components/service/service-trust';
import { PresaleBeforeAfter } from '../components/service/presale-before-after';
import { ServiceBenefits } from '../components/service/service-benefits';
import { ServiceProcess } from '../components/service/service-process';
import { ServiceReviews } from '../components/service/service-reviews';
import { ServiceFAQ } from '../components/service/service-faq';
import { ServiceCTA } from '../components/service/service-cta';
import { SEO } from '../components/seo';
import { generateLocalBusinessSchema, generateServiceSchema, combineSchemas } from '../utils/local-business-schema';

export function PresaleCleaningPage() {
  const serviceData = {
    title: 'Pre-Sale & End of Lease Cleaning in Perth',
    subtitle: 'Maximum impact cleaning that increases property value and helps secure bonds',
    metaDescription: 'Professional pre-sale and end of lease cleaning in Perth. Complete exterior transformation. Boost property value. Secure your bond. Free quotes.',
    
    reviews: [
      {
        name: 'Christine Baker',
        date: '2 weeks ago',
        rating: 5,
        text: 'Used Premier Pressure Solutions WA before listing our house for sale. The transformation was amazing! Our agent said it made a huge difference to buyer interest. Sold for more than expected. Worth every cent!',
        avatar: 'CB',
      },
      {
        name: 'Tom Richards',
        date: '3 weeks ago',
        rating: 5,
        text: 'End of lease cleaning for our rental property. They cleaned everything - house, driveway, paths, even the bins! Got our full bond back. The landlord was impressed with the condition. Highly recommend!',
        avatar: 'TR',
      },
      {
        name: 'Natalie Scott',
        date: '1 month ago',
        rating: 5,
        text: 'Perfect pre-sale cleaning service. They cleaned the entire exterior, driveway, patio, and roof. Photos looked fantastic and we had multiple offers. Great investment before selling.',
        avatar: 'NS',
      },
    ],
    
    benefits: {
      intro: `First impressions are everything in real estate. Whether you're selling your home or vacating a rental property, the exterior condition dramatically impacts buyer interest, sale price, and your ability to secure your full bond refund. Properties with clean, well-maintained exteriors sell faster and for higher prices, while tenants with spotless properties are far more likely to receive their full bond back without deductions. At Premier Pressure Solutions WA, we specialise in comprehensive pre-sale and end of lease exterior cleaning services across Perth, delivering transformative results that help you achieve your property goals.

Our complete exterior cleaning package is specifically designed for property transitions. We understand what real estate agents look for, what impresses buyers at inspections, and what property managers scrutinize during final inspections. We clean every visible exterior surface—house walls, driveways, pathways, patios, decking, roof, gutters, windows, fences, and more—creating that crucial "wow factor" that makes properties stand out in a competitive market.

Unlike basic cleaning services, our pre-sale and end of lease package is thorough and comprehensive. We don't just clean the obvious areas—we target every detail that buyers and property managers notice. Mouldy eaves, stained driveways, dirty windows, and algae-covered paths all detract from your property's appeal and value. Our systematic approach addresses all these issues, presenting your property in its absolute best condition and maximizing your return on investment whether you're selling or moving out.`,
      
      points: [
        'Complete exterior transformation in one service',
        'Increase property value and buyer appeal',
        'Pass end of lease inspections and secure full bond',
        'House washing, driveway, paths, and patio cleaning',
        'Roof cleaning, gutter cleaning, and window washing',
        'Fence, deck, and outdoor area restoration',
        'Remove all mould, stains, and organic growth',
        'Fast turnaround to meet settlement or moving dates',
      ],
      
      closingCopy: `Don't leave money on the table or risk bond deductions due to a neglected exterior. Our pre-sale and end of lease cleaning service is an investment that pays for itself many times over through higher sale prices, faster sales, and full bond returns. We work to your timeline, delivering outstanding results when you need them. Trust Premier Pressure Solutions WA to present your property at its absolute best.`,
    },
    
    process: [
      {
        title: 'Property Walkthrough',
        description: 'We conduct a comprehensive inspection of all exterior areas, identifying every surface requiring cleaning and discussing your specific requirements and timeline.',
      },
      {
        title: 'Customized Cleaning Plan',
        description: 'Based on your property type and goals (pre-sale or end of lease), we create a detailed cleaning plan covering all necessary areas to meet your objectives.',
      },
      {
        title: 'Comprehensive Exterior Clean',
        description: 'Our team systematically cleans all exterior surfaces—house walls, roof, gutters, driveway, paths, patio, deck, fences, and windows—using appropriate methods for each surface.',
      },
      {
        title: 'Detail Work & Problem Areas',
        description: 'We focus on commonly overlooked details like eaves, downpipes, outdoor fixtures, garage doors, and garden edges that property managers and buyers always notice.',
      },
      {
        title: 'Final Inspection & Sign-off',
        description: 'We conduct a thorough final check ensuring every area meets our high standards. You receive before and after photos documenting the transformation.',
      },
    ],
    
    faqs: [
      {
        question: 'How much does pre-sale or end of lease cleaning cost?',
        answer: 'Pre-sale and end of lease exterior cleaning packages in Perth typically range from $800-$2,500 depending on property size, number of storeys, exterior condition, and specific services required. A standard three-bedroom home with house wash, driveway, paths, windows, and basic gutter clean usually costs $1,200-$1,600. Larger properties or those requiring roof cleaning, extensive paver cleaning, or heavy mould treatment cost more. We provide detailed quotes after inspecting your property so you know exactly what to expect.',
      },
      {
        question: 'How long before settlement or moving out should I book?',
        answer: 'Ideally, book your pre-sale cleaning 1-2 weeks before listing your property or before professional photos are taken. This ensures maximum impact on buyer interest from day one. For end of lease cleaning, book at least one week before your final inspection to allow time for the cleaning and any touch-ups if needed. We can accommodate shorter notice in many cases, but advance booking ensures we can schedule you at your preferred time, especially during busy periods.',
      },
      {
        question: 'Will this help me get my full bond back?',
        answer: 'A professionally cleaned exterior significantly improves your chances of receiving your full bond refund. Property managers commonly deduct bond money for dirty driveways, mouldy walls, filthy gutters, and stained patios. Our comprehensive exterior cleaning addresses all these issues, presenting the property in excellent condition. While we focus on exterior cleaning, most bond claims relate to obvious neglect that buyers and property managers immediately notice—exactly what our service eliminates.',
      },
      {
        question: 'Does pre-sale cleaning really increase property value?',
        answer: 'Absolutely. Industry research shows that well-presented properties sell for 5-10% more than equivalent properties in poor condition, and sell significantly faster. Buyers form impressions within seconds of arriving, and a clean, well-maintained exterior suggests the entire property has been cared for. This creates higher offers and more competitive bidding. The cost of professional cleaning is minimal compared to the potential increase in sale price—it\'s one of the highest-return investments you can make when selling.',
      },
      {
        question: 'What\'s included in the pre-sale/end of lease package?',
        answer: 'Our comprehensive package includes house washing (all exterior walls, eaves, fascias), driveway and pathway cleaning, patio or alfresco area cleaning, external window cleaning, gutter external cleaning, and removal of cobwebs and wasp nests. We can add roof cleaning, internal gutter cleaning, fence cleaning, deck restoration, paver sealing, and other services as needed. Every package is customized to your property and requirements—we\'ll recommend what will deliver the best results for your situation.',
      },
      {
        question: 'Can you work around my settlement or moving schedule?',
        answer: 'Yes, we understand property transitions have strict timelines. We offer flexible scheduling including weekends and can often accommodate urgent requests. Once booked, we prioritize meeting your deadline whether it\'s settlement day, a final inspection date, or professional photography. Most complete pre-sale/end of lease cleans take 1-2 days depending on property size. We\'ll provide a clear timeline when we quote so you can plan accordingly.',
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
    address: '123 Main St, Perth, WA 6000',
    phone: '+61 412 345 678',
    email: 'info@premierpressuresolutionswa.com',
    url: 'https://www.premierpressuresolutionswa.com',
    openingHours: 'Mo-Fr 08:00-17:00',
    description: 'Professional pre-sale and end of lease cleaning in Perth. Complete exterior transformation. Boost property value. Secure your bond. Free quotes.',
    image: 'https://iigpdyyiqskohqejmqob.supabase.co/storage/v1/object/sign/make-bb20e683-images/general/1771566509962-32e36156-e863-4ba5-82fe-935bff54406d.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9hMjhhMmJhNi1lYjVhLTQ5OGQtODVlMC0wZTUxMmZiNDJhNzIiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJtYWtlLWJiMjBlNjgzLWltYWdlcy9nZW5lcmFsLzE3NzE1NjY1MDk5NjItMzJlMzYxNTYtZTg2My00YmE1LTgyZmUtOTM1YmZmNTQ0MDZkLnBuZyIsImlhdCI6MTc3MTU2NjUxMCwiZXhwIjoxODAzMTAyNTEwfQ.xNN0I9YKJS9aZPq_w1xQi17A5hyO880RpZUEC4b2FZo'
  });

  // Service Schema
  const serviceSchema = generateServiceSchema({
    name: 'Pre-Sale & End of Lease Cleaning',
    description: 'Professional pre-sale and end of lease cleaning in Perth. Complete exterior transformation. Boost property value. Secure your bond. Free quotes.',
    url: 'https://www.premierpressuresolutionswa.com/residential/presale-cleaning',
    image: 'https://iigpdyyiqskohqejmqob.supabase.co/storage/v1/object/sign/make-bb20e683-images/general/1771566509962-32e36156-e863-4ba5-82fe-935bff54406d.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9hMjhhMmJhNi1lYjVhLTQ5OGQtODVlMC0wZTUxMmZiNDJhNzIiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJtYWtlLWJiMjBlNjgzLWltYWdlcy9nZW5lcmFsLzE3NzE1NjY1MDk5NjItMzJlMzYxNTYtZTg2My00YmE1LTgyZmUtOTM1YmZmNTQ0MDZkLnBuZyIsImlhdCI6MTc3MTU2NjUxMCwiZXhwIjoxODAzMTAyNTEwfQ.xNN0I9YKJS9aZPq_w1xQi17A5hyO880RpZUEC4b2FZo'
  });

  // Combined Schema
  const combinedSchema = combineSchemas(localBusinessSchema, serviceSchema);

  return (
    <main>
      <SEO
        title={serviceData.title}
        description={serviceData.metaDescription}
        canonical="/residential/presale-cleaning"
        structuredData={combinedSchema}
      />
      <ServiceHero
        title={serviceData.title}
        subtitle={serviceData.subtitle}
        imageQuery={serviceData.heroImage}
        backgroundImage="https://iigpdyyiqskohqejmqob.supabase.co/storage/v1/object/sign/make-bb20e683-images/general/1771566509962-32e36156-e863-4ba5-82fe-935bff54406d.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9hMjhhMmJhNi1lYjVhLTQ5OGQtODVlMC0wZTUxMmZiNDJhNzIiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJtYWtlLWJiMjBlNjgzLWltYWdlcy9nZW5lcmFsLzE3NzE1NjY1MDk5NjItMzJlMzYxNTYtZTg2My00YmE1LTgyZmUtOTM1YmZmNTQ0MDZkLnBuZyIsImlhdCI6MTc3MTU2NjUxMCwiZXhwIjoxODAzMTAyNTEwfQ.xNN0I9YKJS9aZPq_w1xQi17A5hyO880RpZUEC4b2FZo"
      />
      <ServiceTrust />
      <PresaleBeforeAfter serviceName="presale" />
      <ServiceBenefits
        intro={serviceData.benefits.intro}
        points={serviceData.benefits.points}
        closing={serviceData.benefits.closingCopy}
        serviceName="Pre-Sale & End of Lease Cleaning"
      />
      <ServiceProcess steps={serviceData.process} />
      <ServiceReviews reviews={serviceData.reviews} />
      <ServiceFAQ faqs={serviceData.faqs} serviceName="pre-sale and end of lease cleaning" />
      <ServiceCTA 
        serviceName="Property"
        descriptionPlaceholder="Tell us about your pre-sale or end of lease cleaning needs..."
      />
    </main>
  );
}