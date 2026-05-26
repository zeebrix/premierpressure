'use client';

import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Phone, Star, MapPin, Filter, ArrowRight, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';
import { projectId, publicAnonKey } from '../../utils/supabase/info';

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

export default function GalleryContent() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [images, setImages] = useState<ImageMetadata[]>([]);
  const [loading, setLoading] = useState(true);

  const API_URL = `https://${projectId}.supabase.co/functions/v1/make-server-bb20e683`;

  useEffect(() => {
    async function fetchImages(showSpinner = false) {
      try {
        if (showSpinner) setLoading(true);
        const url = selectedCategory === 'all' ? `${API_URL}/images` : `${API_URL}/images?category=${selectedCategory}`;
        const response = await fetch(url, { headers: { Authorization: `Bearer ${publicAnonKey}` } });
        if (!response.ok) throw new Error('Failed to load images');
        const data = await response.json();
        setImages(data.images && data.images.length > 0 ? data.images : []);
      } catch (error) {
        console.error('Error fetching gallery images:', error);
        setImages([]);
      } finally {
        setLoading(false);
      }
    }

    fetchImages(true);
    const interval = setInterval(() => fetchImages(false), 30000);
    return () => clearInterval(interval);
  }, [selectedCategory, API_URL]);

  const galleryImages = images.filter((img) => img.showInGallery === true);
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
      <section className="relative bg-gradient-to-br from-[#0a1628] to-[#0f2744] text-white pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-center max-w-3xl mx-auto">
            <div className="inline-block bg-[#00d4ff]/10 border border-[#00d4ff]/30 text-[#00d4ff] px-4 py-2 rounded-full text-sm font-semibold mb-6">
              BEFORE &amp; AFTER GALLERY
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              See The <span className="text-[#00d4ff]">Transformation</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Real results from real Perth properties. Our professional pressure cleaning services deliver exceptional transformations across residential and commercial projects.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:+61452579657" className="inline-flex items-center justify-center gap-2 bg-[#00d4ff] text-[#0a1628] px-8 py-4 rounded-lg font-semibold hover:bg-[#00b8e6] transition-colors shadow-lg hover:shadow-xl">
                <Phone className="w-5 h-5" />
                Call 0452 579 657
              </a>
              <Link href="/#quote" className="inline-flex items-center justify-center gap-2 bg-white/10 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/20 transition-colors border border-white/20">
                Get Free Quote
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="bg-white py-12 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-[#00d4ff] mb-2">500+</div>
              <div className="text-gray-600 font-medium">Happy Customers</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-[#00d4ff] mb-2">10,000+</div>
              <div className="text-gray-600 font-medium">Sqm Cleaned</div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center gap-1 mb-2">
                <Star className="w-8 h-8 fill-[#00d4ff] text-[#00d4ff]" />
                <span className="text-3xl md:text-4xl font-bold text-[#00d4ff]">5.0</span>
              </div>
              <div className="text-gray-600 font-medium">Google Rating</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-[#00d4ff] mb-2">10%</div>
              <div className="text-gray-600 font-medium">New Customer Discount</div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-8 sticky top-16 z-30 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-4">
            <Filter className="w-5 h-5 text-[#0a1628]" />
            <h2 className="text-lg font-semibold text-[#0a1628]">Filter By Service</h2>
          </div>
          <div className="flex flex-wrap gap-2">
            {CATEGORIES.map((category) => (
              <button key={category.value} onClick={() => setSelectedCategory(category.value)} className={`px-4 py-2 rounded-lg font-medium transition-all ${selectedCategory === category.value ? 'bg-[#00d4ff] text-[#0a1628] shadow-md' : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-300'}`}>
                {category.label}
              </button>
            ))}
          </div>
        </div>
      </section>

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
                  {selectedCategory === 'all' ? 'No gallery images available yet.' : `No images found for ${CATEGORIES.find((c) => c.value === selectedCategory)?.label || selectedCategory}.`}
                </p>
                <button onClick={() => setSelectedCategory('all')} className="mt-6 inline-flex items-center gap-2 text-[#00d4ff] hover:text-[#00b8e6] font-semibold">
                  View All Projects
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ) : (
            <>
              <div className="text-center mb-8">
                <p className="text-gray-600">
                  Showing <span className="font-semibold text-[#0a1628]">{imagePairs.length}</span> {imagePairs.length === 1 ? 'project' : 'projects'}
                  {selectedCategory !== 'all' && (
                    <> in <span className="font-semibold text-[#0a1628]">{CATEGORIES.find((c) => c.value === selectedCategory)?.label}</span></>
                  )}
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {imagePairs.map((pair, index) => (
                  <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                    <div className="grid grid-cols-2 gap-0">
                      <div className="relative aspect-[3/4] bg-gray-200">
                        <img src={pair.before} alt={`Before pressure cleaning - ${pair.description}`} className="absolute inset-0 w-full h-full object-cover" loading="lazy" />
                        <div className="absolute top-3 left-3 bg-[#0a1628]/80 text-white px-3 py-1.5 rounded-md text-xs font-semibold">Before</div>
                      </div>
                      <div className="relative aspect-[3/4] bg-gray-200">
                        <img src={pair.after} alt={`After pressure cleaning - ${pair.description}`} className="absolute inset-0 w-full h-full object-cover" loading="lazy" />
                        <div className="absolute top-3 right-3 bg-[#00d4ff]/90 text-[#0a1628] px-3 py-1.5 rounded-md text-xs font-semibold">After</div>
                      </div>
                    </div>
                    <div className="p-6">
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <h3 className="text-lg font-semibold text-[#0a1628] mb-1">{pair.description}</h3>
                          <p className="text-sm text-gray-500 capitalize">{pair.category.replace(/-/g, ' ')}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0a1628] mb-4">Why Perth Trusts Us</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">Professional pressure cleaning services with guaranteed results</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: 'Professional Equipment', description: 'Industrial-grade pressure cleaning equipment for superior results' },
              { title: 'Experienced Team', description: 'Fully trained and insured technicians with years of experience' },
              { title: 'Satisfaction Guaranteed', description: '100% satisfaction guarantee on all our cleaning services' },
            ].map((item, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-8 text-center hover:shadow-lg transition-shadow">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-[#00d4ff]/10 rounded-full mb-6">
                  <CheckCircle2 className="w-8 h-8 text-[#00d4ff]" />
                </div>
                <h3 className="text-xl font-bold text-[#0a1628] mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-[#0a1628] to-[#0f2744] text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Ready To Transform <span className="text-[#00d4ff]">Your Property?</span>
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Get the same incredible results you see in our gallery. Contact us today for a free, no-obligation quote.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+61452579657" className="inline-flex items-center justify-center gap-2 bg-[#00d4ff] text-[#0a1628] px-8 py-4 rounded-lg font-semibold hover:bg-[#00b8e6] transition-colors shadow-lg hover:shadow-xl text-lg">
              <Phone className="w-5 h-5" />
              Call 0452 579 657
            </a>
            <Link href="/#quote" className="inline-flex items-center justify-center gap-2 bg-white text-[#0a1628] px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg hover:shadow-xl text-lg">
              Get Free Quote
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
          <div className="mt-8 inline-flex items-center gap-2 text-[#00d4ff] bg-[#00d4ff]/10 px-6 py-3 rounded-full border border-[#00d4ff]/30">
            <CheckCircle2 className="w-5 h-5" />
            <span className="font-semibold">10% Off For New Customers</span>
          </div>
        </div>
      </section>
    </>
  );
}
