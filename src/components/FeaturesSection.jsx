import { useLayoutMode } from '../hooks/useLayoutMode'
import { BentoGrid } from './BentoGrid'
import { Accordion } from './Accordion'

export function FeaturesSection() {
  const isMobile = useLayoutMode()

  return (
    <section id="features" aria-label="Features" className="py-24 px-4 bg-oceanic-noir relative border-y border-arctic-powder/5">
      {/* Decorative Gradients */}
      <div className="absolute top-0 right-10 w-[300px] h-[300px] bg-nocturnal-expedition/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-[300px] h-[300px] bg-deep-saffron/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-up">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-nocturnal-expedition border border-mystic-mint/10 text-mystic-mint text-xs font-semibold mb-4">
            {/* cube-16-solid.svg */}
            <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 16 16">
              <path d="M8.372 1.349a.75.75 0 0 0-.744 0l-4.81 2.748L8 7.131l5.182-3.034zM14 5.357L8.75 8.43v6.005l4.872-2.784A.75.75 0 0 0 14 11zm-6.75 9.078V8.43L2 5.357V11c0 .27.144.518.378.651z" />
            </svg>
            <span>Core Capabilities</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4 tracking-tight text-white">
            Autonomous execution stack
          </h2>
          <p className="text-sm md:text-base text-arctic-powder/60 max-w-xl mx-auto font-body">
            Hover cards on desktop or tap panels on mobile to inspect workflow states. Active indexes sync instantly during resizing.
          </p>
        </div>

        {/* Dynamic Component Switching */}
        <div className="min-h-[300px]">
          {isMobile ? <Accordion /> : <BentoGrid />}
        </div>
      </div>
    </section>
  )
}
