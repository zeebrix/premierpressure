import { Link } from 'react-router';
import { ArrowRight, Clock, DollarSign, CheckSquare, Calendar, TrendingDown, AlertTriangle } from 'lucide-react';
import { SEO } from '../../components/seo';

export function ResourcesPage() {
  const resources = [
    {
      slug: 'organic-staining-guide',
      category: 'Health & Safety',
      icon: AlertTriangle,
      readTime: '12 min read',
      title: 'Complete Guide to Organic Staining: Mould, Algae & Mildew',
      description: 'Learn about the health risks and property damage caused by organic growth. Understand prevention strategies and when to call professionals.',
      color: 'red'
    },
    {
      slug: 'pricing-guide',
      category: 'Pricing',
      icon: DollarSign,
      readTime: '8 min read',
      title: 'Perth Pressure Cleaning Pricing Guide 2026',
      description: 'Get transparent pricing information for all pressure cleaning services in Perth. Understand what factors affect costs and get accurate estimates.',
      color: 'blue'
    },
    {
      slug: 'preparation-checklist',
      category: 'Guide',
      icon: CheckSquare,
      readTime: '5 min read',
      title: 'Before You Book: Preparation Checklist',
      description: 'Essential steps to prepare your property for pressure cleaning. Save time and ensure the best results with our comprehensive checklist.',
      color: 'green'
    },
    {
      slug: 'cleaning-frequency',
      category: 'Maintenance',
      icon: Calendar,
      readTime: '6 min read',
      title: 'How Often Should You Pressure Clean in Perth?',
      description: 'Learn the optimal cleaning frequency for Perth\'s unique climate. Protect your investment with proper maintenance schedules.',
      color: 'purple'
    },
    {
      slug: 'diy-vs-professional',
      category: 'Comparison',
      icon: TrendingDown,
      readTime: '7 min read',
      title: 'DIY vs Professional Pressure Cleaning',
      description: 'Compare the real costs, risks, and results of DIY pressure cleaning versus hiring professionals. Make an informed decision.',
      color: 'orange'
    }
  ];

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    'name': 'Pressure Cleaning Resources & Guides',
    'description': 'Expert guides, pricing information, and helpful resources for pressure cleaning in Perth. Learn from the professionals.',
    'publisher': {
      '@type': 'Organization',
      'name': 'Premier Pressure Solutions WA'
    }
  };

  return (
    <>
      <SEO
        title="Pressure Cleaning Resources & Guides | Perth Expert Tips & Advice"
        description="Expert pressure cleaning guides for Perth homeowners. Pricing information, preparation checklists, maintenance schedules, DIY comparisons and more professional advice."
        canonical="https://premierpressurewa.com.au/resources"
        schema={structuredData}
      />

      <div className="bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-[#0a1628] to-[#1a2640] text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-4xl sm:text-5xl font-bold mb-6">
                Pressure Cleaning Resources
              </h1>
              <p className="text-xl text-gray-300">
                Expert guides, pricing information, and helpful tips from Perth's trusted pressure cleaning professionals
              </p>
            </div>
          </div>
        </section>

        {/* Resources Grid */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-8">
              {resources.map((resource, index) => {
                const Icon = resource.icon;
                const colorClasses = {
                  blue: 'bg-blue-500',
                  green: 'bg-green-500',
                  purple: 'bg-purple-500',
                  orange: 'bg-orange-500',
                  red: 'bg-red-500'
                };

                return (
                  <Link
                    key={index}
                    to={`/resources/${resource.slug}`}
                    className="group bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition-all border border-gray-200 hover:border-[#00d4ff]"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <span className={`px-3 py-1 ${colorClasses[resource.color as keyof typeof colorClasses]} text-white rounded-full text-sm font-bold`}>
                          {resource.category}
                        </span>
                        <div className="flex items-center gap-2 text-gray-500 text-sm">
                          <Clock className="w-4 h-4" />
                          <span>{resource.readTime}</span>
                        </div>
                      </div>
                      <Icon className="w-8 h-8 text-gray-400 group-hover:text-[#00d4ff] transition-colors" />
                    </div>

                    <h2 className="text-2xl font-bold text-[#0a1628] mb-3 group-hover:text-[#00d4ff] transition-colors">
                      {resource.title}
                    </h2>

                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {resource.description}
                    </p>

                    <div className="flex items-center gap-2 text-[#00d4ff] font-semibold group-hover:gap-3 transition-all">
                      Read Article
                      <ArrowRight className="w-5 h-5" />
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        {/* Why Read Our Resources */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-[#0a1628] mb-4">
                Why Read Our Resources?
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Learn from Perth's pressure cleaning experts with years of hands-on experience
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: 'Expert Knowledge',
                  description: 'Written by professionals with years of real-world experience in Perth\'s unique climate'
                },
                {
                  title: 'Honest Advice',
                  description: 'Transparent information to help you make the best decisions for your property'
                },
                {
                  title: 'Perth-Specific',
                  description: 'Tailored to Perth\'s climate, building materials, and environmental conditions'
                }
              ].map((benefit, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-md text-center">
                  <h3 className="text-xl font-bold text-[#0a1628] mb-3">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gradient-to-br from-[#0a1628] to-[#1a2640] rounded-2xl p-12 text-white text-center">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Ready to Get Started?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Put your newfound knowledge to use with Perth's most trusted pressure cleaning company
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
            </div>
          </div>
        </section>
      </div>
    </>
  );
}