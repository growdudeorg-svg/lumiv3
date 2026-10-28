// generate-assets.js
// Generates beautiful, architectural SVG assets for the Anvaya portfolio landing page
import fs from 'fs';
import path from 'path';

const projectDir = path.dirname(process.argv[1] || '.');
const outDir = path.resolve(projectDir, 'assets/images');
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

function writeSvg(filename, content) {
  fs.writeFileSync(path.join(outDir, filename), content.trim(), 'utf8');
  console.log(`Generated: ${filename}`);
}

// 1. Hero Background SVG (Rich architectural penthouse panoramic rendering with warm cove light)
writeSvg('hero-bg.svg', `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 1080" width="100%" height="100%">
  <defs>
    <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#141417"/>
      <stop offset="45%" stop-color="#1b1c20"/>
      <stop offset="100%" stop-color="#121214"/>
    </linearGradient>
    <linearGradient id="warmLight" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#c99763" stop-opacity="0.35"/>
      <stop offset="60%" stop-color="#c99763" stop-opacity="0.08"/>
      <stop offset="100%" stop-color="#c99763" stop-opacity="0"/>
    </linearGradient>
    <linearGradient id="woodPanel" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#2a221b"/>
      <stop offset="25%" stop-color="#3d3025"/>
      <stop offset="50%" stop-color="#32281f"/>
      <stop offset="75%" stop-color="#413429"/>
      <stop offset="100%" stop-color="#2c241c"/>
    </linearGradient>
    <linearGradient id="stoneFloor" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#222327"/>
      <stop offset="40%" stop-color="#1c1d21"/>
      <stop offset="100%" stop-color="#151619"/>
    </linearGradient>
    <radialGradient id="sunGlow" cx="70%" cy="35%" r="50%">
      <stop offset="0%" stop-color="#e2ab76" stop-opacity="0.25"/>
      <stop offset="40%" stop-color="#c99763" stop-opacity="0.08"/>
      <stop offset="100%" stop-color="#141417" stop-opacity="0"/>
    </radialGradient>
  </defs>

  <rect width="1920" height="1080" fill="url(#bgGrad)"/>
  
  <!-- Ambient Architectural Light Glow -->
  <rect width="1920" height="1080" fill="url(#sunGlow)"/>

  <!-- Architectural Ceiling Beam & Recessed Cove -->
  <polygon points="0,0 1920,0 1920,180 0,220" fill="#18191c"/>
  <rect x="180" y="160" width="1560" height="8" fill="#e8b87d" opacity="0.6" filter="blur(2px)"/>
  <polygon points="180,168 1740,168 1840,420 80,420" fill="url(#warmLight)"/>

  <!-- High-Rise Window Framing overlooking Pune Skyline -->
  <g opacity="0.45">
    <rect x="1100" y="220" width="740" height="520" fill="#161a22" stroke="#2c3038" stroke-width="4"/>
    <line x1="1470" y1="220" x2="1470" y2="740" stroke="#2c3038" stroke-width="6"/>
    <line x1="1100" y1="480" x2="1840" y2="480" stroke="#2c3038" stroke-width="4"/>
    <!-- Subtle City Horizon silhouettes -->
    <path d="M 1120 620 L 1160 590 L 1200 620 L 1250 560 L 1310 620 L 1380 540 L 1440 620 L 1520 580 L 1600 620 L 1690 530 L 1750 620 L 1830 570" fill="none" stroke="#353b47" stroke-width="2"/>
    <circle cx="1680" cy="340" r="45" fill="#f4ebd9" opacity="0.15"/>
  </g>

  <!-- Left Fluted Wood Cladding Feature Wall -->
  <rect x="0" y="220" width="460" height="860" fill="url(#woodPanel)"/>
  <g opacity="0.25">
    ${Array.from({ length: 28 }, (_, i) => `<line x1="${i * 16 + 10}" y1="220" x2="${i * 16 + 10}" y2="1080" stroke="#000" stroke-width="3"/>
    <line x1="${i * 16 + 14}" y1="220" x2="${i * 16 + 14}" y2="1080" stroke="#5a4738" stroke-width="2"/>`).join('\n')}
  </g>

  <!-- Polished Architectural Stone Floor with Reflections -->
  <polygon points="0,720 1920,680 1920,1080 0,1080" fill="url(#stoneFloor)"/>
  <line x1="0" y1="720" x2="1920" y2="680" stroke="#333740" stroke-width="2"/>
  <line x1="680" y1="705" x2="420" y2="1080" stroke="#24262c" stroke-width="1.5"/>
  <line x1="1280" y1="695" x2="1480" y2="1080" stroke="#24262c" stroke-width="1.5"/>

  <!-- Sleek Minimalist Low-Profile Sectional Sofa Silhouette -->
  <path d="M 380 780 C 440 760, 880 750, 960 760 C 1000 765, 1020 810, 1010 860 L 980 910 L 360 910 Z" fill="#2d2b29" stroke="#3d3a37" stroke-width="2"/>
  <rect x="360" y="830" width="620" height="70" rx="8" fill="#383532"/>
  <rect x="420" y="800" width="180" height="40" rx="4" fill="#44403c"/>
  <rect x="630" y="795" width="200" height="45" rx="4" fill="#44403c"/>

  <!-- Low Travertine Coffee Table with Warm Brass Reveal -->
  <polygon points="720,860 1140,845 1190,920 740,940" fill="#6d655d" opacity="0.95"/>
  <polygon points="740,940 1190,920 1190,940 740,960" fill="#3a342e"/>
  <line x1="740" y1="940" x2="1190" y2="920" stroke="#c99763" stroke-width="3"/>

  <!-- Slender Designer Floor Lamp & Warm Halo -->
  <line x1="1080" y1="520" x2="1140" y2="880" stroke="#c99763" stroke-width="3"/>
  <circle cx="1080" cy="520" r="16" fill="#e8b87d"/>
  <circle cx="1080" cy="520" r="60" fill="#e8b87d" opacity="0.12" filter="blur(8px)"/>

  <!-- Foreground Vignette Overlay -->
  <rect width="1920" height="1080" fill="black" opacity="0.32"/>
</svg>`);

