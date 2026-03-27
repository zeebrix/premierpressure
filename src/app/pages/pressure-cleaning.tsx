import { Link } from 'react-router';
import { 
  Home, 
  Droplets, 
  Wind, 
  Sparkles, 
  CheckCircle, 
  Phone, 
  ArrowRight,
  Shield,
  Clock,
  Award,
  Wrench,
  TrendingUp,
  DollarSign,
  Leaf,
  ChevronLeft,
  ChevronRight,
  ChevronDown
} from 'lucide-react';
import { SEO } from '../components/seo';
import { BeforeAfterCarousel } from '../components/before-after-carousel';
import { TestimonialsCarousel } from '../components/testimonials-carousel';
import { useState, useEffect } from 'react';

// Import transformation images from homepage
import image_41faf7d8dc2e33e937b3a8d5a242a0b96f9b3f9e from 'figma:asset/41faf7d8dc2e33e937b3a8d5a242a0b96f9b3f9e.png';
import image_87d5f8ec1d66b7b825355f53597f786bcaca1fbc from 'figma:asset/87d5f8ec1d66b7b825355f53597f786bcaca1fbc.png';
import image_6bbaf4ca5bf4a991f067849bdb8c19880078fe6d from 'figma:asset/6bbaf4ca5bf4a991f067849bdb8c19880078fe6d.png';
import image_9f60771b69b9073d71cb6e9b0f8857c1f1462658 from 'figma:asset/9f60771b69b9073d71cb6e9b0f8857c1f1462658.png';
import image_69c22a3e1fa74dd17b18bde80f0c9cc3ea318b06 from 'figma:asset/69c22a3e1fa74dd17b18bde80f0c9cc3ea318b06.png';
import image_1ef480a4697ca3350ef723e0ead8e0aa6892ee92 from 'figma:asset/1ef480a4697ca3350ef723e0ead8e0aa6892ee92.png';

const services = [
  {
    icon: Home,
    title: 'House Washing',
    description: 'Complete exterior house cleaning including walls, eaves, and fascias',
    path: '/services/house-washing',
    features: ['Soft washing', 'Mould removal', 'Streak-free finish']
  },
  {
    icon: Droplets,
    title: 'Driveway Cleaning',
    description: 'High-pressure cleaning to restore driveways to like-new condition',
    path: '/services/driveway-cleaning',
    features: ['Oil stain removal', 'Concrete restoration', 'Sealing available']
  },
  {
    icon: Wind,
    title: 'Roof Cleaning',
    description: 'Safe removal of moss, algae, and debris from all roof types',
    path: '/services/roof-cleaning',
    features: ['Non-damaging', 'Extends roof life', 'Tile restoration']
  },
  {
    icon: Sparkles,
    title: 'Concrete Cleaning',
    description: 'Professional cleaning for pathways, patios, and concrete surfaces',
    path: '/services/concrete-cleaning',
    features: ['Deep cleaning', 'Stain removal', 'Surface restoration']
  },
  {
    icon: Wrench,
    title: 'Paver Cleaning & Sealing',
    description: 'Restore and protect pavers with professional cleaning and sealing',
    path: '/services/paver-cleaning',
    features: ['Weed removal', 'Joint sand replacement', 'Premium sealing']
  },
  {
    icon: Droplets,
    title: 'Pool Area & Patio',
    description: 'Safe cleaning around pools and outdoor entertainment areas',
    path: '/services/pool-patio-cleaning',
    features: ['Slip-resistant', 'Algae removal', 'Chemical-safe']
  },
  {
    icon: Sparkles,
    title: 'Window Cleaning',
    description: 'Streak-free windows for homes and commercial properties',
    path: '/services/window-cleaning',
    features: ['Spot-free', 'Frame cleaning', 'Screen cleaning']
  },
  {
    icon: Home,
    title: 'Limestone Cleaning',
    description: 'Specialized cleaning for delicate limestone walls and surfaces',
    path: '/services/limestone-cleaning',
    features: ['Gentle cleaning', 'Stain removal', 'Surface protection']
  },
  {
    icon: Shield,
    title: 'Pre-Sale & End of Lease',
    description: 'Complete property cleaning to maximize sale value or bond return',
    path: '/services/presale-cleaning',
    features: ['Full exterior', 'Fast turnaround', 'Bond guarantee']
  }
];

