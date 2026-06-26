import { useState } from 'react'
import { pricingStore } from '../store/PricingStore'

export function CurrencySwitcher() {
  const [currency, setCurrency] = useState('USD')
  const [isAnnual, setIsAnnual] = useState(false)

  const handleCurrencyChange = (newCurrency) => {
    setCurrency(newCurrency)
    pricingStore.update(newCurrency, isAnnual)
  }

  const handleToggleBilling = () => {
    const newAnnual = !isAnnual
    setIsAnnual(newAnnual)
    pricingStore.update(currency, newAnnual)
  }

  return (
    <div className="flex flex-col sm:flex-row items-center gap-4 justify-center animate-fade-up select-none">
      {/* Billing Cycle Switch */}
      <div className="flex bg-oceanic-noir border border-arctic-powder/10 p-1 rounded-full items-center">
        <button
          onClick={() => isAnnual && handleToggleBilling()}
          className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all duration-150 ${
            !isAnnual
              ? 'bg-forsythia text-oceanic-noir shadow-md font-bold'
              : 'text-arctic-powder/60 hover:text-arctic-powder'
          }`}
        >
          Monthly
        </button>
        <button
          onClick={() => !isAnnual && handleToggleBilling()}
          className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all duration-150 flex items-center gap-1.5 ${
            isAnnual
              ? 'bg-forsythia text-oceanic-noir shadow-md font-bold'
              : 'text-arctic-powder/60 hover:text-arctic-powder'
          }`}
        >
          <span>Annual</span>
          <span className={`px-1.5 py-0.5 text-[9px] rounded-full ${isAnnual ? 'bg-oceanic-noir text-forsythia' : 'bg-forsythia/20 text-forsythia'}`}>
            -20%
          </span>
        </button>
      </div>

      {/* Currency Switcher Dropdown */}
      <div className="relative">
        <select
          value={currency}
          onChange={(e) => handleCurrencyChange(e.target.value)}
          className="appearance-none bg-oceanic-noir border border-arctic-powder/10 text-arctic-powder text-xs rounded-full px-5 py-2.5 pr-10 font-semibold focus:outline-none focus:border-forsythia/50 hover:border-arctic-powder/30 cursor-pointer transition-colors duration-150"
        >
          <option value="USD">USD ($)</option>
          <option value="INR">INR (₹)</option>
          <option value="EUR">EUR (€)</option>
        </select>
        {/* Dropdown Chevron */}
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-4 text-arctic-powder/50">
          <svg className="w-3 h-3 fill-none stroke-current" viewBox="0 0 24 24" strokeWidth="2.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
          </svg>
        </div>
      </div>
    </div>
  )
}
