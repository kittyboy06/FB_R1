import { useState, useEffect } from 'react'

const MOBILE_BP = 768

export function useLayoutMode() {
  const [isMobile, setIsMobile] = useState(() => {
    return typeof window !== 'undefined' ? window.innerWidth < MOBILE_BP : false
  })

  useEffect(() => {
    if (typeof window === 'undefined') return

    const mq = window.matchMedia(`(max-width: ${MOBILE_BP}px)`)
    const handler = (e) => setIsMobile(e.matches)
    mq.addEventListener('change', handler)
    return () => mq.removeEventListener('change', handler)
  }, [])

  return isMobile
}
