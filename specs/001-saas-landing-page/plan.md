# Implementation Plan: SaaS Landing Page for Armory AI

**Branch**: `001-saas-landing-page` | **Date**: 2026-06-26 | **Spec**: [spec.md](./spec.md)

**Input**: Feature specification from `specs/001-saas-landing-page/spec.md`

## Summary

The goal is to build a premium, high-converting, responsive landing page for an advanced AI-driven data automation platform (Armory AI) under strict layout, performance, and state isolation constraints. 

To achieve this, we will initialize a new React + Vite + Tailwind CSS project in the root directory. We will manage pricing state (for monthly/annual cycles and USD/INR/EUR currencies) using a vanilla JS singleton store (`PricingStore`) that directly mutates DOM text nodes, ensuring zero React component re-renders. We will manage the active features index across viewport resizing using a custom state bridge (`bentoState`) that transfers active cards to mobile accordion items cleanly. Native CSS animations and Three.js will be used for entry effects and an interactive 3D particle background in the Hero section.

## Technical Context

**Language/Version**: React 19, Node 22+

**Primary Dependencies**: React, Tailwind CSS, Three.js

**Storage**: Local Browser Memory (bentoState singleton, PricingStore singleton)

**Testing**: npm run build (production build validation), Chrome DevTools performance tracking

**Target Platform**: Modern Web Browsers (Mobile, Tablet, Desktop)

**Project Type**: single-page-app

**Performance Goals**: Entry orchestration under 500ms, price updates in < 16ms, 60fps animations

**Constraints**: Banned libraries: Shadcn, Radix, HeadlessUI, Framer Motion for Bento/Accordion. State isolation: zero parent re-renders when changing pricing.

**Scale/Scope**: Single page, responsive layout, 3 pricing tiers, 4 feature grid elements.

## Constitution Check

*GATE: Must pass before Phase 0 research. Re-check after Phase 1 design.*

| Gate / Rule | Status | Explanation |
|-------------|--------|-------------|
| I. Zero-Rerender Pricing | PASSED | Custom `PricingStore` singleton will directly update DOM text nodes, bypassing React state. |
| II. Context-Locked Resize Sync | PASSED | `bentoState` singleton will bridge hovered desktop card index to mobile accordion state on mount. |
| III. Zero-Dependency Bento/Accordion | PASSED | No Shadcn, Radix, HeadlessUI, or Framer Motion will be installed or used. Native CSS/WAAPI only. |
| IV. Semantic HTML & SEO Hygiene | PASSED | Uses HTML5 semantic tags `<header>`, `<main>`, `<section>`, `<footer>` and correct meta/OG headers. |
| V. Asset & Style Guide Compliance | PASSED | Strictly enforces JetBrains Mono + Inter fonts, the 6 hex colors, and all 14 SVG assets. |

## Project Structure

### Documentation (this feature)

```text
specs/001-saas-landing-page/
├── plan.md              # This file
├── research.md          # Phase 0 output
├── data-model.md        # Phase 1 output
└── quickstart.md        # Phase 1 output
```

### Source Code (repository root)

```text
src/
├── assets/              # SVG assets
├── components/          # PriceNode, CurrencySwitcher, BentoGrid, Accordion, ThreeBg
├── config/              # pricing.config.js
├── hooks/               # useLayoutMode.js
├── store/               # PricingStore.js, bentoState.js
├── App.jsx
├── main.jsx
└── index.css
```

**Structure Decision**: Single React SPA project structure in the repository root to minimize configuration overhead and ease deployment.
