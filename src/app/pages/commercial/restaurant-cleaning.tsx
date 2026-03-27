import { CommercialHero } from '../../components/commercial/commercial-hero';
import { CommercialBenefits } from '../../components/commercial/commercial-benefits';
import { CommercialProcess } from '../../components/commercial/commercial-process';
import { CommercialCTA } from '../../components/commercial/commercial-cta';
import { motion } from 'motion/react';
import { CheckCircle, UtensilsCrossed, Shield, Sparkles, Clock } from 'lucide-react';

export function RestaurantCleaningPage() {
  const benefits = [
    {
      icon: UtensilsCrossed,
      title: 'Health Standards',
      description: 'Maintain exterior cleanliness that complements your food safety standards and creates positive health impressions.',
    },
    {
      icon: Shield,
      title: 'Customer Appeal',
      description: 'Clean exteriors and sparkling windows attract customers and create inviting dining experiences that encourage visits.',
    },
    {
      icon: Sparkles,
      title: 'Street Presence',
      description: 'Stand out in competitive dining precincts with pristine exteriors that showcase your commitment to quality.',
    },
    {
      icon: Clock,
      title: 'Professional Image',
      description: 'Reflect the quality of your cuisine and service through immaculate exterior presentation.',
    },
  ];

  const process = [
    {
      title: 'Venue Assessment',
      description: 'We inspect all exterior areas including facades, outdoor dining spaces, entry areas, windows, and surrounding surfaces.',
    },
    {
      title: 'Flexible Scheduling',
      description: 'Coordinate work around your operating hours - early morning, late evening, or days when closed to avoid disrupting service.',
    },
    {
      title: 'Comprehensive Cleaning',
      description: 'Our team cleans all exterior surfaces and windows using hospitality-appropriate methods that deliver outstanding results.',
    },
    {
      title: 'Ready to Welcome',
      description: 'Final inspection ensures your venue looks perfect and ready to welcome customers for service.',
    },
  ];

  return (
    <main>
      <CommercialHero
        title="Restaurant Exterior Cleaning Perth"
        subtitle="Professional cleaning for restaurants, cafés, and hospitality venues"
        description="Create inviting dining experiences with pristine exterior cleaning and sparkling windows. We work around your service hours to keep your venue looking exceptional for every customer visit."
      />
      
      <CommercialBenefits benefits={benefits} />

      {/* Service Overview */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0a1628] mb-6">
              Specialized Cleaning for Perth Restaurants & Cafés
            </h2>
            <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
              <p>
                In Perth's competitive hospitality industry, first impressions are everything. Before customers taste your food or experience your service, they judge your venue by its exterior appearance. Clean facades, sparkling windows, pristine outdoor dining areas, and well-maintained entry ways signal quality, professionalism, and attention to detail - qualities that attract customers and encourage positive dining experiences.
              </p>
              <p>
                Premier Pressure Solutions WA specializes in exterior cleaning for restaurants, cafés, bars, and hospitality venues across Perth. We understand the unique challenges hospitality businesses face - from food and beverage spillages to high foot traffic, outdoor dining maintenance, and the need to maintain immaculate appearances that complement your culinary offerings.
              </p>
              <p>
                Our team works seamlessly with hospitality operations, scheduling cleaning around your service periods to ensure zero disruption to customers and staff. We deliver professional results that enhance your venue's street appeal and create the welcoming environments that drive customer visits and positive reviews.
              </p>

              <h3 className="text-2xl font-bold text-[#0a1628] mt-8 mb-4">
                Restaurant Exterior Areas We Clean
              </h3>
              <div className="grid sm:grid-cols-2 gap-3 my-6">
                {[
                  'Building facades and exteriors',
                  'Outdoor dining patios and decks',
                  'Entry ways and reception areas',
                  'Outdoor furniture and fixtures',
                  'Awnings and canopies',
                  'Signage and menu boards',
                  'Walkways and surrounding paths',
                  'Bin storage and service areas',
                  'Kitchen exhaust surrounds',
                  'Loading and delivery areas',
                  'Fencing and privacy screens',
                  'Drive-through lanes (if applicable)',
                ].map((item) => (
                  <div key={item} className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-[#00d4ff] flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <h3 className="text-2xl font-bold text-[#0a1628] mt-8 mb-4">
                Why Perth Hospitality Venues Choose Us
              </h3>
              <p>
                Hospitality businesses need cleaning providers who understand the industry's pace, customer focus, and commitment to quality. We've developed specialized processes for restaurants and cafés that deliver exceptional results while respecting the operational demands of food service businesses.
              </p>
              <p>
                Our team understands the importance of discretion and professionalism when working at hospitality venues. We arrive in clearly marked vehicles, work quietly and efficiently, and ensure our presence enhances rather than detracts from your customer experience. When cleaning outdoor areas during trading, we use appropriate signage and always prioritize customer safety and comfort.
              </p>
              <p>
                We also understand the specific cleaning challenges hospitality venues face. Food and beverage spillages, oil from exhaust fans, grease in service areas, and the general wear from constant use all require specialized attention. Our team uses appropriate cleaning solutions and methods for each situation, delivering results that meet the high standards Perth diners expect.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Window Cleaning Benefits Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0a1628] mb-6">
              Professional Window Cleaning for Restaurants
            </h2>
            <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
              <p>
                Windows are critical to your restaurant's appeal and customer experience. Clean, streak-free windows allow natural light to create inviting dining atmospheres, let passersby see into your beautiful venue, and demonstrate the same attention to detail you apply to your food and service.
              </p>

              <h3 className="text-2xl font-bold text-[#0a1628] mt-8 mb-4">
                Window Cleaning Benefits for Your Restaurant
              </h3>
              
              <div className="bg-white rounded-xl p-6 md:p-8 shadow-md my-6">
                <h4 className="text-xl font-bold text-[#0a1628] mb-4 flex items-center gap-2">
                  <Shield className="w-6 h-6 text-[#00d4ff]" />
                  Enhanced Street Appeal & Visibility
                </h4>
                <p>
                  Clean windows create an instant visual impact that attracts customers walking past. Sparkling glass showcases your interior design, ambiance, and dining atmosphere, encouraging potential customers to stop and enter. This is particularly important for street-facing restaurants and cafés where windows serve as your primary marketing tool to pedestrian traffic.
                </p>
                <p className="mt-3">
                  Dirty or streaky windows, conversely, create negative impressions and may cause potential customers to walk past without a second glance. In competitive dining precincts, window cleanliness can be the difference between capturing passing trade and losing it to competitors.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 md:p-8 shadow-md my-6">
                <h4 className="text-xl font-bold text-[#0a1628] mb-4 flex items-center gap-2">
                  <Sparkles className="w-6 h-6 text-[#00d4ff]" />
                  Improved Interior Ambiance & Natural Light
                </h4>
                <p>
                  Clean windows maximize natural light entering your dining spaces, creating brighter, more welcoming environments that enhance the dining experience. Natural light improves how food appears on plates, creates flattering lighting for customers, and reduces reliance on artificial lighting during daytime service.
                </p>
                <p className="mt-3">
                  Restaurants with abundant natural light through clean windows feel more spacious, airy, and inviting. This improved ambiance contributes to longer customer visits, higher satisfaction, and more positive reviews mentioning your venue's atmosphere.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 md:p-8 shadow-md my-6">
                <h4 className="text-xl font-bold text-[#0a1628] mb-4 flex items-center gap-2">
                  <Clock className="w-6 h-6 text-[#00d4ff]" />
                  Professional Image & Quality Perception
                </h4>
                <p>
                  Spotless windows signal professionalism, quality standards, and attention to detail - qualities customers naturally associate with excellent food and service. If you take care to keep windows pristine, customers trust you'll apply the same standards to food preparation, kitchen cleanliness, and overall hygiene.
                </p>
                <p className="mt-3">
                  This is particularly important for fine dining establishments, cafés targeting quality-conscious customers, and any venue where presentation matters. Clean windows reinforce your brand positioning and support the premium pricing your quality deserves.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 md:p-8 shadow-md my-6">
                <h4 className="text-xl font-bold text-[#0a1628] mb-4 flex items-center gap-2">
                  <CheckCircle className="w-6 h-6 text-[#00d4ff]" />
                  Health & Safety Compliance
                </h4>
                <p>
                  Regular window cleaning contributes to overall venue hygiene and cleanliness standards. While health inspections focus primarily on food preparation areas, overall venue cleanliness including windows creates positive impressions during inspections and demonstrates comprehensive maintenance standards.
                </p>
                <p className="mt-3">
                  Clean windows also improve visibility for safety purposes, allowing staff to see approaching customers, delivery drivers, and any activity outside the venue. This enhanced visibility supports both customer service and security.
                </p>
              </div>

              <h3 className="text-2xl font-bold text-[#0a1628] mt-8 mb-4">
                Our Restaurant Window Cleaning Process
              </h3>
              <p>
                We use professional window cleaning techniques and streak-free solutions specifically chosen for hospitality environments. Our process includes cleaning both exterior and interior window surfaces (if required), frames, sills, and glass doors to ensure complete clarity and shine.
              </p>
              <p>
                For restaurants with large glass facades or floor-to-ceiling windows, we use appropriate access equipment to safely clean all areas. We work carefully around outdoor dining furniture and plantings, ensuring your exterior presentation remains perfect throughout the cleaning process.
              </p>
              <p>
                Window cleaning can be provided as a standalone service or combined with comprehensive exterior pressure cleaning for complete venue presentation. Many restaurants benefit from weekly or fortnightly window cleaning to maintain consistent street appeal, especially in high-traffic locations or areas with environmental factors affecting glass cleanliness.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Continue with standard sections */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
              <h3 className="text-2xl font-bold text-[#0a1628] mt-8 mb-4">
                Outdoor Dining Area Cleaning
              </h3>
              <p>
                Outdoor dining spaces are significant revenue generators for Perth restaurants, particularly during our beautiful weather. These areas require regular professional cleaning to maintain the inviting appearances that encourage customers to dine alfresco.
              </p>
              <p>
                We clean all outdoor dining surfaces including patio floors, decking, outdoor furniture, umbrella bases, barriers, and surrounding areas. Our cleaning removes food and beverage stains, dirt accumulation, and environmental contaminants, keeping your outdoor spaces as appealing as your interior dining areas.
              </p>

              <h3 className="text-2xl font-bold text-[#0a1628] mt-8 mb-4">
                Regular Maintenance Programs
              </h3>
              <p>
                Many Perth restaurants and cafés benefit from regular scheduled cleaning that maintains consistent presentation without requiring ongoing attention from busy owners and managers. We offer flexible service schedules - weekly, fortnightly, or monthly - customized to your venue's specific needs and foot traffic.
              </p>
              <p>
                Regular maintenance prevents dirt and stain buildup, ensures your venue always looks its best for customers, and is more cost-effective than infrequent deep cleaning. We work with you to develop cleaning schedules that align with your operational patterns and budget considerations.
              </p>

              <h3 className="text-2xl font-bold text-[#0a1628] mt-8 mb-4">
                Special Event Cleaning
              </h3>
              <p>
                Hosting a special event, private function, or important occasion at your venue? We provide responsive cleaning services to ensure your restaurant looks absolutely perfect for special occasions when first impressions matter most. Many venues call us before food critic visits, media coverage, or major celebrations.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CommercialProcess 
        title="Our Restaurant Cleaning Process"
        steps={process}
      />
      <CommercialCTA 
        serviceName="Restaurant"
        descriptionPlaceholder="Tell us about your restaurant exterior and window cleaning needs..."
      />
    </main>
  );
}