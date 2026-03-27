import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router';
import { MapPin, ArrowRight, Search } from 'lucide-react';
import { SEO } from '../components/seo';
import { useState, useMemo } from 'react';

const suburbsByRegion = {
  'Northern Coastal Suburbs': [
    { name: 'Ocean Reef', path: '/perth/ocean-reef', description: 'Coastal properties and marina precinct' },
    { name: 'Mullaloo', path: '/perth/mullaloo', description: 'Premium beachside living and ocean views' },
    { name: 'Iluka', path: '/perth/iluka', description: 'Waterfront estates and coastal homes' },
    { name: 'Burns Beach', path: '/perth/burns-beach', description: 'Exclusive beachside community' },
    { name: 'Jindalee', path: '/perth/jindalee', description: 'Beachfront properties and modern homes' },
    { name: 'Sorrento', path: '/perth/sorrento', description: 'Premium coastal living excellence' },
  ],
  'Joondalup & Northern Corridor': [
    { name: 'Yanchep', path: '/perth/yanchep', description: 'Fast-growing coastal community' },
    { name: 'Two Rocks', path: '/perth/two-rocks', description: 'Expanding northern beachside suburb' },
    { name: 'Eglinton', path: '/perth/eglinton', description: 'Brand-new estates and modern homes' },
    { name: 'Alkimos', path: '/perth/alkimos', description: 'Modern beachside development' },
    { name: 'Butler', path: '/perth/butler', description: 'Growing family community' },
    { name: 'Clarkson', path: '/perth/clarkson', description: 'Coastal family homes' },
    { name: 'Mindarie', path: '/perth/mindarie', description: 'Premium marina and waterfront properties' },
    { name: 'Quinns Rocks', path: '/perth/quinns-rocks', description: 'Beachside family living' },
    { name: 'Currambine', path: '/perth/currambine', description: 'Modern family homes and shopping precinct' },
    { name: 'Joondalup', path: '/perth/joondalup', description: 'Northern suburbs CBD and lakeside properties' },
    { name: 'Edgewater', path: '/perth/edgewater', description: 'Lakeside homes and family community' },
    { name: 'Hillarys', path: '/perth/hillarys', description: 'Marina precinct and waterfront properties' },
    { name: 'Kallaroo', path: '/perth/kallaroo', description: 'Coastal properties near the beach' },
  ],
  'Northern Suburbs': [
    { name: 'Heathridge', path: '/perth/heathridge', description: 'Established family community' },
    { name: 'Beldon', path: '/perth/beldon', description: 'Family homes and local amenities' },
    { name: 'Craigie', path: '/perth/craigie', description: 'Residential properties and schools' },
    { name: 'Padbury', path: '/perth/padbury', description: 'Established residential area' },
    { name: 'Woodvale', path: '/perth/woodvale', description: 'Leafy streets and family homes' },
    { name: 'Duncraig', path: '/perth/duncraig', description: 'Established homes and quality living' },
    { name: 'Kingsley', path: '/perth/kingsley', description: 'Quality homes in desirable location' },
    { name: 'Greenwood', path: '/perth/greenwood', description: 'Family-friendly community' },
    { name: 'Warwick', path: '/perth/warwick', description: 'Convenient northern suburbs location' },
    { name: 'Madeley', path: '/perth/madeley', description: 'Modern family estates' },
    { name: 'Alexander Heights', path: '/perth/alexander-heights', description: 'Established residential community' },
    { name: 'Wanneroo', path: '/perth/wanneroo', description: 'Regional growth hub and acreage' },
    { name: 'Tapping', path: '/perth/tapping', description: 'Modern estates and family living' },
    { name: 'Hocking', path: '/perth/hocking', description: 'Residential properties and parks' },
  ],
  'Western & Beachside Suburbs': [
    { name: 'Trigg', path: '/perth/trigg', description: 'Sought-after beachside properties' },
    { name: 'Scarborough', path: '/perth/scarborough', description: 'Beachfront homes and ocean-view properties' },
    { name: 'North Beach', path: '/perth/north-beach', description: 'Coastal family homes and beach access' },
    { name: 'Watermans Bay', path: '/perth/watermans-bay', description: 'Quiet beachside community' },
    { name: 'Marmion', path: '/perth/marmion', description: 'Coastal homes near the marina' },
    { name: 'Sorrento', path: '/perth/sorrento', description: 'Premium coastal living near Hillarys' },
    { name: 'City Beach', path: '/perth/city-beach', description: 'Luxury coastal living and beach properties' },
    { name: 'Floreat', path: '/perth/floreat', description: 'Family homes and established gardens' },
    { name: 'Swanbourne', path: '/perth/swanbourne', description: 'Exclusive beachside suburb near UWA' },
    { name: 'Cottesloe', path: '/perth/cottesloe', description: 'Premium beachside properties and coastal homes' },
    { name: 'Peppermint Grove', path: '/perth/peppermint-grove', description: 'Ultra-premium riverside estates' },
    { name: 'North Fremantle', path: '/perth/north-fremantle', description: 'Character homes near the port' },
    { name: 'Carine', path: '/perth/carine', description: 'Established homes and leafy streets' },
    { name: 'Gwelup', path: '/perth/gwelup', description: 'Family homes with golf course access' },
    { name: 'Hamersley', path: '/perth/hamersley', description: 'Quiet residential area with parks' },
    { name: 'Wembley Downs', path: '/perth/wembley-downs', description: 'Quality properties and local amenities' },
    { name: 'Wembley', path: '/perth/wembley', description: 'Art deco homes and tree-lined streets' },
    { name: 'Subiaco', path: '/perth/subiaco', description: 'Heritage terraces and modern townhouses' },
    { name: 'Nedlands', path: '/perth/nedlands', description: 'Riverside mansions and prestigious estates' },
    { name: 'Claremont', path: '/perth/claremont', description: 'Character homes and premium residences' },
    { name: 'Mosman Park', path: '/perth/mosman-park', description: 'Riverside estates and heritage homes' },
    { name: 'Karrinyup', path: '/perth/karrinyup', description: 'Modern homes and shopping precinct area' },
    { name: 'Doubleview', path: '/perth/doubleview', description: 'Family-friendly homes and local amenities' },
    { name: 'Innaloo', path: '/perth/innaloo', description: 'Central location near Karrinyup shopping' },
    { name: 'Churchlands', path: '/perth/churchlands', description: 'Prestigious homes and quality schools' },
    { name: 'Woodlands', path: '/perth/woodlands', description: 'Golf course living and family homes' },
    { name: 'Tamala Park', path: '/perth/tamala-park', description: 'Coastal suburb north of Perth' },
    { name: 'Ridgewood', path: '/perth/ridgewood', description: 'Family estates in northern corridor' },
    { name: 'Merriwa', path: '/perth/merriwa', description: 'Growing community near Yanchep' },
    { name: 'Connolly', path: '/perth/connolly', description: 'Beachside family homes' },
  ],
  'Inner-City & Eastern Suburbs': [
    { name: 'Mount Lawley', path: '/perth/mount-lawley', description: 'Heritage cottages and vibrant café culture' },
    { name: 'Leederville', path: '/perth/leederville', description: 'Urban living and contemporary apartments' },
    { name: 'Victoria Park', path: '/perth/victoria-park', description: 'Renovated homes and trendy neighborhoods' },
    { name: 'Bayswater', path: '/perth/bayswater', description: 'Established homes and riverside access' },
    { name: 'Balcatta', path: '/perth/balcatta', description: 'Convenient location and diverse properties' },
    { name: 'Stirling', path: '/perth/stirling', description: 'Central northern suburbs hub' },
    { name: 'Brabham', path: '/perth/brabham', description: 'Modern estates and new developments' },
    { name: 'Dayton', path: '/perth/dayton', description: 'Growing eastern corridor suburb' },
    { name: 'Henley Brook', path: '/perth/henley-brook', description: 'Premium properties and semi-rural lifestyle' },
  ],
  'Southern Suburbs': [
    { name: 'Applecross', path: '/perth/applecross', description: 'Riverside luxury and peninsula estates' },
    { name: 'South Perth', path: '/perth/south-perth', description: 'Zoo precinct and riverside apartments' },
    { name: 'Burswood', path: '/perth/burswood', description: 'Entertainment precinct and riverside properties' },
    { name: 'Booragoon', path: '/perth/booragoon', description: 'Garden City shopping and family homes' },
    { name: 'Melville', path: '/perth/melville', description: 'Established suburbs and river access' },
    { name: 'Como', path: '/perth/como', description: 'Waterfront properties and leafy streets' },
    { name: 'Byford', path: '/perth/byford', description: 'Growing southern corridor community' },
    { name: 'Piara Waters', path: '/perth/piara-waters', description: 'Lakeside living and modern estates' },
    { name: 'Harrisdale', path: '/perth/harrisdale', description: 'Family homes in southern growth area' },
    { name: 'Success', path: '/perth/success', description: 'Contemporary homes and family community' },
  ],
};

