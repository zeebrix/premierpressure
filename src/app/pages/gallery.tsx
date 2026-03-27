import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Phone, Star, MapPin, Filter, ArrowRight, CheckCircle2 } from 'lucide-react';
import { SEO } from '../components/seo';
import { projectId, publicAnonKey } from '/utils/supabase/info';
import { Link } from 'react-router';

interface ImageMetadata {
  id: string;
  fileName: string;
  category: string;
  description: string;
  uploadedAt: string;
  signedUrl: string;
  originalName: string;
  size: number;
  type: string;
  showInGallery?: boolean;
}

interface ImagePair {
  before: string;
  after: string;
  description: string;
  category: string;
}

const CATEGORIES = [
  { value: 'all', label: 'All Projects' },
  { value: 'driveway', label: 'Driveway Cleaning' },
  { value: 'limestone', label: 'Limestone Cleaning' },
  { value: 'concrete', label: 'Concrete Cleaning' },
  { value: 'house', label: 'House Washing' },
  { value: 'paver', label: 'Paver Cleaning & Sealing' },
  { value: 'roof', label: 'Roof Cleaning' },
  { value: 'window', label: 'Window Cleaning' },
  { value: 'commercial', label: 'Commercial Projects' },
];

function BeforeAfterSlider({ pair }: { pair: ImagePair }) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);

  const handleMove = (e: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>) => {
    if (!isDragging && e.type !== 'mousemove') return;

    const container = e.currentTarget.getBoundingClientRect();
    let clientX: number;

    if ('touches' in e) {
      clientX = e.touches[0].clientX;
    } else {
      clientX = e.clientX;
    }

    const x = clientX - container.left;
    const percentage = (x / container.width) * 100;
    setSliderPosition(Math.max(0, Math.min(100, percentage)));
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="group relative bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300"
    >
      <div
        className="relative w-full aspect-[4/3] overflow-hidden cursor-ew-resize select-none"
        onMouseDown={() => setIsDragging(true)}
        onMouseUp={() => setIsDragging(false)}
        onMouseLeave={() => setIsDragging(false)}
        onMouseMove={handleMove}
        onTouchStart={() => setIsDragging(true)}
        onTouchEnd={() => setIsDragging(false)}
        onTouchMove={handleMove}
      >
        {/* After Image (Background) */}
        <img
          src={pair.after}
          alt="After cleaning"
          className="absolute inset-0 w-full h-full object-cover"
          draggable={false}
        />

        {/* Before Image (Clipped) */}
        <div
          className="absolute inset-0 overflow-hidden"
          style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
        >
          <img
            src={pair.before}
            alt="Before cleaning"
            className="absolute inset-0 w-full h-full object-cover"
            draggable={false}
          />
        </div>

        {/* Slider Line and Handle */}
        <div
          className="absolute top-0 bottom-0 w-1 bg-white shadow-lg"
          style={{ left: `${sliderPosition}%` }}
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-xl flex items-center justify-center border-2 border-[#00d4ff]">
            <div className="flex gap-1">
              <div className="w-0.5 h-4 bg-[#0a1628]"></div>
              <div className="w-0.5 h-4 bg-[#0a1628]"></div>
            </div>
          </div>
        </div>

        {/* Labels */}
        <div className="absolute top-4 left-4 bg-[#0a1628] text-white px-3 py-1.5 rounded-lg text-sm font-semibold">
          Before
        </div>
        <div className="absolute top-4 right-4 bg-[#00d4ff] text-[#0a1628] px-3 py-1.5 rounded-lg text-sm font-semibold">
          After
        </div>
      </div>

      {/* Description */}
      <div className="p-4 bg-white border-t border-gray-100">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-gray-700">
            <MapPin className="w-4 h-4 text-[#00d4ff]" />
            <span className="text-sm font-medium capitalize">{pair.description}</span>
          </div>
          <span className="text-xs text-gray-500 capitalize">{pair.category}</span>
        </div>
      </div>
    </motion.div>
  );
}

