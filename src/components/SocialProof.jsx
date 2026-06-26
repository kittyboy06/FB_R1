import { useState } from 'react'

export function SocialProof() {
  const [page, setPage] = useState(0)

  const testimonials = [
    {
      quote: "Armory.ai completely solved our latency bottlenecks. Running agents on the compositor thread reduced execution delays from 150ms to sub-millisecond rates.",
      author: "Sarah Jenkins",
      role: "VP of Engineering, FlowState",
      avatar: "S"
    },
    {
      quote: "The state isolation architecture is genius. Changing complex pricing and regional variables has absolutely zero reflow impact, keeping our page fully interactive.",
      author: "Marcus Chen",
      role: "Lead Architect, Linear Systems",
      avatar: "M"
    },
    {
      quote: "We migrated our LangChain orchestrations to Armory. The self-healing retries are seamless and saved us from countless system failures during traffic peaks.",
      author: "Elena Rostova",
      role: "CTO, AlphaGen Solutions",
      avatar: "E"
    },
    {
      quote: "The infinite compositor canvas is exactly what developers need to debug and visualize high-throughput LLM pipelines. Exceptional DX and speed.",
      author: "David K.",
      role: "Principal Developer, Vercel",
      avatar: "D"
    }
  ]

  const logos = ["Vercel", "Stripe", "Supabase", "Linear", "Anthropic", "Scale AI"]
  
  const totalPages = Math.ceil(testimonials.length / 2)
  const visibleTestimonials = testimonials.slice(page * 2, (page + 1) * 2)

  const handlePrev = () => {
    setPage(prev => (prev === 0 ? totalPages - 1 : prev - 1))
  }

  const handleNext = () => {
    setPage(prev => (prev === totalPages - 1 ? 0 : prev + 1))
  }

  return (
    <section id="social-proof" aria-label="Testimonials" className="py-24 px-4 bg-oceanic-noir/50 border-t border-arctic-powder/5">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-2xl md:text-3xl font-heading font-bold mb-4 tracking-tight text-white">
            Trusted by AI innovators
          </h2>
          <p className="text-sm text-arctic-powder/60 max-w-md mx-auto font-body">
            Empowering engineering teams to run agent pipelines at production scale.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8 select-none min-h-[180px]">
          {visibleTestimonials.map((t, i) => (
            <div key={i} className="glass-panel p-8 rounded-3xl text-left border border-arctic-powder/5 relative group hover:border-mystic-mint/20 transition-all duration-300">
              <div className="absolute top-6 right-8 text-5xl text-mystic-mint/10 font-heading select-none group-hover:text-mystic-mint/20 transition-colors duration-300">
                “
              </div>
              <p className="text-xs sm:text-sm text-arctic-powder/80 font-body leading-relaxed mb-6 italic relative z-10">
                {t.quote}
              </p>
              <div className="flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-full bg-nocturnal-expedition border border-mystic-mint/20 flex items-center justify-center font-heading font-bold text-mystic-mint">
                  {t.avatar}
                </div>
                <div>
                  <div className="text-xs font-heading font-bold text-white">{t.author}</div>
                  <div className="text-[10px] text-arctic-powder/50 font-body">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Testimonials Pagination Controls (Uses chevron-left.svg & chevron-right.svg) */}
        <div className="flex justify-center items-center gap-4 mb-16">
          <button
            onClick={handlePrev}
            aria-label="Previous Testimonials"
            className="p-2.5 rounded-full bg-nocturnal-expedition/50 border border-mystic-mint/10 hover:border-mystic-mint/30 text-mystic-mint hover:text-white transition-all duration-150 cursor-pointer"
          >
            {/* chevron-left.svg */}
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
          </button>
          
          <span className="text-[10px] font-heading font-bold text-arctic-powder/40 tracking-wider">
            PAGE {page + 1} OF {totalPages}
          </span>

          <button
            onClick={handleNext}
            aria-label="Next Testimonials"
            className="p-2.5 rounded-full bg-nocturnal-expedition/50 border border-mystic-mint/10 hover:border-mystic-mint/30 text-mystic-mint hover:text-white transition-all duration-150 cursor-pointer"
          >
            {/* chevron-right.svg */}
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
          </button>
        </div>

        {/* Company Logos Row */}
        <div className="border-t border-arctic-powder/5 pt-12 flex flex-wrap justify-center items-center gap-x-12 gap-y-6 opacity-40 hover:opacity-60 transition-opacity duration-300">
          {logos.map((logo, i) => (
            <span key={i} className="font-heading text-xs font-bold uppercase tracking-widest text-arctic-powder select-none">
              {logo}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}

