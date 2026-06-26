import { useRef, useEffect } from 'react'
import { pricingStore } from '../store/PricingStore'

export function PriceNode({ tier }) {
  const nodeRef = useRef(null)

  useEffect(() => {
    if (!nodeRef.current) return
    
    // Clear any existing children to prevent double-appends in Dev mode React mount-remounts
    nodeRef.current.innerHTML = ''
    
    const textNode = document.createTextNode('')
    nodeRef.current.appendChild(textNode)
    pricingStore.register(tier, textNode)
  }, [tier])

  return <span ref={nodeRef} className="font-heading font-bold" />
}
