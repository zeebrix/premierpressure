import { Link } from 'react-router';
import { ArrowLeft, Clock, CheckSquare, AlertTriangle, Droplets, Home, Car } from 'lucide-react';
import { SEO } from '../../components/seo';

export function PreparationChecklistPage() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    'headline': 'Before You Book: Pressure Cleaning Preparation Checklist',
    'description': 'Essential steps to prepare your property for pressure cleaning. Complete checklist to save time, ensure safety, and get the best results.',
    'datePublished': '2026-01-20',
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
        title="Pressure Cleaning Preparation Checklist | Essential Pre-Cleaning Steps"
        description="Complete preparation checklist for pressure cleaning. Essential steps to prepare your Perth property, ensure safety, save time and get the best cleaning results."
        canonical="https://premierpressurewa.com.au/resources/preparation-checklist"
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
                Guide
              </span>
              <div className="flex items-center gap-2 text-gray-300 text-sm">
                <Clock className="w-4 h-4" />
                <span>5 min read</span>
              </div>
            </div>

            <h1 className="text-4xl sm:text-5xl font-bold mb-4">
              Before You Book: Preparation Checklist
            </h1>
            
            <p className="text-xl text-gray-300">
              Essential steps to prepare your property for pressure cleaning. Save time and ensure the best results with our comprehensive checklist.
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
              Proper preparation is the key to a successful pressure cleaning job. Taking 20-30 minutes to prepare your property before our arrival ensures faster service, better results, and helps avoid any potential issues. Use this comprehensive checklist to get your property ready.
            </p>
          </section>

          {/* Quick Prep Summary */}
          <section className="mb-12">
            <div className="bg-[#00d4ff]/10 rounded-xl p-6 border-2 border-[#00d4ff]">
              <h2 className="text-2xl font-bold text-[#0a1628] mb-4 flex items-center gap-2">
                <CheckSquare className="w-6 h-6 text-[#00d4ff]" />
                Quick Prep Summary (5 Minutes)
              </h2>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-[#00d4ff] mt-1">✓</span>
                  <span>Move vehicles from driveways and clear access paths</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#00d4ff] mt-1">✓</span>
                  <span>Close all windows and doors</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#00d4ff] mt-1">✓</span>
                  <span>Remove or cover outdoor furniture and decorations</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#00d4ff] mt-1">✓</span>
                  <span>Secure or remove pet bowls, toys, and outdoor items</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#00d4ff] mt-1">✓</span>
                  <span>Ensure water tap access is clear and functional</span>
                </li>
              </ul>
            </div>
          </section>

          {/* 24 Hours Before */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-[#0a1628] mb-6">
              24 Hours Before Cleaning
            </h2>

            <div className="space-y-6">
              <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                <h3 className="text-xl font-bold text-[#0a1628] mb-4 flex items-center gap-2">
                  <Home className="w-5 h-5 text-[#00d4ff]" />
                  Interior Preparation
                </h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <input type="checkbox" className="mt-1 w-5 h-5 text-[#00d4ff] rounded" />
                    <div>
                      <p className="font-semibold text-gray-900">Check and close all windows</p>
                      <p className="text-sm text-gray-600">Ensure all windows are fully closed and latched to prevent water entry</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <input type="checkbox" className="mt-1 w-5 h-5 text-[#00d4ff] rounded" />
                    <div>
                      <p className="font-semibold text-gray-900">Secure all exterior doors</p>
                      <p className="text-sm text-gray-600">Close exterior doors, including garage doors and pet doors</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <input type="checkbox" className="mt-1 w-5 h-5 text-[#00d4ff] rounded" />
                    <div>
                      <p className="font-semibold text-gray-900">Remove valuables from exterior walls</p>
                      <p className="text-sm text-gray-600">Take down artwork, decorations, or fragile items near cleaning areas</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <input type="checkbox" className="mt-1 w-5 h-5 text-[#00d4ff] rounded" />
                    <div>
                      <p className="font-semibold text-gray-900">Inform household members</p>
                      <p className="text-sm text-gray-600">Let everyone know about the scheduled cleaning and to keep windows/doors closed</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                <h3 className="text-xl font-bold text-[#0a1628] mb-4 flex items-center gap-2">
                  <Car className="w-5 h-5 text-[#00d4ff]" />
                  Outdoor & Vehicle Preparation
                </h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <input type="checkbox" className="mt-1 w-5 h-5 text-[#00d4ff] rounded" />
                    <div>
                      <p className="font-semibold text-gray-900">Move all vehicles</p>
                      <p className="text-sm text-gray-600">Clear driveways and garages completely - park vehicles on street if possible</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <input type="checkbox" className="mt-1 w-5 h-5 text-[#00d4ff] rounded" />
                    <div>
                      <p className="font-semibold text-gray-900">Remove outdoor furniture</p>
                      <p className="text-sm text-gray-600">Move patio furniture, BBQs, planters, and outdoor décor away from cleaning areas</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <input type="checkbox" className="mt-1 w-5 h-5 text-[#00d4ff] rounded" />
                    <div>
                      <p className="font-semibold text-gray-900">Secure loose items</p>
                      <p className="text-sm text-gray-600">Put away children's toys, garden tools, doormats, and other loose objects</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <input type="checkbox" className="mt-1 w-5 h-5 text-[#00d4ff] rounded" />
                    <div>
                      <p className="font-semibold text-gray-900">Trim overhanging plants</p>
                      <p className="text-sm text-gray-600">Cut back bushes or plants blocking access to walls, gutters, or eaves</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                <h3 className="text-xl font-bold text-[#0a1628] mb-4 flex items-center gap-2">
                  <Droplets className="w-5 h-5 text-[#00d4ff]" />
                  Water & Access Preparation
                </h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <input type="checkbox" className="mt-1 w-5 h-5 text-[#00d4ff] rounded" />
                    <div>
                      <p className="font-semibold text-gray-900">Identify water tap location</p>
                      <p className="text-sm text-gray-600">Ensure you know where the outdoor tap is and that it's accessible</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <input type="checkbox" className="mt-1 w-5 h-5 text-[#00d4ff] rounded" />
                    <div>
                      <p className="font-semibold text-gray-900">Test water tap</p>
                      <p className="text-sm text-gray-600">Check that your tap is working and has good water pressure</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <input type="checkbox" className="mt-1 w-5 h-5 text-[#00d4ff] rounded" />
                    <div>
                      <p className="font-semibold text-gray-900">Clear access paths</p>
                      <p className="text-sm text-gray-600">Ensure technicians can easily access all areas to be cleaned with equipment</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <input type="checkbox" className="mt-1 w-5 h-5 text-[#00d4ff] rounded" />
                    <div>
                      <p className="font-semibold text-gray-900">Unlock gates and side access</p>
                      <p className="text-sm text-gray-600">Open gates or side passages needed to reach all cleaning areas</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Day of Cleaning */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-[#0a1628] mb-6">
              Day of Cleaning
            </h2>

            <div className="bg-gradient-to-br from-[#0a1628] to-[#1a2640] rounded-xl p-8 text-white mb-6">
              <h3 className="text-2xl font-bold mb-4">Morning Of (Before Arrival)</h3>
              <div className="space-y-3">
                {[
                  'Do a final check of all windows and doors',
                  'Move vehicles completely off driveways and work areas',
                  'Bring pets indoors or secure them away from work areas',
                  'Turn off any outdoor security systems or motion sensors that may be triggered',
                  'Ensure someone 18+ will be home or contactable during service'
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <span className="text-[#00d4ff] font-bold mt-0.5">{index + 1}.</span>
                    <span className="text-gray-200">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-green-50 rounded-xl p-6 border border-green-200">
                <h3 className="text-lg font-bold text-green-900 mb-3 flex items-center gap-2">
                  <CheckSquare className="w-5 h-5" />
                  Pet Owners: Special Notes
                </h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li className="flex items-start gap-2">
                    <span>•</span>
                    <span>Bring dogs and cats indoors before we arrive</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span>•</span>
                    <span>Remove pet food bowls and water dishes from outdoor areas</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span>•</span>
                    <span>Clean up pet waste from lawns and gardens beforehand</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span>•</span>
                    <span>Keep pets inside for 1-2 hours after cleaning (wet surfaces)</span>
                  </li>
                </ul>
              </div>

              <div className="bg-blue-50 rounded-xl p-6 border border-blue-200">
                <h3 className="text-lg font-bold text-blue-900 mb-3 flex items-center gap-2">
                  <Droplets className="w-5 h-5" />
                  Plants & Gardens
                </h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li className="flex items-start gap-2">
                    <span>•</span>
                    <span>We use eco-friendly cleaning solutions safe for plants</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span>•</span>
                    <span>Delicate potted plants should be moved away from direct spray areas</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span>•</span>
                    <span>Cover sensitive garden beds if they're in the immediate cleaning zone</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span>•</span>
                    <span>Rinse plants after cleaning if they got spray (as a precaution)</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Special Situations */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-[#0a1628] mb-6">
              Special Situations & Considerations
            </h2>

            <div className="space-y-4">
              {[
                {
                  title: 'Roof Cleaning Preparation',
                  items: [
                    'Clear gutters of leaves and debris if possible',
                    'Trim tree branches touching or near the roof',
                    'Move satellite dishes or solar panel notifications to us in advance',
                    'Ensure roof access is clear (ladder placement areas)'
                  ]
                },
                {
                  title: 'House Washing Preparation',
                  items: [
                    'Close all windows tightly (including bathroom fans)',
                    'Turn off outdoor electrical outlets or cover them',
                    'Remove delicate hanging plants from eaves',
                    'Check for cracked or loose paint (let us know beforehand)'
                  ]
                },
                {
                  title: 'Driveway Cleaning Preparation',
                  items: [
                    'Remove all vehicles completely from the driveway',
                    'Sweep away loose debris and large stones',
                    'Mark any delicate paver areas or concerns',
                    'Note oil stains that may need pre-treatment'
                  ]
                },
                {
                  title: 'Pool Area Preparation',
                  items: [
                    'Remove pool toys, floats, and cleaning equipment',
                    'Turn off pool equipment during cleaning',
                    'Move outdoor furniture away from pool deck',
                    'Cover pool if specifically requested (usually not necessary)'
                  ]
                }
              ].map((situation, index) => (
                <div key={index} className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                  <h3 className="text-xl font-bold text-[#0a1628] mb-3">{situation.title}</h3>
                  <ul className="space-y-2">
                    {situation.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-gray-700">
                        <span className="text-[#00d4ff] mt-1">→</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* What We Bring */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-[#0a1628] mb-6">
              What We Bring (You Don't Need To Provide)
            </h2>

            <div className="bg-gradient-to-br from-[#f8f9fa] to-[#e9ecef] rounded-xl p-8">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-bold text-[#0a1628] mb-3">Equipment & Supplies:</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-center gap-2">
                      <CheckSquare className="w-4 h-4 text-[#00d4ff]" />
                      Commercial pressure washing equipment
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckSquare className="w-4 h-4 text-[#00d4ff]" />
                      Professional cleaning solutions
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckSquare className="w-4 h-4 text-[#00d4ff]" />
                      Extension hoses and accessories
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckSquare className="w-4 h-4 text-[#00d4ff]" />
                      Safety equipment
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-bold text-[#0a1628] mb-3">You Only Need To Provide:</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-center gap-2">
                      <Droplets className="w-4 h-4 text-[#00d4ff]" />
                      Access to outdoor water tap
                    </li>
                    <li className="flex items-center gap-2">
                      <Droplets className="w-4 h-4 text-[#00d4ff]" />
                      Electrical outlet (if available - we have generators)
                    </li>
                    <li className="flex items-center gap-2">
                      <Droplets className="w-4 h-4 text-[#00d4ff]" />
                      Clear access to work areas
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Common Mistakes */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-[#0a1628] mb-6">
              Common Preparation Mistakes to Avoid
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  mistake: 'Leaving windows open or unlocked',
                  consequence: 'Water can enter through gaps and cause interior damage'
                },
                {
                  mistake: 'Not moving vehicles completely',
                  consequence: 'Delays service and prevents thorough driveway cleaning'
                },
                {
                  mistake: 'Forgetting to secure pets',
                  consequence: 'Safety risk for pets and potential delays'
                },
                {
                  mistake: 'No one home during service',
                  consequence: 'May prevent us from accessing certain areas or asking questions'
                },
                {
                  mistake: 'Blocking water tap access',
                  consequence: 'Delays setup and may require rescheduling'
                },
                {
                  mistake: 'Not clearing side access',
                  consequence: 'Prevents cleaning of rear areas and full property treatment'
                }
              ].map((item, index) => (
                <div key={index} className="bg-red-50 rounded-xl p-5 border border-red-200">
                  <div className="flex items-start gap-3">
                    <AlertTriangle className="w-5 h-5 text-red-600 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold text-red-900 mb-1">{item.mistake}</h3>
                      <p className="text-sm text-gray-700">{item.consequence}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Printable Checklist */}
          <section className="mb-12">
            <div className="bg-[#00d4ff] rounded-xl p-8 text-white">
              <h2 className="text-3xl font-bold mb-4 text-center">
                Quick Reference: Printable Checklist
              </h2>
              <div className="bg-white text-gray-900 rounded-lg p-6">
                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <h3 className="font-bold mb-2 text-[#0a1628]">24 Hours Before:</h3>
                    <ul className="space-y-1">
                      <li>☐ Close all windows and doors</li>
                      <li>☐ Remove outdoor furniture</li>
                      <li>☐ Secure loose items</li>
                      <li>☐ Test water tap</li>
                      <li>☐ Unlock gates</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-bold mb-2 text-[#0a1628]">Morning Of:</h3>
                    <ul className="space-y-1">
                      <li>☐ Move all vehicles</li>
                      <li>☐ Bring pets indoors</li>
                      <li>☐ Final window check</li>
                      <li>☐ Clear access paths</li>
                      <li>☐ Be home/contactable</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="bg-gradient-to-br from-[#0a1628] to-[#1a2640] rounded-2xl p-8 text-white text-center">
            <h2 className="text-3xl font-bold mb-4">
              Ready to Book Your Pressure Cleaning?
            </h2>
            <p className="text-lg text-gray-300 mb-6">
              Contact us today and we'll guide you through any specific preparation steps for your property.
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
