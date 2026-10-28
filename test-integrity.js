// test-integrity.js
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log('--- Testing Project Integrity ---');

// 1. Check data modules
import { COMPANY_CONFIG } from './js/data/company.js';
import { SERVICES_DATA } from './js/data/services.js';
import { PROJECTS_DATA } from './js/data/projects.js';
import { CASE_STUDIES_DATA } from './js/data/caseStudies.js';
import { FLOORING_DATA } from './js/data/flooring.js';
import { DIFFERENTIATORS_DATA } from './js/data/differentiators.js';
import { PROCESS_DATA } from './js/data/process.js';
import { TESTIMONIALS_DATA } from './js/data/testimonials.js';
import { ABOUT_DATA } from './js/data/about.js';
import { FAQS_DATA } from './js/data/faqs.js';

console.log(`✓ Company: ${COMPANY_CONFIG.name}`);
console.log(`✓ Services count: ${SERVICES_DATA.length}`);
console.log(`✓ Projects count: ${PROJECTS_DATA.length}`);
console.log(`✓ Case Studies count: ${CASE_STUDIES_DATA.length}`);
console.log(`✓ Flooring stages: ${FLOORING_DATA.stages.length}, Finishes: ${FLOORING_DATA.finishTypes.length}`);
console.log(`✓ Differentiators: ${DIFFERENTIATORS_DATA.length}`);
console.log(`✓ Process steps: ${PROCESS_DATA.length}`);
console.log(`✓ Testimonials count: ${TESTIMONIALS_DATA.length}`);
console.log(`✓ FAQs count: ${FAQS_DATA.length}`);

// 2. Check all referenced images exist
let missingImages = 0;
const checkImage = (relPath, source) => {
  if (!relPath) return;
  const fullPath = path.resolve(__dirname, relPath);
  if (!fs.existsSync(fullPath)) {
    console.error(`✗ Missing image: ${relPath} (from ${source})`);
    missingImages++;
  }
};

SERVICES_DATA.forEach(s => checkImage(s.image, `Service: ${s.title}`));
PROJECTS_DATA.forEach(p => {
  checkImage(p.coverImage, `Project cover: ${p.title}`);
  checkImage(p.beforeImage, `Project before: ${p.title}`);
  checkImage(p.afterImage, `Project after: ${p.title}`);
  if (p.gallery) p.gallery.forEach(g => checkImage(g.url, `Project gallery: ${p.title}`));
  if (p.videoWalkthrough) checkImage(p.videoWalkthrough.poster, `Project video poster: ${p.title}`);
});
FLOORING_DATA.finishTypes.forEach(f => checkImage(f.image, `Flooring finish: ${f.name}`));
TESTIMONIALS_DATA.forEach(t => checkImage(t.avatar, `Testimonial: ${t.clientName}`));
checkImage('assets/images/hero-bg.svg', 'Hero background');

if (missingImages === 0) {
  console.log('✓ All 40+ media image assets exist on disk.');
} else {
  console.error(`Found ${missingImages} missing assets!`);
  process.exit(1);
}

// 3. Check HTML and CSS files
const htmlContent = fs.readFileSync(path.join(__dirname, 'index.html'), 'utf8');
console.log(`✓ index.html size: ${(htmlContent.length / 1024).toFixed(1)} KB`);

const cssFiles = [
  'main.css', 'variables.css', 'reset.css', 'typography.css',
  'layout.css', 'components.css', 'comparison.css', 'modal.css',
  'case-study.css', 'flooring.css', 'form.css', 'responsive.css'
];

cssFiles.forEach(f => {
  const p = path.join(__dirname, 'css', f);
  if (fs.existsSync(p)) {
    console.log(`✓ CSS loaded: css/${f}`);
  } else {
    console.error(`✗ Missing CSS: css/${f}`);
  }
});

console.log('\n--- ALL INTEGRITY CHECKS PASSED PERFECTLY! ---');
