'use client';

import Link from 'next/link';
import { MapPin, ArrowRight, Search } from 'lucide-react';
import { useState, useMemo } from 'react';

const suburbsByRegion: Record<string, { name: string; path: string; description: string }[]> = {
  'Northern Coastal Suburbs': [
    { name: 'Ocean Reef', path: '/ocean-reef', description: 'Coastal properties and marina precinct' },
    { name: 'Mullaloo', path: '/mullaloo', description: 'Premium beachside living and ocean views' },
    { name: 'Iluka', path: '/iluka', description: 'Waterfront estates and coastal homes' },
    { name: 'Burns Beach', path: '/burns-beach', description: 'Exclusive beachside community' },
    { name: 'Jindalee', path: '/jindalee', description: 'Beachfront properties and modern homes' },
    { name: 'Sorrento', path: '/sorrento', description: 'Premium coastal living excellence' },
  ],
  'Joondalup & Northern Corridor': [
    { name: 'Yanchep', path: '/yanchep', description: 'Fast-growing coastal community' },
    { name: 'Two Rocks', path: '/two-rocks', description: 'Expanding northern beachside suburb' },
    { name: 'Eglinton', path: '/eglinton', description: 'Brand-new estates and modern homes' },
    { name: 'Alkimos', path: '/alkimos', description: 'Modern beachside development' },
    { name: 'Butler', path: '/butler', description: 'Growing family community' },
    { name: 'Clarkson', path: '/clarkson', description: 'Coastal family homes' },
    { name: 'Mindarie', path: '/mindarie', description: 'Premium marina and waterfront properties' },
    { name: 'Quinns Rocks', path: '/quinns-rocks', description: 'Beachside family living' },
    { name: 'Currambine', path: '/currambine', description: 'Modern family homes and shopping precinct' },
    { name: 'Joondalup', path: '/joondalup', description: 'Northern suburbs CBD and lakeside properties' },
    { name: 'Edgewater', path: '/edgewater', description: 'Lakeside homes and family community' },
    { name: 'Hillarys', path: '/hillarys', description: 'Marina precinct and waterfront properties' },
    { name: 'Kallaroo', path: '/kallaroo', description: 'Coastal properties near the beach' },
  ],
  'Northern Suburbs': [
    { name: 'Heathridge', path: '/heathridge', description: 'Established family community' },
    { name: 'Beldon', path: '/beldon', description: 'Family homes and local amenities' },
    { name: 'Craigie', path: '/craigie', description: 'Residential properties and schools' },
    { name: 'Padbury', path: '/padbury', description: 'Established residential area' },
    { name: 'Woodvale', path: '/woodvale', description: 'Leafy streets and family homes' },
    { name: 'Duncraig', path: '/duncraig', description: 'Established homes and quality living' },
    { name: 'Kingsley', path: '/kingsley', description: 'Quality homes in desirable location' },
    { name: 'Greenwood', path: '/greenwood', description: 'Family-friendly community' },
    { name: 'Warwick', path: '/warwick', description: 'Convenient northern suburbs location' },
    { name: 'Madeley', path: '/madeley', description: 'Modern family estates' },
    { name: 'Alexander Heights', path: '/alexander-heights', description: 'Established residential community' },
    { name: 'Wanneroo', path: '/wanneroo', description: 'Regional growth hub and acreage' },
    { name: 'Tapping', path: '/tapping', description: 'Modern estates and family living' },
    { name: 'Hocking', path: '/hocking', description: 'Residential properties and parks' },
  ],
  'Western & Beachside Suburbs': [
    { name: 'Trigg', path: '/trigg', description: 'Sought-after beachside properties' },
    { name: 'Scarborough', path: '/scarborough', description: 'Beachfront homes and ocean-view properties' },
    { name: 'North Beach', path: '/north-beach', description: 'Coastal family homes and beach access' },
    { name: 'Watermans Bay', path: '/watermans-bay', description: 'Quiet beachside community' },
    { name: 'Marmion', path: '/marmion', description: 'Coastal homes near the marina' },
    { name: 'Sorrento', path: '/sorrento', description: 'Premium coastal living near Hillarys' },
    { name: 'City Beach', path: '/city-beach', description: 'Luxury coastal living and beach properties' },
    { name: 'Floreat', path: '/floreat', description: 'Family homes and established gardens' },
    { name: 'Swanbourne', path: '/swanbourne', description: 'Exclusive beachside suburb near UWA' },
    { name: 'Cottesloe', path: '/cottesloe', description: 'Premium beachside properties and coastal homes' },
    { name: 'Peppermint Grove', path: '/peppermint-grove', description: 'Ultra-premium riverside estates' },
    { name: 'North Fremantle', path: '/north-fremantle', description: 'Character homes near the port' },
    { name: 'Carine', path: '/carine', description: 'Established homes and leafy streets' },
    { name: 'Gwelup', path: '/gwelup', description: 'Family homes with golf course access' },
    { name: 'Hamersley', path: '/hamersley', description: 'Quiet residential area with parks' },
    { name: 'Wembley Downs', path: '/wembley-downs', description: 'Quality properties and local amenities' },
    { name: 'Wembley', path: '/wembley', description: 'Art deco homes and tree-lined streets' },
    { name: 'Subiaco', path: '/subiaco', description: 'Heritage terraces and modern townhouses' },
    { name: 'Nedlands', path: '/nedlands', description: 'Riverside mansions and prestigious estates' },
    { name: 'Claremont', path: '/claremont', description: 'Character homes and premium residences' },
    { name: 'Mosman Park', path: '/mosman-park', description: 'Riverside estates and heritage homes' },
    { name: 'Karrinyup', path: '/karrinyup', description: 'Modern homes and shopping precinct area' },
    { name: 'Doubleview', path: '/doubleview', description: 'Family-friendly homes and local amenities' },
    { name: 'Innaloo', path: '/innaloo', description: 'Central location near Karrinyup shopping' },
    { name: 'Churchlands', path: '/churchlands', description: 'Prestigious homes and quality schools' },
    { name: 'Woodlands', path: '/woodlands', description: 'Golf course living and family homes' },
    { name: 'Tamala Park', path: '/tamala-park', description: 'Coastal suburb north of Perth' },
    { name: 'Ridgewood', path: '/ridgewood', description: 'Family estates in northern corridor' },
    { name: 'Merriwa', path: '/merriwa', description: 'Growing community near Yanchep' },
    { name: 'Connolly', path: '/connolly', description: 'Beachside family homes' },
  ],
  'Inner-City & Eastern Suburbs': [
    { name: 'Mount Lawley', path: '/mount-lawley', description: 'Heritage cottages and vibrant café culture' },
    { name: 'Leederville', path: '/leederville', description: 'Urban living and contemporary apartments' },
    { name: 'Victoria Park', path: '/victoria-park', description: 'Renovated homes and trendy neighborhoods' },
    { name: 'Bayswater', path: '/bayswater', description: 'Established homes and riverside access' },
    { name: 'Balcatta', path: '/balcatta', description: 'Convenient location and diverse properties' },
    { name: 'Stirling', path: '/stirling', description: 'Central northern suburbs hub' },
    { name: 'Brabham', path: '/brabham', description: 'Modern estates and new developments' },
    { name: 'Dayton', path: '/dayton', description: 'Growing eastern corridor suburb' },
    { name: 'Henley Brook', path: '/henley-brook', description: 'Premium properties and semi-rural lifestyle' },
  ],
  'Southern Suburbs': [
    { name: 'Applecross', path: '/applecross', description: 'Riverside luxury and peninsula estates' },
    { name: 'South Perth', path: '/south-perth', description: 'Zoo precinct and riverside apartments' },
    { name: 'Burswood', path: '/burswood', description: 'Entertainment precinct and riverside properties' },
    { name: 'Booragoon', path: '/booragoon', description: 'Garden City shopping and family homes' },
    { name: 'Melville', path: '/melville', description: 'Established suburbs and river access' },
    { name: 'Como', path: '/como', description: 'Waterfront properties and leafy streets' },
    { name: 'Byford', path: '/byford', description: 'Growing southern corridor community' },
    { name: 'Piara Waters', path: '/piara-waters', description: 'Lakeside living and modern estates' },
    { name: 'Harrisdale', path: '/harrisdale', description: 'Family homes in southern growth area' },
    { name: 'Success', path: '/success', description: 'Contemporary homes and family community' },
  ],
};

