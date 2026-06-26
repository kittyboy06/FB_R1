export function Header() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <header className="sticky top-0 z-50 bg-oceanic-noir/80 backdrop-blur-md border-b border-arctic-powder/5 px-4 py-4 select-none">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <div className="w-8 h-8 rounded-lg bg-forsythia flex items-center justify-center text-oceanic-noir font-heading font-bold text-lg shadow-md shadow-forsythia/20">
            A
          </div>
          <span className="font-heading font-bold text-base tracking-tight text-white">
            Armory<span className="text-forsythia">.ai</span>
          </span>
        </div>

        {/* Navigation links */}
        <nav className="hidden md:flex items-center gap-8 text-xs font-semibold text-arctic-powder/60 font-body">
          <button onClick={() => scrollToSection('features')} className="hover:text-white transition-colors duration-150">
            Capabilities
          </button>
          <button onClick={() => scrollToSection('pricing')} className="hover:text-white transition-colors duration-150">
            Pricing
          </button>
          <button onClick={() => scrollToSection('social-proof')} className="hover:text-white transition-colors duration-150">
            Testimonials
          </button>
        </nav>

        {/* Action Controls */}
        <div className="flex items-center gap-4">
          {/* Search Button (uses search.svg) */}
          <button className="p-2.5 rounded-full hover:bg-arctic-powder/5 text-arctic-powder/70 hover:text-white hover:scale-105 active:scale-95 transition-all duration-150 focus:outline-none cursor-pointer">
            <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
              <path d="M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33l-1.42 1.42l-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z" />
            </svg>
          </button>
 
          {/* CTA */}
          <button className="px-5 py-2 rounded-full bg-forsythia hover:bg-forsythia/90 text-oceanic-noir text-xs font-bold font-body hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 ease-out shadow-md shadow-forsythia/10 hover:shadow-forsythia/20 cursor-pointer">
            Launch Console
          </button>
        </div>
      </div>
    </header>
  )
}
