import { CommercialHero } from '../../components/commercial/commercial-hero';
import { CommercialBenefits } from '../../components/commercial/commercial-benefits';
import { CommercialProcess } from '../../components/commercial/commercial-process';
import { CommercialCTA } from '../../components/commercial/commercial-cta';
import { motion } from 'motion/react';
import { CheckCircle, Shield, Baby, Sparkles, Clock } from 'lucide-react';

export function PlaygroundCleaningPage() {
  const benefits = [
    {
      icon: Baby,
      title: 'Child-Safe Solutions',
      description: 'Non-toxic, biodegradable cleaning products specifically chosen for environments where children play.',
    },
    {
      icon: Shield,
      title: 'Equipment Protection',
      description: 'Gentle cleaning methods that remove dirt and grime without damaging play equipment surfaces or safety features.',
    },
    {
      icon: Sparkles,
      title: 'Community Pride',
      description: 'Well-maintained playgrounds encourage community use and demonstrate commitment to child wellbeing.',
    },
    {
      icon: Clock,
      title: 'Timely Service',
      description: 'Regular cleaning schedules to ensure playgrounds are always clean and ready for use.',
    },
  ];

  const process = [
    {
      title: 'Playground Inspection',
      description: 'Thorough assessment of all play equipment, surfaces, and surrounding areas to identify cleaning requirements and any safety considerations.',
    },
    {
      title: 'Safety Planning',
      description: 'Develop comprehensive safety protocols including area cordoning, signage, and scheduling to ensure child safety during and after cleaning.',
    },
    {
      title: 'Gentle Cleaning',
      description: 'Using child-safe solutions and appropriate pressure settings, we clean all equipment and surfaces without compromising safety features.',
    },
    {
      title: 'Final Verification',
      description: 'Complete inspection to ensure all areas are clean, safe, and ready for children to enjoy.',
    },
  ];

  return (
    <main>
      <CommercialHero
        title="Playground Pressure Cleaning Perth"
        subtitle="Safe, professional cleaning for playgrounds and play equipment"
        description="Keep playgrounds clean, safe, and hygienic with our specialized playground cleaning services. We use child-safe methods to create healthy play environments that parents trust and children love."
      />
      
      <CommercialBenefits benefits={benefits} />

      {/* Service Overview */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0a1628] mb-6">
              Professional Playground Cleaning in Perth
            </h2>
            <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
              <p>
                Playgrounds are where Perth's children learn, play, and grow. These important community spaces face constant use and exposure to weather, resulting in accumulation of dirt, bacteria, mould, bird droppings, and other contaminants that can affect children's health and safety. Regular professional cleaning helps maintain hygienic play environments that parents trust and supports the longevity of playground equipment.
              </p>
              <p>
                Premier Pressure Solutions WA specializes in playground cleaning for schools, child care centers, councils, parks, and residential complexes across Perth. We understand the unique requirements of cleaning in environments designed for children and use specialized child-safe methods that deliver exceptional hygiene results without compromising equipment safety or integrity.
              </p>
              <p>
                Our team takes special care when cleaning playground equipment, using appropriate pressure settings and non-toxic solutions that remove contaminants effectively while protecting the surfaces children touch and play on. We follow strict safety protocols to ensure playgrounds are not only clean but also safe for children to enjoy immediately after our service.
              </p>

              <h3 className="text-2xl font-bold text-[#0a1628] mt-8 mb-4">
                Playground Areas We Clean
              </h3>
              <div className="grid sm:grid-cols-2 gap-3 my-6">
                {[
                  'Climbing structures and frames',
                  'Slides (all types)',
                  'Swing sets and chains',
                  'Spring riders and rockers',
                  'Balance beams and equipment',
                  'Monkey bars and overhead equipment',
                  'Sandpit surrounds',
                  'Play panels and interactive elements',
                  'Shade structures and covers',
                  'Benches and seating areas',
                  'Safety surfacing (rubber, turf)',
                  'Surrounding walkways and paths',
                ].map((item) => (
                  <div key={item} className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-[#00d4ff] flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <h3 className="text-2xl font-bold text-[#0a1628] mt-8 mb-4">
                Why Perth Playgrounds Choose Our Service
              </h3>
              <p>
                Parents, schools, and councils need playground cleaning providers who prioritize child safety above all else. We've developed specialized processes specifically for playground environments that deliver thorough cleaning results while maintaining the highest safety standards.
              </p>
              <p>
                Our team uses only child-safe, non-toxic cleaning solutions that are biodegradable and environmentally friendly. We understand that children touch, climb, and play on every surface we clean, so we never compromise on product safety. All our cleaning solutions are specifically chosen for use in environments frequented by children.
              </p>
              <p>
                We also use appropriate pressure settings that effectively clean surfaces without damaging protective coatings, safety surfacing, or equipment integrity. Different playground materials require different approaches - we adjust our methods for metal, plastic, timber, and composite materials to achieve optimal cleaning without causing harm.
              </p>

              <h3 className="text-2xl font-bold text-[#0a1628] mt-8 mb-4">
                Health Benefits of Clean Playgrounds
              </h3>
              <p>
                Regular playground cleaning provides significant health benefits for children. We remove bacteria and mould that can cause illness, eliminate bird droppings that carry harmful pathogens, and clean away dirt and grime that children inevitably touch during play. This helps reduce the spread of illness and creates healthier play environments.
              </p>
              <p>
                Clean playgrounds also encourage more frequent use. Parents are more likely to bring children to well-maintained playgrounds that look and feel clean. For schools and childcare centers, clean play equipment demonstrates commitment to child wellbeing and creates positive impressions with parents.
              </p>

              <h3 className="text-2xl font-bold text-[#0a1628] mt-8 mb-4">
                Council and Community Playgrounds
              </h3>
              <p>
                We work with local councils and community organizations to maintain public playgrounds across Perth. Our services help councils meet their duty of care obligations while providing clean, safe play spaces that communities appreciate and use regularly.
              </p>
              <p>
                We can establish regular cleaning schedules that keep council playgrounds consistently clean throughout the year, or provide one-off cleaning before community events, festivals, or school holidays when playground usage peaks.
              </p>

              <h3 className="text-2xl font-bold text-[#0a1628] mt-8 mb-4">
                School and Child Care Playgrounds
              </h3>
              <p>
                Educational facilities have specific requirements for playground maintenance and hygiene. We work with schools and child care centers across Perth to provide scheduled cleaning that supports health and safety standards while working around educational calendars.
              </p>
              <p>
                We can schedule cleaning during school holidays, weekends, or when playgrounds are not in use to ensure minimal disruption to children's outdoor learning and play time. Our team holds appropriate insurance for educational facilities and can provide all necessary documentation for your records.
              </p>

              <h3 className="text-2xl font-bold text-[#0a1628] mt-8 mb-4">
                Residential Complex Playgrounds
              </h3>
              <p>
                Strata properties and residential complexes with playgrounds benefit from regular professional cleaning that maintains amenity appeal and demonstrates commitment to resident families. Clean, well-maintained playgrounds add value to residential communities and support family satisfaction.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CommercialProcess 
        title="Our Playground Cleaning Process"
        steps={process}
      />
      <CommercialCTA 
        serviceName="Playground"
        descriptionPlaceholder="Tell us about your playground cleaning needs..."
      />
    </main>
  );
}