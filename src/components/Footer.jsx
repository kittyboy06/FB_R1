export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const sitemap = [
    {
      title: "Product",
      links: [
        { label: "Canvas", href: "#features" },
        { label: "Execution", href: "#features" },
        { label: "SDK Client", href: "#features" }
      ]
    },
    {
      title: "Company",
      links: [
        { label: "About Us", href: "#" },
        { label: "Careers", href: "#" },
        { label: "Blog", href: "#" }
      ]
    },
    {
      title: "Developers",
      links: [
        { label: "Documentation", href: "#" },
        { label: "Status", href: "#" },
        { label: "GitHub", href: "#" }
      ]
    }
  ]

  return (
    <footer className="bg-oceanic-noir/90 border-t border-arctic-powder/5 px-4 py-16 text-left select-none relative z-10">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row md:justify-between gap-12">
        {/* Left Side: Brand and Copyright */}
        <div className="flex flex-col gap-4 max-w-xs">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-forsythia flex items-center justify-center text-oceanic-noir font-heading font-bold text-base">
              A
            </div>
            <span className="font-heading font-bold text-sm tracking-tight text-white">
              Armory<span className="text-forsythia">.ai</span>
            </span>
          </div>
          <p className="text-xs text-arctic-powder/50 leading-relaxed font-body">
            Deploy custom, thread-isolated AI agents and automate workflow compostings with microsecond orchestration.
          </p>
          <div className="text-[10px] text-arctic-powder/40 font-body">
            &copy; 2026 Armory.ai. All rights reserved.
          </div>
        </div>

        {/* Right Side: Sitemap Link Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 md:gap-16">
          {sitemap.map((col, i) => (
            <div key={i} className="flex flex-col gap-4">
              <span className="font-heading font-bold text-xs uppercase tracking-wider text-white">
                {col.title}
              </span>
              <ul className="space-y-2.5 text-xs font-semibold text-arctic-powder/60 font-body">
                {col.links.map((link, j) => (
                  <li key={j}>
                    <a href={link.href} className="hover:text-white transition-colors duration-150">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Row: Back to Top */}
      <div className="max-w-6xl mx-auto border-t border-arctic-powder/5 mt-12 pt-8 flex items-center justify-between">
        <span className="text-[10px] text-arctic-powder/40 font-body">
          Built for #hackthekitty 2026 &middot; Round 1
        </span>
        
        {/* Scroll to top button (uses chevron-up.svg) */}
        <button
          onClick={scrollToTop}
          className="p-3 rounded-full bg-nocturnal-expedition border border-mystic-mint/10 hover:border-mystic-mint/30 text-mystic-mint hover:text-white transition-colors duration-150 focus:outline-none shadow-md shadow-nocturnal-expedition/10"
        >
          <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 15.75l7.5-7.5l7.5 7.5" />
          </svg>
        </button>
      </div>
    </footer>
  )
}
