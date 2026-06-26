# Data Model: Armory AI Landing Page

This document defines the key entities, schemas, and configurations used in the Armory AI landing page.

---

## 1. Pricing Configuration Schema (PRICING_MATRIX)

The pricing engine is driven by a multi-dimensional configuration object defined in JS.

### Structure

```typescript
interface PricingMatrix {
  tiers: {
    [tierId: string]: {
      base: number;      // Base price in USD (monthly rate)
    }
  };
  currencies: {
    [currencyCode: string]: {
      symbol: string;    // Display symbol (e.g. $, ₹, €)
      tariff: number;    // Conversion multiplier against base rate
    }
  };
  annualMultiplier: number; // Discount multiplier (e.g. 0.8 for 20% off)
}
```

### Static Configuration Instance

```javascript
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

### Calculation Rules & Validation
- **Formula**: `finalPrice = Math.round(base * tariff * (isAnnual ? annualMultiplier : 1.0))`
- **Constraints**:
  - Currency tariff MUST be positive numbers.
  - Base values MUST be positive integers.
  - Output values MUST be rounded to the nearest integer.

---

## 2. Feature Structure (Features List)

Features are represented in a structured list to feed both Bento Grid and Accordion components.

### Schema

```typescript
interface FeatureItem {
  id: number;           // Sequential identifier (0-indexed)
  title: string;        // Title of the feature
  description: string;  // Detailed explanation
  icon: string;         // Reference key for the custom SVG asset
}
```

### Static Features List

We map the features as follows:

```javascript
const FEATURES = [
  {
    id: 0,
    title: "Infinite Canvas",
    description: "Visual workflow drag-and-drop orchestration interface to design complex agent routes without code.",
    icon: "arrow-path.svg"
  },
  {
    id: 1,
    title: "Autonomous Execution",
    description: "Self-healing execution loops that automatically resolve errors, retry steps, and scale containers dynamically.",
    icon: "cog-8-tooth.svg"
  },
  {
    id: 2,
    title: "End-to-End Encryption",
    description: "Performance-isolated encryption securing transit data, API integrations, and model weights with Zero-Knowledge proofs.",
    icon: "link-solid.svg"
  },
  {
    id: 3,
    title: "Production-Ready Stack",
    description: "Pre-built, pre-audited integration templates to ship production workflows in minutes with built-in telemetry.",
    icon: "cube-16-solid.svg"
  }
]
```

---

## 3. UI State Models

These models live in memory as singletons outside the React state hierarchy.

### A. Pricing Store (PricingStore)
Tracks registered text nodes and updates them directly.

```typescript
class PricingStore {
  private currency: string;       // "USD" | "INR" | "EUR"
  private isAnnual: boolean;      // true | false
  private nodes: Map<string, TextNode>; // Mapping from tierId to raw DOM Text node
  
  public register(tierId: string, node: TextNode): void;
  public update(currency: string, isAnnual: boolean): void;
}
```

### B. Bento State (BentoState)
Manages the active index and notifications during resizes.

```typescript
class BentoState {
  private activeIndex: number;    // -1 (none) or 0 to 3
  private listeners: Set<(idx: number) => void>;
  
  public set(idx: number): void;
  public get(): number;
  public subscribe(fn: (idx: number) => void): () => void;
}
```
