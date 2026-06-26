# Quickstart & Verification Guide: Armory AI Landing Page

This document provides step-by-step instructions to initialize the project, run the dev server, and verify all constraints.

---

## 1. Installation and Run Instructions

### Prerequisites
- Node.js (v18 or higher)
- npm (v10 or higher)

### Setup Commands
From the repository root (`d:\Projects\Hackathon\FB_R1`):

```bash
# 1. Initialize Vite project with React
npx -y create-vite@latest ./ --template react --no-interactive --overwrite

# 2. Install dependencies (including Tailwind and Three.js)
npm install
npm install -D tailwindcss postcss autoprefixer
npm install three

# 3. Initialize Tailwind CSS config
npx tailwindcss init -p
```

### Run Dev Server
```bash
npm run dev
```
The server will start, typically at `http://localhost:5173`.

---

## 2. Verification Scenarios

### Scenario A: Verify Pricing State Isolation (0% Parent Rerenders)

1. Open the landing page at `http://localhost:5173`.
2. Open Chrome DevTools (F12) and go to the **Performance** tab, or open React DevTools and enable **Highlight updates when components render**.
3. Locate the **Currency Switcher** dropdown (USD, INR, EUR) and the **Billing Cycle** toggle (Monthly/Annual).
4. Change the currency dropdown several times and toggle the billing cycle.
5. **Expected Outcome**:
   - The prices on the Starter, Pro, and Enterprise cards change instantly to the correct calculated values.
   - React DevTools showing highlight updates should **NOT** flash or highlight any elements besides the switcher buttons/dropdown itself.
   - The Starter, Pro, and Enterprise cards themselves must **NOT** re-render or trigger update lifecycle hooks.

### Scenario B: Verify Bento-to-Accordion Resize Synchronisation

1. Use a desktop viewport width (e.g. 1200px) so the Bento Grid is displayed.
2. Hover over card #3 (End-to-End Encryption). You should see visual hover states (translateY, shadow changes).
3. Without moving your cursor away, trigger DevTools responsive mode and resize the width below `768px` (mobile viewport).
4. **Expected Outcome**:
   - The component instantly refactors into an Accordion list.
   - The Accordion panel #3 (End-to-End Encryption) is open by default.
   - No visual flicker or layout jump occurs during this switch.

### Scenario C: Verify Native CSS Entry Animation Timing

1. Open the DevTools **Performance** panel.
2. Click **Record** and reload the page (Ctrl + R). Stop recording after 1 second.
3. Review the main thread tasks and rendering frames.
4. **Expected Outcome**:
   - Total entry animations (Hero title fade, subtitle, CTA reveals) must conclude within **500ms** from load.
   - The initial animations should run entirely on the compositor thread (`Composite Layers` tasks instead of long `Evaluate Script` or `Layout` tasks).
   - Time to Interactive (TTI) must not be delayed by heavy scripts.
