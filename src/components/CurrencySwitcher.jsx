import { useState, useEffect, useRef } from 'react'
import { pricingStore } from '../store/PricingStore'

export function CurrencySwitcher() {
  const [currency, setCurrency] = useState('USD')
  const [isAnnual, setIsAnnual] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef(null)

  const handleCurrencyChange = (newCurrency) => {
    setCurrency(newCurrency)
    pricingStore.update(newCurrency, isAnnual)
    setIsOpen(false)
  }

  const handleToggleBilling = () => {
    const newAnnual = !isAnnual
    setIsAnnual(newAnnual)
    pricingStore.update(currency, newAnnual)
  }

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const currencyLabels = {
    USD: 'USD ($)',
    INR: 'INR (₹)',
    EUR: 'EUR (€)'
  }

  return (
    <div className="flex flex-col sm:flex-row items-center gap-4 justify-center animate-fade-up select-none">
      {/* Billing Cycle Switch */}
      <div className="flex bg-oceanic-noir border border-arctic-powder/10 p-1 rounded-full items-center">
        <button
          onClick={() => isAnnual && handleToggleBilling()}
          className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 cursor-pointer ${
            !isAnnual
              ? 'bg-forsythia text-oceanic-noir shadow-md font-bold'
              : 'text-arctic-powder/60 hover:text-arctic-powder'
          }`}
        >
          Monthly
        </button>
        <button
          onClick={() => !isAnnual && handleToggleBilling()}
          className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 flex items-center gap-1.5 cursor-pointer ${
            isAnnual
              ? 'bg-forsythia text-oceanic-noir shadow-md font-bold'
              : 'text-arctic-powder/60 hover:text-arctic-powder'
          }`}
        >
          <span>Annual</span>
          <span className={`px-1.5 py-0.5 text-[9px] rounded-full transition-colors duration-200 ${isAnnual ? 'bg-oceanic-noir text-forsythia' : 'bg-forsythia/20 text-forsythia'}`}>
            -20%
          </span>
        </button>
      </div>

      {/* Custom Currency Dropdown */}
      <div className="relative" ref={dropdownRef}>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="bg-oceanic-noir border border-arctic-powder/10 text-arctic-powder text-xs rounded-full px-5 py-2.5 pr-10 font-semibold focus:outline-none focus:border-forsythia/30 hover:border-arctic-powder/30 cursor-pointer transition-all duration-200 flex items-center gap-2 select-none min-w-[120px] justify-between relative"
        >
          <span>{currencyLabels[currency]}</span>
          {/* Custom animated chevron */}
          <svg
            className={`w-3.5 h-3.5 text-arctic-powder/50 transition-transform duration-200 absolute right-4 top-1/2 -translate-y-1/2 ${isOpen ? 'rotate-180 text-forsythia' : ''}`}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
          </svg>
        </button>

        {/* Dropdown Options */}
        {isOpen && (
          <div className="absolute right-0 mt-2 w-full rounded-2xl bg-oceanic-noir border border-arctic-powder/10 shadow-xl z-50 overflow-hidden py-1.5 animate-fade-in animate-duration-200">
            {Object.keys(currencyLabels).map((key) => (
              <button
                key={key}
                onClick={() => handleCurrencyChange(key)}
                className={`w-full px-4 py-2 text-left text-xs transition-colors duration-150 cursor-pointer ${
                  currency === key
                    ? 'bg-forsythia/10 text-forsythia font-bold border-l-2 border-forsythia'
                    : 'text-arctic-powder/80 hover:bg-arctic-powder/5 hover:text-white'
                }`}
              >
                {currencyLabels[key]}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
