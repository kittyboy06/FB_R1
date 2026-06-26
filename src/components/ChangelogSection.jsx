export function ChangelogSection() {
  const updates = [
    {
      date: "Jun 2026",
      version: "v2.4.0",
      title: "Canvas v2 Released",
      description: "Added support for nested loops, parallel branching, and real-time state visualizers directly inside compositor nodes."
    },
    {
      date: "May 2026",
      version: "v2.3.1",
      title: "Gemini 2.5 Pro Integration",
      description: "Native SDK binding for Gemini 2.5 Pro, optimizing structured response schema validation loops to under 8ms."
    },
    {
      date: "Apr 2026",
      version: "v2.2.0",
      title: "EU Region Nodes Live",
      description: "Launched dedicated compositor nodes in Frankfurt and Dublin, guaranteeing sub-millisecond local network transit."
    }
  ]

  return (
    <section id="changelog" aria-label="Changelog" className="py-24 px-4 bg-oceanic-noir relative overflow-hidden border-b border-arctic-powder/5">
      <div className="max-w-4xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-up">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-nocturnal-expedition border border-mystic-mint/10 text-mystic-mint text-xs font-semibold mb-4">
            <span>Product Momentum</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4 tracking-tight text-white">
            Recent activity log
          </h2>
          <p className="text-xs sm:text-sm text-arctic-powder/60 max-w-md mx-auto font-body">
            We deploy updates daily. Track the latest core upgrades and thread isolation optimizations shipped by the team.
          </p>
        </div>

        {/* Timeline Feed */}
        <div className="relative border-l border-arctic-powder/10 pl-6 sm:pl-8 space-y-12 max-w-2xl mx-auto text-left select-none">
          {updates.map((item, idx) => (
            <div key={idx} className="relative group">
              {/* Timeline dot */}
              <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-oceanic-noir border border-arctic-powder/20 flex items-center justify-center">
                <div className="w-1.5 h-1.5 rounded-full bg-forsythia group-hover:scale-125 transition-transform duration-200" />
              </div>

              {/* Update Info */}
              <div className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-6 mb-2">
                <span className="font-heading font-bold text-xs text-forsythia min-w-[70px]">
                  {item.date}
                </span>
                <span className="inline-flex items-center px-2 py-0.5 rounded bg-nocturnal-expedition border border-mystic-mint/5 text-[9px] text-mystic-mint font-heading font-semibold w-max">
                  {item.version}
                </span>
              </div>
              <h3 className="text-base font-heading font-bold text-white mb-2 group-hover:text-forsythia transition-colors duration-150">
                {item.title}
              </h3>
              <p className="text-xs text-arctic-powder/60 leading-relaxed font-body">
                {item.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
