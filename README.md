# Lumicentric Interiors — Luxury Turnkey Interior Design & Epoxy Flooring

A luxury, high-conversion single-page portfolio landing page designed and engineered for **Lumicentric Interiors** based in **Mumbai, Maharashtra, India**.

![Lumicentric Preview](assets/images/hero-main.jpg)

---

## 🌟 Architecture & Features

- **Turnkey Interior Architecture**: Modular kitchens, living rooms, bedroom transformations, commercial workspaces, and specialized epoxy resin flooring.
- **Strict Single-Page Portfolio**: Smooth interactive scroll-spy navigation, dynamic sticky header with brand logo, and zero layout shift.
- **Interactive Before-and-After Split Slider**: Hardware-accelerated GPU `clip-path` image comparison with touch swipe, mouse drag, and keyboard navigation.
- **Project Detail Case Study Dialog**: Accessible modal dialog (`role="dialog"`, `aria-modal="true"`) with deep specs, image carousels, client reviews, and direct consultation CTA.
- **Fully Responsive & Zero Overflow**: Tested and optimized across 320px–1920px viewports (iPhone SE, iPhone 14/15/16, Android, iPads, Desktop).
- **Direct Lead Conversion**: Instant WhatsApp link generator, direct phone dialer, interactive inquiry form with validation, and mobile sticky conversion dock.
- **Production Performance**: Zero external heavy libraries, pure semantic HTML5, Vanilla CSS3, and modern modular ES6 JavaScript.

---

## 📁 Repository Structure

```
interior-design-portfolio/
├── index.html                   # Master single-page HTML5 semantic structure
├── vercel.json                  # Vercel deployment, caching & security configuration
├── package.json                 # Project metadata & npm deployment scripts
├── .gitignore                   # Ignored files for clean Git tracking
├── server.js                    # Zero-dependency local Node.js static server
├── serve.ps1                    # Native Windows PowerShell local server
├── README.md                    # Project documentation & deployment guide
├── css/
│   ├── main.css                 # Master stylesheet importing modular sheets
│   ├── variables.css            # Luxury warm cream & charcoal architectural tokens
│   ├── reset.css                # Base reset & full-width overflow protection
│   ├── typography.css           # Editorial Playfair Display & Plus Jakarta Sans
│   ├── layout.css               # Header, container, sections, and brand logo styles
│   ├── hero.css                 # Desktop hero composition & trust logo bar
│   ├── components.css           # Buttons, cards, process roadmap, testimonials, dock
│   ├── comparison.css          # Split before-and-after slider with clip-path
│   ├── modal.css                # Accessible project modal & drawer styles
│   ├── case-study.css           # Case study spotlight architecture
│   ├── flooring.css             # Epoxy stages & technical specifications
│   ├── form.css                 # Contact form & feedback styles
│   └── responsive.css           # Mobile & tablet luxury responsive overhauls
├── js/
│   ├── app.js                   # Main application bootstrap & hydration
│   ├── data/
│   │   ├── company.js           # Studio address, phone, WhatsApp, Mumbai locations, socials
│   │   ├── services.js          # Turnkey interior services & deliverables
│   │   ├── projects.js          # Featured Mumbai projects & galleries
│   │   ├── caseStudies.js       # In-depth residential transformation case studies
│   │   ├── process.js           # 6-stage execution roadmap
│   │   └── testimonials.js      # Verified Mumbai homeowner reviews
│   └── components/
│       ├── navigation.js        # Sticky header, scroll-spy, and mobile drawer
│       ├── comparisonSlider.js  # Touch & keyboard before-and-after slider
│       ├── portfolio.js         # Category filtering and project cards
│       ├── projectModal.js      # Accessible dialog & specification tables
│       ├── enquiryForm.js       # Contact validation & WhatsApp integration
│       └── analytics.js         # Privacy-friendly client interaction logging
└── assets/
    └── images/                  # High-resolution architectural photography & logos
```

---

## 🚀 How to Deploy to Vercel (Step-by-Step)

### Option 1: Deploy via GitHub (Recommended)

1. **Create a GitHub Repository**:
   - Go to [GitHub.com](https://github.com/new) and click **New Repository**.
   - Name it `lumicentric-portfolio` (or your choice). Set it to **Public** or **Private**.
   - Do **NOT** initialize with a README (this repository already has everything).

2. **Push Your Files to GitHub**:
   - **Using Git CLI** (in this project folder):
     ```bash
     git init
     git add .
     git commit -m "Initial commit: Lumicentric Interiors Portfolio"
     git branch -M main
     git remote add origin https://github.com/<YOUR-USERNAME>/lumicentric-portfolio.git
     git push -u origin main
     ```
   - **OR Using GitHub Desktop**:
     - Open GitHub Desktop > **File** > **Add Local Repository** > select this folder.
     - Click **Publish repository** to GitHub.
   - **OR Using VS Code**:
     - Open this folder in VS Code.
     - Go to Source Control tab (left sidebar) > Click **Publish to GitHub**.

3. **Deploy on Vercel**:
   - Go to [Vercel.com](https://vercel.com) and log in.
   - Click **Add New...** > **Project**.
   - Select your `lumicentric-portfolio` repository and click **Import**.
   - **Framework Preset**: Select **Other** (or leave as auto-detected).
   - **Root Directory**: `./` (leave default).
   - Click **Deploy**!
   - In less than 30 seconds, Vercel will give you a live production URL (e.g. `https://lumicentric-portfolio.vercel.app`) with free SSL, global CDN, and automated preview deployments on every push.

---

### Option 2: Deploy directly with Vercel CLI (No GitHub needed)

If you have Node.js installed on your machine:
```bash
# 1. Install Vercel CLI globally
npm i -g vercel

# 2. Deploy directly from this directory
vercel
```
Follow the interactive prompt (press Enter for all defaults), and your website will be live instantly!

---

## 💻 Local Development

To run and preview the site locally on Windows:
```powershell
powershell -ExecutionPolicy Bypass -File serve.ps1
```
Then visit **`http://localhost:3000`** in your browser.

Or with Node.js:
```bash
node server.js
```

---

## 📞 Business & Contact Info

- **Studio**: Lumicentric Interiors
- **Phone**: +91 70390 71998
- **Email**: lumicentricinterior@gmail.com
- **Instagram**: [https://www.instagram.com/aara.vsarkar/?hl=en](https://www.instagram.com/aara.vsarkar/?hl=en)
- **Facebook**: [https://www.facebook.com/profile.php?id=61595443570028](https://www.facebook.com/profile.php?id=61595443570028)
- **Base**: Bandra West, Mumbai, Maharashtra 400050

---

© 2026 Lumicentric Interiors. All rights reserved.
