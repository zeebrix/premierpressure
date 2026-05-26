// Extracts suburb metadata from each .tsx file in src/app/pages/suburbs/
// and writes a TypeScript data module to src/data/suburbs.ts.
import { readdirSync, readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { join, basename } from 'node:path';

const SUBURB_DIR = 'D:/Upwork/premierpressure/src/app/pages/suburbs';
const OUTPUT = 'D:/Upwork/premierpressure/src/data/suburbs.ts';

const files = readdirSync(SUBURB_DIR).filter((f) => f.endsWith('.tsx'));

const failed = [];
const suburbs = [];

function findAttr(jsxBlock, attrName) {
  // Match attrName="...value..." possibly across newlines.
  // The value may contain escaped quotes \" or apostrophes.
  const re = new RegExp(`\\b${attrName}\\s*=\\s*"((?:[^"\\\\]|\\\\.)*)"`, 's');
  const m = jsxBlock.match(re);
  return m ? m[1] : null;
}

for (const file of files) {
  const slug = basename(file, '.tsx');
  const path = join(SUBURB_DIR, file);
  const src = readFileSync(path, 'utf8');

  const issues = [];

  // Component name from default export
  const exportMatch = src.match(/export\s+default\s+function\s+([A-Za-z0-9_]+)/);
  const componentName = exportMatch ? exportMatch[1] : null;

  // Title from Helmet
  const titleMatch = src.match(/<title>([\s\S]*?)<\/title>/);
  const title = titleMatch ? titleMatch[1].trim() : null;
  if (!title) issues.push('title');

  // Description from <meta name="description" content="...">
  // Use a relaxed pattern: name="description" then later content="..."
  const descMatch = src.match(
    /<meta[^>]*name\s*=\s*"description"[^>]*content\s*=\s*"((?:[^"\\]|\\.)*)"/s,
  );
  const description = descMatch ? descMatch[1] : null;
  if (description == null) issues.push('description');

  // SuburbHero block (could span multiple lines, ends at /> or >)
  const heroMatch = src.match(/<SuburbHero\b[\s\S]*?\/>/);
  const heroBlock = heroMatch ? heroMatch[0] : '';
  const suburbName = findAttr(heroBlock, 'suburbName');
  const heroTagline = findAttr(heroBlock, 'tagline');
  const heroDescription = findAttr(heroBlock, 'description');

  if (heroTagline == null) issues.push('heroTagline');
  if (heroDescription == null) issues.push('heroDescription');

  // Decode the human-readable suburb name (prefer suburbName prop, fallback to component name spaced out)
  let name = suburbName;
  if (!name && componentName) {
    // Split CamelCase → spaced
    name = componentName.replace(/([a-z])([A-Z])/g, '$1 $2');
  }
  if (!name) issues.push('name');

  // useCombinedSchema: true if generateSuburbSchema(...) is called, else false
  const useCombinedSchema = /\bgenerateSuburbSchema\s*\(/.test(src);

  if (issues.length) {
    failed.push({ file, issues });
    continue;
  }

  suburbs.push({
    slug,
    name,
    title,
    description,
    heroTagline,
    heroDescription,
    useCombinedSchema,
  });
}

// Sort alphabetically by slug
suburbs.sort((a, b) => a.slug.localeCompare(b.slug));

// Render TS module. Use JSON.stringify for safe escaping of values, then
// inline the keys without quotes for cleaner output.
function tsObject(o) {
  const lines = [];
  lines.push('  {');
  for (const [k, v] of Object.entries(o)) {
    if (typeof v === 'string') {
      lines.push(`    ${k}: ${JSON.stringify(v)},`);
    } else {
      lines.push(`    ${k}: ${v},`);
    }
  }
  lines.push('  },');
  return lines.join('\n');
}

const header = `// AUTO-GENERATED — do not edit by hand.
// Source: src/app/pages/suburbs/*.tsx
// Regenerate with: node scripts/extract-suburbs.mjs

export type SuburbData = {
  slug: string;
  name: string;
  title: string;
  description: string;
  heroTagline: string;
  heroDescription: string;
  useCombinedSchema: boolean;
};

export const suburbs: SuburbData[] = [
`;

const body = suburbs.map(tsObject).join('\n');

const footer = `
];

export const suburbBySlug = new Map(suburbs.map((s) => [s.slug, s]));
`;

mkdirSync('D:/Upwork/premierpressure/src/data', { recursive: true });
writeFileSync(OUTPUT, header + body + footer, 'utf8');

console.log(`Processed: ${suburbs.length} suburbs`);
console.log(`Failed: ${failed.length}`);
if (failed.length) {
  for (const f of failed) {
    console.log(`  - ${f.file}: missing ${f.issues.join(', ')}`);
  }
}
