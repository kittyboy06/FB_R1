# Feature Specification: SaaS Landing Page for Armory AI

**Feature Branch**: `001-saas-landing-page`

**Created**: 2026-06-26

**Status**: Approved

**Input**: User description: "Build a premium, high-converting, responsive landing page for an advanced AI-driven data automation platform (Armory AI) under strict layout, performance, and state isolation constraints."

## User Scenarios & Testing *(mandatory)*

### User Story 1 - Dynamic Pricing Engine with Zero-Rerender Switcher (Priority: P1)

As a SaaS landing page visitor, I want to toggle between monthly/annual billing and select different currencies (USD, INR, EUR) to see accurate pricing for the tiers, and I expect the update to be instantaneous and not trigger a global page reflow or re-render.

**Why this priority**: Core business logic and scoring driver (30 points total). Must compute pricing dynamically from a multi-dimensional matrix.

**Independent Test**: Can be fully tested by changing the currency in the dropdown or toggling billing, verifying that prices change immediately to the mathematically correct values, and using Chrome DevTools Performance monitor/React DevTools to confirm zero React component re-renders.

**Acceptance Scenarios**:

1. **Given** the pricing section is visible, **When** I toggle between Monthly and Annual billing, **Then** the pricing values update with a flat 20% discount applied to annual rates.
2. **Given** the pricing section is visible, **When** I switch the currency to INR (₹) or EUR (€), **Then** the values are dynamically computed using the configured base rates and regional tariff variables (USD: 1.0, INR: 83.5, EUR: 0.92) and format correct symbols.
3. **Given** I interact with the pricing controls, **When** the prices update, **Then** the update is strictly isolated to the exact DOM text nodes containing the price strings, with zero parent component re-renders.

---

### User Story 2 - Context-Preserved Bento-to-Accordion View Transition (Priority: P2)

As a mobile and desktop user, I want the feature showcase to render as a Bento Grid on desktop and as a touch-optimized accordion on mobile, and I want my active index context to persist smoothly during browser resizes.

**Why this priority**: Crucial for mobile UX and responsive layout compliance (10 points). Ensures zero context loss.

**Independent Test**: Hover over Bento Node #3 on a desktop viewport, resize the window below 768px, and verify that Accordion panel #3 is open by default.

**Acceptance Scenarios**:

1. **Given** a desktop viewport width (>=768px), **When** I view the features section, **Then** I see a Bento Grid with 4 interactive cards.
2. **Given** a mobile viewport width (<768px), **When** I view the features section, **Then** I see a touch-optimized accordion.
3. **Given** I am hovering over card #2 on desktop, **When** the browser window resizes past the mobile breakpoint, **Then** accordion panel #2 is open smoothly upon layout transition.

---

### User Story 3 - Premium Aesthetic & Asset Compliance (Priority: P3)

As a visitor, I want a visually stunning, dark-themed experience that integrates all provided SVG assets and fonts, giving a premium developer tool feel.

**Why this priority**: Aesthetic quality and compliance gate (15 points).

**Independent Test**: Inspect the page layout to verify the use of 'JetBrains Mono' for headings, 'Inter' for body, the 6 hex colors, and all 14 SVG icons in their respective contexts.

**Acceptance Scenarios**:

1. **Given** the page is loaded, **When** I inspect the typography and colors, **Then** I see 'JetBrains Mono' headings, 'Inter' body, and surfaces/backgrounds matching the Oceanic Noir palette.
2. **Given** I browse the page sections, **When** I look at the icons, **Then** all 14 provided SVGs are utilized in context-appropriate features (e.g., cog-8-tooth for custom agents, link-solid for integrations).

---

### Edge Cases

- **Rapid Viewport Resizing**: If a user resizes the window back and forth rapidly, the bentoState context should synchronize correctly without race conditions or visual glitches.
- **Zero-Hover State on Resize**: If the user is not hovering over any bento node (activeIndex is -1) when resizing, the mobile accordion should render with all panels closed by default.

## Requirements *(mandatory)*

### Functional Requirements

- **FR-001**: System MUST compute final prices using: `finalPrice = baseTierRate * currencyTariff * (isAnnual ? 0.8 : 1.0)`.
- **FR-002**: System MUST load the pricing configuration from an explicit matrix object:
  ```js
  const PRICING_MATRIX = {
    tiers: { starter: { base: 29 }, pro: { base: 79 }, enterprise: { base: 199 } },
    currencies: {
      USD: { symbol: '$', tariff: 1.00 },
      INR: { symbol: '₹', tariff: 83.5 },
      EUR: { symbol: '€', tariff: 0.92 }
    },
    annualMultiplier: 0.8
  }
  ```
- **FR-003**: System MUST prevent React state updates or global re-renders on currency/billing changes. It must mutate the `textContent` of registered raw DOM text nodes directly.
- **FR-004**: System MUST watch window resize events and trigger layout switching at a breakpoint of `768px`.
- **FR-005**: System MUST transfer active index from Bento Grid hovers to mobile Accordion open state using a shared plain JS singleton context bridge.
- **FR-006**: System MUST NOT use any banned UI or animation libraries (Shadcn, Radix, HeadlessUI, Framer Motion) for the Bento-to-Accordion component.
- **FR-007**: System MUST use native CSS transitions or WAAPI for accordion panel height/opacity animations, utilizing `max-height: 0` to `max-height: Npx` transitions.

### Key Entities

- **PricingMatrix**: Config object defining base rates, currency symbols, tariffs, and annual discount multipliers.
- **PricingStore**: Singleton class managing state and target DOM text nodes.
- **BentoState**: Singleton class tracking active index and notifying subscribers.

## Success Criteria *(mandatory)*

### Measurable Outcomes

- **SC-001**: The initial loading sequence and entry animations must complete within a total orchestration timeline of **500ms**, keeping Time to Interactive (TTI) unblocked.
- **SC-002**: Transitioning billing cycles or currencies must show **zero** layout reflows or component renders in React DevTools, updating only the text nodes in `< 16ms`.
- **SC-003**: The mobile view transition must open the correct accordion item immediately upon resize without visual flicker.
- **SC-004**: Codebase must compile cleanly with `npm run build` with zero errors or dependency warnings.

## Assumptions

- **A-001**: The application will run as a client-side Single Page Application (SPA) using React + Vite + Tailwind CSS.
- **A-002**: Viewport breakpoints are static (768px) and match typical mobile/tablet dimensions.
- **A-003**: The user's system supports WebGL/Canvas for Three.js rendering (with fallback to an animated CSS/SVG grid if WebGL is disabled).
