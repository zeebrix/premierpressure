import { Link } from 'react-router';
import { ArrowLeft, Clock, DollarSign, Home, Droplets, Wind, CheckCircle, AlertCircle, TrendingUp } from 'lucide-react';
import { SEO } from '../../components/seo';

export function PricingGuidePage() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    'headline': 'Perth Pressure Cleaning Pricing Guide 2026',
    'description': 'Comprehensive pricing guide for pressure cleaning services in Perth. Understand costs, factors that affect pricing, and get accurate estimates for your project.',
    'datePublished': '2026-01-15',
    'dateModified': '2026-03-12',
    'author': {
      '@type': 'Organization',
      'name': 'Premier Pressure Solutions WA'
    },
    'publisher': {
      '@type': 'Organization',
      'name': 'Premier Pressure Solutions WA',
      'logo': {
        '@type': 'ImageObject',
        'url': 'https://premierpressurewa.com.au/logo.png'
      }
    }
  };

  return (
    <>
      <SEO
        title="Perth Pressure Cleaning Pricing Guide 2026 | Cost Estimates & Factors"
        description="Comprehensive pricing guide for pressure cleaning services in Perth. Understand costs, factors affecting pricing, and get accurate estimates for driveways, houses, roofs & more."
        canonical="https://premierpressurewa.com.au/resources/pricing-guide"
        schema={structuredData}
      />

      <article className="bg-white">
        {/* Article Header */}
        <header className="bg-gradient-to-br from-[#0a1628] to-[#1a2640] text-white py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link to="/resources" className="inline-flex items-center gap-2 text-[#00d4ff] hover:text-white mb-6 transition-colors">
              <ArrowLeft className="w-4 h-4" />
              Back to Resources
            </Link>
            
            <div className="flex items-center gap-3 mb-4">
              <span className="px-3 py-1 bg-[#00d4ff] text-[#0a1628] rounded-full text-sm font-bold">
                Pricing
              </span>
              <div className="flex items-center gap-2 text-gray-300 text-sm">
                <Clock className="w-4 h-4" />
                <span>8 min read</span>
              </div>
            </div>

            <h1 className="text-4xl sm:text-5xl font-bold mb-4">
              Perth Pressure Cleaning Pricing Guide 2026
            </h1>
            
            <p className="text-xl text-gray-300">
              Get transparent pricing information for all pressure cleaning services in Perth. Understand what factors affect costs and get accurate estimates.
            </p>

            <div className="mt-6 text-sm text-gray-400">
              Last updated: March 12, 2026
            </div>
          </div>
        </header>

        {/* Article Content */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Introduction */}
          <section className="prose prose-lg max-w-none mb-12">
            <p className="text-lg text-gray-700 leading-relaxed">
              When it comes to pressure cleaning in Perth, understanding pricing can be confusing. This comprehensive guide breaks down exactly what you can expect to pay for professional pressure cleaning services in 2026, including the factors that influence costs and how to get the best value for your investment.
            </p>
          </section>

          {/* Average Pricing Table */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-[#0a1628] mb-6">
              Average Pressure Cleaning Costs in Perth
            </h2>
            
            <div className="bg-gradient-to-br from-[#0a1628] to-[#1a2640] rounded-xl p-8 text-white mb-6">
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  { label: 'Small Jobs', range: '$150-$300', examples: 'Small driveways, patios' },
                  { label: 'Medium Jobs', range: '$300-$600', examples: 'House washing, large driveways' },
                  { label: 'Large Jobs', range: '$600-$1,500+', examples: 'Roof cleaning, commercial properties' }
                ].map((tier, index) => (
                  <div key={index} className="text-center">
                    <div className="text-sm text-[#00d4ff] mb-2">{tier.label}</div>
                    <div className="text-2xl font-bold mb-2">{tier.range}</div>
                    <div className="text-sm text-gray-400">{tier.examples}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
              <h3 className="text-xl font-bold text-[#0a1628] mb-4">Service-Specific Pricing</h3>
              
              <div className="space-y-4">
                {[
                  { service: 'Driveway Cleaning', price: '$150 - $400', details: 'Based on size (single/double), condition, and material type' },
                  { service: 'House Washing', price: '$300 - $800', details: 'Depends on house size (1-4 bedrooms), height, and exterior condition' },
                  { service: 'Roof Cleaning', price: '$400 - $1,200', details: 'Varies by roof size, pitch, material (tiles/metal), and accessibility' },
                  { service: 'Concrete Pathways', price: '$100 - $250', details: 'Per 20-50 square meters, depending on condition' },
                  { service: 'Paver Cleaning', price: '$200 - $500', details: 'Cleaning only; add $150-$300 for sealing' },
                  { service: 'Pool Area Cleaning', price: '$150 - $350', details: 'Based on pool surround size and material type' },
                  { service: 'Window Cleaning', price: '$150 - $400', details: 'Exterior windows for standard 3-4 bedroom home' },
                  { service: 'Limestone Cleaning', price: '$250 - $600', details: 'Requires gentle soft washing; priced per square meter' },
                  { service: 'Commercial Properties', price: '$500 - $3,000+', details: 'Custom quotes based on size and requirements' }
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3 pb-4 border-b border-gray-200 last:border-0">
                    <DollarSign className="w-5 h-5 text-[#00d4ff] flex-shrink-0 mt-1" />
                    <div className="flex-1">
                      <div className="flex justify-between items-start mb-1">
                        <h4 className="font-bold text-[#0a1628]">{item.service}</h4>
                        <span className="text-[#00d4ff] font-bold ml-4">{item.price}</span>
                      </div>
                      <p className="text-sm text-gray-600">{item.details}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Factors Affecting Price */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-[#0a1628] mb-6">
              7 Key Factors That Affect Pricing
            </h2>

            <div className="space-y-6">
              {[
                {
                  title: '1. Surface Size & Type',
                  description: 'Larger areas require more time, water, and equipment usage. Different surfaces (concrete vs. limestone) require different pressure levels and cleaning solutions, affecting both time and cost.'
                },
                {
                  title: '2. Condition & Severity of Dirt',
                  description: 'Heavy mould, deep oil stains, or years of neglect require pre-treatment, multiple passes, and specialized cleaning solutions. Light maintenance cleaning is significantly faster and cheaper.'
                },
                {
                  title: '3. Accessibility & Height',
                  description: 'Hard-to-reach areas like second-story roofs, tight side passages, or properties with limited water access require additional equipment and safety measures, increasing costs.'
                },
                {
                  title: '4. Property Location',
                  description: 'Travel time to remote suburbs, parking restrictions, or difficult site access can affect pricing. Most Perth metro area properties are within standard service zones.'
                },
                {
                  title: '5. Additional Services',
                  description: 'Sealing pavers after cleaning, gutter cleaning, or applying protective treatments adds value but increases the total investment.'
                },
                {
                  title: '6. Equipment & Technique Required',
                  description: 'Delicate surfaces require soft washing equipment and eco-friendly chemicals. Commercial-grade jobs need industrial equipment, all factored into pricing.'
                },
                {
                  title: '7. Time & Urgency',
                  description: 'Same-day or emergency services, weekend work, or pre-sale rush jobs may incur premium rates. Booking in advance offers better value.'
                }
              ].map((factor, index) => (
                <div key={index} className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                  <h3 className="text-xl font-bold text-[#0a1628] mb-3">{factor.title}</h3>
                  <p className="text-gray-700 leading-relaxed">{factor.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* How to Get Accurate Quote */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-[#0a1628] mb-6">
              How to Get an Accurate Quote
            </h2>

            <div className="bg-gradient-to-br from-[#f8f9fa] to-[#e9ecef] rounded-xl p-8 mb-6">
              <div className="space-y-4">
                {[
                  { step: '1', title: 'Measure Your Area', text: 'Know approximate square meters or dimensions (e.g., "double driveway, roughly 40 sqm")' },
                  { step: '2', title: 'Describe the Condition', text: 'Be honest about dirt levels: light dust, moderate mould, or heavy staining' },
                  { step: '3', title: 'Identify the Surface', text: 'Specify materials: concrete, brick, limestone, roof tiles, timber deck, etc.' },
                  { step: '4', title: 'Mention Access Issues', text: 'Note if there\'s limited vehicle access, water restrictions, or height concerns' },
                  { step: '5', title: 'Request On-Site Inspection', text: 'For complex or large jobs, an on-site quote ensures the most accurate pricing' }
                ].map((step, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-[#00d4ff] text-white rounded-full flex items-center justify-center font-bold">
                      {step.step}
                    </div>
                    <div>
                      <h3 className="font-bold text-[#0a1628] mb-1">{step.title}</h3>
                      <p className="text-gray-700">{step.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Pricing Red Flags */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-[#0a1628] mb-6">
              Pricing Red Flags to Watch For
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-red-50 rounded-xl p-6 border border-red-200">
                <div className="flex items-start gap-3 mb-4">
                  <AlertCircle className="w-6 h-6 text-red-600 flex-shrink-0" />
                  <h3 className="text-lg font-bold text-red-900">Too Good to Be True Prices</h3>
                </div>
                <p className="text-gray-700 mb-3">
                  If a quote is 50% below market average, question the quality, insurance, or if corners will be cut. Professional equipment and proper insurance aren't cheap.
                </p>
                <p className="text-sm text-red-800 font-semibold">
                  ⚠️ Typical red flag: "Full house wash $100" for a 4-bedroom home
                </p>
              </div>

              <div className="bg-red-50 rounded-xl p-6 border border-red-200">
                <div className="flex items-start gap-3 mb-4">
                  <AlertCircle className="w-6 h-6 text-red-600 flex-shrink-0" />
                  <h3 className="text-lg font-bold text-red-900">No Written Quote</h3>
                </div>
                <p className="text-gray-700 mb-3">
                  Verbal quotes can lead to disputes. Reputable companies provide detailed written quotes specifying surfaces, methods, and total costs.
                </p>
                <p className="text-sm text-red-800 font-semibold">
                  ⚠️ Always insist on written documentation
                </p>
              </div>

              <div className="bg-red-50 rounded-xl p-6 border border-red-200">
                <div className="flex items-start gap-3 mb-4">
                  <AlertCircle className="w-6 h-6 text-red-600 flex-shrink-0" />
                  <h3 className="text-lg font-bold text-red-900">Payment Upfront</h3>
                </div>
                <p className="text-gray-700 mb-3">
                  Most professional companies require payment after job completion or 50% deposit for large commercial jobs only. Full upfront payment is unusual.
                </p>
                <p className="text-sm text-red-800 font-semibold">
                  ⚠️ Standard terms: Pay on completion or small deposit
                </p>
              </div>

              <div className="bg-red-50 rounded-xl p-6 border border-red-200">
                <div className="flex items-start gap-3 mb-4">
                  <AlertCircle className="w-6 h-6 text-red-600 flex-shrink-0" />
                  <h3 className="text-lg font-bold text-red-900">No Insurance Proof</h3>
                </div>
                <p className="text-gray-700 mb-3">
                  If a company can't provide public liability insurance details, you're liable for accidents or property damage. Always verify insurance.
                </p>
                <p className="text-sm text-red-800 font-semibold">
                  ⚠️ Ask for insurance certificate before booking
                </p>
              </div>
            </div>
          </section>

          {/* Value vs. Cost */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-[#0a1628] mb-6">
              Understanding Value vs. Cost
            </h2>

            <div className="bg-white rounded-xl p-8 border border-gray-200 shadow-sm">
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                The cheapest quote isn't always the best value. Here's what you're actually paying for with professional pressure cleaning:
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                {[
                  {
                    icon: CheckCircle,
                    title: 'Professional Equipment',
                    description: 'Commercial-grade pressure washers ($5,000-$15,000) deliver superior results vs. DIY machines'
                  },
                  {
                    icon: CheckCircle,
                    title: 'Expert Knowledge',
                    description: 'Years of experience knowing correct pressure for each surface prevents costly damage'
                  },
                  {
                    icon: CheckCircle,
                    title: 'Full Insurance Coverage',
                    description: 'Public liability insurance protects you from accident costs and property damage claims'
                  },
                  {
                    icon: CheckCircle,
                    title: 'Time Savings',
                    description: 'Professionals complete in hours what takes DIYers days, without the learning curve'
                  },
                  {
                    icon: CheckCircle,
                    title: 'Safety Compliance',
                    description: 'Proper safety equipment, training, and procedures for working at heights or with chemicals'
                  },
                  {
                    icon: CheckCircle,
                    title: 'Guaranteed Results',
                    description: 'Satisfaction guarantees and warranty on work provides peace of mind'
                  }
                ].map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <div key={index} className="flex items-start gap-3">
                      <Icon className="w-6 h-6 text-[#00d4ff] flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-bold text-[#0a1628] mb-1">{item.title}</h3>
                        <p className="text-gray-600 text-sm">{item.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>

          {/* Money-Saving Tips */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-[#0a1628] mb-6">
              5 Ways to Save Money on Pressure Cleaning
            </h2>

            <div className="space-y-4">
              {[
                {
                  title: 'Bundle Multiple Services',
                  description: 'Combine driveway + house + patio cleaning in one booking. Most companies offer discounts for multiple areas.',
                  savings: 'Save 10-20%'
                },
                {
                  title: 'Book During Off-Peak Season',
                  description: 'Winter months (June-August) are slower. Some companies offer off-season discounts.',
                  savings: 'Save 5-15%'
                },
                {
                  title: 'New Customer Discounts',
                  description: 'Many companies (including us!) offer 10% off for first-time customers.',
                  savings: 'Save 10%'
                },
                {
                  title: 'Regular Maintenance Plans',
                  description: 'Annual cleaning contracts cost less than one-off emergency cleans. Prevents severe buildup.',
                  savings: 'Save 15-25%'
                },
                {
                  title: 'Clear Access & Prep Work',
                  description: 'Move outdoor furniture, clear obstacles, and ensure water access before arrival to reduce time on site.',
                  savings: 'Save time charges'
                }
              ].map((tip, index) => (
                <div key={index} className="bg-green-50 rounded-xl p-6 border border-green-200">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-[#0a1628] mb-2">{tip.title}</h3>
                      <p className="text-gray-700">{tip.description}</p>
                    </div>
                    <div className="flex-shrink-0 bg-green-600 text-white px-3 py-1 rounded-full text-sm font-bold">
                      {tip.savings}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* CTA Section */}
          <section className="bg-gradient-to-br from-[#0a1628] to-[#1a2640] rounded-2xl p-8 text-white text-center">
            <h2 className="text-3xl font-bold mb-4">
              Ready to Get Your Free Quote?
            </h2>
            <p className="text-lg text-gray-300 mb-6 max-w-2xl mx-auto">
              Contact Premier Pressure Solutions WA for transparent, competitive pricing on all pressure cleaning services across Perth. New customers receive 10% off!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:0452579657"
                className="inline-flex items-center justify-center gap-2 bg-[#00d4ff] text-[#0a1628] px-8 py-4 rounded-lg font-bold text-lg hover:bg-[#00bfe6] transition-all"
              >
                Call 0452 579 657
              </a>
              <Link
                to="/services/pressure-cleaning#quote"
                className="inline-flex items-center justify-center gap-2 bg-white/10 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white/20 transition-all border border-white/20"
              >
                Get Free Quote
              </Link>
            </div>
          </section>
        </div>
      </article>
    </>
  );
}