export function AreasPage() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredSuburbs = useMemo(() => {
    if (!searchTerm) return suburbsByRegion;
    const lowerCaseSearchTerm = searchTerm.toLowerCase();
    const filtered = Object.entries(suburbsByRegion).reduce((acc, [region, suburbs]) => {
      const filteredSuburbs = suburbs.filter(suburb => suburb.name.toLowerCase().includes(lowerCaseSearchTerm));
      if (filteredSuburbs.length > 0) {
        acc[region] = filteredSuburbs;
      }
      return acc;
    }, {} as typeof suburbsByRegion);
    return filtered;
  }, [searchTerm]);

  return (
    <>
      <SEO
        title="Service Areas Perth | Pressure Cleaning Across 26+ Suburbs | Premier Pressure Solutions WA"
        description="Premier Pressure Solutions WA services 26+ suburbs across Perth including Cottesloe, Subiaco, Nedlands, Claremont, South Perth & more. Professional pressure cleaning for your local area." 
        keywords="pressure cleaning Perth areas, Perth suburbs pressure washing, local pressure cleaning services, Perth service areas" 
        canonical="https://premierpressuresolutionswa.com.au/areas"
      />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#0a1628] to-[#1a2638] text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-[#00d4ff]/10 border border-[#00d4ff]/30 rounded-full px-4 py-2 mb-6">
              <MapPin className="w-5 h-5 text-[#00d4ff]" />
              <span className="text-[#00d4ff] font-semibold">Servicing All Perth Suburbs</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Our Service Areas Across Perth
            </h1>
            
            <p className="text-xl text-gray-300 mb-8">
              Premier Pressure Solutions WA proudly services premium suburbs throughout Perth's coastal, western, inner-city, and southern regions. Find your local area below for specialized pressure cleaning services.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <a 
                href="tel:+61452579657"
                className="bg-[#00d4ff] text-[#0a1628] px-8 py-4 rounded-lg font-bold text-lg hover:bg-[#00b8e6] transition-colors inline-flex items-center gap-2"
              >
                Call 0452 579 657
              </a>
              <div className="bg-green-500 text-white px-6 py-4 rounded-lg font-bold text-lg">
                10% OFF New Customers
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Suburbs by Region */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0a1628] mb-4">
              Find Your Local Area
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Search for your suburb to see our specialized services
            </p>
            
            {/* Search Bar */}
            <div className="relative max-w-2xl mx-auto">
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search for your suburb (e.g., Cottesloe, Subiaco, Nedlands)..."
                className="w-full px-6 py-4 pl-12 text-lg border-2 border-gray-300 rounded-lg focus:outline-none focus:border-[#00d4ff] transition-colors shadow-sm"
              />
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-6 h-6 text-gray-400" />
            </div>
          </div>

          {Object.entries(filteredSuburbs).length > 0 ? (
            Object.entries(filteredSuburbs).map(([region, suburbs]) => (
              <div key={region} className="mb-16 last:mb-0">
                <h2 className="text-3xl md:text-4xl font-bold text-[#0a1628] mb-8 pb-4 border-b-2 border-[#00d4ff]">
                  {region}
                </h2>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {suburbs.map((suburb) => (
                    <Link
                      key={suburb.path}
                      to={suburb.path}
                      className="group bg-white border-2 border-gray-200 rounded-lg p-6 hover:border-[#00d4ff] hover:shadow-lg transition-all duration-300"
                    >
                      <div className="flex items-start justify-between mb-3">
                        <h3 className="text-2xl font-bold text-[#0a1628] group-hover:text-[#00d4ff] transition-colors">
                          {suburb.name}
                        </h3>
                        <ArrowRight className="w-6 h-6 text-[#00d4ff] opacity-0 group-hover:opacity-100 transform translate-x-0 group-hover:translate-x-1 transition-all" />
                      </div>
                      
                      <p className="text-gray-600 mb-4">
                        {suburb.description}
                      </p>
                      
                      <div className="flex items-center gap-2 text-[#00d4ff] font-semibold">
                        <MapPin className="w-4 h-4" />
                        <span className="text-sm">View Services in {suburb.name}</span>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            ))
          ) : (
            <div className="text-center py-16">
              <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="w-12 h-12 text-gray-400" />
              </div>
              <h3 className="text-2xl font-bold text-[#0a1628] mb-2">No suburbs found</h3>
              <p className="text-gray-600 mb-6">
                We couldn't find any suburbs matching "{searchTerm}"
              </p>
              <button
                onClick={() => setSearchTerm('')}
                className="bg-[#00d4ff] text-[#0a1628] px-6 py-3 rounded-lg font-semibold hover:bg-[#00b8e6] transition-colors"
              >
                Clear Search
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Services Available */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0a1628] mb-4">
              Complete Pressure Cleaning Services
            </h2>
            <p className="text-lg text-gray-600">
              Available in all service areas across Perth
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {[
              'Driveway Cleaning',
              'House Washing',
              'Roof Cleaning',
              'Limestone Cleaning',
              'Paver Cleaning & Sealing',
              'Window Cleaning',
              'Pre-Sale Cleaning',
              'Concrete Cleaning',
            ].map((service) => (
              <div
                key={service}
                className="bg-white rounded-lg p-6 text-center border-2 border-gray-200 hover:border-[#00d4ff] transition-colors"
              >
                <div className="w-12 h-12 bg-[#00d4ff]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="w-6 h-6 bg-[#00d4ff] rounded-full"></div>
                </div>
                <h3 className="font-bold text-[#0a1628]">{service}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0a1628] mb-4">
              Why Perth Locals Choose Us
            </h2>
            <p className="text-lg text-gray-600">
              Professional pressure cleaning services you can trust
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#00d4ff]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-[#00d4ff]" />
              </div>
              <h3 className="text-xl font-bold text-[#0a1628] mb-3">Local Perth Experts</h3>
              <p className="text-gray-600">
                We understand Perth's unique climate challenges from salt spray to limestone staining
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#00d4ff]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="text-3xl font-bold text-[#00d4ff]">5★</div>
              </div>
              <h3 className="text-xl font-bold text-[#0a1628] mb-3">5-Star Google Reviews</h3>
              <p className="text-gray-600">
                Trusted by hundreds of Perth homeowners across all suburbs
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="text-2xl font-bold text-green-500">10%</div>
              </div>
              <h3 className="text-xl font-bold text-[#0a1628] mb-3">New Customer Discount</h3>
              <p className="text-gray-600">
                Save 10% on your first service in any of our service areas
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-[#0a1628] to-[#1a2638] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Click on your suburb above to see our specialized services, or call us now for a free quote
          </p>
          <a 
            href="tel:+61452579657"
            className="bg-[#00d4ff] text-[#0a1628] px-8 py-4 rounded-lg font-bold text-lg hover:bg-[#00b8e6] transition-colors inline-flex items-center gap-2"
          >
            Call 0452 579 657 for Free Quote
          </a>
        </div>
      </section>
    </>
  );
}