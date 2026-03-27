import { CommercialHero } from '../../components/commercial/commercial-hero';
import { CommercialBenefits } from '../../components/commercial/commercial-benefits';
import { CommercialProcess } from '../../components/commercial/commercial-process';
import { CommercialCTA } from '../../components/commercial/commercial-cta';
import { motion } from 'motion/react';
import { CheckCircle, ShoppingCart, Users, Clock, Sparkles } from 'lucide-react';

export function ShoppingCentreCleaningPage() {
  const benefits = [
    {
      icon: ShoppingCart,
      title: 'Enhanced Customer Experience',
      description: 'Clean, well-maintained shopping centres create positive first impressions and encourage longer visits from customers.',
    },
    {
      icon: Clock,
      title: 'Flexible After-Hours Service',
      description: 'We work outside trading hours to ensure zero disruption to your tenants and customers.',
    },
    {
      icon: Sparkles,
      title: 'Professional Standards',
      description: 'Maintain the premium appearance your retail tenants and customers expect from quality shopping centres.',
    },
    {
      icon: Users,
      title: 'Tenant Satisfaction',
      description: 'Well-maintained common areas reflect positively on centre management and support tenant retention.',
    },
  ];

  const process = [
    {
      title: 'Comprehensive Site Survey',
      description: 'We assess all areas including entrances, walkways, parking areas, loading docks, and exterior spaces to create a detailed cleaning plan.',
    },
    {
      title: 'Scheduling Coordination',
      description: 'Work with centre management to schedule cleaning during off-peak hours or after closing to avoid disrupting trading.',
    },
    {
      title: 'Professional Execution',
      description: 'Our experienced team uses commercial-grade equipment to clean all specified areas efficiently and to the highest standards.',
    },
    {
      title: 'Quality Verification',
      description: 'Final inspection ensures all areas meet centre standards and are ready for customer access.',
    },
  ];

  return (
    <main>
      <CommercialHero
        title="Shopping Centre Pressure Cleaning Perth"
        subtitle="Professional cleaning services for retail centres and shopping complexes"
        description="Maintain your shopping centre's premium appearance with expert pressure cleaning services. We work around your trading hours to keep entrances, walkways, and common areas pristine for customers and tenants."
      />
        
        {/* Service Overview */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-[#0a1628] mb-6">
                Professional Shopping Centre Cleaning in Perth
              </h2>
              <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
                <p>
                  Shopping centres face unique cleaning challenges from constant foot traffic, food court spillages, weather exposure, and the need to maintain premium appearances that attract customers and support retail tenants. Perth's shopping centres require professional cleaning services that understand retail environments and can work efficiently without disrupting business operations.
                </p>
                <p>
                  Premier Pressure Solutions WA provides specialized pressure cleaning services for shopping centres, retail complexes, and commercial precincts across Perth. We understand that first impressions matter in retail environments, and clean, well-maintained centres directly impact customer experience, tenant satisfaction, and property values.
                </p>
                <p>
                  Our team has extensive experience with large-scale commercial properties and works seamlessly with centre management teams. We schedule our services to minimize disruption, communicate clearly with all stakeholders, and deliver results that maintain your centre's premium appearance and reputation.
                </p>

                <h3 className="text-2xl font-bold text-[#0a1628] mt-8 mb-4">
                  Shopping Centre Areas We Clean
                </h3>
                <div className="grid sm:grid-cols-2 gap-3 my-6">
                  {[
                    'Main entrances and entry plazas',
                    'Outdoor walkways and thoroughfares',
                    'Parking lot surfaces and levels',
                    'Building facades and exteriors',
                    'Outdoor dining and food court areas',
                    'Loading docks and service areas',
                    'Bin enclosures and waste areas',
                    'Trolley collection bays',
                    'Signage and pylon bases',
                    'Covered walkways and arcades',
                    'Drive-through areas',
                    'Landscaping surrounds',
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-[#00d4ff] flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                <h3 className="text-2xl font-bold text-[#0a1628] mt-8 mb-4">
                  Why Shopping Centres Trust Our Service
                </h3>
                <p>
                  Retail property management requires cleaning partners who understand the complexities of operating in active commercial environments. We've developed specialized processes for shopping centres that prioritize safety, efficiency, and minimal disruption while delivering outstanding cleaning results.
                </p>
                <p>
                  Our team coordinates closely with centre management, security teams, and facilities staff to ensure smooth service delivery. We understand the importance of maintaining centre operations and work flexibly to accommodate trading hours, special events, and peak shopping periods.
                </p>
                <p>
                  We use commercial-grade equipment designed for large-scale projects, enabling us to complete work efficiently and to the high standards shopping centres demand. Our team is professional, properly uniformed, and trained to work in public-facing commercial environments where customer experience matters.
                </p>

                <h3 className="text-2xl font-bold text-[#0a1628] mt-8 mb-4">
                  Scheduled Maintenance Programs
                </h3>
                <p>
                  Many Perth shopping centres benefit from regular scheduled cleaning that prevents dirt accumulation, maintains premium appearances, and creates consistently positive customer experiences. We offer customized maintenance programs that can include monthly, quarterly, or seasonal cleaning based on your centre's specific needs.
                </p>
                <p>
                  Regular maintenance is more cost-effective than reactive cleaning and helps prevent long-term surface deterioration. We work with centre management to develop cleaning schedules that align with your budget cycles and operational requirements, providing consistent service you can rely on throughout the year.
                </p>

                <h3 className="text-2xl font-bold text-[#0a1628] mt-8 mb-4">
                  Special Event and Pre-Opening Cleaning
                </h3>
                <p>
                  Need your shopping centre looking pristine for a special event, new tenant opening, or property inspection? We provide responsive service for special occasions when you need your centre looking its absolute best. Our team can mobilize quickly to ensure your property makes the right impression.
                </p>
              </div>
            </div>
          </div>
        </section>

        <CommercialBenefits benefits={benefits} />
        <CommercialProcess 
          title="Our Shopping Centre Cleaning Process"
          steps={process}
        />
        <CommercialCTA 
          serviceName="Shopping Centre"
          descriptionPlaceholder="Tell us about your shopping centre cleaning needs..."
        />
    </main>
  );
}