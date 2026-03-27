import { Phone, FileText } from 'lucide-react';
import { motion } from 'motion/react';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { unsplash_tool } from '../../../utils/unsplash';

interface ServiceHeroProps {
  title: string;
  subtitle: string;
  imageQuery: string;
  backgroundImage?: string;
}

export function ServiceHero({ title, subtitle, imageQuery, backgroundImage }: ServiceHeroProps) {
  const defaultImage = 'https://iigpdyyiqskohqejmqob.supabase.co/storage/v1/object/sign/make-bb20e683-images/general/1772717372738-dcaddfc6-4c29-4731-8373-013989b7e141.webp?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9hMjhhMmJhNi1lYjVhLTQ5OGQtODVlMC0wZTUxMmZiNDJhNzIiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJtYWtlLWJiMjBlNjgzLWltYWdlcy9nZW5lcmFsLzE3NzI3MTczNzI3MzgtZGNhZGRmYzYtNGMyOS00NzMxLTgzNzMtMDEzOTg5YjdlMTQxLndlYnAiLCJpYXQiOjE3NzI3MTczNzIsImV4cCI6MTgwNDI1MzM3Mn0.8d9nrRjKQrRnHR2XsgvJsgDq-Nrcj_xisjEbNvgdDNc';
  
  return (
    <section 
      className="relative min-h-[500px] flex items-center justify-center overflow-hidden bg-[#0a1628]"
      aria-label={`${title} - Professional pressure cleaning service in Perth`}
    >
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0"
        role="img"
        aria-label={`Background image showing ${imageQuery || 'pressure cleaning service'} in Perth`}
      >
        <div 
          className="absolute inset-0 bg-gradient-to-r from-[#0a1628] via-[#0a1628] to-[#0a1628]/98 w-full h-full"
          style={{
            backgroundImage: `url(${backgroundImage || defaultImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        ></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="max-w-3xl">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
          >
            {title}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed"
          >
            {subtitle}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a
              href="tel:+61452579657"
              className="inline-flex items-center justify-center gap-2 bg-[#00d4ff] text-[#0a1628] px-8 py-4 rounded-lg transition-all hover:bg-[#00c4ef] shadow-lg hover:shadow-xl font-semibold text-lg"
            >
              <Phone className="w-5 h-5" />
              <span>Call Now</span>
            </a>

            <a
              href="#quote"
              className="inline-flex items-center justify-center gap-2 bg-white text-[#0a1628] px-8 py-4 rounded-lg transition-all hover:bg-white/90 shadow-lg hover:shadow-xl font-semibold text-lg"
            >
              <FileText className="w-5 h-5" />
              <span>Get a Free Quote</span>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}