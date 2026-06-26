import { bentoState } from '../store/bentoState'

export function BentoGrid() {
  const handleMouseEnter = (idx) => {
    bentoState.set(idx)
  }

  const handleMouseLeave = () => {
    if (window.innerWidth < 768) return
    bentoState.set(-1)
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-6 gap-6 max-w-6xl mx-auto select-none">
      {/* Card 1: Infinite Canvas (Span 4 columns on desktop, 1 row) */}
      <div
        onMouseEnter={() => handleMouseEnter(0)}
        onMouseLeave={handleMouseLeave}
        className="glass-panel p-8 rounded-3xl md:col-span-4 flex flex-col justify-between h-[300px] group transition-all duration-300 relative overflow-hidden cursor-pointer"
      >
        <div className="absolute top-0 right-0 w-[200px] h-[200px] bg-mystic-mint/5 rounded-full blur-3xl pointer-events-none group-hover:bg-mystic-mint/10 transition-colors duration-300" />
        
        {/* SVG Graphic Background */}
        <div className="absolute right-8 top-1/2 -translate-y-1/2 w-1/2 h-4/5 hidden sm:flex items-center justify-center opacity-30 group-hover:opacity-60 transition-opacity duration-300">
          <div className="w-full h-full relative border border-dashed border-arctic-powder/10 rounded-2xl p-4 flex flex-col justify-around">
            <div className="flex justify-between items-center">
              <div className="w-8 h-8 rounded-lg bg-nocturnal-expedition border border-mystic-mint/20 flex items-center justify-center text-mystic-mint">
                1
              </div>
              <div className="flex-1 h-px border-t border-dashed border-arctic-powder/20 mx-2" />
              <div className="w-8 h-8 rounded-lg bg-nocturnal-expedition border border-mystic-mint/20 flex items-center justify-center text-mystic-mint animate-pulse">
                2
              </div>
            </div>
            <div className="flex justify-end pr-4">
              <div className="w-px h-12 border-l border-dashed border-arctic-powder/20" />
            </div>
            <div className="flex justify-between items-center">
              <div className="flex-1 h-px border-t border-dashed border-arctic-powder/20 mr-2" />
              <div className="w-8 h-8 rounded-lg bg-deep-saffron/10 border border-deep-saffron/30 flex items-center justify-center text-deep-saffron">
                3
              </div>
            </div>
          </div>
        </div>

        <div className="relative z-10 flex flex-col justify-between h-full text-left sm:w-1/2">
          <div>
            <div className="w-10 h-10 rounded-xl bg-nocturnal-expedition border border-mystic-mint/20 flex items-center justify-center text-mystic-mint mb-6 group-hover:scale-105 transition-transform duration-200">
              {/* arrow-path.svg */}
              <svg className="w-5 h-5 stroke-current fill-none" viewBox="0 0 24 24" strokeWidth="1.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99" />
              </svg>
            </div>
            <h3 className="text-xl font-heading font-bold mb-3 text-white">Infinite Canvas</h3>
            <p className="text-xs text-arctic-powder/60 font-body leading-relaxed">
              Design complex multi-agent workflows using an intuitive drag-and-drop compositor interface. Visually connect nodes, loops, and conditions with zero code.
            </p>
          </div>
          <div className="text-[10px] text-mystic-mint font-semibold uppercase tracking-wider group-hover:translate-x-1 transition-transform duration-200 mt-4 flex items-center gap-1">
            <span>Launch Canvas</span>
            <span>→</span>
          </div>
        </div>
      </div>

      {/* Card 2: Autonomous Execution (Span 2 columns on desktop) */}
      <div
        onMouseEnter={() => handleMouseEnter(1)}
        onMouseLeave={handleMouseLeave}
        className="glass-panel p-8 rounded-3xl md:col-span-2 flex flex-col justify-between h-[300px] group transition-all duration-300 relative overflow-hidden cursor-pointer"
      >
        <div className="absolute -top-12 -right-12 w-32 h-32 bg-deep-saffron/5 rounded-full blur-2xl pointer-events-none group-hover:bg-deep-saffron/10 transition-colors duration-300" />
        
        <div className="relative z-10 flex flex-col justify-between h-full text-left">
          <div>
            <div className="w-10 h-10 rounded-xl bg-nocturnal-expedition border border-mystic-mint/20 flex items-center justify-center text-mystic-mint mb-6 group-hover:scale-105 transition-transform duration-200">
              {/* cog-8-tooth.svg */}
              <svg className="w-5 h-5 stroke-current fill-none group-hover:rotate-45 transition-transform duration-300" viewBox="0 0 24 24" strokeWidth="1.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M10.343 3.94c.09-.542.56-.94 1.11-.94h1.093c.55 0 1.02.398 1.11.94l.149.894c.07.424.384.764.78.93c.398.164.855.142 1.205-.108l.737-.527a1.125 1.125 0 0 1 1.45.12l.773.774c.39.389.44 1.002.12 1.45l-.527.737c-.25.35-.272.806-.107 1.204c.165.397.505.71.93.78l.893.15c.543.09.94.56.94 1.109v1.094c0 .55-.397 1.02-.94 1.11l-.893.149c-.425.07-.765.383-.93.78c-.165.398-.143.854.107 1.204l.527.738c.32.447.269 1.06-.12 1.45l-.774.773a1.125 1.125 0 0 1-1.449.12l-.738-.527c-.35-.25-.806-.272-1.203-.107c-.397.165-.71.505-.781.929l-.149.894c-.09.542-.56.94-1.11.94h-1.094c-.55 0-1.019-.398-1.11-.94l-.148-.894c-.071-.424-.384-.764-.781-.93c-.398-.164-.854-.142-1.204.108l-.738.527c-.447.32-1.06.269-1.45-.12l-.773-.774a1.125 1.125 0 0 1-.12-1.45l.527-.737c.25-.35.273-.806.108-1.204c-.165-.397-.505-.71-.93-.78l-.894-.15c-.542-.09-.94-.56-.94-1.109v-1.094c0-.55.398-1.02.94-1.11l.894-.149c.424-.07.765-.383.93-.78c.165-.398.143-.854-.107-1.204l-.527-.738a1.125 1.125 0 0 1 .12-1.45l.773-.773a1.125 1.125 0 0 1 1.45-.12l.737.527c.35.25.807.272 1.204.107c.397-.165.71-.505.78-.929l.15-.894Z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0a3 3 0 0 1 6 0Z" />
              </svg>
            </div>
            <h3 className="text-xl font-heading font-bold mb-3 text-white">Autonomous Execution</h3>
            <p className="text-xs text-arctic-powder/60 font-body leading-relaxed">
              Self-healing loops automatically troubleshoot, retry, and adapt tasks in real-time based on live performance metrics.
            </p>
          </div>
        </div>
      </div>

      {/* Card 3: End-to-End Encryption (Span 2 columns on desktop) */}
      <div
        onMouseEnter={() => handleMouseEnter(2)}
        onMouseLeave={handleMouseLeave}
        className="glass-panel p-8 rounded-3xl md:col-span-2 flex flex-col justify-between h-[300px] group transition-all duration-300 relative overflow-hidden cursor-pointer"
      >
        <div className="absolute -top-12 -right-12 w-32 h-32 bg-mystic-mint/5 rounded-full blur-2xl pointer-events-none group-hover:bg-mystic-mint/10 transition-colors duration-300" />
        
        <div className="relative z-10 flex flex-col justify-between h-full text-left">
          <div>
            <div className="w-10 h-10 rounded-xl bg-nocturnal-expedition border border-mystic-mint/20 flex items-center justify-center text-mystic-mint mb-6 group-hover:scale-105 transition-transform duration-200">
              {/* link-solid.svg */}
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M19.902 4.098a3.75 3.75 0 0 0-5.304 0l-4.5 4.5a3.75 3.75 0 0 0 1.035 6.037a.75.75 0 0 1-.646 1.353a5.25 5.25 0 0 1-1.449-8.45l4.5-4.5a5.25 5.25 0 1 1 7.424 7.424l-1.757 1.757a.75.75 0 1 1-1.06-1.06l1.757-1.757a3.75 3.75 0 0 0 0-5.304Zm-7.389 4.267a.75.75 0 0 1 1-.353a5.25 5.25 0 0 1 1.449 8.45l-4.5 4.5a5.25 5.25 0 1 1-7.424-7.424l1.757-1.757a.75.75 0 1 1 1.06 1.06l-1.757 1.757a3.75 3.75 0 1 0 5.304 5.304l4.5-4.5a3.75 3.75 0 0 0-1.035-6.037a.75.75 0 0 1-.354-1Z" clipRule="evenodd" />
              </svg>
            </div>
            <h3 className="text-xl font-heading font-bold mb-3 text-white">Secure Integrations</h3>
            <p className="text-xs text-arctic-powder/60 font-body leading-relaxed">
              Performance-isolated tunnels secure credentials, data transit, and external APIs with zero-trust key management.
            </p>
          </div>
        </div>
      </div>

      {/* Card 4: Production-Ready Stack (Span 4 columns on desktop) */}
      <div
        onMouseEnter={() => handleMouseEnter(3)}
        onMouseLeave={handleMouseLeave}
        className="glass-panel p-8 rounded-3xl md:col-span-4 flex flex-col justify-between h-[300px] group transition-all duration-300 relative overflow-hidden cursor-pointer"
      >
        <div className="absolute top-0 right-0 w-[200px] h-[200px] bg-deep-saffron/5 rounded-full blur-3xl pointer-events-none group-hover:bg-deep-saffron/10 transition-colors duration-300" />
        
        {/* SVG Graphic Background */}
        <div className="absolute right-8 top-1/2 -translate-y-1/2 w-1/2 h-4/5 hidden sm:flex items-center justify-center opacity-35 group-hover:opacity-65 transition-opacity duration-300">
          <div className="w-full text-left font-heading text-[10px] text-mystic-mint/80 bg-oceanic-noir/80 border border-arctic-powder/5 p-4 rounded-xl shadow-lg leading-relaxed select-text">
            <div><span className="text-deep-saffron">import</span> {"{ Agent }"} <span className="text-deep-saffron">from</span> <span className="text-forsythia">"@armory/sdk"</span>;</div>
            <div className="mt-2"><span className="text-deep-saffron">const</span> agent = <span className="text-deep-saffron">new</span> <span className="text-white">Agent</span>({'{'}</div>
            <div className="pl-4">id: <span className="text-forsythia">"secure-payment-watcher"</span>,</div>
            <div className="pl-4">trigger: <span className="text-forsythia">"on_transaction"</span>,</div>
            <div className="pl-4">isolation: <span className="text-forsythia">"thread-isolated"</span></div>
            <div>{'});'}</div>
            <div className="mt-2">agent.<span className="text-white">deploy</span>();</div>
          </div>
        </div>

        <div className="relative z-10 flex flex-col justify-between h-full text-left sm:w-1/2">
          <div>
            <div className="w-10 h-10 rounded-xl bg-nocturnal-expedition border border-mystic-mint/20 flex items-center justify-center text-mystic-mint mb-6 group-hover:scale-105 transition-transform duration-200">
              {/* cube-16-solid.svg */}
              <svg className="w-5 h-5 fill-current" viewBox="0 0 16 16">
                <path d="M8.372 1.349a.75.75 0 0 0-.744 0l-4.81 2.748L8 7.131l5.182-3.034zM14 5.357L8.75 8.43v6.005l4.872-2.784A.75.75 0 0 0 14 11zm-6.75 9.078V8.43L2 5.357V11c0 .27.144.518.378.651z" />
              </svg>
            </div>
            <h3 className="text-xl font-heading font-bold mb-3 text-white">Production-Ready Stack</h3>
            <p className="text-xs text-arctic-powder/60 font-body leading-relaxed">
              Deploy agents directly on the compositor thread with microsecond latency. Built-in hooks for popular APIs, databases, and LLM providers.
            </p>
          </div>
          <div className="text-[10px] text-deep-saffron font-semibold uppercase tracking-wider group-hover:translate-x-1 transition-transform duration-200 mt-4 flex items-center gap-1">
            <span>Read SDK Docs</span>
            <span>→</span>
          </div>
        </div>
      </div>
    </div>
  )
}