// Helper to make project visual SVGs
function makeInteriorSvg(title, subtitle, colorScheme, isBefore = false) {
  const bg = isBefore ? '#23201d' : colorScheme.bg;
  const wall = isBefore ? '#2e2a25' : colorScheme.wall;
  const floor = isBefore ? '#1e1c19' : colorScheme.floor;
  const accent = isBefore ? '#6e6154' : colorScheme.accent;

  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 800" width="100%" height="100%">
    <defs>
      <linearGradient id="pGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="${bg}"/>
        <stop offset="100%" stop-color="#111114"/>
      </linearGradient>
      <linearGradient id="pAccent" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stop-color="${accent}"/>
        <stop offset="100%" stop-color="#e8c79a"/>
      </linearGradient>
    </defs>
    <rect width="1200" height="800" fill="url(#pGrad)"/>

    ${isBefore ? `
      <!-- Raw Brick / Distressed Substrate / Exposed Conduits for Before State -->
      <rect x="0" y="0" width="1200" height="520" fill="${wall}"/>
      <g opacity="0.18">
        ${Array.from({ length: 18 }, (_, row) => Array.from({ length: 14 }, (_, col) => 
          `<rect x="${col * 90 + (row % 2) * 45}" y="${row * 30}" width="82" height="24" fill="#8c4836" stroke="#1a1512" stroke-width="2"/>`
        ).join('')).join('')}
      </g>
      <!-- Dangling Wires & Raw Concrete Beam -->
      <rect x="0" y="0" width="1200" height="90" fill="#3a3733"/>
      <path d="M 240 90 Q 270 210 320 280" fill="none" stroke="#201e1c" stroke-width="4"/>
      <path d="M 680 90 Q 720 180 700 320" fill="none" stroke="#a33a2a" stroke-width="3"/>
      <path d="M 940 90 Q 970 190 990 260" fill="none" stroke="#222" stroke-width="4"/>
      <!-- Bare Concrete/Tile Floor with Paint Splatters -->
      <polygon points="0,520 1200,520 1200,800 0,800" fill="${floor}"/>
      <line x1="0" y1="520" x2="1200" y2="520" stroke="#111" stroke-width="3"/>
      <ellipse cx="480" cy="650" rx="90" ry="25" fill="#35312b" opacity="0.6"/>
      <ellipse cx="880" cy="710" rx="140" ry="35" fill="#302c26" opacity="0.7"/>
      <!-- Before Watermark Stamp -->
      <rect x="48" y="48" width="170" height="42" rx="4" fill="#a83232" opacity="0.92"/>
      <text x="64" y="75" fill="#ffffff" font-family="'Plus Jakarta Sans', sans-serif" font-weight="700" font-size="16" letter-spacing="2">BEFORE STATE</text>
    ` : `
      <!-- Completed High-End Architectural Space -->
      <rect x="0" y="0" width="1200" height="520" fill="${wall}"/>
      <!-- Fluted Timber Feature Wall or Stone Paneling -->
      <rect x="80" y="90" width="340" height="430" fill="#25211c" stroke="#3d352c" stroke-width="2"/>
      <g opacity="0.3">
        ${Array.from({ length: 20 }, (_, i) => `<line x1="${80 + i * 17}" y1="90" x2="${80 + i * 17}" y2="520" stroke="${accent}" stroke-width="2"/>`).join('')}
      </g>
      <!-- Indirect Ceiling Cove Light -->
      <rect x="80" y="70" width="1040" height="6" fill="#e8c79a" filter="blur(2px)"/>
      <polygon points="80,76 1120,76 1180,280 40,280" fill="url(#pAccent)" opacity="0.12"/>
      
      <!-- Architectural Large Format Glazing / Window with Pune Valley Daylight -->
      <rect x="520" y="90" width="600" height="430" fill="#171920" stroke="#2d313c" stroke-width="4"/>
      <line x1="820" y1="90" x2="820" y2="520" stroke="#2d313c" stroke-width="5"/>
      <circle cx="1000" cy="200" r="35" fill="#e8c79a" opacity="0.25"/>

      <!-- Polished Seamless Floor -->
      <polygon points="0,520 1200,520 1200,800 0,800" fill="${floor}"/>
      <line x1="0" y1="520" x2="1200" y2="520" stroke="${accent}" stroke-width="1.5" opacity="0.6"/>

      <!-- Bespoke Artisan Furniture Silhouette -->
      <rect x="220" y="580" width="540" height="110" rx="10" fill="#322f2c" stroke="#46423d" stroke-width="2"/>
      <rect x="260" y="550" width="220" height="50" rx="6" fill="#3f3b37"/>
      <rect x="510" y="550" width="220" height="50" rx="6" fill="#3f3b37"/>
      <!-- Travertine Low Plinth Table -->
      <polygon points="560,670 940,650 990,730 600,750" fill="#6d655d"/>
      <line x1="600" y1="750" x2="990" y2="730" stroke="${accent}" stroke-width="3"/>

      <!-- Completed Architectural Stamp -->
      <rect x="48" y="48" width="180" height="42" rx="4" fill="#2d5236" opacity="0.95"/>
      <text x="64" y="75" fill="#ffffff" font-family="'Plus Jakarta Sans', sans-serif" font-weight="700" font-size="16" letter-spacing="2">COMPLETED</text>
    `}

    <!-- Project Label Plate -->
    <rect x="48" y="690" width="1104" height="64" rx="6" fill="#141416" fill-opacity="0.88" stroke="#333" stroke-width="1"/>
    <text x="76" y="730" fill="#f5f0ea" font-family="'Playfair Display', serif" font-weight="600" font-size="22">${title}</text>
    <text x="76" y="746" fill="#a39d94" font-family="'Plus Jakarta Sans', sans-serif" font-weight="500" font-size="13">${subtitle}</text>
  </svg>`;
}

// Generate Project SVGs
const projectsConfig = [
  { prefix: 'project-amanora', title: 'The Amanora Sky Villa', sub: 'Hadapsar, Pune • 3,200 Sq.Ft Penthouse', colors: { bg: '#171618', wall: '#272528', floor: '#1e1d21', accent: '#c99763' } },
  { prefix: 'project-rohan', title: 'The Earth & Oak Residence', sub: 'Rohan Madhuban, Bavdhan, Pune • 2,150 Sq.Ft', colors: { bg: '#1c1b18', wall: '#2a2822', floor: '#211f1a', accent: '#bfa272' } },
  { prefix: 'project-kitchen', title: 'The Monolith German Modular Kitchen', sub: 'Pristine Prolife, Wakad, Pune • 340 Sq.Ft', colors: { bg: '#141618', wall: '#22252a', floor: '#181b20', accent: '#62979e' } },
  { prefix: 'project-epoxy', title: 'Metallic Obsidian Seamless Epoxy Loft', sub: 'Koregaon Park, Pune • 1,850 Sq.Ft Resin Surface', colors: { bg: '#121315', wall: '#1c1e22', floor: '#15171b', accent: '#8a99a8' } },
  { prefix: 'project-wardrobe', title: 'Concealed Fluted Wardrobe Suite', sub: '24K Sereno, Balewadi, Pune • 480 Sq.Ft Dressing Lounge', colors: { bg: '#181615', wall: '#282422', floor: '#1d1a19', accent: '#c4956d' } },
  { prefix: 'project-panchshil', title: 'Travertine & Brushed Brass Residence', sub: 'Panchshil Towers, Kharadi, Pune • 2,850 Sq.Ft', colors: { bg: '#191816', wall: '#2b2723', floor: '#1f1c18', accent: '#d1aa75' } },
  { prefix: 'project-commercial', title: 'Boutique Legal Chambers', sub: 'ICC Trade Tower, SB Road, Pune • 1,600 Sq.Ft', colors: { bg: '#131518', wall: '#1f2329', floor: '#17191d', accent: '#6b8ca6' } },
  { prefix: 'project-terrazzo', title: 'Architectural Terrazzo-Flake Seamless Floor', sub: 'Baner Hill Estate, Baner, Pune • 2,200 Sq.Ft', colors: { bg: '#171816', wall: '#252724', floor: '#1c1e1a', accent: '#a1ab8e' } }
];

projectsConfig.forEach(p => {
  writeSvg(`${p.prefix}-main.svg`, makeInteriorSvg(p.title, p.sub, p.colors, false));
  writeSvg(`${p.prefix}-before.svg`, makeInteriorSvg(p.title + ' (Site Inception)', 'Raw Bare Shell Prior to Anvaya Execution', p.colors, true));
  writeSvg(`${p.prefix}-after.svg`, makeInteriorSvg(p.title + ' (Finished Handover)', 'Turnkey Delivered & Ready for Living', p.colors, false));
});

// Extra specialized views
writeSvg('project-amanora-dining.svg', makeInteriorSvg('Amanora Sky Villa: Dining Pavilion', 'Custom Brass Lighting & Travertine Credenza', { bg: '#161517', wall: '#262428', floor: '#1d1c20', accent: '#c99763' }, false));
writeSvg('project-amanora-kitchen.svg', makeInteriorSvg('Amanora Sky Villa: Gourmet Island', 'Caesarstone Calacatta Waterfall & Scullery', { bg: '#151517', wall: '#242327', floor: '#1b1b1e', accent: '#c99763' }, false));
writeSvg('project-amanora-bedroom.svg', makeInteriorSvg('Amanora Sky Villa: Master Suite', 'Acoustic Fabric Wall & Dressing Lounge', { bg: '#181719', wall: '#27252a', floor: '#1e1d21', accent: '#c99763' }, false));
writeSvg('project-rohan-dining.svg', makeInteriorSvg('Earth & Oak: Teak Dining Zone', 'Solid Wood Joinery with Rattan Cane Craftsmanship', { bg: '#1b1916', wall: '#282520', floor: '#1e1c18', accent: '#bfa272' }, false));
writeSvg('project-rohan-balcony.svg', makeInteriorSvg('Earth & Oak: Balcony Deck', 'Thermo-treated Ash Hardwood overlooking Bavdhan Valley', { bg: '#151815', wall: '#202720', floor: '#1a1f1a', accent: '#7ca878' }, false));
writeSvg('project-kitchen-pantry.svg', makeInteriorSvg('Wakad Kitchen: Blum Space Tower', 'Floor-to-Ceiling 120kg Payload Pantry Pull-Out', { bg: '#131518', wall: '#1f2329', floor: '#16191e', accent: '#62979e' }, false));
writeSvg('project-kitchen-hob.svg', makeInteriorSvg('Wakad Kitchen: Flush Induction & Gas Hub', 'Heavy Indian Cooking Zone with High-Draft Ventilation', { bg: '#131518', wall: '#21242a', floor: '#17191e', accent: '#62979e' }, false));
writeSvg('project-epoxy-macro.svg', makeInteriorSvg('Obsidian Epoxy: Macro Pearl Swirl', 'Three-Dimensional Pigment Flow Depth at 3mm Thickness', { bg: '#111214', wall: '#191b1e', floor: '#131518', accent: '#8a99a8' }, false));
writeSvg('project-epoxy-lounge.svg', makeInteriorSvg('Obsidian Epoxy: Creative Lounge View', 'Seamless Floor Integration with Exposed Warehouse Brickwork', { bg: '#151518', wall: '#222126', floor: '#18181c', accent: '#8a99a8' }, false));
writeSvg('project-wardrobe-open.svg', makeInteriorSvg('Balewadi Wardrobe: Interior Systems', 'Concealed LED Sensor Rails & Velvet Jewelry Organization', { bg: '#181514', wall: '#292320', floor: '#1d1918', accent: '#c4956d' }, false));
writeSvg('project-panchshil-balcony.svg', makeInteriorSvg('Panchshil Towers: Kharadi Skyline Deck', 'Panoramic Glass Balcony with Weatherproof Lounge Seating', { bg: '#171615', wall: '#262320', floor: '#1d1a18', accent: '#d1aa75' }, false));
writeSvg('project-commercial-boardroom.svg', makeInteriorSvg('Boutique Legal Chambers: Boardroom', 'Acoustic Double-Glazing & Integrated Concealed AV Hub', { bg: '#131518', wall: '#1e2228', floor: '#16191e', accent: '#6b8ca6' }, false));
writeSvg('project-terrazzo-detail.svg', makeInteriorSvg('Baner Terrazzo: Diamond-Honed Aggregate', 'Custom Basalt & Quartz Engineered Flake Matrix', { bg: '#161816', wall: '#232622', floor: '#1b1d19', accent: '#a1ab8e' }, false));

// Service Card SVGs
const servicesList = [
  { file: 'service-turnkey.svg', title: 'Complete Turnkey Home Interiors', icon: 'M 40 120 L 120 40 L 200 120 L 180 120 L 180 200 L 60 200 L 60 120 Z' },
  { file: 'service-kitchen.svg', title: 'Precision Modular Kitchens', icon: 'M 40 60 L 200 60 L 200 180 L 40 180 Z M 40 110 L 200 110 M 120 110 L 120 180' },
  { file: 'service-wardrobe.svg', title: 'Architectural Wardrobes & Storage', icon: 'M 50 40 L 190 40 L 190 200 L 50 200 Z M 120 40 L 120 200 M 105 120 L 105 140 M 135 120 L 135 140' },
  { file: 'service-epoxy.svg', title: 'Specialised Epoxy & Seamless Flooring', icon: 'M 30 150 L 120 60 L 210 150 L 120 200 Z M 60 140 L 120 90 L 180 140 L 120 175 Z' },
  { file: 'service-commercial.svg', title: 'Commercial & Executive Offices', icon: 'M 60 40 L 180 40 L 180 200 L 60 200 Z M 85 70 L 115 70 M 135 70 L 165 70 M 85 110 L 115 110 M 135 110 L 165 110 M 85 150 L 115 150 M 135 150 L 165 150' },
  { file: 'service-renovation.svg', title: 'Living Space Renovation & Reconfiguration', icon: 'M 50 160 L 120 50 L 190 160 Z M 80 160 L 80 120 L 160 120 L 160 160' }
];

servicesList.forEach(s => {
  writeSvg(s.file, `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 400" width="100%" height="100%">
    <defs>
      <linearGradient id="srvGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#1f2024"/>
        <stop offset="100%" stop-color="#121316"/>
      </linearGradient>
      <linearGradient id="goldAcc" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#c99763"/>
        <stop offset="100%" stop-color="#e8c79a"/>
      </linearGradient>
    </defs>
    <rect width="600" height="400" fill="url(#srvGrad)"/>
    <circle cx="480" cy="120" r="180" fill="#c99763" opacity="0.05" filter="blur(30px)"/>
    
    <!-- Architectural grid lines in background -->
    <line x1="60" y1="0" x2="60" y2="400" stroke="#2b2d35" stroke-width="1"/>
    <line x1="0" y1="320" x2="600" y2="320" stroke="#2b2d35" stroke-width="1"/>
    
    <!-- Icon Container -->
    <g transform="translate(60, 60)">
      <rect x="0" y="0" width="100" height="100" rx="12" fill="#292a30" stroke="#3b3d47" stroke-width="1.5"/>
      <path d="${s.icon}" fill="none" stroke="url(#goldAcc)" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" transform="translate(-10,-10) scale(0.5)"/>
    </g>

    <text x="60" y="220" fill="#f4ebd9" font-family="'Playfair Display', serif" font-weight="600" font-size="28">${s.title}</text>
    <text x="60" y="260" fill="#9ba1b0" font-family="'Plus Jakarta Sans', sans-serif" font-size="15">Verified In-House Architectural Scope • Pune &amp; PCMC</text>
    
    <g transform="translate(60, 345)">
      <circle cx="10" cy="10" r="4" fill="#c99763"/>
      <text x="24" y="14" fill="#c99763" font-family="'Plus Jakarta Sans', sans-serif" font-weight="600" font-size="13" letter-spacing="1">VIEW FULL CAPABILITY &amp; BOQ</text>
    </g>
  </svg>`);
});

// Flooring Finish SVGs
const flooringFinishes = [
  { file: 'flooring-metallic.svg', name: '3D Metallic Obsidian', desc: 'Satin & Deep Marbled Depth', color: '#32363d' },
  { file: 'flooring-microcement.svg', name: 'Seamless Japandi Microcement', desc: 'Tactile Ultra-Matte Warmth', color: '#4d483e' },
  { file: 'flooring-flake.svg', name: 'Polyaspartic Terrazzo Flake', desc: 'Granite & Basalt Aggregate Flakes', color: '#3a3e3b' },
  { file: 'flooring-solid.svg', name: 'Hygienic Solid Monolith Resin', desc: 'Zero-Grout Chemical Resistant Surface', color: '#2b2e38' }
];

flooringFinishes.forEach(f => {
  writeSvg(f.file, `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 350" width="100%" height="100%">
    <defs>
      <linearGradient id="flrGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="${f.color}"/>
        <stop offset="50%" stop-color="#1c1d22"/>
        <stop offset="100%" stop-color="#101114"/>
      </linearGradient>
    </defs>
    <rect width="500" height="350" fill="url(#flrGrad)"/>
    <ellipse cx="250" cy="175" rx="180" ry="90" fill="#c99763" opacity="0.12" filter="blur(20px)"/>
    
    <!-- Seamless surface swirls/dots pattern -->
    <path d="M 50 100 Q 150 40 280 120 T 450 150" fill="none" stroke="#ffffff" opacity="0.15" stroke-width="12" filter="blur(4px)"/>
    <path d="M 30 220 Q 200 280 340 180 T 480 240" fill="none" stroke="#c99763" opacity="0.2" stroke-width="8" filter="blur(2px)"/>
    
    <rect x="30" y="240" width="440" height="80" rx="8" fill="#141518" opacity="0.9" stroke="#333" stroke-width="1"/>
    <text x="50" y="275" fill="#f5f0ea" font-family="'Playfair Display', serif" font-weight="600" font-size="20">${f.name}</text>
    <text x="50" y="300" fill="#a09a8f" font-family="'Plus Jakarta Sans', sans-serif" font-size="13">${f.desc}</text>
  </svg>`);
});

// Client Avatars
for (let i = 1; i <= 5; i++) {
  writeSvg(`avatar-${i}.svg`, `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100%" height="100%">
    <circle cx="50" cy="50" r="48" fill="#25242b" stroke="#c99763" stroke-width="2"/>
    <circle cx="50" cy="40" r="18" fill="#58524a"/>
    <path d="M 22 84 C 24 64, 40 60, 50 60 C 60 60, 76 64, 78 84 Z" fill="#58524a"/>
    <text x="50" y="94" text-anchor="middle" fill="#c99763" font-family="'Plus Jakarta Sans', sans-serif" font-size="9" font-weight="700">PUNE CLIENT</text>
  </svg>`);
}

console.log('All SVG assets generated successfully!');
