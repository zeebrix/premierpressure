import { CommercialHero } from '../../components/commercial/commercial-hero';
import { CommercialBenefits } from '../../components/commercial/commercial-benefits';
import { CommercialProcess } from '../../components/commercial/commercial-process';
import { CommercialCTA } from '../../components/commercial/commercial-cta';
import { motion } from 'motion/react';
import { CheckCircle, Building2, Users, Sparkles, Clock } from 'lucide-react';

export function StrataCleaningPage() {
  const benefits = [
    {
      icon: Building2,
      title: 'Property Value Protection',
      description: 'Regular cleaning maintains your strata property\'s appearance and value, making it more attractive to current and prospective residents.',
    },
    {
      icon: Users,
      title: 'Resident Satisfaction',
      description: 'Clean common areas and building exteriors contribute to resident pride and satisfaction with their community.',
    },
    {
      icon: Sparkles,
      title: 'Cost-Effective Maintenance',
      description: 'Preventative cleaning extends the life of surfaces and reduces costly repairs from neglect and deterioration.',
    },
    {
      icon: Clock,
      title: 'Professional Service',
      description: 'Work directly with strata managers and body corporate committees with clear communication and reliable scheduling.',
    },
  ];

  const process = [
    {
      title: 'Property Assessment',
      description: 'We conduct a comprehensive inspection of all common areas, building exteriors, driveways, walkways, and facilities requiring cleaning.',
    },
    {
      title: 'Detailed Quote',
      description: 'Receive a transparent, itemized quote suitable for strata committee approval with clear pricing and scope of work.',
    },
    {
      title: 'Scheduled Cleaning',
      description: 'We coordinate with strata management to schedule work at convenient times, minimizing disruption to residents.',
    },
    {
      title: 'Complete Documentation',
      description: 'Provide before and after photos, completion reports, and certificates of currency for strata records.',
    },
  ];

  return (
    <main>
      <CommercialHero
        title="Strata Pressure Cleaning Perth"
        subtitle="Professional cleaning services for strata properties and body corporate complexes"
        description="Maintain your strata property's appeal and value with comprehensive pressure cleaning services. We work seamlessly with strata managers and body corporate committees to keep common areas pristine."
      />
      
      <CommercialBenefits benefits={benefits} />

      {/* Service Overview */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0a1628] mb-6">
              Expert Strata Cleaning for Perth Properties
            </h2>
            <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
              <p>
                Strata properties require professional cleaning services that understand the unique needs of multi-unit developments. Perth's climate can be harsh on building exteriors, common areas, and shared facilities, leading to dirt buildup, mould growth, and deteriorating appearances that affect property values and resident satisfaction.
              </p>
              <p>
                Premier Pressure Solutions WA specializes in strata and body corporate cleaning across Perth's metropolitan area. We work with strata managers, property managers, and body corporate committees to deliver comprehensive cleaning services that maintain property appeal, protect asset values, and create environments residents are proud to call home.
              </p>
              <p>
                Our team understands strata operations, approval processes, and budget considerations. We provide detailed quotes suitable for committee approval, maintain clear communication with property managers, and deliver reliable service that keeps your property looking its best year-round.
              </p>

              <h3 className="text-2xl font-bold text-[#0a1628] mt-8 mb-4">
                Strata Areas We Clean
              </h3>
              <div className="grid sm:grid-cols-2 gap-3 my-6">
                {[
                  'Building exteriors and facades',
                  'Common area walkways',
                  'Driveways and parking areas',
                  'Entrance foyers and lobbies',
                  'Stairwells and corridors',
                  'Balconies and patios',
                  'Pool surrounds and decking',
                  'BBQ and entertainment areas',
                  'Bin storage enclosures',
                  'Garage floors and walls',
                  'Visitor parking areas',
                  'Boundary walls and fencing',
                ].map((item) => (
                  <div key={item} className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-[#00d4ff] flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <h3 className="text-2xl font-bold text-[#0a1628] mt-8 mb-4">
                Why Strata Properties Choose Us
              </h3>
              <p>
                Strata committees need cleaning providers who deliver consistent results, communicate effectively, and understand the complexities of managing multi-unit properties. We've developed streamlined processes specifically for strata properties that make the entire cleaning process effortless for managers and committees.
              </p>
              <p>
                We provide comprehensive quotes that clearly outline all work to be completed, making committee approval straightforward. Our team coordinates directly with strata managers to schedule work at times that minimize resident disruption, and we always notify residents of upcoming cleaning activities when required.
              </p>
              <p>
                Many Perth strata properties rely on us for regular scheduled maintenance, appreciating our consistent service quality, transparent pricing, and professional approach. We understand that maintaining common areas is essential for property values and resident satisfaction, and we deliver results that reflect positively on your strata management.
              </p>

              <h3 className="text-2xl font-bold text-[#0a1628] mt-8 mb-4">
                Regular Maintenance Programs
              </h3>
              <p>
                We offer scheduled maintenance programs designed specifically for strata properties. Regular cleaning prevents dirt accumulation, mould growth, and surface deterioration, ultimately saving your strata money on costly repairs while maintaining property appeal.
              </p>
              <p>
                Our maintenance programs can be customized to your property's specific needs and budget. Whether you need quarterly cleaning of high-traffic areas or annual comprehensive cleaning of all common spaces, we create schedules that keep your property consistently clean throughout the year.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CommercialProcess 
        title="Our Strata Cleaning Process"
        steps={process}
      />
      <CommercialCTA 
        serviceName="Strata Property"
        descriptionPlaceholder="Tell us about your strata cleaning requirements..."
      />
    </main>
  );
}