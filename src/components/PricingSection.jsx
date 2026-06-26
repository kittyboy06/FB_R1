import { PriceNode } from './PriceNode'
import { CurrencySwitcher } from './CurrencySwitcher'

export function PricingSection() {
  return (
    <section id="pricing" aria-label="Pricing" className="py-24 px-4 bg-oceanic-noir relative overflow-hidden">
      {/* Background Decorative Blur */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-nocturnal-expedition/20 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 animate-fade-up">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-nocturnal-expedition border border-mystic-mint/10 text-mystic-mint text-xs font-semibold mb-4">
            {/* chart-pie.svg */}
            <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6a7.5 7.5 0 107.5 7.5h-7.5V6z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 10.5H21A7.5 7.5 0 0013.5 3v7.5z" />
            </svg>
            <span>Predictable Pricing</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4 tracking-tight text-white">
            Scale-isolated plans
          </h2>
          <p className="text-sm md:text-base text-arctic-powder/60 max-w-xl mx-auto font-body">
            Zero global re-reflows. Choose a tier and start executing workflows instantly with no state overhead.
          </p>
        </div>

        {/* Currency & Cycle Switcher Container */}
        <div className="mb-16 relative z-20">
          <CurrencySwitcher />
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch select-none">
          {/* Starter Card */}
          <div className="glass-panel p-8 rounded-3xl flex flex-col justify-between transition-all duration-300 animate-fade-up">
            <div>
              <div className="text-mystic-mint text-xs font-bold uppercase tracking-wider mb-2 font-heading">Starter</div>
              <div className="flex items-baseline gap-1 text-white mb-6">
                <span className="text-4xl md:text-5xl font-heading font-bold">
                  <PriceNode tier="starter" />
                </span>
                <span className="text-arctic-powder/50 text-xs font-semibold">/mo</span>
              </div>
              <p className="text-xs text-arctic-powder/60 mb-6 font-body">
                For developers building individual automations and sandboxed agents.
              </p>
              <div className="w-full h-px bg-arctic-powder/5 mb-6" />
              <ul className="space-y-4 mb-8 text-xs text-arctic-powder/75 font-body text-left">
                <li className="flex items-center gap-2.5">
                  <svg className="w-4 h-4 text-mystic-mint shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  <span>1 Active Orchestrator Agent</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <svg className="w-4 h-4 text-mystic-mint shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  <span>10,000 runs per month</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <svg className="w-4 h-4 text-mystic-mint shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  <span>Shared cloud runner</span>
                </li>
              </ul>
            </div>
            <button className="w-full py-3 rounded-xl bg-arctic-powder/5 border border-arctic-powder/10 hover:bg-arctic-powder/10 text-white font-semibold text-xs transition-colors duration-150 font-body">
              Get Started
            </button>
          </div>

          {/* Pro Card (Highlighted) */}
          <div className="glass-panel p-8 rounded-3xl flex flex-col justify-between transition-all duration-300 relative border-deep-saffron/30 shadow-xl shadow-deep-saffron/5 animate-fade-up md:-translate-y-2">
            {/* Highlight Tag */}
            <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-deep-saffron text-oceanic-noir text-[10px] font-bold tracking-wider uppercase px-4 py-1 rounded-full shadow-md font-heading">
              Most Popular
            </div>
            <div>
              <div className="text-deep-saffron text-xs font-bold uppercase tracking-wider mb-2 font-heading">Pro</div>
              <div className="flex items-baseline gap-1 text-white mb-6">
                <span className="text-4xl md:text-5xl font-heading font-bold">
                  <PriceNode tier="pro" />
                </span>
                <span className="text-arctic-powder/50 text-xs font-semibold">/mo</span>
              </div>
              <p className="text-xs text-arctic-powder/60 mb-6 font-body">
                For teams connecting pipelines and running production integrations.
              </p>
              <div className="w-full h-px bg-arctic-powder/5 mb-6" />
              <ul className="space-y-4 mb-8 text-xs text-arctic-powder/75 font-body text-left">
                <li className="flex items-center gap-2.5">
                  <svg className="w-4 h-4 text-deep-saffron shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  <span className="font-semibold text-white">5 Active Orchestrator Agents</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <svg className="w-4 h-4 text-deep-saffron shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  <span>50,000 runs per month</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <svg className="w-4 h-4 text-deep-saffron shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  <span>Dedicated node allocation</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <svg className="w-4 h-4 text-deep-saffron shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  <span>Priority email support</span>
                </li>
              </ul>
            </div>
            <button className="w-full py-3 rounded-xl bg-forsythia hover:bg-forsythia/90 text-oceanic-noir font-bold text-xs transition-colors duration-150 font-body shadow-lg shadow-forsythia/10">
              Upgrade to Pro
            </button>
          </div>

          {/* Enterprise Card */}
          <div className="glass-panel p-8 rounded-3xl flex flex-col justify-between transition-all duration-300 animate-fade-up">
            <div>
              <div className="flex justify-between items-center mb-2">
                <div className="text-mystic-mint text-xs font-bold uppercase tracking-wider font-heading">Enterprise</div>
                <div className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded bg-nocturnal-expedition border border-mystic-mint/10 text-[9px] text-mystic-mint font-heading font-semibold select-none">
                  SOC2 TYPE II
                </div>
              </div>
              <div className="flex items-baseline gap-1 text-white mb-6">
                <span className="text-4xl md:text-5xl font-heading font-bold">
                  <PriceNode tier="enterprise" />
                </span>
                <span className="text-arctic-powder/50 text-xs font-semibold">/mo</span>
              </div>
              <p className="text-xs text-arctic-powder/60 mb-6 font-body">
                For organizations requiring high throughput, security, and custom SLAs.
              </p>
              <div className="w-full h-px bg-arctic-powder/5 mb-6" />
              <ul className="space-y-4 mb-8 text-xs text-arctic-powder/75 font-body text-left">
                <li className="flex items-center gap-2.5">
                  <svg className="w-4 h-4 text-mystic-mint shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  <span className="font-semibold text-white">Unlimited Orchestrator Agents</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <svg className="w-4 h-4 text-mystic-mint shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  <span>Unlimited execution runs</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <svg className="w-4 h-4 text-mystic-mint shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  <span>Private VPC deployment</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <svg className="w-4 h-4 text-mystic-mint shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  <span>24/7 dedicated Slack & phone</span>
                </li>
              </ul>
            </div>
            <button className="w-full py-3 rounded-xl bg-arctic-powder/5 border border-arctic-powder/10 hover:bg-arctic-powder/10 text-white font-semibold text-xs transition-colors duration-150 font-body">
              Contact Sales
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
