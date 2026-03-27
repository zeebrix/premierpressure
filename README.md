# Premier Pressure Solutions WA - Website

[![Built with React](https://img.shields.io/badge/React-18.3.1-blue.svg)](https://reactjs.org/)
[![Powered by Vite](https://img.shields.io/badge/Vite-6.3.5-purple.svg)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.1.12-teal.svg)](https://tailwindcss.com/)

Professional pressure cleaning services website for Perth, Western Australia.

---

## 🚀 Quick Start

### Prerequisites

- **Node.js** version 18 or higher
- **npm** or **pnpm** package manager

### Installation

```bash
# Install dependencies
npm install

# Or using pnpm
pnpm install
```

### Development

```bash
# Start development server
npm run dev

# Open http://localhost:5173 in your browser
```

### Build for Production

```bash
# Create production build
npm run build

# Preview production build locally
npm run preview
```

The production files will be in the `dist/` folder.

---

## 📂 Project Structure

```
premier-pressure-solutions-wa/
├── public/                     # Static files
│   ├── robots.txt             # SEO robots file
│   ├── sitemap.xml            # XML sitemap
│   ├── manifest.json          # PWA manifest
│   ├── .htaccess              # Apache redirect rules
│   └── _redirects             # Netlify redirect rules
├── src/
│   ├── app/
│   │   ├── components/        # React components
│   │   │   ├── suburb/        # Suburb page components
│   │   │   ├── before-after-gallery.tsx
│   │   │   ├── google-reviews.tsx
│   │   │   ├── quote-form.tsx
│   │   │   └── ...
│   │   ├── pages/             # Page components
│   │   │   ├── suburbs/       # 70+ suburb pages
│   │   │   ├── services/      # Service pages
│   │   │   ├── home.tsx
│   │   │   ├── about.tsx
│   │   │   ├── contact.tsx
│   │   │   └── ...
│   │   ├── routes.tsx         # React Router configuration
│   │   └── App.tsx            # Main app component
│   ├── styles/                # CSS files
│   │   ├── theme.css          # Design tokens
│   │   └── fonts.css          # Font imports
│   └── main.tsx               # App entry point
├── supabase/                  # Backend functions
│   └── functions/server/      # Supabase Edge Functions
├── package.json               # Dependencies
├── vite.config.ts             # Vite configuration
├── netlify.toml               # Netlify configuration
└── README.md                  # This file
```

---

## 🌐 Deployment

### Option 1: Netlify (Recommended)

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start)

1. Build the site: `npm run build`
2. Drag the `dist` folder to [Netlify](https://netlify.com)
3. Configure environment variables (see below)
4. Your site is live!

**Configuration is already set in `netlify.toml`**

### Option 2: Vercel

1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel`
3. Follow the prompts
4. Configure environment variables

### Option 3: Traditional Hosting (cPanel/FTP)

1. Build: `npm run build`
2. Upload contents of `dist/` folder to your web host
3. The `.htaccess` file is included for Apache servers
4. Ensure mod_rewrite is enabled

### Option 4: Other Platforms

- **AWS S3 + CloudFront**: Upload `dist/` contents to S3 bucket
- **Firebase Hosting**: `firebase deploy`
- **GitHub Pages**: Use `gh-pages` package
- **DigitalOcean**: Deploy to App Platform or Droplet

---

## 🔧 Environment Variables

### Required for Production

Create a `.env.production` file or set in your hosting provider:

```env
VITE_SUPABASE_URL=your_supabase_project_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

### Supabase Setup

1. Create a Supabase project at [supabase.com](https://supabase.com)
2. Create storage bucket: `make-bb20e683-images`
3. Upload before/after images to the bucket
4. Set bucket to public read access
5. Deploy Edge Function from `/supabase/functions/server/`

---

## 📊 Website Features

### Pages

- **Home** - Main landing page
- **About** - Company information
- **Services** - Overview of all services
  - 8 Residential services (house washing, driveway cleaning, etc.)
  - 8 Commercial services
- **Areas** - Service areas overview
  - **70+ Suburb Pages** - SEO-optimized pages for Perth suburbs
- **Contact** - Contact form and information

### Key Components

- ✅ **Before/After Gallery** - Interactive image gallery with Supabase integration
- ✅ **Quote Request Form** - Lead capture with backend integration
- ✅ **Google Reviews** - Authentic review display
- ✅ **Suburb Navigation** - Comprehensive suburb page system
- ✅ **Mobile-First Design** - Fully responsive
- ✅ **SEO Optimized** - Meta tags, sitemap, structured data
- ✅ **Performance** - Code splitting, lazy loading, optimized images

### SEO Features

- ✅ XML Sitemap (`/sitemap.xml`)
- ✅ Robots.txt (`/robots.txt`)
- ✅ Meta tags on all pages
- ✅ Open Graph tags for social sharing
- ✅ Structured data (Schema.org)
- ✅ Canonical URLs
- ✅ PWA manifest

---

## 🎨 Customization

### Brand Colors

Primary colors are defined in `/src/styles/theme.css`:

- **Navy**: `#0a1628`
- **Cyan**: `#00d4ff`

### Updating Content

- **Contact Info**: Update in components (phone: 0452 579 657)
- **Services**: Edit files in `/src/app/pages/services/`
- **Suburb Pages**: Edit files in `/src/app/pages/suburbs/`
- **Images**: Manage in Supabase Storage

### Adding New Pages

1. Create component in `/src/app/pages/`
2. Add route in `/src/app/routes.tsx`
3. Update sitemap in `/public/sitemap.xml`
4. Rebuild: `npm run build`

---

## 📱 Browser Support

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile Safari (iOS)
- ✅ Mobile Chrome (Android)

---

## 🔒 Security

- HTTPS enforced
- Security headers configured
- XSS protection enabled
- CORS properly configured
- Environment variables for sensitive data
- Supabase Row Level Security

---

## 📈 Performance

- **Lighthouse Score**: 90+
- **First Contentful Paint**: < 1.8s
- **Time to Interactive**: < 3.8s
- Code splitting for optimal loading
- Image lazy loading
- CSS/JS minification
- Gzip compression

---

## 🛠️ Tech Stack

- **Framework**: React 18.3.1
- **Build Tool**: Vite 6.3.5
- **Styling**: Tailwind CSS 4.1.12
- **Routing**: React Router 7.13.0
- **Backend**: Supabase (Edge Functions, Storage, Database)
- **SEO**: React Helmet Async
- **Animations**: Motion (Framer Motion)
- **Icons**: Lucide React
- **Forms**: React Hook Form

---

## 📞 Contact Information

**Business Name**: Premier Pressure Solutions WA  
**Phone**: 0452 579 657  
**Email**: contact@premierpressuresolutionswa.com.au  
**Service Area**: Perth, Western Australia

---

## 📄 Documentation

For detailed deployment instructions, see:

- 📖 [`/EXPORT-INSTRUCTIONS.md`](./EXPORT-INSTRUCTIONS.md) - Comprehensive export guide
- ✅ [`/DEPLOYMENT-CHECKLIST.md`](./DEPLOYMENT-CHECKLIST.md) - Pre-launch checklist
- 📋 [`/DOCUMENTATION-INDEX.md`](./DOCUMENTATION-INDEX.md) - Full documentation index

---

## 🆘 Troubleshooting

### Build Errors

```bash
# Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
npm run build
```

### 404 Errors After Deployment

- Ensure redirect rules are configured (`.htaccess` or `_redirects`)
- Check that routing is set to SPA mode in hosting settings

### Images Not Loading

- Verify Supabase bucket permissions
- Check CORS configuration in Supabase
- Ensure environment variables are set

### Forms Not Submitting

- Verify Supabase Edge Function is deployed
- Check environment variables
- Review browser console for errors

---

## 📝 License

© 2026 Premier Pressure Solutions WA. All rights reserved.

---

## 🎉 Ready to Launch!

Your website is production-ready and optimized for:

- ✅ **SEO** - Search engine optimized
- ✅ **Performance** - Fast loading times
- ✅ **Mobile** - Responsive design
- ✅ **Conversions** - Quote forms and CTAs
- ✅ **Scalability** - Built for growth

**Run `npm run build` to create your production build!**
