import { Link } from 'react-router';
import { ArrowLeft, Clock, DollarSign, AlertTriangle, CheckCircle, XCircle, TrendingUp } from 'lucide-react';
import { SEO } from '../../components/seo';

export function DIYvsProfessionalPage() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    'headline': 'DIY vs Professional Pressure Cleaning: Complete Comparison',
    'description': 'Compare the real costs, risks, and results of DIY pressure cleaning versus hiring professionals. Make an informed decision for your Perth property.',
    'datePublished': '2026-02-10',
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
        title="DIY vs Professional Pressure Cleaning | Complete Cost & Risk Comparison"
        description="Should you DIY or hire professionals? Compare real costs, risks, results and time investment. Expert analysis for Perth homeowners making the right choice."
        canonical="https://premierpressurewa.com.au/resources/diy-vs-professional"
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
                Comparison
              </span>
              <div className="flex items-center gap-2 text-gray-300 text-sm">
                <Clock className="w-4 h-4" />
                <span>7 min read</span>
              </div>
            </div>

            <h1 className="text-4xl sm:text-5xl font-bold mb-4">
              DIY vs Professional Pressure Cleaning
            </h1>
            
            <p className="text-xl text-gray-300">
              Compare the real costs, risks, and results of DIY pressure cleaning versus hiring professionals. Make an informed decision.
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
              You've seen the pressure washers at Bunnings, watched a few YouTube videos, and you're thinking: "How hard can it be?" The truth is, while DIY pressure cleaning can work for some jobs, it's not always the money-saving solution it appears to be. Let's break down the real costs, risks, and results of both options.
            </p>
          </section>

          {/* Quick Decision Tool */}
          <section className="mb-12">
            <div className="bg-gradient-to-br from-[#0a1628] to-[#1a2640] rounded-xl p-8 text-white">
              <h2 className="text-2xl font-bold mb-6 text-center">Quick Decision Guide</h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-green-500/20 border-2 border-green-500 rounded-lg p-6">
                  <h3 className="text-xl font-bold mb-4 text-green-400">Consider DIY If:</h3>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-green-400 mt-1">✓</span>
                      <span>Small, simple job (e.g., small patio)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-400 mt-1">✓</span>
                      <span>Single-story, easily accessible</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-400 mt-1">✓</span>
                      <span>You have time to learn and practice</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-400 mt-1">✓</span>
                      <span>You already own quality equipment</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-400 mt-1">✓</span>
                      <span>Light maintenance cleaning only</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-blue-500/20 border-2 border-blue-500 rounded-lg p-6">
                  <h3 className="text-xl font-bold mb-4 text-blue-400">Hire Professionals If:</h3>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-blue-400 mt-1">✓</span>
                      <span>Large or multi-surface project</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-400 mt-1">✓</span>
                      <span>Two-story house or roof cleaning</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-400 mt-1">✓</span>
                      <span>Delicate surfaces (limestone, pavers)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-400 mt-1">✓</span>
                      <span>Heavy mould, stains, or buildup</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-400 mt-1">✓</span>
                      <span>Time is limited or before a sale</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* True Cost Comparison */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-[#0a1628] mb-6">
              The True Cost Comparison
            </h2>

            <div className="bg-gray-50 rounded-xl p-8 mb-8">
              <h3 className="text-2xl font-bold text-[#0a1628] mb-6">DIY Pressure Cleaning Costs</h3>
              
              <div className="space-y-4 mb-6">
                <div className="flex justify-between items-center pb-3 border-b border-gray-300">
                  <span className="font-semibold">Pressure washer purchase</span>
                  <span className="text-[#00d4ff] font-bold">$200 - $800</span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b border-gray-300">
                  <span className="font-semibold">OR Rental (per day)</span>
                  <span className="text-[#00d4ff] font-bold">$60 - $120</span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b border-gray-300">
                  <span className="font-semibold">Cleaning chemicals & detergents</span>
                  <span className="text-[#00d4ff] font-bold">$30 - $100</span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b border-gray-300">
                  <span className="font-semibold">Safety gear (goggles, gloves, boots)</span>
                  <span className="text-[#00d4ff] font-bold">$50 - $150</span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b border-gray-300">
                  <span className="font-semibold">Extension hoses & accessories</span>
                  <span className="text-[#00d4ff] font-bold">$50 - $150</span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b border-gray-300">
                  <span className="font-semibold">Your time (8-16 hours @ $30/hr)</span>
                  <span className="text-[#00d4ff] font-bold">$240 - $480</span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b border-gray-300">
                  <span className="font-semibold">Water usage (increased bill)</span>
                  <span className="text-[#00d4ff] font-bold">$20 - $50</span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b border-gray-300">
                  <span className="font-semibold">Potential damage repairs</span>
                  <span className="text-red-600 font-bold">$0 - $5,000+</span>
                </div>
              </div>

              <div className="bg-white rounded-lg p-6 border-2 border-[#00d4ff]">
                <div className="flex justify-between items-center">
                  <span className="text-xl font-bold">Total DIY Cost (First Time):</span>
                  <span className="text-2xl text-[#00d4ff] font-bold">$610 - $1,850+</span>
                </div>
                <p className="text-sm text-gray-600 mt-2">*Not including potential damage or equipment maintenance</p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-[#0a1628] to-[#1a2640] rounded-xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">Professional Pressure Cleaning Costs</h3>
              
              <div className="space-y-4 mb-6">
                <div className="flex justify-between items-center pb-3 border-b border-white/20">
                  <span className="font-semibold">Driveway cleaning</span>
                  <span className="text-[#00d4ff] font-bold">$150 - $400</span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b border-white/20">
                  <span className="font-semibold">House washing (3-4 bed)</span>
                  <span className="text-[#00d4ff] font-bold">$300 - $600</span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b border-white/20">
                  <span className="font-semibold">Complete property package</span>
                  <span className="text-[#00d4ff] font-bold">$500 - $1,000</span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b border-white/20">
                  <span className="font-semibold">Your time investment</span>
                  <span className="text-green-400 font-bold">0 hours</span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b border-white/20">
                  <span className="font-semibold">Insurance coverage</span>
                  <span className="text-green-400 font-bold">Included ✓</span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b border-white/20">
                  <span className="font-semibold">Professional results guarantee</span>
                  <span className="text-green-400 font-bold">Included ✓</span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b border-white/20">
                  <span className="font-semibold">Damage risk</span>
                  <span className="text-green-400 font-bold">Fully covered ✓</span>
                </div>
              </div>

              <div className="bg-[#00d4ff] text-[#0a1628] rounded-lg p-6">
                <div className="flex justify-between items-center">
                  <span className="text-xl font-bold">Professional Service:</span>
                  <span className="text-2xl font-bold">$300 - $1,000</span>
                </div>
                <p className="text-sm mt-2 font-semibold">Plus: Peace of mind, warranty, perfect results, and your weekend back!</p>
              </div>
            </div>
          </section>

          {/* Risk Analysis */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-[#0a1628] mb-6">
              Common DIY Mistakes & Risks
            </h2>

            <div className="space-y-4">
              {[
                {
                  mistake: 'Using Too Much Pressure',
                  risk: 'Severe damage to surfaces',
                  consequence: 'Etched concrete, damaged roof tiles, stripped paint, splintered timber - repairs cost $500-$5,000+',
                  realExample: '"I thought more pressure = better clean. Now my driveway looks like the moon and needs resurfacing." - Perth homeowner'
                },
                {
                  mistake: 'Wrong Cleaning Angle',
                  risk: 'Water damage and surface pitting',
                  consequence: 'Water forced under roof tiles, into walls, or damaged mortar - structural repair costs $1,000-$10,000',
                  realExample: '"Water got under my tiles and into the ceiling. The mould remediation cost me $3,500." - Wanneroo resident'
                },
                {
                  mistake: 'Incorrect Chemical Use',
                  risk: 'Plant death and surface discoloration',
                  consequence: 'Dead landscaping, permanent staining, environmental damage - replacement costs $500-$3,000',
                  realExample: '"Used the wrong cleaner on limestone. Permanent brown stains. Had to paint over it." - Subiaco homeowner'
                },
                {
                  mistake: 'Inadequate Safety Precautions',
                  risk: 'Personal injury',
                  consequence: 'Falls from ladders, eye injuries, cuts from pressure - medical bills and time off work',
                  realExample: '"Fell off a ladder cleaning the second story. Broken arm and 6 weeks off work." - Joondalup resident'
                },
                {
                  mistake: 'Underestimating Time Required',
                  risk: 'Incomplete job or burnout',
                  consequence: 'Patchy results, wasted weekend, rental equipment charges add up',
                  realExample: '"Rented equipment for a day. Took me 3 days. Ended up costing more than a pro quote." - Canning Vale homeowner'
                }
              ].map((item, index) => (
                <div key={index} className="bg-red-50 rounded-xl p-6 border border-red-200">
                  <div className="flex items-start gap-3 mb-3">
                    <AlertTriangle className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-bold text-red-900 mb-1">{item.mistake}</h3>
                      <p className="text-sm text-red-700 font-semibold">Risk: {item.risk}</p>
                    </div>
                  </div>
                  <p className="text-gray-700 mb-3"><strong>Consequence:</strong> {item.consequence}</p>
                  <div className="bg-white rounded-lg p-3 border-l-4 border-red-600">
                    <p className="text-sm italic text-gray-700">{item.realExample}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Quality Comparison */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-[#0a1628] mb-6">
              Results Quality: Side-by-Side
            </h2>

            {/* Desktop Table View */}
            <div className="hidden md:block overflow-x-auto">
              <table className="w-full bg-white rounded-xl overflow-hidden shadow-md">
                <thead className="bg-[#0a1628] text-white">
                  <tr>
                    <th className="p-4 text-left">Factor</th>
                    <th className="p-4 text-center">DIY</th>
                    <th className="p-4 text-center">Professional</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {[
                    { 
                      factor: 'Equipment Power', 
                      diy: '1300-2000 PSI (consumer grade)', 
                      pro: '3000-4000 PSI (commercial grade)',
                      winner: 'pro'
                    },
                    { 
                      factor: 'Cleaning Speed', 
                      diy: '8-16 hours for full property', 
                      pro: '2-4 hours for full property',
                      winner: 'pro'
                    },
                    { 
                      factor: 'Stain Removal', 
                      diy: 'Light dirt only', 
                      pro: 'Deep stains, oil, mould',
                      winner: 'pro'
                    },
                    { 
                      factor: 'Finish Quality', 
                      diy: 'Streaky, uneven, missed spots', 
                      pro: 'Uniform, thorough coverage',
                      winner: 'pro'
                    },
                    { 
                      factor: 'Surface Safety', 
                      diy: 'High damage risk', 
                      pro: 'Appropriate pressure/technique',
                      winner: 'pro'
                    },
                    { 
                      factor: 'Longevity of Clean', 
                      diy: '3-6 months', 
                      pro: '12+ months',
                      winner: 'pro'
                    }
                  ].map((row, index) => (
                    <tr key={index} className="hover:bg-gray-50">
                      <td className="p-4 font-semibold text-gray-900">{row.factor}</td>
                      <td className="p-4 text-center text-gray-700">
                        <div className="flex items-center justify-center gap-2">
                          {row.winner === 'diy' ? (
                            <CheckCircle className="w-5 h-5 text-green-500" />
                          ) : (
                            <XCircle className="w-5 h-5 text-red-500" />
                          )}
                          <span>{row.diy}</span>
                        </div>
                      </td>
                      <td className="p-4 text-center text-gray-700">
                        <div className="flex items-center justify-center gap-2">
                          {row.winner === 'pro' ? (
                            <CheckCircle className="w-5 h-5 text-green-500" />
                          ) : (
                            <XCircle className="w-5 h-5 text-red-500" />
                          )}
                          <span>{row.pro}</span>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Mobile Card View */}
            <div className="md:hidden space-y-4">
              {[
                { 
                  factor: 'Equipment Power', 
                  diy: '1300-2000 PSI (consumer grade)', 
                  pro: '3000-4000 PSI (commercial grade)',
                  winner: 'pro'
                },
                { 
                  factor: 'Cleaning Speed', 
                  diy: '8-16 hours for full property', 
                  pro: '2-4 hours for full property',
                  winner: 'pro'
                },
                { 
                  factor: 'Stain Removal', 
                  diy: 'Light dirt only', 
                  pro: 'Deep stains, oil, mould',
                  winner: 'pro'
                },
                { 
                  factor: 'Finish Quality', 
                  diy: 'Streaky, uneven, missed spots', 
                  pro: 'Uniform, thorough coverage',
                  winner: 'pro'
                },
                { 
                  factor: 'Surface Safety', 
                  diy: 'High damage risk', 
                  pro: 'Appropriate pressure/technique',
                  winner: 'pro'
                },
                { 
                  factor: 'Longevity of Clean', 
                  diy: '3-6 months', 
                  pro: '12+ months',
                  winner: 'pro'
                }
              ].map((item, index) => (
                <div key={index} className="bg-white rounded-xl p-4 shadow-md border border-gray-200">
                  <h3 className="font-bold text-[#0a1628] text-lg mb-3">{item.factor}</h3>
                  
                  <div className="space-y-3">
                    <div className="bg-red-50 rounded-lg p-3 border border-red-200">
                      <div className="flex items-center gap-2 mb-1">
                        <XCircle className="w-5 h-5 text-red-500 flex-shrink-0" />
                        <span className="font-semibold text-red-900 text-sm">DIY</span>
                      </div>
                      <p className="text-gray-700 text-sm pl-7">{item.diy}</p>
                    </div>
                    
                    <div className="bg-green-50 rounded-lg p-3 border border-green-200">
                      <div className="flex items-center gap-2 mb-1">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                        <span className="font-semibold text-green-900 text-sm">Professional</span>
                      </div>
                      <p className="text-gray-700 text-sm pl-7">{item.pro}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* When DIY Makes Sense */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-[#0a1628] mb-6">
              When DIY Actually Makes Sense
            </h2>

            <div className="bg-green-50 rounded-xl p-8 border border-green-200">
              <p className="text-lg text-gray-800 mb-6">
                We're not saying DIY is always wrong. Here are scenarios where it can work:
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                {[
                  {
                    title: 'Small, Frequent Touch-Ups',
                    description: 'If you already own equipment and want to do light maintenance between professional cleans every 6 months'
                  },
                  {
                    title: 'Simple Concrete Paths',
                    description: 'Small, flat concrete areas with no special finishes or nearby delicate surfaces'
                  },
                  {
                    title: 'You Have Experience',
                    description: 'You\'ve done it before successfully and understand pressure settings and techniques'
                  },
                  {
                    title: 'Genuinely Enjoying It',
                    description: 'Some people find it therapeutic! If you have time and enjoy the work, go for it'
                  }
                ].map((scenario, index) => (
                  <div key={index} className="bg-white rounded-lg p-5 border border-green-300">
                    <h3 className="font-bold text-green-900 mb-2 flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                      {scenario.title}
                    </h3>
                    <p className="text-gray-700 text-sm">{scenario.description}</p>
                  </div>
                ))}
              </div>

              <div className="mt-6 bg-green-600 text-white rounded-lg p-4">
                <p className="font-bold text-center">
                  💡 Best Approach: Hire professionals for annual deep clean, DIY for light maintenance in between!
                </p>
              </div>
            </div>
          </section>

          {/* Professional Advantages */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-[#0a1628] mb-6">
              What You're Really Paying For
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  icon: TrendingUp,
                  title: 'Years of Experience',
                  value: 'Knowledge that prevents $1,000s in damage',
                  description: 'We know exactly which pressure, angle, and chemical to use for each surface type'
                },
                {
                  icon: CheckCircle,
                  title: 'Commercial Equipment',
                  value: '$15,000+ in professional gear',
                  description: 'Equipment that delivers results impossible with consumer-grade machines'
                },
                {
                  icon: DollarSign,
                  title: 'Full Insurance Coverage',
                  value: '$10M+ public liability',
                  description: 'Complete protection against accidents, damage, or injuries on your property'
                },
                {
                  icon: Clock,
                  title: 'Your Time Saved',
                  value: '12-16 hours of your weekend',
                  description: 'Spend time with family instead of struggling with equipment and cleanup'
                },
                {
                  icon: CheckCircle,
                  title: 'Perfect Results Guaranteed',
                  value: 'Satisfaction or we return',
                  description: 'No streaks, no damage, no missed spots - or we fix it at our cost'
                },
                {
                  icon: TrendingUp,
                  title: 'Longer-Lasting Clean',
                  value: '12+ months vs 3-6 months',
                  description: 'Professional techniques and products mean fewer cleanings needed long-term'
                }
              ].map((advantage, index) => {
                const Icon = advantage.icon;
                return (
                  <div key={index} className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                    <div className="flex items-start gap-4 mb-3">
                      <div className="w-12 h-12 bg-[#00d4ff]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon className="w-6 h-6 text-[#00d4ff]" />
                      </div>
                      <div>
                        <h3 className="font-bold text-[#0a1628] mb-1">{advantage.title}</h3>
                        <p className="text-sm text-[#00d4ff] font-semibold">{advantage.value}</p>
                      </div>
                    </div>
                    <p className="text-gray-700 text-sm">{advantage.description}</p>
                  </div>
                );
              })}
            </div>
          </section>

          {/* Final Verdict */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-[#0a1628] mb-6 text-center">
              The Final Verdict
            </h2>

            <div className="bg-gradient-to-br from-[#0a1628] to-[#1a2640] rounded-2xl p-8 text-white text-center">
              <div className="max-w-2xl mx-auto">
                <p className="text-xl mb-6 leading-relaxed">
                  For most Perth homeowners, <strong className="text-[#00d4ff]">professional pressure cleaning offers better value</strong> than DIY when you factor in time, risk, results quality, and peace of mind.
                </p>
                
                <div className="grid md:grid-cols-3 gap-4 mb-6">
                  <div className="bg-white/10 rounded-lg p-4">
                    <div className="text-3xl font-bold text-[#00d4ff] mb-1">2-4 hrs</div>
                    <div className="text-sm">vs 8-16 hours DIY</div>
                  </div>
                  <div className="bg-white/10 rounded-lg p-4">
                    <div className="text-3xl font-bold text-[#00d4ff] mb-1">$0</div>
                    <div className="text-sm">damage risk to you</div>
                  </div>
                  <div className="bg-white/10 rounded-lg p-4">
                    <div className="text-3xl font-bold text-[#00d4ff] mb-1">12+ mo</div>
                    <div className="text-sm">lasting results</div>
                  </div>
                </div>

                <p className="text-gray-300">
                  Save DIY for touch-ups and light maintenance. For the annual deep clean, trust the professionals.
                </p>
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="bg-gradient-to-br from-[#0a1628] to-[#1a2640] rounded-2xl p-8 text-white text-center">
            <h2 className="text-3xl font-bold mb-4">
              Get a Free, No-Obligation Quote
            </h2>
            <p className="text-lg text-gray-300 mb-2">
              See exactly what professional pressure cleaning costs for your property.
            </p>
            <p className="text-sm text-gray-400 mb-6">
              New customers receive 10% off - often cheaper than DIY when you factor in equipment!
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