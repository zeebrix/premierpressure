import { CommercialHero } from '../../components/commercial/commercial-hero';
import { CommercialBenefits } from '../../components/commercial/commercial-benefits';
import { CommercialProcess } from '../../components/commercial/commercial-process';
import { CommercialCTA } from '../../components/commercial/commercial-cta';
import { motion } from 'motion/react';
import { CheckCircle, Shield, Sparkles, Clock } from 'lucide-react';

export function SchoolCleaningPage() {
  const benefits = [
    {
      icon: Shield,
      title: 'Safe for Students',
      description: 'Child-safe cleaning solutions and methods designed for educational environments with strict safety protocols.',
    },
    {
      icon: Sparkles,
      title: 'Hygienic Learning Spaces',
      description: 'Remove bacteria, mould, and contaminants from play areas, walkways, and outdoor learning spaces.',
    },
    {
      icon: Clock,
      title: 'Scheduled Service',
      description: 'Flexible scheduling during holidays, weekends, or after hours to avoid disruption to learning.',
    },
    {
      icon: CheckCircle,
      title: 'Full Compliance',
      description: 'Meet WA education facility standards and maintain a clean, professional appearance year-round.',
    },
  ];

  const process = [
    {
      title: 'Site Assessment',
      description: 'We conduct a thorough inspection of all areas requiring cleaning, identifying high-traffic zones, play equipment, and surfaces needing special attention.',
    },
    {
      title: 'Safety Planning',
      description: 'Develop a comprehensive safety plan ensuring minimal disruption and maximum protection for students, staff, and facilities.',
    },
    {
      title: 'Professional Cleaning',
      description: 'Our team uses commercial-grade equipment and child-safe solutions to clean walkways, buildings, play areas, sports courts, and outdoor facilities.',
    },
    {
      title: 'Quality Inspection',
      description: 'Final walkthrough to ensure all areas meet our high standards and your school\'s cleanliness requirements.',
    },
  ];

  return (
    <main>
      <CommercialHero
        title="School Pressure Cleaning Perth"
        subtitle="Professional pressure cleaning services for educational facilities across Perth"
        description="Create a safe, clean, and welcoming learning environment with our specialized school pressure cleaning services. We understand the unique needs of educational facilities and deliver hygienic results that meet WA standards."
      />
      
      <CommercialBenefits benefits={benefits} />

      {/* Service Overview */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0a1628] mb-6">
              Specialized Pressure Cleaning for Perth Schools
            </h2>
            <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
              <p>
                Perth schools face unique cleaning challenges from constant foot traffic, outdoor learning activities, and exposure to Western Australia's harsh weather conditions. Our professional school pressure cleaning services help educational facilities maintain safe, hygienic, and visually appealing environments that support student wellbeing and learning.
              </p>
              <p>
                We work with primary schools, high schools, TAFEs, and universities across Perth to clean playgrounds, walkways, building exteriors, sports facilities, and outdoor learning areas. Our team understands the importance of safety in educational settings and uses child-safe cleaning methods that deliver exceptional results without compromising student or staff wellbeing.
              </p>
              <p>
                From removing slippery algae buildup on walkways to cleaning sports courts and playground equipment, we help schools create clean, safe environments that parents trust and students enjoy. Our flexible scheduling ensures minimal disruption to your educational programs.
              </p>

              <h3 className="text-2xl font-bold text-[#0a1628] mt-8 mb-4">
                School Areas We Clean
              </h3>
              <div className="grid sm:grid-cols-2 gap-3 my-6">
                {[
                  'Playground surfaces and equipment',
                  'Building exteriors and walls',
                  'Walkways and pathways',
                  'Sports courts and facilities',
                  'Covered outdoor learning areas',
                  'Entry points and reception areas',
                  'Parking lots and driveways',
                  'Stairs, ramps, and accessibility paths',
                  'Fencing and boundary walls',
                  'Outdoor furniture and benches',
                  'Bike storage areas',
                  'Assembly areas',
                ].map((item) => (
                  <div key={item} className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-[#00d4ff] flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <h3 className="text-2xl font-bold text-[#0a1628] mt-8 mb-4">
                Why Schools Choose Premier Pressure Solutions WA
              </h3>
              <p>
                Educational facilities require cleaning providers who understand safety protocols, compliance requirements, and the importance of maintaining a professional appearance. We've developed specialized processes for school environments that prioritize student safety while delivering outstanding cleaning results.
              </p>
              <p>
                Our team holds appropriate insurance for educational facilities and follows strict safety protocols including proper signage, area cordoning, and scheduling to minimize any disruption. We understand that schools operate on tight budgets and offer competitive pricing with transparent quotes that help you plan maintenance budgets effectively.
              </p>
              <p>
                Perth schools trust us to maintain their facilities because we consistently deliver reliable, professional service. We work efficiently to complete projects on schedule, communicate clearly with administration staff, and always leave school premises clean and safe for students and staff.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CommercialProcess 
        title="Our School Cleaning Process"
        steps={process}
      />
      <CommercialCTA 
        serviceName="School"
        descriptionPlaceholder="Tell us about your school pressure cleaning needs..."
      />
    </main>
  );
}