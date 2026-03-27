import { CommercialHero } from '../../components/commercial/commercial-hero';
import { CommercialBenefits } from '../../components/commercial/commercial-benefits';
import { CommercialProcess } from '../../components/commercial/commercial-process';
import { CommercialCTA } from '../../components/commercial/commercial-cta';
import { Briefcase, Shield, Users, Clock, CheckCircle } from 'lucide-react';

export function CommercialPressureCleaningPage() {
  const benefits = [
    {
      icon: Briefcase,
      title: 'Business-Focused Service',
      description: 'We understand commercial operations and work efficiently to minimize disruption to your business activities.',
    },
    {
      icon: Shield,
      title: 'Professional Results',
      description: 'Maintain the professional appearance that supports your brand image and creates positive customer impressions.',
    },
    {
      icon: Clock,
      title: 'Flexible Scheduling',
      description: 'Work outside business hours, on weekends, or at times that suit your operational requirements.',
    },
    {
      icon: Users,
      title: 'Property Value',
      description: 'Regular maintenance protects your commercial property investment and maintains asset value.',
    },
  ];

  const process = [
    {
      title: 'Property Assessment',
      description: 'Comprehensive evaluation of your commercial property to identify all areas requiring cleaning and any special considerations.',
    },
    {
      title: 'Transparent Quote',
      description: 'Detailed quote with clear pricing, scope of work, and timeline suitable for approval processes and budget planning.',
    },
    {
      title: 'Scheduled Service',
      description: 'We coordinate scheduling to suit your business operations, working at times that minimize disruption to customers and staff.',
    },
    {
      title: 'Quality Delivery',
      description: 'Professional cleaning executed to commercial standards with final inspection ensuring complete satisfaction.',
    },
  ];

  return (
    <main>
      <CommercialHero
        title="Commercial Pressure Cleaning Perth"
        subtitle="Professional pressure cleaning services for businesses across Perth"
        description="Maintain your commercial property's professional appearance with expert pressure cleaning services. We work around your business operations to keep your property looking pristine and welcoming."
      />
      
      <CommercialBenefits benefits={benefits} />

      {/* Service Overview */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0a1628] mb-6">
              Perth's Trusted Commercial Pressure Cleaning Service
            </h2>
            <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
              <p>
                Your commercial property's appearance directly impacts how customers, clients, and visitors perceive your business. A clean, well-maintained exterior projects professionalism, attention to detail, and success - qualities that matter in competitive Perth business environments. Conversely, dirty walkways, stained building exteriors, or neglected parking areas create negative first impressions that can affect customer trust and business reputation.
              </p>
              <p>
                Premier Pressure Solutions WA provides comprehensive commercial pressure cleaning services for businesses throughout Perth's metropolitan area. We understand that commercial properties face unique challenges from high foot traffic, weather exposure, and the need to maintain professional appearances that support brand image and customer experience.
              </p>
              <p>
                Our team specializes in working with commercial clients, from small retail stores to large corporate complexes. We deliver professional cleaning services that maintain your property's appeal while working flexibly to minimize disruption to your business operations, customers, and staff.
              </p>

              <h3 className="text-2xl font-bold text-[#0a1628] mt-8 mb-4">
                Commercial Properties We Service
              </h3>
              <div className="grid sm:grid-cols-2 gap-3 my-6">
                {[
                  'Office buildings and complexes',
                  'Retail stores and shopping areas',
                  'Medical and dental centers',
                  'Restaurants and hospitality venues',
                  'Car dealerships and showrooms',
                  'Professional services offices',
                  'Real estate properties',
                  'Gyms and fitness centers',
                  'Beauty and wellness centers',
                  'Veterinary clinics',
                  'Child care centers',
                  'Storage facilities',
                ].map((item) => (
                  <div key={item} className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-[#00d4ff] flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <h3 className="text-2xl font-bold text-[#0a1628] mt-8 mb-4">
                Areas We Clean for Commercial Clients
              </h3>
              <div className="grid sm:grid-cols-2 gap-3 my-6">
                {[
                  'Building facades and exteriors',
                  'Entry ways and reception areas',
                  'Walkways and pedestrian paths',
                  'Parking lots and driveways',
                  'Loading bays and service areas',
                  'Outdoor seating and dining areas',
                  'Signage and building lettering',
                  'Window surrounds and frames',
                  'Awnings and canopies',
                  'Waste enclosure areas',
                  'Fencing and boundary walls',
                  'Concrete and paved surfaces',
                ].map((item) => (
                  <div key={item} className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-[#00d4ff] flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <h3 className="text-2xl font-bold text-[#0a1628] mt-8 mb-4">
                Why Perth Businesses Choose Our Service
              </h3>
              <p>
                Commercial clients need cleaning providers who understand business operations, work professionally, and deliver consistent results. We've developed specialized processes for commercial properties that minimize disruption while ensuring your business maintains the professional appearance customers expect.
              </p>
              <p>
                Our team works efficiently and professionally, understanding that we're representing your business when on your premises. We arrive in clearly marked vehicles, wear professional uniforms, and conduct ourselves appropriately in customer-facing environments. We also use proper signage and safety protocols to ensure customer and staff safety during cleaning operations.
              </p>
              <p>
                We understand commercial decision-making processes and provide detailed quotes suitable for approval workflows. Our pricing is transparent with no hidden fees, and we deliver service that represents excellent value for commercial property maintenance budgets.
              </p>

              <h3 className="text-2xl font-bold text-[#0a1628] mt-8 mb-4">
                Scheduled Maintenance Programs
              </h3>
              <p>
                Many Perth businesses benefit from regular scheduled pressure cleaning that maintains consistent professional appearances year-round. Preventative maintenance is more cost-effective than reactive cleaning and ensures your property always looks its best for customers and clients.
              </p>
              <p>
                We offer flexible maintenance contracts that can include monthly, quarterly, or annual cleaning based on your property's specific needs and traffic levels. Regular service means you don't have to think about property maintenance - we handle it on schedule, keeping your business looking pristine without requiring your ongoing attention.
              </p>

              <h3 className="text-2xl font-bold text-[#0a1628] mt-8 mb-4">
                Special Event and Pre-Inspection Cleaning
              </h3>
              <p>
                Need your commercial property looking perfect for a special event, important client visit, or property inspection? We provide responsive service for special occasions when you need your property looking its absolute best. Many businesses call us before major events, grand openings, or when preparing properties for lease or sale.
              </p>

              <h3 className="text-2xl font-bold text-[#0a1628] mt-8 mb-4">
                Tenant Changeover and Lease Preparation
              </h3>
              <p>
                Property managers and commercial landlords rely on us for tenant changeover cleaning and lease preparation. We help present properties in the best possible condition for new tenants, supporting faster leasing and positive tenant relationships from day one.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CommercialProcess 
        title="Our Commercial Cleaning Process"
        steps={process}
      />
      <CommercialCTA 
        serviceName="Business"
        descriptionPlaceholder="Tell us about your commercial pressure cleaning needs..."
      />
    </main>
  );
}