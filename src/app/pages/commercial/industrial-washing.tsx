import { CommercialHero } from '../../components/commercial/commercial-hero';
import { CommercialBenefits } from '../../components/commercial/commercial-benefits';
import { CommercialProcess } from '../../components/commercial/commercial-process';
import { CommercialCTA } from '../../components/commercial/commercial-cta';
import { motion } from 'motion/react';
import { CheckCircle, Factory, Shield, Wrench, Clock } from 'lucide-react';

export function IndustrialWashingPage() {
  const benefits = [
    {
      icon: Factory,
      title: 'Heavy-Duty Equipment',
      description: 'Industrial-grade pressure cleaning equipment capable of handling the toughest jobs in manufacturing and industrial environments.',
    },
    {
      icon: Shield,
      title: 'Safety Compliance',
      description: 'Full compliance with workplace safety regulations and experience working in industrial settings with specific safety requirements.',
    },
    {
      icon: Wrench,
      title: 'Efficient Service',
      description: 'Minimize downtime with efficient cleaning that works around your production schedules and operational requirements.',
    },
    {
      icon: Clock,
      title: 'Comprehensive Solutions',
      description: 'From factory floors to equipment cleaning, we handle all your industrial pressure washing needs.',
    },
  ];

  const process = [
    {
      title: 'Site Safety Assessment',
      description: 'Comprehensive evaluation of your facility including identification of hazards, required PPE, and safety protocols specific to your industrial environment.',
    },
    {
      title: 'Customized Cleaning Plan',
      description: 'Develop a detailed plan that addresses your specific cleaning needs while minimizing impact on production and operations.',
    },
    {
      title: 'Professional Execution',
      description: 'Our team executes the cleaning plan using industrial-grade equipment and methods appropriate for manufacturing environments.',
    },
    {
      title: 'Documentation & Reporting',
      description: 'Provide completion reports and documentation required for your safety and maintenance records.',
    },
  ];

  return (
    <main>
      <CommercialHero
        title="Industrial Pressure Washing Perth"
        subtitle="Heavy-duty cleaning solutions for manufacturing and industrial facilities"
        description="Professional industrial pressure washing services for Perth's manufacturing and industrial sectors. We deliver powerful cleaning results that meet workplace standards and minimize operational disruption."
      />
      
      <CommercialBenefits benefits={benefits} />

      {/* Service Overview */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0a1628] mb-6">
              Professional Industrial Cleaning for Perth Facilities
            </h2>
            <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
              <p>
                Industrial facilities face unique cleaning challenges that standard pressure cleaning services aren't equipped to handle. Manufacturing plants, warehouses, processing facilities, and industrial complexes deal with heavy oils, chemical residues, production waste, and stubborn industrial contaminants that require specialized equipment and expertise.
              </p>
              <p>
                Premier Pressure Solutions WA provides professional industrial pressure washing services designed specifically for Perth's manufacturing and industrial sectors. We understand the demands of industrial environments and deliver powerful cleaning solutions that maintain workplace standards, support operational efficiency, and meet safety compliance requirements.
              </p>
              <p>
                Our team has extensive experience working in industrial settings and understands the importance of safety, minimal downtime, and effective results. We use industrial-grade equipment capable of tackling the toughest cleaning jobs while working efficiently to minimize impact on your operations.
              </p>

              <h3 className="text-2xl font-bold text-[#0a1628] mt-8 mb-4">
                Industrial Areas We Clean
              </h3>
              <div className="grid sm:grid-cols-2 gap-3 my-6">
                {[
                  'Factory floors and production areas',
                  'Warehouse concrete floors',
                  'Loading docks and bays',
                  'Machinery and equipment (exterior)',
                  'Storage areas and yards',
                  'Processing areas',
                  'Workshop floors and walls',
                  'Industrial driveways and access roads',
                  'Container and storage areas',
                  'Waste and recycling areas',
                  'Building exteriors and walls',
                  'Forklift operating areas',
                ].map((item) => (
                  <div key={item} className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-[#00d4ff] flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <h3 className="text-2xl font-bold text-[#0a1628] mt-8 mb-4">
                Why Industrial Facilities Trust Our Service
              </h3>
              <p>
                Industrial operations require cleaning providers who understand manufacturing environments, workplace safety protocols, and the need to minimize operational disruption. We've developed specialized processes for industrial facilities that prioritize safety, efficiency, and results that meet the demanding standards of manufacturing operations.
              </p>
              <p>
                Our team undergoes safety training and follows strict protocols when working in industrial environments. We conduct comprehensive safety assessments before commencing work, coordinate with your safety officers, and comply with all site-specific requirements including PPE, induction processes, and hazard management.
              </p>
              <p>
                We understand that downtime costs money in industrial settings. Our team works efficiently to complete cleaning projects on schedule, coordinates with production managers to minimize impact, and can work during shutdowns, maintenance periods, or shift changeovers to suit your operational needs.
              </p>

              <h3 className="text-2xl font-bold text-[#0a1628] mt-8 mb-4">
                Heavy-Duty Cleaning Capabilities
              </h3>
              <p>
                Industrial environments require more than standard pressure cleaning. We use industrial-grade equipment with powerful pressure capabilities and specialized cleaning solutions designed to break down heavy oils, greases, chemical residues, and industrial contaminants that standard methods can't handle.
              </p>
              <p>
                Our team has experience with various industrial contaminants including petroleum products, manufacturing residues, food processing waste, chemical spillages, and more. We select appropriate cleaning methods and solutions for each situation, ensuring effective results while protecting surfaces and complying with environmental regulations.
              </p>

              <h3 className="text-2xl font-bold text-[#0a1628] mt-8 mb-4">
                Regular Maintenance Programs
              </h3>
              <p>
                Many Perth industrial facilities benefit from regular scheduled cleaning that maintains workplace standards, supports safety compliance, and prevents contaminant buildup. We offer customized maintenance programs that can include monthly, quarterly, or annual cleaning based on your facility's specific requirements.
              </p>
              <p>
                Regular cleaning helps maintain safe working conditions, prevents slip hazards from oil and grease buildup, and creates cleaner, more professional work environments. Scheduled maintenance is also more cost-effective than reactive cleaning and helps facilities maintain compliance with workplace safety standards.
              </p>

              <h3 className="text-2xl font-bold text-[#0a1628] mt-8 mb-4">
                Environmental Compliance
              </h3>
              <p>
                Industrial cleaning must be conducted in compliance with environmental regulations. We use appropriate containment methods for wastewater, select environmentally responsible cleaning solutions where possible, and follow all regulations regarding industrial waste water disposal. Our team understands the environmental compliance requirements for industrial facilities.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CommercialProcess 
        title="Our Industrial Cleaning Process"
        steps={process}
      />
      <CommercialCTA 
        serviceName="Industrial Facility"
        descriptionPlaceholder="Tell us about your industrial pressure washing needs..."
      />
    </main>
  );
}