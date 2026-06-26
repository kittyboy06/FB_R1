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
    
    const oldText = node.textContent
    node.textContent = `${symbol}${formattedPrice}`
    
    if (oldText && oldText !== node.textContent && node.parentElement) {
      node.parentElement.animate([
        { transform: 'translateY(-4px)', opacity: 0.6, filter: 'blur(2px)' },
        { transform: 'translateY(0)', opacity: 1, filter: 'blur(0)' }
      ], {
        duration: 220,
        easing: 'cubic-bezier(0.16, 1, 0.3, 1)'
      })
    }
  }
}

export const pricingStore = new PricingStore()