const benefits = [
  {
    icon: Shield,
    title: 'Fully Insured & Licensed',
    description: 'Complete peace of mind with comprehensive insurance coverage and proper licensing'
  },
  {
    icon: Award,
    title: 'Expert Technicians',
    description: 'Highly trained professionals with years of experience in pressure cleaning'
  },
  {
    icon: Droplets,
    title: 'Advanced Equipment',
    description: 'Commercial-grade pressure washing systems for superior results'
  },
  {
    icon: Clock,
    title: 'Flexible Scheduling',
    description: 'Available 7 days a week to suit your schedule and timeline'
  }
];

const faqs = [
  {
    question: 'What is professional pressure cleaning?',
    answer: 'Professional pressure cleaning (also called pressure washing or high-pressure cleaning) uses specialized equipment to blast away dirt, grime, mould, and stains from exterior surfaces. Our commercial-grade systems deliver superior results compared to DIY equipment, safely cleaning driveways, houses, roofs, and more without causing damage.'
  },
  {
    question: 'How much does pressure cleaning cost in Perth?',
    answer: 'Pressure cleaning costs in Perth vary based on surface type, size, and condition. Driveways typically range from $150-$400, house washing from $300-$800, and roof cleaning from $400-$1200. We offer free quotes and 10% off for new customers. Contact us for an accurate estimate based on your specific needs.'
  },
  {
    question: 'Is pressure washing safe for all surfaces?',
    answer: 'We use appropriate pressure levels for each surface type. High-pressure cleaning works perfectly for concrete driveways and pathways, while delicate surfaces like painted walls, limestone, and roof tiles require soft washing at lower pressure. Our experienced technicians assess each job to determine the safest, most effective cleaning method.'
  },
  {
    question: 'How often should I pressure clean my property?',
    answer: 'We recommend pressure cleaning driveways and pathways annually, house exteriors every 1-2 years, and roofs every 2-3 years. Perth\'s coastal climate accelerates mould and algae growth, so properties near the beach may need more frequent cleaning. Regular maintenance prevents permanent staining and extends surface life.'
  }
];

const beforeAfterImages = [
  {
    before: image_1ef480a4697ca3350ef723e0ead8e0aa6892ee92,
    after: image_41faf7d8dc2e33e937b3a8d5a242a0b96f9b3f9e,
    alt: 'Limestone wall pressure cleaning transformation',
    service: 'Limestone Cleaning'
  },
  {
    before: image_69c22a3e1fa74dd17b18bde80f0c9cc3ea318b06,
    after: image_9f60771b69b9073d71cb6e9b0f8857c1f1462658,
    alt: 'Concrete pressure cleaning results',
    service: 'Concrete Cleaning'
  },
  {
    before: image_6bbaf4ca5bf4a991f067849bdb8c19880078fe6d,
    after: image_87d5f8ec1d66b7b825355f53597f786bcaca1fbc,
    alt: 'Brick wall pressure washing transformation',
    service: 'Brick Cleaning'
  }
];

const professionalBenefits = [
  {
    icon: TrendingUp,
    title: 'Increased Property Value',
    description: 'Regular pressure cleaning can boost your property value by up to 5-10%, making it a smart investment for homeowners and businesses alike.'
  },
  {
    icon: Shield,
    title: 'Protection & Longevity',
    description: 'Removing mould, algae, and contaminants prevents permanent damage to surfaces, extending the life of your driveways, walls, and roofs.'
  },
  {
    icon: Home,
    title: 'Health & Safety',
    description: 'Eliminate health hazards like mould, mildew, and slippery algae that can cause respiratory issues and slip-and-fall accidents.'
  },
  {
    icon: DollarSign,
    title: 'Cost-Effective Maintenance',
    description: 'Professional pressure cleaning is far more affordable than replacing damaged surfaces, saving you thousands in the long run.'
  },
  {
    icon: Leaf,
    title: 'Eco-Friendly Solutions',
    description: 'Our environmentally safe cleaning products and water-efficient techniques protect Perth\'s environment while delivering exceptional results.'
  },
  {
    icon: Award,
    title: 'Professional Expertise',
    description: 'Our trained technicians know the right pressure, angle, and technique for each surface type, ensuring safe and effective cleaning every time.'
  }
];

