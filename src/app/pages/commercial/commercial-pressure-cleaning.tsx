import { CommercialHero } from '../../components/commercial/commercial-hero';
import { CommercialBenefits } from '../../components/commercial/commercial-benefits';
import { CommercialProcess } from '../../components/commercial/commercial-process';
import { CommercialCTA } from '../../components/commercial/commercial-cta';
import { Briefcase, Shield, Users, Clock, CheckCircle, Star, Award, Building2 } from 'lucide-react';
import { motion } from 'motion/react';
import heroImage from '../../../assets/1ef480a4697ca3350ef723e0ead8e0aa6892ee92.webp';
import showcaseImage from '../../../assets/6bbaf4ca5bf4a991f067849bdb8c19880078fe6d.webp';

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
    <main className="bg-white">
      <CommercialHero
        title="Commercial Pressure Cleaning Perth"
        subtitle="Professional Excellence"
        description="Pristine business exteriors that command respect. We deliver top-tier pressure cleaning for Perth's commercial properties with zero operational downtime."
      />
      
      {/* Trust Bar */}
      <div className="bg-[#0a1628] py-8 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 flex flex-wrap justify-center gap-8 md:gap-16 text-white/60">
          <div className="flex items-center gap-2">
            <Award className="w-5 h-5 text-[#00d4ff]" />
            <span className="font-semibold uppercase tracking-wider text-xs">Fully Insured</span>
          </div>
          <div className="flex items-center gap-2">
            <Star className="w-5 h-5 text-[#00d4ff]" />
            <span className="font-semibold uppercase tracking-wider text-xs">5-Star Rated</span>
          </div>
          <div className="flex items-center gap-2">
            <Shield className="w-5 h-5 text-[#00d4ff]" />
            <span className="font-semibold uppercase tracking-wider text-xs">WA Local Expert</span>
          </div>
          <div className="flex items-center gap-2">
            <Building2 className="w-5 h-5 text-[#00d4ff]" />
            <span className="font-semibold uppercase tracking-wider text-xs">Commercial Grade</span>
          </div>
        </div>
      </div>

      <CommercialBenefits benefits={benefits} />

      {/* Modern Showcase Section */}
      <section className="py-20 md:py-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-5xl font-bold text-[#0a1628] mb-8 leading-tight">
                Command Attention with a <span className="text-[#00d4ff]">Pristine Business</span> Exterior
              </h2>
              <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                <p>
                  Your property is your silent salesperson. Our professional cleaning services ensure it's always saying the right thing. From high-rise facades to expansive parking complexes, we use commercial-grade equipment and eco-friendly techniques to restore your property's primary appeal.
                </p>
                <div className="grid sm:grid-cols-2 gap-4 pt-4">
                  {[
                    'Office Complexes',
                    'Retail Centers',
                    'Medical Facilities',
                    'Industrial Sites',
                    'Educational Campus',
                    'Hospitality Venues'
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-[#00d4ff]" />
                      <span className="font-semibold text-[#0a1628]">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute -inset-4 bg-[#00d4ff]/10 rounded-2xl -rotate-2" />
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-100">
                <img 
                  src={showcaseImage} 
                  alt="Commercial pressure cleaning showcase" 
                  className="w-full h-full object-cover aspect-[4/3]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628]/60 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <p className="text-white font-bold text-xl uppercase tracking-widest">Premium Results Guaranteed</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Split Comparison Section */}
      <section className="py-20 bg-[#0a1628] text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">The Power of Clean</h2>
            <p className="text-xl text-white/60 max-w-2xl mx-auto">See the transformative difference our industrial-grade equipment delivers for Perth businesses.</p>
          </div>
          
          <div className="relative group rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
            <div className="grid md:grid-cols-2 gap-1">
              <div className="relative aspect-video md:aspect-auto h-[400px]">
                <img src={heroImage} alt="Before cleaning" className="w-full h-full object-cover" />
                <div className="absolute top-6 left-6 bg-[#0a1628] text-white px-6 py-2 rounded-full font-bold text-sm tracking-widest uppercase">Before</div>
              </div>
              <div className="relative aspect-video md:aspect-auto h-[400px]">
                <img src={showcaseImage} alt="After cleaning" className="w-full h-full object-cover" />
                <div className="absolute top-6 right-6 bg-[#00d4ff] text-[#0a1628] px-6 py-2 rounded-full font-bold text-sm tracking-widest uppercase">After Restoration</div>
              </div>
            </div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-2xl border-4 border-[#00d4ff] z-10 hidden md:flex">
              <Star className="w-8 h-8 text-[#00d4ff] animate-pulse" />
            </div>
          </div>
        </div>
      </section>

      <CommercialProcess 
        title="Our Engineered Approach"
        steps={process}
      />

      <CommercialCTA 
        serviceName="Business"
        descriptionPlaceholder="Tell us about your commercial pressure cleaning needs..."
      />
    </main>
  );
}