export function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [images, setImages] = useState<ImageMetadata[]>([]);
  const [loading, setLoading] = useState(true);

  const API_URL = `https://${projectId}.supabase.co/functions/v1/make-server-bb20e683`;

  useEffect(() => {
    async function fetchImages() {
      try {
        setLoading(true);
        const url = selectedCategory === 'all'
          ? `${API_URL}/images`
          : `${API_URL}/images?category=${selectedCategory}`;

        const response = await fetch(url, {
          headers: {
            'Authorization': `Bearer ${publicAnonKey}`,
          },
        });

        if (!response.ok) {
          throw new Error('Failed to load images');
        }

        const data = await response.json();

        if (data.images && data.images.length > 0) {
          setImages(data.images);
        } else {
          setImages([]);
        }
      } catch (error) {
        console.error('Error fetching gallery images:', error);
        setImages([]);
      } finally {
        setLoading(false);
      }
    }

    fetchImages();
    
    // Auto-refresh every 5 seconds to pick up gallery visibility changes
    const interval = setInterval(fetchImages, 5000);
    
    return () => clearInterval(interval);
  }, [selectedCategory]);

  // Group images into before/after pairs
  // Filter for only images marked to show in gallery
  const galleryImages = images.filter((img: any) => img.showInGallery === true);
  
  // Debug logging
  console.log('Gallery Debug:', {
    totalImages: images.length,
    filteredImages: galleryImages.length,
    imagesWithUndefined: images.filter((img: any) => img.showInGallery === undefined).length,
    imagesWithTrue: images.filter((img: any) => img.showInGallery === true).length,
    imagesWithFalse: images.filter((img: any) => img.showInGallery === false).length,
  });
  
  const imagePairs: ImagePair[] = [];
  for (let i = 0; i < galleryImages.length; i += 2) {
    if (galleryImages[i + 1]) {
      imagePairs.push({
        before: galleryImages[i].signedUrl,
        after: galleryImages[i + 1].signedUrl,
        description: galleryImages[i].description || 'Perth',
        category: galleryImages[i].category || 'general',
      });
    }
  }

  return (
    <>
      <SEO
        title="Before & After Gallery | Premier Pressure Solutions WA"
        description="See the incredible transformations from our pressure cleaning services across Perth. Browse before and after photos of driveways, limestone, roofs, and more."
        keywords="pressure cleaning gallery, before after photos, Perth pressure washing, cleaning results, driveway cleaning Perth, house washing Perth"
        canonical="https://premierpressuresolutionswa.com.au/gallery"
      />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#0a1628] to-[#0f2744] text-white pt-32 pb-20">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzBoLTJ2LTJoMnYyem0wLTRoLTJ2LTJoMnYyem0wLTRoLTJ2LTJoMnYyem0wLTRoLTJ2LTJoMnYyem0wLTRoLTJ2LTJoMnYyem0wLTRoLTJ2LTJoMnYyem0wLTRoLTJ2LTJoMnYyem0wLTRoLTJ2LTJoMnYyem0wLTRoLTJ2LTJoMnYyeiIvPjwvZz48L2c+PC9zdmc+')] opacity-20"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <div className="inline-block bg-[#00d4ff]/10 border border-[#00d4ff]/30 text-[#00d4ff] px-4 py-2 rounded-full text-sm font-semibold mb-6">
              BEFORE & AFTER GALLERY
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              See The <span className="text-[#00d4ff]">Transformation</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Real results from real Perth properties. Our professional pressure cleaning services deliver exceptional transformations across residential and commercial projects.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+61452579657"
                className="inline-flex items-center justify-center gap-2 bg-[#00d4ff] text-[#0a1628] px-8 py-4 rounded-lg font-semibold hover:bg-[#00b8e6] transition-colors shadow-lg hover:shadow-xl"
              >
                <Phone className="w-5 h-5" />
                Call 0452 579 657
              </a>
              <Link
                to="/#quote"
                className="inline-flex items-center justify-center gap-2 bg-white/10 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/20 transition-colors border border-white/20"
              >
                Get Free Quote
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-white py-12 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-center"
            >
              <div className="text-3xl md:text-4xl font-bold text-[#00d4ff] mb-2">500+</div>
              <div className="text-gray-600 font-medium">Happy Customers</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-center"
            >
              <div className="text-3xl md:text-4xl font-bold text-[#00d4ff] mb-2">10,000+</div>
              <div className="text-gray-600 font-medium">Sqm Cleaned</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-center"
            >
              <div className="flex items-center justify-center gap-1 mb-2">
                <Star className="w-8 h-8 fill-[#00d4ff] text-[#00d4ff]" />
                <span className="text-3xl md:text-4xl font-bold text-[#00d4ff]">5.0</span>
              </div>
              <div className="text-gray-600 font-medium">Google Rating</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="text-center"
            >
              <div className="text-3xl md:text-4xl font-bold text-[#00d4ff] mb-2">10%</div>
              <div className="text-gray-600 font-medium">New Customer Discount</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="bg-gray-50 py-8 sticky top-16 z-30 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-4">
            <Filter className="w-5 h-5 text-[#0a1628]" />
            <h2 className="text-lg font-semibold text-[#0a1628]">Filter By Service</h2>
          </div>
          <div className="flex flex-wrap gap-2">
            {CATEGORIES.map((category) => (
              <button
                key={category.value}
                onClick={() => setSelectedCategory(category.value)}
                className={`px-4 py-2 rounded-lg font-medium transition-all ${
                  selectedCategory === category.value
                    ? 'bg-[#00d4ff] text-[#0a1628] shadow-md'
                    : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-300'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {loading ? (
            <div className="flex items-center justify-center py-20">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#00d4ff]"></div>
            </div>
          ) : imagePairs.length === 0 ? (
            <div className="text-center py-20">
              <div className="bg-white rounded-2xl p-12 shadow-lg max-w-md mx-auto">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Filter className="w-8 h-8 text-gray-400" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">No images found</h3>
                <p className="text-gray-600">
                  {selectedCategory === 'all'
                    ? 'No gallery images available yet.'
                    : `No images found for ${CATEGORIES.find(c => c.value === selectedCategory)?.label || selectedCategory}.`}
                </p>
                <button
                  onClick={() => setSelectedCategory('all')}
                  className="mt-6 inline-flex items-center gap-2 text-[#00d4ff] hover:text-[#00b8e6] font-semibold"
                >
                  View All Projects
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ) : (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="text-center mb-8"
              >
                <p className="text-gray-600">
                  Showing <span className="font-semibold text-[#0a1628]">{imagePairs.length}</span> {imagePairs.length === 1 ? 'project' : 'projects'}
                  {selectedCategory !== 'all' && (
                    <> in <span className="font-semibold text-[#0a1628]">{CATEGORIES.find(c => c.value === selectedCategory)?.label}</span></>
                  )}
                </p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {imagePairs.map((pair, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
                  >
                    {/* Side-by-Side Before/After */}
                    <div className="grid grid-cols-2 gap-0">
                      {/* Before Image */}
                      <div className="relative aspect-[3/4] bg-gray-200">
                        <img
                          src={pair.before}
                          alt={`Before pressure cleaning - ${pair.description}`}
                          className="absolute inset-0 w-full h-full object-cover"
                          loading="lazy"
                        />
                        <div className="absolute top-3 left-3 bg-[#0a1628]/80 text-white px-3 py-1.5 rounded-md text-xs font-semibold">
                          Before
                        </div>
                      </div>

                      {/* After Image */}
                      <div className="relative aspect-[3/4] bg-gray-200">
                        <img
                          src={pair.after}
                          alt={`After pressure cleaning - ${pair.description}`}
                          className="absolute inset-0 w-full h-full object-cover"
                          loading="lazy"
                        />
                        <div className="absolute top-3 right-3 bg-[#00d4ff]/90 text-[#0a1628] px-3 py-1.5 rounded-md text-xs font-semibold">
                          After
                        </div>
                      </div>
                    </div>

                    {/* Project Details */}
                    <div className="p-6">
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <h3 className="text-lg font-semibold text-[#0a1628] mb-1">
                            {pair.description}
                          </h3>
                          <p className="text-sm text-gray-500 capitalize">
                            {pair.category.replace(/-/g, ' ')}
                          </p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </>
          )}
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#0a1628] mb-4">
              Why Perth Trusts Us
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Professional pressure cleaning services with guaranteed results
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: CheckCircle2,
                title: 'Professional Equipment',
                description: 'Industrial-grade pressure cleaning equipment for superior results',
              },
              {
                icon: CheckCircle2,
                title: 'Experienced Team',
                description: 'Fully trained and insured technicians with years of experience',
              },
              {
                icon: CheckCircle2,
                title: 'Satisfaction Guaranteed',
                description: '100% satisfaction guarantee on all our cleaning services',
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-50 rounded-xl p-8 text-center hover:shadow-lg transition-shadow"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-[#00d4ff]/10 rounded-full mb-6">
                  <item.icon className="w-8 h-8 text-[#00d4ff]" />
                </div>
                <h3 className="text-xl font-bold text-[#0a1628] mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="bg-gradient-to-br from-[#0a1628] to-[#0f2744] text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Ready To Transform <span className="text-[#00d4ff]">Your Property?</span>
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Get the same incredible results you see in our gallery. Contact us today for a free, no-obligation quote.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+61452579657"
                className="inline-flex items-center justify-center gap-2 bg-[#00d4ff] text-[#0a1628] px-8 py-4 rounded-lg font-semibold hover:bg-[#00b8e6] transition-colors shadow-lg hover:shadow-xl text-lg"
              >
                <Phone className="w-5 h-5" />
                Call 0452 579 657
              </a>
              <Link
                to="/#quote"
                className="inline-flex items-center justify-center gap-2 bg-white text-[#0a1628] px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg hover:shadow-xl text-lg"
              >
                Get Free Quote
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
            <div className="mt-8 inline-flex items-center gap-2 text-[#00d4ff] bg-[#00d4ff]/10 px-6 py-3 rounded-full border border-[#00d4ff]/30">
              <CheckCircle2 className="w-5 h-5" />
              <span className="font-semibold">10% Off For New Customers</span>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
