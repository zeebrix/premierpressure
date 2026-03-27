# 🚀 Quick Start - Deploy in 5 Minutes!

## Premier Pressure Solutions WA - Fast Deployment Guide

Follow these simple steps to get your website live FAST!

---

## 🎯 Option 1: Deploy to Netlify (EASIEST - Recommended)

### Step 1: Build Your Site
```bash
npm run build
```

### Step 2: Deploy to Netlify
1. Go to [netlify.com](https://netlify.com) and sign up (free)
2. Click "Add new site" → "Deploy manually"
3. **Drag and drop** your `dist` folder onto Netlify
4. Wait 30 seconds... **Done!** Your site is live! 🎉

### Step 3: Add Custom Domain (Optional)
1. In Netlify dashboard, click "Domain settings"
2. Click "Add custom domain"
3. Enter: `premierpressuresolutionswa.com.au`
4. Follow DNS instructions
5. SSL certificate auto-installed ✅

### Step 4: Set Environment Variables
1. In Netlify: Site settings → Environment variables
2. Add these variables:
   - `VITE_SUPABASE_URL` = your_supabase_url
   - `VITE_SUPABASE_ANON_KEY` = your_supabase_key
3. Redeploy site

**✅ YOU'RE LIVE!**

---

## 🎯 Option 2: Deploy to Vercel (ALSO EASY)

### Step 1: Build Your Site
```bash
npm run build
```

### Step 2: Deploy to Vercel
1. Go to [vercel.com](https://vercel.com) and sign up (free)
2. Click "Add New Project"
3. Import your code OR drag `dist` folder
4. Click "Deploy"
5. **Done!** Live in 60 seconds! 🎉

### Step 3: Configure
1. Add custom domain in Vercel settings
2. Add environment variables (same as Netlify)
3. SSL auto-configured ✅

**✅ YOU'RE LIVE!**

---

## 🎯 Option 3: Traditional Hosting (cPanel/FTP)

### Step 1: Build Your Site
```bash
npm run build
```

### Step 2: Upload to Hosting
1. Connect via FTP or cPanel File Manager
2. Upload **entire contents** of `dist` folder to `public_html`
3. Ensure `.htaccess` file is uploaded (may be hidden)

### Step 3: Verify
1. Visit your domain
2. Test navigation (should work on all pages)
3. Test forms

**✅ YOU'RE LIVE!**

---

## ⚡ Troubleshooting

### "404 Not Found" on suburb pages
**Fix**: Add redirect rules
- **Netlify**: Already configured in `netlify.toml`
- **Vercel**: Already configured in `vercel.json`
- **cPanel**: Ensure `.htaccess` is uploaded to root

### Images don't load
**Fix**: Check Supabase configuration
1. Verify bucket `make-bb20e683-images` exists
2. Check bucket is set to public
3. Verify environment variables are correct

### Forms don't work
**Fix**: Set environment variables
1. Add `VITE_SUPABASE_URL` 
2. Add `VITE_SUPABASE_ANON_KEY`
3. Verify Supabase Edge Function is deployed

---

## 📋 Pre-Deployment Checklist (2 Minutes)

Quick checks before going live:

- [ ] `npm run build` completes without errors
- [ ] `dist` folder created successfully
- [ ] Test one suburb page locally
- [ ] Phone number correct: 0452 579 657
- [ ] Email correct: contact@premierpressuresolutionswa.com.au

---

## 🎉 That's It!

Your website is now live and ready to accept customers!

### What Happens Next?

1. **Monitor quote requests** - Check your email/database
2. **Submit to Google** - Add site to Google Search Console
3. **Share your site** - Update business listings
4. **Track performance** - Monitor with analytics

---

## 📞 Need Help?

**Common Questions:**

**Q: How do I update content?**
A: Edit the relevant file in `/src/app/`, rebuild (`npm run build`), and re-upload `dist` folder.

**Q: How do I add a new suburb page?**
A: Copy an existing suburb file, update the content, add route in `routes.tsx`, rebuild.

**Q: Can I add a blog?**
A: Yes! You'll need to create blog pages and routes (requires some React knowledge).

**Q: How do I change colors?**
A: Edit `/src/styles/theme.css` to change design tokens.

---

## 🚀 Ready to Launch?

**Run this command now:**
```bash
npm run build
```

Then choose your deployment method above and **GO LIVE!** 🎊

---

## 📚 More Information

- Full deployment guide: See `EXPORT-INSTRUCTIONS.md`
- Complete checklist: See `DEPLOYMENT-CHECKLIST.md`
- Website structure: See `WEBSITE-STRUCTURE.md`

---

**Good luck with your launch!** 🍾

Your Premier Pressure Solutions WA website is professional, SEO-optimized, and ready to generate leads!
