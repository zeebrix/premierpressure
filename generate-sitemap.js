import fs from 'fs';
import path from 'path';

// Read the routes.tsx file
const routesFile = fs.readFileSync(path.join(process.cwd(), 'src/app/routes.tsx'), 'utf-8');

// Regex to find all `path: 'some-path'` strings
const pathRegex = /path:\s*['"]([^'"]+)['"]/g;
const paths = new Set();
// Always add root
paths.add('/');

let match;
while ((match = pathRegex.exec(routesFile)) !== null) {
  let routePath = match[1];
  
  // Skip wildcard or parameterized routes if any existed
  if (routePath.includes('*') || routePath.includes(':') || routePath === '/') continue;
  
  // Clean up
  routePath = routePath.startsWith('/') ? routePath : '/' + routePath;
  paths.add(routePath);
}

const baseUrl = 'https://www.premierpressuresolutions.com.au';
const currentDate = new Date().toISOString().split('T')[0];

let sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
`;

Array.from(paths).sort().forEach(route => {
  const priority = route === '/' ? '1.0' : route.includes('services') ? '0.9' : route.includes('perth') ? '0.7' : '0.8';
  const lastmod = currentDate;
  
  sitemapXml += `  <url>
    <loc>${baseUrl}${route === '/' ? '' : route}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${priority}</priority>
  </url>
`;
});

sitemapXml += `</urlset>`;

// Write the files to the public directory
const publicDir = path.join(process.cwd(), 'public');
if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir);
}

fs.writeFileSync(path.join(publicDir, 'sitemap.xml'), sitemapXml);
console.log('Generated public/sitemap.xml');

// Copy for index and wp-sitemap to satisfy basic SEO bots looking for exact filenames
fs.writeFileSync(path.join(publicDir, 'sitemap_index.xml'), sitemapXml);
console.log('Generated public/sitemap_index.xml');

fs.writeFileSync(path.join(publicDir, 'wp-sitemap.xml'), sitemapXml);
console.log('Generated public/wp-sitemap.xml');

// --- Generate HTML Sitemap ---
let sitemapHtml = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Sitemap - Premier Pressure Solutions</title>
  <style>
    body { font-family: system-ui, -apple-system, sans-serif; line-height: 1.6; color: #333; max-width: 800px; margin: 40px auto; padding: 20px; }
    h1 { color: #1e3a8a; border-bottom: 2px solid #e5e7eb; padding-bottom: 10px; }
    ul { list-style-type: none; padding-left: 0; }
    li { margin-bottom: 8px; }
    a { color: #2563eb; text-decoration: none; }
    a:hover { text-decoration: underline; }
    .section { margin-top: 30px; }
  </style>
</head>
<body>
  <h1>Website Sitemap</h1>
  <p>Overview of all pages on Premier Pressure Solutions.</p>
  <div class="section">
    <ul>
`;

Array.from(paths).sort().forEach(route => {
  let name = route === '/' ? 'Home Page' : route.replace(/\//g, ' ').trim();
  // Capitalize first letter of each word
  name = name.split('-').join(' ').replace(/\\b\\w/g, c => c.toUpperCase());
  
  sitemapHtml += `      <li><a href="${baseUrl}${route === '/' ? '' : route}">${name}</a></li>\n`;
});

sitemapHtml += `    </ul>
  </div>
</body>
</html>`;

fs.writeFileSync(path.join(publicDir, 'sitemap.html'), sitemapHtml);
console.log('Generated public/sitemap.html');

// Write a robots.txt while we're at it
const robotsTxt = `User-agent: *
Allow: /

Sitemap: ${baseUrl}/sitemap.xml
`;
fs.writeFileSync(path.join(publicDir, 'robots.txt'), robotsTxt);
console.log('Generated public/robots.txt');
