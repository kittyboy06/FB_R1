export function SocialProof() {
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
    }
  ]

  const logos = ["Vercel", "Stripe", "Supabase", "Linear", "Anthropic", "Scale AI"]

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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 select-none">
          {testimonials.map((t, i) => (
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