export default function AreasContent() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredSuburbs = useMemo(() => {
    if (!searchTerm) return suburbsByRegion;
    const lowerCaseSearchTerm = searchTerm.toLowerCase();
    return Object.entries(suburbsByRegion).reduce((acc, [region, suburbs]) => {
      const filtered = suburbs.filter((suburb) => suburb.name.toLowerCase().includes(lowerCaseSearchTerm));
      if (filtered.length > 0) acc[region] = filtered;
      return acc;
    }, {} as typeof suburbsByRegion);
  }, [searchTerm]);

  return (
    <>
      <section className="relative bg-gradient-to-br from-[#0a1628] to-[#1a2638] text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-[#00d4ff]/10 border border-[#00d4ff]/30 rounded-full px-4 py-2 mb-6">
              <MapPin className="w-5 h-5 text-[#00d4ff]" />
              <span className="text-[#00d4ff] font-semibold">Servicing All Perth Suburbs</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Our Service Areas Across Perth</h1>
            <p className="text-xl text-gray-300 mb-8">
              PPS Exterior Cleaning proudly services premium suburbs throughout Perth&apos;s coastal, western, inner-city, and southern regions. Find your local area below for specialized pressure cleaning services.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <a href="tel:+61452579657" className="bg-[#00d4ff] text-[#0a1628] px-8 py-4 rounded-lg font-bold text-lg hover:bg-[#00b8e6] transition-colors inline-flex items-center gap-2">
                Call 0452 579 657
              </a>
              <div className="bg-green-500 text-white px-6 py-4 rounded-lg font-bold text-lg">10% OFF New Customers</div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0a1628] mb-4">Find Your Local Area</h2>
            <p className="text-lg text-gray-600 mb-8">Search for your suburb to see our specialized services</p>
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
                <h2 className="text-3xl md:text-4xl font-bold text-[#0a1628] mb-8 pb-4 border-b-2 border-[#00d4ff]">{region}</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {suburbs.map((suburb) => (
                    <Link key={suburb.path} href={suburb.path} className="group bg-white border-2 border-gray-200 rounded-lg p-6 hover:border-[#00d4ff] hover:shadow-lg transition-all duration-300">
                      <div className="flex items-start justify-between mb-3">
                        <h3 className="text-2xl font-bold text-[#0a1628] group-hover:text-[#00d4ff] transition-colors">{suburb.name}</h3>
                        <ArrowRight className="w-6 h-6 text-[#00d4ff] opacity-0 group-hover:opacity-100 transform translate-x-0 group-hover:translate-x-1 transition-all" />
                      </div>
                      <p className="text-gray-600 mb-4">{suburb.description}</p>
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
              <p className="text-gray-600 mb-6">We couldn&apos;t find any suburbs matching &ldquo;{searchTerm}&rdquo;</p>
              <button onClick={() => setSearchTerm('')} className="bg-[#00d4ff] text-[#0a1628] px-6 py-3 rounded-lg font-semibold hover:bg-[#00b8e6] transition-colors">Clear Search</button>
            </div>
          )}
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0a1628] mb-4">Complete Pressure Cleaning Services</h2>
            <p className="text-lg text-gray-600">Available in all service areas across Perth</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {['Driveway Cleaning', 'House Washing', 'Roof Cleaning', 'Limestone Cleaning', 'Paver Cleaning & Sealing', 'Window Cleaning', 'Pre-Sale Cleaning', 'Concrete Cleaning'].map((service) => (
              <div key={service} className="bg-white rounded-lg p-6 text-center border-2 border-gray-200 hover:border-[#00d4ff] transition-colors">
                <div className="w-12 h-12 bg-[#00d4ff]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="w-6 h-6 bg-[#00d4ff] rounded-full"></div>
                </div>
                <h3 className="font-bold text-[#0a1628]">{service}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-[#0a1628] to-[#1a2638] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">Click on your suburb above to see our specialized services, or call us now for a free quote</p>
          <a href="tel:+61452579657" className="bg-[#00d4ff] text-[#0a1628] px-8 py-4 rounded-lg font-bold text-lg hover:bg-[#00b8e6] transition-colors inline-flex items-center gap-2">
            Call 0452 579 657 for Free Quote
          </a>
        </div>
      </section>
    </>
  );
}
