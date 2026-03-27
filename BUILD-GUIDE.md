# Build & Export Guide

## 🔨 Building Your Website

This guide explains how to build your website for production deployment.

---

## Prerequisites

Before building, ensure you have:

- ✅ Node.js installed (version 18 or higher)
- ✅ npm or pnpm package manager
- ✅ All dependencies installed (`npm install`)

---

## Step-by-Step Build Process

### 1. Install Dependencies (First Time Only)

```bash
npm install
```

or if using pnpm:

```bash
pnpm install
```

### 2. Build for Production

```bash
npm run build
```

This command will:
- ✅ Compile all React/TypeScript code
- ✅ Optimize and minify JavaScript
- ✅ Process and minify CSS
- ✅ Optimize images
- ✅ Generate hashed filenames for caching
- ✅ Create code-split bundles
- ✅ Tree-shake unused code
- ✅ Generate sourcemaps (if configured)

### 3. Verify Build Output

After building, check the `dist` folder:

```
dist/
├── index.html              ← Main HTML file
├── assets/
│   ├── js/
│   │   ├── main-[hash].js
│   │   ├── react-vendor-[hash].js
│   │   ├── motion-vendor-[hash].js
│   │   └── ui-vendor-[hash].js
│   ├── images/
│   └── *.css
├── robots.txt
├── sitemap.xml
├── manifest.json
└── .htaccess
```

---

## Build Configuration

Your build is optimized with:

### Code Splitting
- **React vendor bundle**: React, React-DOM, React Router
- **Motion vendor bundle**: Motion (Framer Motion)
- **UI vendor bundle**: Lucide icons and UI components
- **Helmet vendor bundle**: React Helmet for SEO

### Performance Optimizations
- ✅ Minification with esbuild (faster than terser)
- ✅ CSS code splitting
- ✅ Tree shaking enabled
- ✅ Asset optimization
- ✅ Modern ES2020 target
- ✅ Compressed gzip/brotli ready

### Asset Organization
- **Images**: `assets/images/[name]-[hash][ext]`
- **Fonts**: `assets/fonts/[name]-[hash][ext]`
- **JS**: `assets/js/[name]-[hash].js`
- **CSS**: `assets/[name]-[hash].css`

---

## Preview Build Locally (Optional)

To test your production build locally:

1. **Build the site:**
   ```bash
   npm run build
   ```

2. **Serve the dist folder:**
   ```bash
   npx serve dist
   ```
   or
   ```bash
   npx vite preview
   ```

3. **Open in browser:**
   - Navigate to `http://localhost:4173` (or port shown)
   - Test all functionality
   - Check forms, navigation, images

---

## Build Troubleshooting

### Build Fails

**Error: "Module not found"**
- Solution: Run `npm install` to ensure all dependencies are installed

**Error: "Out of memory"**
- Solution: Increase Node.js memory: `NODE_OPTIONS=--max-old-space-size=4096 npm run build`

**Error: TypeScript errors**
- Solution: Check your code for type errors or skip type checking temporarily

### Build Warnings

**Warning: "Chunk size exceeds 500kb"**
- This is normal for some vendor bundles
- Already configured with higher threshold (600kb)

**Warning: "Use of eval is strongly discouraged"**
- Can be ignored in production build
- Related to third-party dependencies

---

## Optimizing Build Size

Your build is already optimized, but you can further reduce size:

### 1. Analyze Bundle Size

```bash
npm run build -- --mode production
```

### 2. Remove Unused Dependencies

Check `package.json` for unused packages and remove them:

```bash
npm uninstall unused-package
```

### 3. Image Optimization

- Use WebP format for images
- Compress images before uploading to Supabase
- Use appropriate image dimensions

### 4. Lazy Loading

Routes are already lazy-loaded via React Router.

---

## Environment-Specific Builds

### Development Build
```bash
npm run dev
```
- Fast rebuilds
- Source maps enabled
- Hot module replacement
- Development warnings

### Production Build
```bash
npm run build
```
- Optimized and minified
- No source maps (for security)
- Tree-shaking enabled
- Performance optimized

---

## What Gets Exported

### Included in Build ✅
- All HTML, CSS, JavaScript
- Optimized images
- Static assets (robots.txt, sitemap.xml, etc.)
- PWA manifest
- .htaccess for Apache servers

### NOT Included ❌
- Source code (.tsx, .ts files)
- node_modules
- .env files
- Development configuration
- Git history

---

## Build Checklist

Before deploying, verify:

- [ ] `npm run build` completes without errors
- [ ] `dist` folder contains all files
- [ ] `index.html` exists in dist root
- [ ] Assets folder has CSS, JS, images
- [ ] robots.txt and sitemap.xml present
- [ ] .htaccess included (for Apache)
- [ ] File sizes reasonable (not too large)

---

## Upload to Hosting

### Method 1: Drag & Drop (Netlify/Vercel)
1. Build: `npm run build`
2. Drag `dist` folder to hosting platform
3. Done!

### Method 2: FTP/cPanel
1. Build: `npm run build`
2. Connect to hosting via FTP
3. Upload contents of `dist` folder to `public_html`
4. Ensure `.htaccess` is uploaded (may be hidden)

### Method 3: Git-Based Deployment
1. Push code to GitHub/GitLab
2. Connect repository to Netlify/Vercel
3. Configure build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`
4. Deploy automatically on push

---

## Build Performance

Typical build times:
- **First build**: 30-60 seconds
- **Subsequent builds**: 20-40 seconds
- **File size**: ~500KB-1MB (gzipped)

---

## Build Script Details

From `package.json`:

```json
{
  "scripts": {
    "build": "vite build"
  }
}
```

This runs Vite's production build process with all optimizations enabled.

---

## Advanced: Custom Build Options

### Build with Source Maps
Edit `vite.config.ts`:
```typescript
build: {
  sourcemap: true, // Generate source maps
}
```

### Build for Different Environment
```bash
npm run build -- --mode staging
```

### Analyze Bundle Size
Install bundle analyzer:
```bash
npm install -D rollup-plugin-visualizer
```

---

## Post-Build Steps

After successful build:

1. ✅ Verify dist folder contents
2. ✅ Test locally with `npx serve dist`
3. ✅ Check all pages load correctly
4. ✅ Test forms and interactive elements
5. ✅ Verify images load
6. ✅ Check mobile responsiveness
7. ✅ Upload to hosting
8. ✅ Test live site
9. ✅ Submit sitemap to search engines

---

## Continuous Deployment

For automatic deployments on code changes:

### Netlify
1. Connect GitHub repository
2. Set build command: `npm run build`
3. Set publish directory: `dist`
4. Push to main branch → auto-deploy

### Vercel
1. Import GitHub repository
2. Configure build settings
3. Deploy on every push

---

## Build Caching

To speed up builds on CI/CD:

- Cache `node_modules` folder
- Cache `.vite` cache directory
- Use lockfiles for consistent installs

---

## Final Notes

Your build is production-ready with:
- ✅ Code splitting
- ✅ Minification
- ✅ Tree shaking
- ✅ Asset optimization
- ✅ Browser caching headers
- ✅ SEO optimizations
- ✅ Performance optimizations

**Simply run `npm run build` and upload the `dist` folder!**

---

For deployment instructions, see:
- **QUICK-START.md** - Fast deployment
- **EXPORT-INSTRUCTIONS.md** - Complete deployment guide
- **DEPLOYMENT-CHECKLIST.md** - Pre-launch checklist
