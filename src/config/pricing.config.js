export const PRICING_MATRIX = {
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
