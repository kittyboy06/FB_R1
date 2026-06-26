import { PRICING_MATRIX } from '../config/pricing.config.js'

class PricingStore {
  constructor() {
    this.currency = 'USD'
    this.isAnnual = false
    this.nodes = new Map() // tierName -> raw DOM text node
  }

  register(tierName, domTextNode) {
    this.nodes.set(tierName, domTextNode)
    this.updateNode(tierName, domTextNode)
  }

  update(currency, isAnnual) {
    this.currency = currency
    this.isAnnual = isAnnual
    
    for (const [tier, node] of this.nodes) {
      this.updateNode(tier, node)
    }
  }

  updateNode(tier, node) {
    const { tariff, symbol } = PRICING_MATRIX.currencies[this.currency]
    const mult = this.isAnnual ? PRICING_MATRIX.annualMultiplier : 1
    const price = PRICING_MATRIX.tiers[tier].base * tariff * mult
    
    // Format price beautifully (e.g. adding commas for large values)
    const roundedPrice = Math.round(price)
    const formattedPrice = roundedPrice.toLocaleString()
    
    node.textContent = `${symbol}${formattedPrice}`
  }
}

export const pricingStore = new PricingStore()
