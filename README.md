<p align="center">
  <img src="src/assets/hero.png" alt="Armory AI" width="120" />
</p>

<h1 align="center">Armory AI — Thread-Isolated Agent Orchestrations</h1>

<p align="center">
  <b>A premium, high-converting SaaS landing page for an AI-driven data automation platform.</b><br/>
  Built for <code>#hackthekitty 2026</code> — Phase 1 Speed Run
</p>

<p align="center">
  <img src="https://img.shields.io/badge/React-19.x-61DAFB?logo=react&logoColor=white" alt="React" />
  <img src="https://img.shields.io/badge/Vite-8.x-646CFF?logo=vite&logoColor=white" alt="Vite" />
  <img src="https://img.shields.io/badge/Three.js-r185-000000?logo=three.js&logoColor=white" alt="Three.js" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-4.x-06B6D4?logo=tailwindcss&logoColor=white" alt="Tailwind CSS" />
  <img src="https://img.shields.io/badge/Animations-Native_CSS-FF9932" alt="Native CSS Animations" />
  <img src="https://img.shields.io/badge/Deploy-GitHub_Pages-181717?logo=github&logoColor=white" alt="GitHub Pages" />
</p>

---

## 🔗 Links

| Resource | URL |
|---|---|
| **Live Site** | [https://kittyboy06.github.io/FB_R1](https://kittyboy06.github.io/FB_R1) |
| **Repository** | [github.com/kittyboy06/FB_R1](https://github.com/kittyboy06/FB_R1) |
| **Demo Video** | *(included in submission)* |

---

## 📸 Preview

<p align="center">
  <img src="src/assets/hero.png" alt="Armory AI Landing Page Preview" width="700" />
</p>

---

## 🎯 Problem Statement

> Build a **premium, responsive, high-converting landing page** for an AI automation platform in a **4-hour speed run**. Two technically demanding features, strict performance caps, zero banned dependencies, and a 100-point scoring matrix.

### Core Constraints
- ✅ Framework: **React + Vite**
- ✅ Styling: **Tailwind CSS v4** (utility CSS — permitted)
- ✅ 3D: **Three.js** (explicitly allowed)
- ✅ Animations: **Native CSS Transitions / WAAPI only** (no Framer Motion)
- ✅ State Management: **Vanilla JS singletons** (no global re-renders)
- ❌ No Shadcn, Radix, HeadlessUI, or pre-built UI component libraries
- ❌ No CSS-in-JS animation engines

---

## 🏗️ Architecture

```
src/
├── App.jsx                    # Root layout — semantic <main> with all sections
├── main.jsx                   # React 19 entry point
├── index.css                  # Global styles, CSS custom properties, Tailwind imports
│
├── config/
│   └── pricing.config.js      # Multi-dimensional pricing matrix (never hardcoded)
│
├── store/
│   ├── PricingStore.js         # Singleton — raw DOM text node mutations (zero re-renders)
│   └── bentoState.js           # Singleton — shared active index with pub/sub listeners
│
├── hooks/
│   └── useLayoutMode.js        # matchMedia resize watcher (mobile ↔ desktop)
│
├── components/
│   ├── Header.jsx              # <header> + <nav> — sticky navigation with CTA
│   ├── Hero.jsx                # Hero section with animated headline + CTA
│   ├── ThreeBg.jsx             # WebGL animated node background (Three.js)
│   ├── MetricsBar.jsx          # Live stats bar — agents running, latency, executions
│   ├── PlaygroundSection.jsx   # Interactive workflow demo / playground
│   ├── FeaturesSection.jsx     # Layout switcher: BentoGrid ↔ Accordion
│   ├── BentoGrid.jsx           # Desktop: hoverable bento card grid with SVG icons
│   ├── Accordion.jsx           # Mobile: touch-optimized accordion with context transfer
│   ├── HowItWorks.jsx          # Architecture / execution flow diagram
│   ├── QuickstartSection.jsx   # Terminal-style quickstart block
│   ├── PricingSection.jsx      # 3-tier pricing with currency switcher
│   ├── CurrencySwitcher.jsx    # Currency dropdown + billing toggle (no parent re-renders)
│   ├── PriceNode.jsx           # Mounts once, registers raw DOM text node
│   ├── ChangelogSection.jsx    # Recent activity / changelog feed
│   ├── SocialProof.jsx         # Trust logos + testimonials
│   ├── EmailCapture.jsx        # Email capture / newsletter signup
│   └── Footer.jsx              # Site footer with links
│
└── assets/                     # All provided SVG assets + images
    ├── arrow-path.svg
    ├── arrow-trending-up.svg
    ├── chart-pie.svg
    ├── chevron-down.svg
    ├── chevron-up.svg
    ├── cog-8-tooth.svg
    ├── cube-16-solid.svg
    ├── link-solid.svg
    ├── search.svg
    ├── x-mark.svg
    └── hero.png
```

---

## ⚙️ Feature 1 — Matrix-Driven Pricing & Currency Switcher

> **30 points** — Dynamic pricing + state isolation

### How It Works

**Pricing Matrix** (`pricing.config.js`):
```js
const PRICING_MATRIX = {
  tiers: {
    starter:    { base: 29 },
    pro:        { base: 79 },
    enterprise: { base: 199 }
  },
  currencies: {
    USD: { symbol: '$', tariff: 1.00 },
    INR: { symbol: '₹', tariff: 83.5 },
    EUR: { symbol: '€', tariff: 0.92 }
  },
  annualMultiplier: 0.8
}
```

**Formula:**
```
finalPrice = baseTierRate × currencyTariff × (isAnnual ? 0.8 : 1.0)
```

### State Isolation (Zero Re-renders)

The pricing system uses a **singleton store pattern** that operates entirely outside React's render cycle:

1. **`PricingStore.js`** — A vanilla JS class that maintains a `Map<tierName, DOMTextNode>`. When currency or billing changes, it directly mutates `textNode.textContent` — React never sees it.

2. **`PriceNode.jsx`** — Mounts once with an empty `useEffect([], [])`. Creates a raw `TextNode`, appends it to a `<span ref>`, and registers it with the store. **Never re-renders.**

3. **`CurrencySwitcher.jsx`** — Uses `useRef` (not `useState`) for currency and billing state. Calls `pricingStore.update()` directly. **No `setState`, no parent re-render.**

4. **WAAPI micro-animation** — On price change, a subtle `translateY + blur` animation (220ms, custom cubic-bezier) fires via the Web Animations API on the parent element.

> ✅ **Verified:** Changing currency or billing toggle updates only the targeted DOM text nodes. Zero component re-renders under Chrome DevTools Performance audit.

---

## 🔲 Feature 2 — Bento-to-Accordion with Context Transfer

> **10 points** — Responsive layout transition + zero external dependencies

### How It Works

| Viewport | Layout | Interaction |
|---|---|---|
| Desktop (≥768px) | **Bento Grid** — hoverable, interactive cards | `onMouseEnter` sets active index |
| Mobile (<768px) | **Accordion** — touch-optimized, collapsible panels | `onClick` toggles panels |

### The Context Transfer (The Hard Part)

If a user hovers over bento card #N on desktop and then resizes past the mobile breakpoint:

1. **`bentoState.js`** — A vanilla JS singleton with `get()`, `set()`, and `subscribe()`. Stores the active index outside React.
2. **`BentoGrid.jsx`** — `onMouseEnter` calls `bentoState.set(i)` to persist the hovered index.
3. **`Accordion.jsx`** — Reads the persisted index via `useState(bentoState.get())` **on mount** (not in `useEffect`). Panel #N opens instantly — no flicker, no extra tick.
4. **`useLayoutMode.js`** — Uses `window.matchMedia` to detect breakpoint changes and swap between layouts.

### CSS-Only Animations (No Framer Motion)
- **Bento hover:** `transform 150ms ease-out` ✅
- **Accordion expand:** `max-height 350ms ease-in-out` (using `overflow: hidden` + `max-height`, not `display: none`) ✅
- **Chevron rotation:** `transform 200ms ease-out` ✅

> ✅ **Zero banned dependencies.** All structures and transitions written from scratch.

---

## 🎨 Design System

### Color Palette

All 6 provided hex values are integrated:

| Name | Hex | CSS Variable | Usage |
|---|---|---|---|
| Arctic Powder | `#F1F6F4` | `--arctic-powder` | Light backgrounds, card fills, body text |
| Forsythia | `#FFC801` | `--forsythia` | Primary accent, CTA buttons, highlights |
| Nocturnal Expedition | `#114C5A` | `--nocturnal-expedition` | Dark sections, nav background |
| Mystic Mint | `#D9E8E2` | `--mystic-mint` | Subtle backgrounds, hover states |
| Deep Saffron | `#FF9932` | `--deep-saffron` | Secondary accent, highlights |
| Oceanic Noir | `#172B36` | `--oceanic-noir` | Main dark background |

### Typography

| Font | Variable | Usage |
|---|---|---|
| **JetBrains Mono** | `--font-heading` | Headers, code blocks, technical text |
| **Inter** | `--font-body` | Body copy, UI elements, descriptions |

Both loaded via Google Fonts with `preconnect` for optimal performance.

### SVG Asset Map

All provided SVGs are meaningfully integrated:

| SVG | Component | Purpose |
|---|---|---|
| `arrow-trending-up.svg` | MetricsBar / Hero | Growth metric indicators |
| `chart-pie.svg` | Features (Data Intelligence) | Data analytics feature card |
| `cog-8-tooth.svg` | Features (Custom Agents) | Configuration/settings feature card |
| `cube-16-solid.svg` | Features (Production Stack) / Favicon | Production-ready stack card |
| `link-solid.svg` | Features (Integrations) | API & integrations feature card |
| `search.svg` | Header / Features | Navigation search, data intelligence |
| `chevron-down.svg` | Accordion | Accordion toggle (collapsed state) |
| `chevron-up.svg` | Accordion / Scroll-to-top | Accordion toggle (expanded state) |
| `arrow-path.svg` | Features (Automation) | Process automation feature card |
| `x-mark.svg` | Modals / Error states | Close / dismiss actions |

---

## 🔍 SEO & Semantic HTML

### Meta Tags
- ✅ `<title>` — Descriptive, keyword-rich
- ✅ `<meta name="description">` — Compelling summary
- ✅ `<meta name="keywords">` — Relevant terms
- ✅ Open Graph tags — `og:title`, `og:description`, `og:image`, `og:url`, `og:type`, `og:site_name`
- ✅ `<meta name="viewport">` — Responsive viewport

### Semantic Structure
```html
<body>
  <header>
    <nav>...</nav>
  </header>
  <main>
    <section id="hero" aria-label="Hero">...</section>
    <section id="metrics" aria-label="Live Metrics">...</section>
    <section id="playground" aria-label="Interactive Playground">...</section>
    <section id="features" aria-label="Features">...</section>
    <section id="how-it-works" aria-label="How It Works">...</section>
    <section id="quickstart" aria-label="Quickstart">...</section>
    <section id="pricing" aria-label="Pricing">...</section>
    <section id="changelog" aria-label="Changelog">...</section>
    <section id="social-proof" aria-label="Testimonials">...</section>
    <section id="email-capture" aria-label="Newsletter">...</section>
  </main>
  <footer>...</footer>
</body>
```

> ✅ No div soup. All layout elements use proper semantic tags (`<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`).

---

## ⚡ Performance

| Metric | Target | Status |
|---|---|---|
| Entry animation orchestration | < 500ms | ✅ CSS `@keyframes` with `animation-delay` |
| Time to Interactive (TTI) | Not blocked | ✅ No `useEffect`-triggered animations |
| Micro-interactions | 150–200ms, `ease-out` | ✅ |
| Structural reflows | 300–400ms, `ease-in-out` | ✅ |
| Global re-renders on pricing change | 0 | ✅ Raw DOM mutations only |

### Animation Strategy
- **Entry animations:** CSS `@keyframes fadeUp` with staggered `animation-delay` — runs on the compositor thread, doesn't block TTI
- **Hover states:** Hardware-accelerated `transform` + `box-shadow` transitions
- **Price updates:** Web Animations API (WAAPI) for subtle `translateY` + `blur` micro-feedback
- **Accordion:** `max-height` transitions (not `display: none` — which is not animatable)

---

## 🧩 Sections Overview

| # | Section | Description |
|---|---|---|
| 1 | **Header** | Sticky nav with logo, navigation links, and CTA button |
| 2 | **Hero** | Animated headline, subtext, CTA — Three.js WebGL node background |
| 3 | **Metrics Bar** | Live stats: agents running, latency, daily executions |
| 4 | **Interactive Playground** | Read-only workflow demo with execution simulation |
| 5 | **Features** | Bento Grid (desktop) ↔ Accordion (mobile) with context transfer |
| 6 | **How It Works** | Architecture diagram showing the execution path |
| 7 | **Quickstart** | Terminal-style `npm install` → `deploy` block |
| 8 | **Pricing** | 3-tier matrix: Starter / Pro / Enterprise × 3 currencies |
| 9 | **Changelog** | Recent releases / activity feed |
| 10 | **Social Proof** | Trust logos + testimonial cards |
| 11 | **Email Capture** | Newsletter signup above footer |
| 12 | **Footer** | Site links, social links, copyright |

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** ≥ 18.x
- **npm** ≥ 9.x

### Installation

```bash
# Clone the repository
git clone https://github.com/kittyboy06/FB_R1.git
cd FB_R1

# Install dependencies
npm install
```

### Development

```bash
# Start the dev server with HMR
npm run dev
```

The app will be available at `http://localhost:5173`.

### Build & Preview

```bash
# Create production build
npm run build

# Preview the production build locally
npm run preview
```

### Lint

```bash
# Run oxlint
npm run lint
```

### Deploy to GitHub Pages

```bash
# Run the deployment script (builds + pushes to gh-pages branch)
.\deploy.bat
```

---

## 🛠️ Tech Stack

| Layer | Technology | Reason |
|---|---|---|
| **Framework** | React 19 + Vite 8 | Fastest setup, best control over DOM mutations |
| **Styling** | Tailwind CSS 4 | Utility-first, permitted, fastest for responsive layout |
| **3D Background** | Three.js r185 | Explicitly allowed, creates the Armory dark-grid aesthetic |
| **Fonts** | Google Fonts (CDN) | JetBrains Mono + Inter — preconnected |
| **Animations** | Native CSS + WAAPI | Required — no Framer Motion or CSS-in-JS engines |
| **State Isolation** | Vanilla JS singletons | Required for zero re-render pricing + bento context |
| **Linting** | Oxlint | Fast, zero-config Rust-based linter |
| **Deployment** | GitHub Pages | Public repo + live link via `gh-pages` branch |

---

## 📊 Scoring Matrix Alignment

| Category | Points | Implementation |
|---|---|---|
| **Feature 1 — Dynamic Pricing Matrix** | 15 | Multi-dimensional config object, dynamic computation, no hardcoded values |
| **Feature 1 — State Isolation** | 15 | `PricingStore` singleton → raw `textNode.textContent` mutations, zero re-renders |
| **Feature 2 — Bento-to-Accordion** | 10 | Responsive layout swap, `bentoState` singleton for context transfer, all CSS animations |
| **Semantic DOM Layout** | 15 | `<header>`, `<nav>`, `<main>`, `<section>`, `<footer>` — no div soup |
| **SEO Hygiene & Metadata** | 10 | Full meta tags, Open Graph, accessible attributes, crawlable text |
| **Loading Performance** | 5 | CSS `@keyframes` entry animations, < 500ms orchestration |
| **Asset Compliance & Polish** | 15 | All SVGs, fonts, and colors meaningfully integrated |
| **Breakpoint Fluidity** | 10 | Mobile, tablet, desktop — no clipping or overlapping |
| **Motion Accuracy** | 5 | 150–200ms micro-interactions, 300–400ms structural reflows |

---

## 📁 Project Structure

```
FB_R1/
├── index.html              # Entry HTML — SEO meta, OG tags, font preconnect
├── package.json            # Dependencies: React, Three.js, Tailwind, Vite
├── vite.config.js          # Vite configuration
├── tailwind.config.js      # Tailwind CSS configuration
├── postcss.config.js       # PostCSS configuration
├── deploy.bat              # GitHub Pages deployment script
├── .oxlintrc.json          # Oxlint configuration
│
├── public/
│   ├── favicon.svg         # Site favicon
│   └── icons.svg           # SVG sprite sheet
│
├── src/
│   ├── App.jsx             # Root component
│   ├── main.jsx            # React DOM entry
│   ├── index.css           # Global styles + CSS variables
│   ├── config/             # Configuration matrices
│   ├── store/              # Vanilla JS state singletons
│   ├── hooks/              # Custom React hooks
│   ├── components/         # All UI components (17 files)
│   └── assets/             # SVGs, images
│
├── Problem_Statement/      # Original hackathon brief & analysis
│   ├── FB_Round_1.md       # Official problem statement
│   ├── PS_Breakdown.md     # Detailed breakdown & implementation guide
│   ├── upgrades.md         # Feature & design improvement ideas
│   ├── colorPallet.md      # Color palette specification
│   └── fonts.md            # Typography specification
│
└── Assests/                # Original provided SVG assets
```

---

## 📝 License

Built for **#FrontEndBattle 2026** — Phase 1 Round.

---

<p align="center">
  <b>Armory AI</b> — Deploy custom enterprise agents. Automate complex workflows.<br/>
  <sub>Built with ❤️ using React, Three.js, and pure CSS animations</sub>
</p>
