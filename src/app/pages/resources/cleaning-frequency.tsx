import { Link } from 'react-router';
import { ArrowLeft, Clock, Calendar, Cloud, Home, Droplets, Wind } from 'lucide-react';
import { SEO } from '../../components/seo';
import { generateLocalBusinessSchema, combineSchemas } from '../../utils/local-business-schema';

export function CleaningFrequencyPage() {
  const articleSchema = {
    '@type': 'Article',
    'headline': 'How Often Should You Pressure Clean in Perth?',
    'description': 'Learn the optimal pressure cleaning frequency for Perth\'s unique climate. Expert recommendations for driveways, houses, roofs and more.',
    'datePublished': '2026-02-01',
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
        'url': 'https://premierpressuresolutionswa.com.au/logo.png'
      }
    }
  };

  const combinedSchema = combineSchemas(
    generateLocalBusinessSchema(),
    articleSchema
  );

  return (
    <>
      <SEO
        title="How Often Should You Pressure Clean in Perth? | Maintenance Schedule Guide"
        description="Expert guide on pressure cleaning frequency for Perth properties. Learn optimal schedules for driveways, houses, roofs based on Perth's climate. Protect your investment."
        canonical="https://premierpressurewa.com.au/resources/cleaning-frequency"
        structuredData={combinedSchema}
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
                Maintenance
              </span>
              <div className="flex items-center gap-2 text-gray-300 text-sm">
                <Clock className="w-4 h-4" />
                <span>6 min read</span>
              </div>
            </div>

            <h1 className="text-4xl sm:text-5xl font-bold mb-4">
              How Often Should You Pressure Clean in Perth?
            </h1>
            
            <p className="text-xl text-gray-300">
              Learn the optimal cleaning frequency for Perth's unique climate. Protect your investment with proper maintenance schedules.
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
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Perth's unique climate—hot, dry summers and mild, wet winters—creates the perfect conditions for dirt, mould, and algae buildup on your property. Regular pressure cleaning isn't just about aesthetics; it's essential maintenance that protects your investment and prevents costly damage.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              But how often is "often enough"? This guide provides expert recommendations tailored to Perth's specific environmental conditions.
            </p>
          </section>

          {/* Quick Reference */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-[#0a1628] mb-6">
              Quick Reference: Recommended Frequencies
            </h2>
            
            <div className="bg-gradient-to-br from-[#0a1628] to-[#1a2640] rounded-xl p-8 text-white">
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  { surface: 'Driveways & Pathways', frequency: 'Every 12 months', icon: Home },
                  { surface: 'House Exteriors', frequency: 'Every 12-24 months', icon: Home },
                  { surface: 'Roof Cleaning', frequency: 'Every 24-36 months', icon: Wind },
                  { surface: 'Pool Areas & Patios', frequency: 'Every 12 months', icon: Droplets },
                  { surface: 'Commercial Properties', frequency: 'Every 6-12 months', icon: Home },
                  { surface: 'Coastal Properties', frequency: '+50% more frequent', icon: Cloud }
                ].map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <div key={index} className="flex items-start gap-3 bg-white/10 rounded-lg p-4">
                      <Icon className="w-6 h-6 text-[#00d4ff] flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-bold mb-1">{item.surface}</h3>
                        <p className="text-[#00d4ff] text-sm">{item.frequency}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>

          {/* Perth's Climate Impact */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-[#0a1628] mb-6">
              Why Perth's Climate Matters
            </h2>

            <div className="bg-gray-50 rounded-xl p-8 mb-6">
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Cloud className="w-8 h-8 text-orange-600" />
                  </div>
                  <h3 className="font-bold text-[#0a1628] mb-2">Hot, Dry Summers</h3>
                  <p className="text-sm text-gray-700">Dust and dirt accumulate rapidly on surfaces during Perth's long, dry summer months</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Droplets className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="font-bold text-[#0a1628] mb-2">Wet Winters</h3>
                  <p className="text-sm text-gray-700">Winter rainfall creates ideal conditions for mould, mildew, and algae growth</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-cyan-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Wind className="w-8 h-8 text-cyan-600" />
                  </div>
                  <h3 className="font-bold text-[#0a1628] mb-2">Coastal Influence</h3>
                  <p className="text-sm text-gray-700">Salt spray accelerates deterioration, especially within 5km of the ocean</p>
                </div>
              </div>
            </div>

            <p className="text-gray-700 leading-relaxed">
              These factors combine to create unique challenges for Perth property owners. The cycle of dust accumulation followed by moist conditions creates stubborn stains and organic growth that, if left untreated, can cause permanent damage to surfaces.
            </p>
          </section>

          {/* Surface-by-Surface Guide */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-[#0a1628] mb-6">
              Detailed Frequency Guide by Surface Type
            </h2>

            <div className="space-y-6">
              {[
                {
                  title: 'Driveways & Concrete Pathways',
                  frequency: 'Every 12 months (annually)',
                  reasoning: 'Concrete is porous and absorbs oils, dirt, and organic matter. Annual cleaning prevents permanent staining and maintains curb appeal.',
                  signs: [
                    'Visible oil stains or tire marks',
                    'Dark patches or discoloration',
                    'Moss or algae in shaded areas',
                    'Reduced surface grip (feels slippery)'
                  ],
                  coastalAdjustment: 'Every 8-10 months for coastal properties'
                },
                {
                  title: 'House Exteriors (Walls & Eaves)',
                  frequency: 'Every 12-24 months',
                  reasoning: 'Perth\'s dust and pollution settle on exterior walls. Painted surfaces particularly benefit from regular cleaning to prevent deterioration and maintain paint adhesion.',
                  signs: [
                    'Visible mould spots (green/black patches)',
                    'Dusty or grimy appearance',
                    'Cobwebs in eaves and corners',
                    'Faded or streaked paintwork'
                  ],
                  coastalAdjustment: 'Every 12 months minimum for coastal homes'
                },
                {
                  title: 'Roof Tiles & Metal Roofs',
                  frequency: 'Every 24-36 months',
                  reasoning: 'Roofs accumulate moss, lichen, and debris that can damage tiles and reduce reflective properties, increasing cooling costs. Regular cleaning extends roof life significantly.',
                  signs: [
                    'Visible moss or lichen growth',
                    'Dark streaks or patches',
                    'Debris accumulation in valleys',
                    'Increased energy bills (heat absorption)'
                  ],
                  coastalAdjustment: 'Every 18-24 months for coastal properties'
                },
                {
                  title: 'Paver Patios & Outdoor Spaces',
                  frequency: 'Every 12-18 months',
                  reasoning: 'Pavers accumulate dirt in joints and are prone to weed growth. Regular cleaning maintains the integrity of joint sand and prevents paver movement.',
                  signs: [
                    'Weeds growing between pavers',
                    'Faded or discolored appearance',
                    'Loose or shifting pavers',
                    'Slippery when wet'
                  ],
                  coastalAdjustment: 'Every 12 months, with resealing every 2-3 years'
                },
                {
                  title: 'Pool Surrounds & Decking',
                  frequency: 'Every 12 months',
                  reasoning: 'Constant moisture exposure promotes algae and mould growth, creating slip hazards. Safety and aesthetics both demand regular maintenance.',
                  signs: [
                    'Green algae buildup',
                    'Slippery surfaces when wet',
                    'Staining from pool chemicals',
                    'Faded or worn appearance'
                  ],
                  coastalAdjustment: 'Every 8-10 months for optimal safety'
                },
                {
                  title: 'Commercial Properties',
                  frequency: 'Every 6-12 months',
                  reasoning: 'High foot traffic and business image requirements demand more frequent cleaning. First impressions matter for customer-facing businesses.',
                  signs: [
                    'Customer or employee complaints',
                    'Visible dirt at entrances',
                    'Graffiti or vandalism marks',
                    'Loss of professional appearance'
                  ],
                  coastalAdjustment: 'Every 4-6 months for storefronts'
                }
              ].map((surface, index) => (
                <div key={index} className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                  <div className="mb-4">
                    <h3 className="text-2xl font-bold text-[#0a1628] mb-2">{surface.title}</h3>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-5 h-5 text-[#00d4ff]" />
                      <span className="text-lg font-bold text-[#00d4ff]">{surface.frequency}</span>
                    </div>
                  </div>

                  <div className="mb-4">
                    <h4 className="font-bold text-gray-900 mb-2">Why This Frequency?</h4>
                    <p className="text-gray-700">{surface.reasoning}</p>
                  </div>

                  <div className="mb-4">
                    <h4 className="font-bold text-gray-900 mb-2">Signs You Need Cleaning:</h4>
                    <ul className="grid md:grid-cols-2 gap-2">
                      {surface.signs.map((sign, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                          <span className="text-[#00d4ff] mt-0.5">✓</span>
                          <span>{sign}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
                    <h4 className="font-bold text-blue-900 text-sm mb-1">Coastal Adjustment:</h4>
                    <p className="text-blue-800 text-sm">{surface.coastalAdjustment}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Factors That Increase Frequency */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-[#0a1628] mb-6">
              When to Clean More Frequently
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  factor: 'Coastal Location (< 5km from ocean)',
                  adjustment: '+50% frequency',
                  reason: 'Salt spray accelerates deterioration and corrosion'
                },
                {
                  factor: 'Heavy Tree Coverage',
                  adjustment: '+30-40% frequency',
                  reason: 'Falling leaves, sap, and increased moisture retention'
                },
                {
                  factor: 'North-Facing Surfaces',
                  adjustment: '+20-30% frequency',
                  reason: 'Direct sun exposure causes faster fading and heat damage'
                },
                {
                  factor: 'High-Traffic Areas',
                  adjustment: '+40-50% frequency',
                  reason: 'Constant use accelerates wear and dirt accumulation'
                },
                {
                  factor: 'Properties Near Construction',
                  adjustment: '+100% during construction',
                  reason: 'Excessive dust and debris from nearby building work'
                },
                {
                  factor: 'Rental Properties',
                  adjustment: 'Between each tenancy',
                  reason: 'Maintains property value and attracts quality tenants'
                }
              ].map((item, index) => (
                <div key={index} className="bg-gradient-to-br from-[#f8f9fa] to-[#e9ecef] rounded-xl p-6 border border-gray-200">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="font-bold text-[#0a1628] flex-1">{item.factor}</h3>
                    <span className="bg-[#00d4ff] text-white px-3 py-1 rounded-full text-xs font-bold ml-2">
                      {item.adjustment}
                    </span>
                  </div>
                  <p className="text-sm text-gray-700">{item.reason}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Seasonal Considerations */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-[#0a1628] mb-6">
              Best Times to Pressure Clean in Perth
            </h2>

            <div className="space-y-4">
              {[
                {
                  season: 'Spring (September - November)',
                  rating: 'BEST TIME',
                  color: 'green',
                  reasons: [
                    'Perfect weather conditions - not too hot',
                    'Removes winter mould and prepares for summer',
                    'Ideal for pre-summer entertaining preparation',
                    'Lower demand = better availability and pricing'
                  ]
                },
                {
                  season: 'Autumn (March - May)',
                  rating: 'EXCELLENT',
                  color: 'blue',
                  reasons: [
                    'Comfortable temperatures for outdoor work',
                    'Cleans summer dust and prepares for winter',
                    'Removes dry summer grime before winter rains',
                    'Good availability before winter slow-down'
                  ]
                },
                {
                  season: 'Summer (December - February)',
                  rating: 'GOOD',
                  color: 'orange',
                  reasons: [
                    'Fast drying times due to heat',
                    'Peak season for pre-sale cleaning',
                    'Can be uncomfortably hot for workers',
                    'Higher demand may mean premium pricing'
                  ]
                },
                {
                  season: 'Winter (June - August)',
                  rating: 'FAIR',
                  color: 'gray',
                  reasons: [
                    'Slower drying times due to humidity',
                    'Rain may interrupt or delay service',
                    'Best for urgent mould removal',
                    'Lower demand = excellent availability'
                  ]
                }
              ].map((period, index) => (
                <div key={index} className="bg-white rounded-xl p-6 border-2 border-gray-200">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-bold text-[#0a1628]">{period.season}</h3>
                    <span className={`px-4 py-1 rounded-full text-sm font-bold ${
                      period.color === 'green' ? 'bg-green-500 text-white' :
                      period.color === 'blue' ? 'bg-blue-500 text-white' :
                      period.color === 'orange' ? 'bg-orange-500 text-white' :
                      'bg-gray-500 text-white'
                    }`}>
                      {period.rating}
                    </span>
                  </div>
                  <ul className="space-y-2">
                    {period.reasons.map((reason, i) => (
                      <li key={i} className="flex items-start gap-2 text-gray-700">
                        <span className="text-[#00d4ff] mt-1">•</span>
                        <span>{reason}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Cost of Neglect */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-[#0a1628] mb-6">
              The Cost of Delaying Pressure Cleaning
            </h2>

            <div className="bg-red-50 rounded-xl p-8 border border-red-200">
              <p className="text-lg text-gray-800 mb-6">
                Delaying regular maintenance might save money short-term, but it costs far more in the long run:
              </p>

              <div className="space-y-4">
                {[
                  { issue: 'Permanent Staining', cost: '$500-$2,000+ to replace stained concrete vs. $150-$300 annual cleaning' },
                  { issue: 'Roof Damage', cost: '$8,000-$25,000 roof replacement vs. $400-$800 every 2-3 years' },
                  { issue: 'Paint Deterioration', cost: '$5,000-$15,000 full exterior repaint vs. $300-$600 annual washing' },
                  { issue: 'Reduced Property Value', cost: '5-10% reduction in sale price vs. small annual maintenance cost' },
                  { issue: 'Health Hazards', cost: 'Medical bills and liability from mould/slip accidents vs. preventive cleaning' }
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3 bg-white rounded-lg p-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center font-bold text-sm">
                      !
                    </div>
                    <div>
                      <h3 className="font-bold text-red-900 mb-1">{item.issue}</h3>
                      <p className="text-sm text-gray-700">{item.cost}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Creating a Schedule */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-[#0a1628] mb-6">
              Creating Your Maintenance Schedule
            </h2>

            <div className="bg-gradient-to-br from-[#0a1628] to-[#1a2640] rounded-xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">Sample Annual Maintenance Plan</h3>
              
              <div className="space-y-4">
                {[
                  { month: 'September (Spring)', tasks: ['Clean driveway and pathways', 'Wash house exterior', 'Pool area cleaning'] },
                  { month: 'December (Early Summer)', tasks: ['Light touch-up of high-traffic areas', 'Pre-Christmas entertaining prep'] },
                  { month: 'March (Autumn)', tasks: ['Clean patio and outdoor living spaces', 'Spot clean any problem areas'] },
                  { month: 'Every 2-3 Years', tasks: ['Roof cleaning and gutter maintenance', 'Comprehensive full-property clean'] }
                ].map((period, index) => (
                  <div key={index} className="bg-white/10 rounded-lg p-4">
                    <h4 className="font-bold text-[#00d4ff] mb-2">{period.month}</h4>
                    <ul className="space-y-1">
                      {period.tasks.map((task, i) => (
                        <li key={i} className="text-sm text-gray-200 flex items-center gap-2">
                          <span className="text-[#00d4ff]">→</span>
                          {task}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              <div className="mt-6 bg-[#00d4ff] text-[#0a1628] rounded-lg p-4">
                <p className="font-bold text-center">
                  💡 Pro Tip: Book your annual cleaning at the same time each year to establish a routine and never miss maintenance.
                </p>
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="bg-gradient-to-br from-[#0a1628] to-[#1a2640] rounded-2xl p-8 text-white text-center">
            <h2 className="text-3xl font-bold mb-4">
              Ready to Start Your Maintenance Schedule?
            </h2>
            <p className="text-lg text-gray-300 mb-6">
              Contact Premier Pressure Solutions WA to create a customized cleaning schedule for your Perth property.
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