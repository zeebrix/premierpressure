import { ServiceHero } from '../components/service/service-hero';
import { ServiceTrust } from '../components/service/service-trust';
import { ConcreteBeforeAfter } from '../components/service/concrete-before-after';
import { ServiceBenefits } from '../components/service/service-benefits';
import { ServiceProcess } from '../components/service/service-process';
import { ServiceReviews } from '../components/service/service-reviews';
import { ServiceFAQ } from '../components/service/service-faq';
import { ServiceCTA } from '../components/service/service-cta';
import { SEO } from '../components/seo';
import { generateLocalBusinessSchema, generateServiceSchema, combineSchemas } from '../utils/local-business-schema';

export function ConcreteCleaningPage() {
  const serviceData = {
    title: 'Professional Concrete Cleaning Services in Perth',
    subtitle: 'Expert cleaning for all concrete surfaces including exposed aggregate, driveways, patios, pathways, and pool surrounds',
    metaDescription: 'Specialist concrete cleaning in Perth. Exposed aggregate restoration, driveway cleaning, patio cleaning. Remove stains, mould & grime. Free quotes.',
    heroImage: 'concrete pressure cleaning',
    
    reviews: [
      {
        name: 'Michael Anderson',
        date: '2 weeks ago',
        rating: 5,
        text: 'Had our exposed aggregate driveway and paths professionally cleaned by Premier Pressure Solutions WA. The results are phenomenal - the stones are bright and vibrant again! They were extremely careful not to dislodge any aggregate and the finish is perfect. Best concrete cleaning service in Perth, hands down.',
        avatar: 'MA',
      },
      {
        name: 'Lisa Bennett',
        date: '3 weeks ago',
        rating: 5,
        text: 'Our concrete pool surround had years of algae buildup and black staining. The team completely transformed it - looks better than when it was first laid! They protected all our plants and pool equipment. Very professional service and excellent value.',
        avatar: 'LB',
      },
      {
        name: 'David Wu',
        date: '1 month ago',
        rating: 5,
        text: 'Used them for our warehouse concrete floor cleaning and outdoor concrete areas. Removed oil stains, tyre marks, and years of industrial grime. The exposed aggregate entry looks spectacular. Extremely reliable and efficient team. Highly recommend for commercial concrete cleaning.',
        avatar: 'DW',
      },
    ],
    
    benefits: {
      intro: `Concrete surfaces are the workhorses of Perth properties—from exposed aggregate driveways to plain concrete patios, pathways, pool surrounds, and commercial floors. While incredibly durable, concrete is porous and absorbs stains, oils, and contaminants over time. Without proper maintenance, even high-quality concrete can look dull, stained, and prematurely aged.

Premier Pressure Solutions WA specialises in professional concrete cleaning services throughout Perth, with particular expertise in exposed aggregate restoration. Our team understands the unique characteristics of different concrete finishes and uses tailored cleaning methods to achieve outstanding results without causing surface damage.

Exposed aggregate concrete requires special care—aggressive cleaning can dislodge stones and damage the surface, while insufficient pressure leaves stains behind. We use precisely calibrated equipment and proven techniques developed specifically for Perth's concrete surfaces. Whether it's removing stubborn oil stains from workshop floors, restoring the vibrant appearance of decorative exposed aggregate, cleaning plain concrete driveways, or rejuvenating stained pool surrounds, we deliver transformative results every time.

Our concrete cleaning services extend beyond residential properties to include commercial warehouses, retail spaces, body corporate common areas, and industrial sites. We handle projects of all sizes with the same attention to detail and commitment to excellence.`,
      
      points: [
        'Specialist exposed aggregate cleaning and restoration',
        'Remove oil stains, rust marks, tyre tracks, and efflorescence',
        'Eliminate mould, algae, and organic growth from concrete surfaces',
        'Restore vibrant colour to decorative concrete and aggregate',
        'Clean plain concrete, stamped concrete, and coloured concrete',
        'Pool surround concrete cleaning (safe for all pool types)',
        'Commercial concrete floor cleaning for warehouses and retail',
        'Pathway, patio, and driveway concrete cleaning',
        'Pre-sealing cleaning for maximum protection',
        'Safe cleaning methods that won\'t damage or dislodge aggregate',
        'Eco-friendly products safe for gardens, pets, and pool water',
        'Fully insured service with satisfaction guarantee',
      ],
      
      closingCopy: `Don't settle for dull, stained concrete that diminishes your property's appearance. Our specialist concrete cleaning services in Perth bring surfaces back to life, often exceeding the original installation quality. We take immense pride in our concrete cleaning results, particularly our exposed aggregate restoration work. Every project includes careful surface assessment, appropriate cleaning methods, and optional sealing to protect your investment for years to come.`,
    },
    
    process: [
      {
        title: 'Surface Assessment',
        description: 'We inspect your concrete to identify the finish type (exposed aggregate, plain, stamped, etc.), assess staining levels, and test surface condition to determine the safest, most effective cleaning approach.',
      },
      {
        title: 'Pre-Treatment',
        description: 'Stubborn stains including oil, rust, and organic growth are treated with specialized solutions. For exposed aggregate, we use gentle pre-treatments that won\'t affect the binding matrix.',
      },
      {
        title: 'Precision Cleaning',
        description: 'Using commercial-grade equipment with carefully calibrated pressure settings, we thoroughly clean your concrete. Exposed aggregate receives special attention to reveal stones without dislodging them.',
      },
      {
        title: 'Post-Clean Inspection & Optional Sealing',
        description: 'We inspect the cleaned surface to ensure complete stain removal and uniform appearance. We can then apply premium concrete sealer to protect against future staining and weather damage.',
      },
    ],
    
    faqs: [
      {
        question: 'What is exposed aggregate concrete and why does it need special cleaning?',
        answer: 'Exposed aggregate concrete is a decorative finish where the top layer is removed to reveal the stones (aggregate) beneath. It requires special cleaning because excessive pressure or incorrect techniques can dislodge the stones, damage the surface, or create an uneven appearance. Our technicians are specifically trained in exposed aggregate cleaning, using precise pressure settings and specialized nozzles to clean between stones without causing damage. This expertise ensures your decorative concrete maintains its beauty and integrity.',
      },
      {
        question: 'Is pressure cleaning safe for all types of concrete?',
        answer: 'When performed correctly, yes. However, different concrete finishes require different approaches. Plain concrete can typically handle higher pressure, while exposed aggregate, stamped concrete, and coloured concrete need more careful treatment. Newly poured concrete (less than 6 months old) may also need gentler cleaning. This is why professional assessment is crucial—we adjust our pressure, temperature, and techniques based on your specific concrete type and condition. DIY pressure cleaning often causes damage through incorrect pressure or technique.',
      },
      {
        question: 'How much does concrete cleaning cost in Perth?',
        answer: 'Concrete cleaning costs vary based on several factors: surface area, concrete type, staining level, and accessibility. Typical residential projects range from $200-$600 for standard driveways and patios. Exposed aggregate cleaning may cost slightly more due to the specialized care required. Commercial concrete cleaning is quoted based on square meterage. We provide free, detailed quotes after assessing your specific concrete surfaces. All quotes include pre-treatment of stains and post-clean surface rinse.',
      },
      {
        question: 'Can you remove oil stains from concrete?',
        answer: 'Yes, we excel at removing oil stains from concrete surfaces. Oil stains are one of the most common and stubborn concrete contaminants we deal with. We use industrial-strength degreasers combined with hot water pressure cleaning to break down and extract oil from porous concrete. While very old or deeply penetrated oil stains may leave faint shadows, we typically achieve 80-95% removal. The key is treating oil stains as soon as possible, and sealing the concrete afterward prevents future oil penetration and makes cleaning easier.',
      },
      {
        question: 'Should I seal my concrete after cleaning?',
        answer: 'We strongly recommend sealing concrete after professional cleaning, especially for exposed aggregate and decorative finishes. Sealing provides multiple benefits: prevents oil and stain penetration, enhances colour vibrancy, protects against weather damage, makes future cleaning easier, and significantly extends surface life. For exposed aggregate, sealing also helps lock in the stones and prevent erosion. We use premium breathable sealers that allow moisture to escape while blocking contaminants. The cost is modest compared to the long-term protection it provides.',
      },
      {
        question: 'Can you clean concrete pool surrounds safely?',
        answer: 'Absolutely. Pool surround concrete cleaning is one of our most popular services. We take special precautions to protect your pool water and equipment. Our process includes covering pool returns and skimmers, using pool-safe cleaning products, and ensuring all runoff is directed away from the pool where possible. We clean the coping, surround deck, and any adjacent concrete pathways. The result is a safe, non-slip surface free from algae and staining. For saltwater pools, we also remove salt residue that can cause deterioration.',
      },
      {
        question: 'How long does concrete cleaning take and when can I use the area again?',
        answer: 'A typical residential concrete cleaning project (driveway, paths, patio) takes 3-5 hours depending on size and condition. You can walk on the surface immediately after cleaning, though we recommend waiting 30 minutes for it to fully dry. If you opt for sealing, you\'ll need to stay off the surface for 24 hours while the sealer cures. For driveways, we recommend waiting 48 hours before parking vehicles on newly sealed concrete. Commercial projects are scheduled to minimize disruption to your business operations.',
      },
      {
        question: 'Do you clean commercial concrete and warehouse floors?',
        answer: 'Yes, commercial and industrial concrete cleaning is a significant part of our business. We regularly clean warehouse floors, retail frontages, body corporate driveways, shopping center walkways, and industrial yards. We have the equipment capacity to handle large areas efficiently and can work outside business hours to avoid disrupting operations. Our commercial clients appreciate our reliability, safety compliance, and ability to remove heavy industrial staining including oils, chemicals, tyre marks, and forklift marks. We provide regular maintenance contracts for ongoing concrete care.',
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
    email: 'info@premierpressure.com.au',
    url: 'https://www.premierpressure.com.au',
    openingHours: 'Mo-Fr 08:00-17:00',
    serviceArea: 'Perth, WA',
    logo: 'https://iigpdyyiqskohqejmqob.supabase.co/storage/v1/object/sign/make-bb20e683-images/general/1770898565467-334b999e-9e43-4d7c-8eab-8846931ed66a.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9hMjhhMmJhNi1lYjVhLTQ5OGQtODVlMC0wZTUxMmZiNDJhNzIiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJtYWtlLWJiMjBlNjgzLWltYWdlcy9nZW5lcmFsLzE3NzA4OTg1NjU0NjctMzM0Yjk5OWUtOWU0My00ZDdjLThlYWItODg0NjkzMWVkNjZhLnBuZyIsImlhdCI6MTc3MDg5ODU2NSwiZXhwIjoxODAyNDM0NTY1fQ.WWNkpanJKjc9TzLcQliuXvSFr7PdJkwxL6hqLrFa4bk'
  });

  // Service Schema
  const serviceSchema = generateServiceSchema({
    name: 'Concrete Cleaning',
    description: 'Professional concrete cleaning services in Perth, including exposed aggregate restoration, driveway cleaning, patio cleaning, and pool surround cleaning.',
    url: 'https://www.premierpressure.com.au/residential/concrete-cleaning',
    image: 'https://iigpdyyiqskohqejmqob.supabase.co/storage/v1/object/sign/make-bb20e683-images/general/1770898565467-334b999e-9e43-4d7c-8eab-8846931ed66a.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9hMjhhMmJhNi1lYjVhLTQ5OGQtODVlMC0wZTUxMmZiNDJhNzIiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJtYWtlLWJiMjBlNjgzLWltYWdlcy9nZW5lcmFsLzE3NzA4OTg1NjU0NjctMzM0Yjk5OWUtOWU0My00ZDdjLThlYWItODg0NjkzMWVkNjZhLnBuZyIsImlhdCI6MTc3MDg5ODU2NSwiZXhwIjoxODAyNDM0NTY1fQ.WWNkpanJKjc9TzLcQliuXvSFr7PdJkwxL6hqLrFa4bk'
  });

  // Combined Schema
  const combinedSchema = combineSchemas(localBusinessSchema, serviceSchema);

  return (
    <main>
      <SEO
        title={serviceData.title}
        description={serviceData.metaDescription}
        canonical="/residential/concrete-cleaning"
        structuredData={combinedSchema}
      />
      <ServiceHero
        title={serviceData.title}
        subtitle={serviceData.subtitle}
        imageQuery={serviceData.heroImage}
        backgroundImage="https://iigpdyyiqskohqejmqob.supabase.co/storage/v1/object/sign/make-bb20e683-images/general/1770898565467-334b999e-9e43-4d7c-8eab-8846931ed66a.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9hMjhhMmJhNi1lYjVhLTQ5OGQtODVlMC0wZTUxMmZiNDJhNzIiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJtYWtlLWJiMjBlNjgzLWltYWdlcy9nZW5lcmFsLzE3NzA4OTg1NjU0NjctMzM0Yjk5OWUtOWU0My00ZDdjLThlYWItODg0NjkzMWVkNjZhLnBuZyIsImlhdCI6MTc3MDg5ODU2NSwiZXhwIjoxODAyNDM0NTY1fQ.WWNkpanJKjc9TzLcQliuXvSFr7PdJkwxL6hqLrFa4bk"
      />
      <ServiceTrust />
      <ConcreteBeforeAfter serviceName="concrete" />
      <ServiceBenefits
        intro={serviceData.benefits.intro}
        points={serviceData.benefits.points}
        closing={serviceData.benefits.closingCopy}
        serviceName="Concrete Cleaning"
      />
      <ServiceProcess steps={serviceData.process} />
      <ServiceReviews reviews={serviceData.reviews} />
      <ServiceFAQ faqs={serviceData.faqs} serviceName="concrete cleaning" />
      <ServiceCTA 
        serviceName="Concrete"
        descriptionPlaceholder="Tell us about your concrete cleaning needs..."
      />
    </main>
  );
}