export function PressureCleaningPage() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % beforeAfterImages.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + beforeAfterImages.length) % beforeAfterImages.length);
  };

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  // Auto-rotation every 5 seconds
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, [currentIndex, isPaused]);

  const currentItem = beforeAfterImages[currentIndex];

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    'name': 'Pressure Cleaning Perth',
    'description': 'Professional pressure cleaning services in Perth. Expert house washing, driveway cleaning, roof cleaning, and more. Licensed, insured, 10% off for new customers.',
    'provider': {
      '@type': 'LocalBusiness',
      'name': 'Premier Pressure Solutions WA',
      'image': 'https://premierpressurewa.com.au/logo.png',
      'telephone': '0488 844 911',
      'areaServed': {
        '@type': 'City',
        'name': 'Perth',
        'address': {
          '@type': 'PostalAddress',
          'addressRegion': 'WA',
          'addressCountry': 'AU'
        }
      }
    },
    'serviceType': 'Pressure Cleaning',
    'areaServed': {
      '@type': 'City',
      'name': 'Perth'
    },
    'offers': {
      '@type': 'Offer',
      'availability': 'https://schema.org/InStock',
      'priceSpecification': {
        '@type': 'PriceSpecification',
        'priceCurrency': 'AUD'
      }
    }
  };

  const faqStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    'mainEntity': faqs.map(faq => ({
      '@type': 'Question',
      'name': faq.question,
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': faq.answer
      }
    }))
  };

  return (
    <>
      <SEO
        title="Pressure Cleaning Perth | Expert Pressure Washing Services WA"
        description="Professional pressure cleaning services in Perth. Expert house washing, driveway cleaning, roof cleaning & more. Licensed, insured, 10% off for new customers. Call 0488 844 911"
        canonical="https://premierpressurewa.com.au/services/pressure-cleaning"
        schema={[structuredData, faqStructuredData]}
        keywords="pressure cleaning Perth, pressure washing Perth, high pressure cleaning, house washing Perth, driveway cleaning Perth, roof cleaning Perth, exterior cleaning Perth"
      />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#0a1628] to-[#1a2640] text-white py-20 lg:py-28 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%2300d4ff" fill-opacity="0.4"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")'
          }}></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center max-w-4xl mx-auto">
            {/* 10% Discount Badge */}
            <div className="inline-flex items-center gap-2 bg-[#00d4ff] text-[#0a1628] px-6 py-2.5 rounded-full font-bold text-sm mb-6 shadow-lg">
              <Award className="w-5 h-5" />
              <span>NEW CUSTOMERS: 10% OFF ALL SERVICES</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Professional Pressure Cleaning Perth
              
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 leading-relaxed max-w-3xl mx-auto">
              From driveways to roofs, limestone walls to pool areas - we deliver exceptional results for homes and businesses across Perth. Professional equipment, eco-friendly solutions, and unbeatable service.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <a 
                href="tel:0452579657"
                className="inline-flex items-center gap-2 bg-[#00d4ff] text-[#0a1628] px-8 py-4 rounded-lg font-bold text-lg hover:bg-[#00bfe6] transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 w-full sm:w-auto justify-center"
              >
                <Phone className="w-5 h-5" />
                Call 0452 579 657
              </a>
              <a 
                href="#quote"
                className="inline-flex items-center gap-2 bg-white/10 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white/20 transition-all border border-white/20 w-full sm:w-auto justify-center"
              >
                Get Free Quote
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
              <div className="bg-white/5 backdrop-blur-sm rounded-lg p-3 border border-white/10">
                <div className="text-sm text-[#00d4ff] font-semibold mb-1">Fully Insured</div>
                <div className="text-xs text-gray-300">Complete Coverage</div>
              </div>
              <div className="bg-white/5 backdrop-blur-sm rounded-lg p-3 border border-white/10">
                <div className="text-sm text-[#00d4ff] font-semibold mb-1">Eco-Friendly</div>
                <div className="text-xs text-gray-300">Safe Solutions</div>
              </div>
              <div className="bg-white/5 backdrop-blur-sm rounded-lg p-3 border border-white/10">
                <div className="text-sm text-[#00d4ff] font-semibold mb-1">Same-Day Service</div>
                <div className="text-xs text-gray-300">When Available</div>
              </div>
              <div className="bg-white/5 backdrop-blur-sm rounded-lg p-3 border border-white/10">
                <div className="text-sm text-[#00d4ff] font-semibold mb-1">5-Star Rated</div>
                <div className="text-xs text-gray-300">Google Reviews</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Before & After Carousel */}
      

      {/* Stunning Transformations Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0a1628] mb-4">
              Stunning Transformations
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              See the incredible results our professional pressure cleaning delivers across Perth.
            </p>
          </div>

          <div 
            className="max-w-5xl mx-auto"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {/* Before/After Side-by-Side */}
            <div className="grid md:grid-cols-2 gap-4 mb-6">
              {/* Before Image */}
              <div className="relative rounded-xl overflow-hidden shadow-xl">
                <div className="relative aspect-[4/3] bg-gray-200">
                  <img
                    src={currentItem.before}
                    alt={`Before ${currentItem.alt}`}
                    className="absolute inset-0 w-full h-full object-cover"
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="absolute top-4 left-4 bg-[#0a1628]/80 text-white px-4 py-2 rounded-md text-sm font-semibold">
                    Before
                  </div>
                </div>
              </div>

              {/* After Image */}
              <div className="relative rounded-xl overflow-hidden shadow-xl">
                <div className="relative aspect-[4/3] bg-gray-200">
                  <img
                    src={currentItem.after}
                    alt={`After ${currentItem.alt}`}
                    className="absolute inset-0 w-full h-full object-cover"
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="absolute top-4 right-4 bg-[#00d4ff]/90 text-[#0a1628] px-4 py-2 rounded-md text-sm font-semibold">
                    After
                  </div>
                </div>
              </div>
            </div>

            {/* Service Info */}
            <div className="text-center mb-6">
              <h3 className="text-xl font-semibold text-[#0a1628] mb-1">
                {currentItem.service}
              </h3>
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-center gap-4">
              <button
                onClick={prevSlide}
                className="w-10 h-10 rounded-full bg-[#0a1628] text-white flex items-center justify-center hover:bg-[#0a1628]/90 transition-colors"
                aria-label="Previous image"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              
              <div className="flex gap-2">
                {beforeAfterImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setCurrentIndex(index);
                    }}
                    className={`p-2 rounded-full transition-all ${
                      index === currentIndex
                        ? 'bg-transparent'
                        : 'bg-transparent hover:bg-gray-100'
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  >
                    <span className={`block w-2 h-2 rounded-full transition-all ${
                      index === currentIndex
                        ? 'bg-[#00d4ff] w-8'
                        : 'bg-gray-300'
                    }`} />
                  </button>
                ))}
              </div>

              <button
                onClick={nextSlide}
                className="w-10 h-10 rounded-full bg-[#0a1628] text-white flex items-center justify-center hover:bg-[#0a1628]/90 transition-colors"
                aria-label="Next image"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* What is Pressure Cleaning? */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0a1628] mb-6 text-center">
              What is Pressure Cleaning?
            </h2>
            
            <div className="bg-white rounded-xl p-8 shadow-md border border-gray-100">
              <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                Pressure cleaning uses high-powered water spray to blast away dirt, grime, mould, and stains from your property's exterior surfaces. It's the fastest and most effective way to restore driveways, houses, roofs, and pathways to like-new condition.
              </p>
              
              <p className="text-lg text-gray-700 leading-relaxed">
                Our professional equipment and expertise deliver superior results that DIY methods simply can't match—safely cleaning every surface type without causing damage.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Professional Pressure Cleaning? */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0a1628] mb-4">
              Why Choose Professional Pressure Cleaning?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The benefits of professional pressure cleaning go far beyond just a clean appearance
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {professionalBenefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div key={index} className="bg-white rounded-xl p-6 shadow-md border border-gray-100 hover:border-[#00d4ff] hover:shadow-xl transition-all">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-[#00d4ff]/10 rounded-lg flex items-center justify-center">
                      <Icon className="w-6 h-6 text-[#00d4ff]" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-[#0a1628] mb-2">
                        {benefit.title}
                      </h3>
                    </div>
                  </div>
                  <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0a1628] mb-4">
              Why Choose Premier Pressure Solutions WA?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Perth's most trusted pressure cleaning company
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-[#00d4ff]/10 rounded-full mb-4">
                    <Icon className="w-8 h-8 text-[#00d4ff]" />
                  </div>
                  <h3 className="text-xl font-bold text-[#0a1628] mb-2">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section id="services" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0a1628] mb-4">
              Our Pressure Cleaning Services
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive cleaning solutions for residential and commercial properties
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Link
                  key={index}
                  to={service.path}
                  className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all border border-gray-100 hover:border-[#00d4ff] group"
                >
                  <div className="flex items-center gap-4 mb-3">
                    <div className="flex-shrink-0 w-12 h-12 bg-[#00d4ff]/10 rounded-lg flex items-center justify-center group-hover:bg-[#00d4ff] transition-colors">
                      <Icon className="w-6 h-6 text-[#00d4ff] group-hover:text-white transition-colors" />
                    </div>
                    <h3 className="text-lg font-bold text-[#0a1628] group-hover:text-[#00d4ff] transition-colors">
                      {service.title}
                    </h3>
                  </div>
                  
                  <p className="text-gray-600 mb-4 text-sm">{service.description}</p>

                  <div className="flex items-center gap-2 text-[#00d4ff] font-semibold group-hover:gap-3 transition-all text-sm">
                    Learn More <ArrowRight className="w-4 h-4" />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0a1628] mb-4">
              Servicing All Perth Suburbs
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Professional pressure cleaning across the entire Perth metropolitan area
            </p>
          </div>

          <div className="bg-gradient-to-br from-[#0a1628] to-[#1a2640] rounded-2xl p-8 md:p-12 text-white">
            <div className="text-center mb-8">
              <p className="text-lg text-gray-300">
                <span className="text-[#00d4ff] font-bold">We service all of metropolitan Perth</span> - from the northern coastal suburbs to the southern regions, and everywhere in between. No job too big or small!
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              
              
              
            </div>
            <div className="text-center mt-8">
              <Link
                to="/areas"
                className="inline-flex items-center gap-2 bg-[#00d4ff] text-[#0a1628] px-6 py-3 rounded-lg font-bold hover:bg-[#00bfe6] transition-colors"
              >
                View All Service Areas
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0a1628] mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Everything you need to know about pressure cleaning in Perth
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100">
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors"
                  aria-expanded={openFaqIndex === index}
                >
                  <h3 className="text-lg font-bold text-[#0a1628] pr-8">
                    {faq.question}
                  </h3>
                  <ChevronDown 
                    className={`w-5 h-5 text-[#00d4ff] flex-shrink-0 transition-transform duration-300 ${
                      openFaqIndex === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                <div 
                  className={`transition-all duration-300 ease-in-out ${
                    openFaqIndex === index 
                      ? 'max-h-96 opacity-100' 
                      : 'max-h-0 opacity-0'
                  } overflow-hidden`}
                >
                  <div className="px-6 pb-6">
                    <p className="text-gray-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Google Reviews */}
      <TestimonialsCarousel />

      {/* Get a Free Quote CTA */}
      <section id="quote" className="py-12 bg-gradient-to-br from-[#0a1628] to-[#1a2640] text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 bg-[#00d4ff] text-[#0a1628] px-4 py-2 rounded-full font-bold text-xs mb-4 shadow-lg">
              <Award className="w-4 h-4" />
              <span>10% OFF FOR NEW CUSTOMERS</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl font-bold mb-3">
              Get Your Free Quote Today
            </h2>
            <p className="text-lg text-gray-300 mb-2">
              Transform your property with Perth's most trusted pressure cleaning experts
            </p>
            <p className="text-sm text-gray-400 mb-6">
              No obligation • Fast response • Competitive pricing
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-6">
            {/* Contact Info Cards */}
            <div className="space-y-4">
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-5 border border-white/10">
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-10 h-10 bg-[#00d4ff]/20 rounded-lg flex items-center justify-center">
                    <Phone className="w-5 h-5 text-[#00d4ff]" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold mb-1">Call Us Now</h3>
                    <p className="text-gray-300 mb-2 text-sm">Speak directly with our team</p>
                    <a href="tel:0452579657" className="text-[#00d4ff] font-bold text-lg hover:text-[#00bfe6] transition-colors">
                      0452 579 657
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-5 border border-white/10">
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-10 h-10 bg-[#00d4ff]/20 rounded-lg flex items-center justify-center">
                    <Clock className="w-5 h-5 text-[#00d4ff]" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold mb-1">Available 7 Days</h3>
                    <p className="text-gray-300 mb-2 text-sm">Flexible scheduling to suit your timeline</p>
                    <p className="text-[#00d4ff] font-semibold text-sm">
                      Mon-Sun: 7AM - 6PM
                    </p>
                  </div>
                </div>
              </div>

              {/* Trust Indicators */}
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-3 border border-white/10 text-center">
                  <div className="text-xl font-bold text-[#00d4ff] mb-0.5">500+</div>
                  <div className="text-xs text-gray-400">Happy Customers</div>
                </div>
                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-3 border border-white/10 text-center">
                  <div className="text-xl font-bold text-[#00d4ff] mb-0.5">5.0★</div>
                  <div className="text-xs text-gray-400">Google Rating</div>
                </div>
                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-3 border border-white/10 text-center">
                  <div className="text-xl font-bold text-[#00d4ff] mb-0.5">100%</div>
                  <div className="text-xs text-gray-400">Satisfaction Rate</div>
                </div>
                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-3 border border-white/10 text-center">
                  <div className="text-xl font-bold text-[#00d4ff] mb-0.5">Same Day</div>
                  <div className="text-xs text-gray-400">Service Available</div>
                </div>
              </div>
            </div>

            {/* Quote Form */}
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <h3 className="text-xl font-bold mb-4 text-center">Request Your Free Quote</h3>
              
              <form className="space-y-3">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold mb-1.5">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-3 py-2.5 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#00d4ff] focus:border-transparent text-sm"
                    placeholder="John Smith"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold mb-1.5">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-3 py-2.5 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#00d4ff] focus:border-transparent text-sm"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold mb-1.5">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    className="w-full px-3 py-2.5 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#00d4ff] focus:border-transparent text-sm"
                    placeholder="0452 579 657"
                  />
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-semibold mb-1.5">
                    Service Required *
                  </label>
                  <select
                    id="service"
                    name="service"
                    required
                    className="w-full px-3 py-2.5 rounded-lg bg-white/10 border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-[#00d4ff] focus:border-transparent text-sm"
                  >
                    <option value="" className="text-gray-900">Select a service...</option>
                    <option value="house-washing" className="text-gray-900">House Washing</option>
                    <option value="driveway-cleaning" className="text-gray-900">Driveway Cleaning</option>
                    <option value="roof-cleaning" className="text-gray-900">Roof Cleaning</option>
                    <option value="concrete-cleaning" className="text-gray-900">Concrete Cleaning</option>
                    <option value="paver-cleaning" className="text-gray-900">Paver Cleaning & Sealing</option>
                    <option value="pool-patio" className="text-gray-900">Pool Area & Patio</option>
                    <option value="window-cleaning" className="text-gray-900">Window Cleaning</option>
                    <option value="limestone-cleaning" className="text-gray-900">Limestone Cleaning</option>
                    <option value="presale" className="text-gray-900">Pre-Sale & End of Lease</option>
                    <option value="other" className="text-gray-900">Other / Multiple Services</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold mb-1.5">
                    Additional Details
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={3}
                    className="w-full px-3 py-2.5 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#00d4ff] focus:border-transparent resize-none text-sm"
                    placeholder="Tell us about your property and cleaning requirements..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#00d4ff] text-[#0a1628] px-6 py-3 rounded-lg font-bold text-base hover:bg-[#00bfe6] transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                >
                  Get Free Quote
                </button>

                <p className="text-xs text-gray-400 text-center">
                  We'll respond within 24 hours with your personalized quote
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}