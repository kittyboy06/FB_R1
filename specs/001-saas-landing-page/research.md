# Research Report: Armory AI Landing Page Tech Stack & Architecture

This report details the architectural decisions, rationale, and alternatives evaluated for the Armory AI landing page.

---

## 1. Core Framework & Setup

- **Decision**: React 19 + Vite + Tailwind CSS.
- **Rationale**: 
  - Vite provides extremely fast dev startup and compilation.
  - React enables modular component design while allowing direct escape hatches to raw DOM elements for state-isolated updates.
  - Tailwind CSS enables responsive and clean layout design using utility classes without writing verbose custom CSS files.
- **Alternatives Considered**: 
  - **Vanilla JS**: Harder to orchestrate component mount/unmount and handle state-driven component transitions (like Bento-to-Accordion swap) cleanly.
  - **Next.js**: Unnecessary overhead for a single-page landing page. SSR/Hydration adds bundle size and increases Time to Interactive (TTI), risking violation of the 500ms orchestration cap.

---

## 2. Feature 1: Pricing Switcher State Isolation

- **Decision**: Vanilla JS singleton `PricingStore` managing raw DOM `Text` node references.
- **Rationale**: 
  - Using React state (`useState`/`useContext`) to update prices would cause component re-renders and potential layout reflows across surrounding blocks.
  - Directly mutating a raw DOM `Text` node (`textNode.textContent = value`) is extremely fast (< 1ms), runs completely outside the React lifecycle, and triggers zero virtual DOM comparison passes.
  - A singleton store allows any component (like `CurrencySwitcher`) to trigger calculations and update registered nodes without causing parent components to re-render.
- **Alternatives Considered**: 
  - **React Context**: Rejected because context changes trigger re-renders on all consuming components, violating the strict state isolation rule.
  - **Redux / Zustand**: Rejected because they still trigger React re-renders upon state changes to update the virtual DOM.

---

## 3. Feature 2: Bento-to-Accordion View Transition & Context Synchronization

- **Decision**: Custom `bentoState` pub/sub store combined with custom resize listener hook.
- **Rationale**: 
  - Since the bento grid is hovered on desktop, we store the active index in a singleton.
  - When the screen width falls below 768px, the `Accordion` mounts and initializes its state using `bentoState.get()`. This executes inside `useState`'s initializer, so the correct panel is open *during the first render pass*, preventing layout shifts or visual flicker.
  - A pub/sub subscription (`bentoState.subscribe`) updates the accordion's local state if resizing occurs while it is already mounted.
- **Alternatives Considered**: 
  - **Window Resize Event in Parent**: Triggers parent state update and re-renders the entire page on every pixel resized, which violates performance constraints.
  - **CSS media queries (`hidden md:block`)**: Keeping both in the DOM would mean having duplicate DOM trees, which hurts semantic indexing and can cause ID conflicts or duplicated network/asset loads. Swapping components via a React hook (`useLayoutMode`) keeps the DOM tree clean.

---

## 4. Animation and Easing Choreography

- **Decision**: Hardware-accelerated CSS keyframe animations with strict `animation-delay` offsets.
- **Rationale**: 
  - External libraries like Framer Motion or Radix are banned.
  - Native CSS animations run on the browser's compositor thread, leaving the main thread unblocked for User Interaction (preserving high TTI performance).
  - Staggered entry delays (e.g., 0ms, 80ms, 150ms) ensure all hero element animations complete well under the 500ms cap.
- **Alternatives Considered**: 
  - **Web Animations API (WAAPI)**: Useful for dynamic animations, but standard CSS `@keyframes` are simpler, more declarative, and compile into Tailwind configuration directly.

---

## 5. Three.js Hero Canvas

- **Decision**: Three.js WebGL canvas displaying a connection node grid.
- **Rationale**: 
  - Gives a premium, modern SaaS look (matching the "Armory" reference).
  - Uses GPU acceleration via WebGL, keeping the CPU main thread free for high responsiveness.
- **Alternatives Considered**: 
  - **2D Canvas API**: Harder to build high-quality 3D depth and parallax effects.
