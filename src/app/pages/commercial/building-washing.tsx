import { CommercialHero } from '../../components/commercial/commercial-hero';
import { CommercialBenefits } from '../../components/commercial/commercial-benefits';
import { CommercialProcess } from '../../components/commercial/commercial-process';
import { CommercialCTA } from '../../components/commercial/commercial-cta';
import { motion } from 'motion/react';
import { CheckCircle, Building, Shield, Sparkles, Clock } from 'lucide-react';

export function BuildingWashingPage() {
  const benefits = [
    {
      icon: Building,
      title: 'Professional Appearance',
      description: 'Maintain a pristine building exterior that projects success and professionalism to clients, tenants, and visitors.',
    },
    {
      icon: Shield,
      title: 'Building Preservation',
      description: 'Remove harmful contaminants, mould, and pollutants that can damage building materials over time.',
    },
    {
      icon: Sparkles,
      title: 'Tenant Satisfaction',
      description: 'Well-maintained buildings contribute to tenant pride and satisfaction, supporting retention and attracting quality tenants.',
    },
    {
      icon: Clock,
      title: 'Time Efficiency',
      description: 'Regular cleaning saves time and effort, allowing you to focus on your core business operations.',
    },
  ];

  const process = [
    {
      title: 'Building Assessment',
      description: 'Comprehensive inspection of all exterior surfaces, materials, and areas requiring cleaning, including identification of any special requirements.',
    },
    {
      title: 'Method Selection',
      description: 'We determine the appropriate cleaning method for each surface type - from soft washing for rendered walls to high-pressure cleaning for concrete.',
    },
    {
      title: 'Professional Cleaning',
      description: 'Our team executes the cleaning plan using commercial-grade equipment and proven techniques that deliver outstanding results safely.',
    },
    {
      title: 'Final Inspection',
      description: 'Thorough walkthrough to ensure all areas meet commercial standards and your expectations for building appearance.',
    },
  ];

  return (
    <main>
      <CommercialHero
        title="Commercial Building Washing Perth"
        subtitle="Professional exterior cleaning for commercial properties across Perth"
        description="Enhance your commercial building's appearance and protect your investment with professional building washing services. We deliver exceptional results that maintain property value and create positive impressions."
      />
      
      <CommercialBenefits benefits={benefits} />

      {/* Service Overview */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0a1628] mb-6">
              Expert Commercial Building Cleaning in Perth
            </h2>
            <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
              <p>
                Your commercial building's exterior is the first thing clients, tenants, and visitors notice. A clean, well-maintained building projects professionalism, success, and attention to detail - qualities that matter in Perth's competitive commercial property market. Conversely, dirty, stained, or neglected building exteriors create negative impressions and can impact tenant satisfaction and property values.
              </p>
              <p>
                Premier Pressure Solutions WA specializes in professional building washing for commercial properties throughout Perth. We understand that commercial buildings face unique challenges from weather exposure, pollution, bird droppings, and environmental contaminants that accumulate over time. Our expert cleaning services restore building exteriors to like-new condition while protecting the materials and preserving your investment.
              </p>
              <p>
                From single-story office buildings to multi-story commercial complexes, we have the expertise, equipment, and experience to clean buildings of all sizes safely and effectively. Our team works seamlessly with property managers, building owners, and facilities teams to deliver results that enhance property appeal and protect long-term value.
              </p>

              <h3 className="text-2xl font-bold text-[#0a1628] mt-8 mb-4">
                Commercial Building Areas We Clean
              </h3>
              <div className="grid sm:grid-cols-2 gap-3 my-6">
                {[
                  'Building facades and exteriors',
                  'Glass curtain walls and windows',
                  'Rendered and painted surfaces',
                  'Concrete and masonry walls',
                  'Metal cladding and panels',
                  'Entry canopies and awnings',
                  'Signage and building lettering',
                  'Parking structures',
                  'Loading docks and service areas',
                  'Stairwells and access ways',
                  'Balconies and terraces',
                  'Ground level concrete surrounds',
                ].map((item) => (
                  <div key={item} className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-[#00d4ff] flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <h3 className="text-2xl font-bold text-[#0a1628] mt-8 mb-4">
                Why Perth Commercial Properties Choose Us
              </h3>
              <p>
                Commercial property owners and managers need cleaning providers who understand the unique requirements of business environments. We've developed specialized processes for commercial buildings that prioritize minimal disruption, workplace safety compliance, and results that meet professional standards.
              </p>
              <p>
                Our team holds appropriate insurance for commercial properties and follows strict safety protocols including proper signage, area management, and coordination with building occupants. We understand that businesses need to maintain operations, and we work flexibly to schedule cleaning at times that minimize impact.
              </p>
              <p>
                We use commercial-grade equipment and proven cleaning methods appropriate for different building materials. Whether your building features rendered walls, glass facades, concrete panels, or mixed materials, we apply the right techniques to achieve outstanding results without causing damage.
              </p>

              <h3 className="text-2xl font-bold text-[#0a1628] mt-8 mb-4">
                Soft Washing vs. Pressure Washing
              </h3>
              <p>
                Not all building surfaces should be cleaned with high-pressure water. Delicate materials like rendered walls, painted surfaces, and certain types of cladding require soft washing - a low-pressure cleaning method that uses specialized solutions to break down dirt and contaminants gently.
              </p>
              <p>
                Our team assesses each building surface and applies the appropriate cleaning method. Robust surfaces like concrete and brick can withstand higher pressure, while delicate finishes benefit from our soft washing approach. This expertise ensures we deliver exceptional cleaning results while protecting your building materials.
              </p>

              <h3 className="text-2xl font-bold text-[#0a1628] mt-8 mb-4">
                Regular Maintenance Programs
              </h3>
              <p>
                Preventative maintenance is more cost-effective than reactive cleaning. Many Perth commercial properties benefit from regular scheduled building washing that prevents dirt accumulation, maintains professional appearances, and extends the life of building materials. We offer customized maintenance programs with consistent pricing that makes budgeting straightforward.
              </p>
              <p>
                Regular cleaning also allows us to identify potential issues early, such as areas where water may be penetrating or materials beginning to deteriorate. This proactive approach helps property managers address problems before they become costly repairs.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CommercialProcess 
        title="Our Building Washing Process"
        steps={process}
      />
      <CommercialCTA 
        serviceName="Commercial Building"
        descriptionPlaceholder="Tell us about your commercial building washing needs..."
      />
    </main>
  );
}