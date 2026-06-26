export function HowItWorks() {
  return (
    <section id="how-it-works" aria-label="Architecture" className="py-24 px-4 bg-oceanic-noir relative overflow-hidden border-b border-arctic-powder/5">
      {/* Decorative radial glows */}
      <div className="absolute top-0 right-1/4 w-[350px] h-[350px] bg-nocturnal-expedition/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-[350px] h-[350px] bg-deep-saffron/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-up">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-nocturnal-expedition border border-mystic-mint/10 text-mystic-mint text-xs font-semibold mb-4">
            <span>Operational Integrity</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4 tracking-tight text-white">
            How it works under the hood
          </h2>
          <p className="text-sm md:text-base text-arctic-powder/60 max-w-xl mx-auto font-body">
            Armory intercepts orchestration calls and compiles them into thread-isolated pipelines that run independently from your main server thread.
          </p>
        </div>

        {/* Interactive Architecture Flowchart */}
        <div className="max-w-4xl mx-auto py-12 relative flex flex-col md:flex-row items-center justify-between gap-12 select-none">
          {/* Connector Loop lines */}
          <div className="absolute top-[45px] left-12 right-12 h-1 border-t-2 border-dashed border-arctic-powder/5 hidden md:block z-0" />

          {/* Block 1 */}
          <div className="flex flex-col items-center text-center relative z-10 w-full md:w-1/3 p-6 glass-panel rounded-2xl">
            <div className="w-10 h-10 rounded-xl bg-nocturnal-expedition/60 border border-mystic-mint/20 flex items-center justify-center text-mystic-mint mb-4 font-bold text-sm">
              01
            </div>
            <h3 className="text-sm font-heading font-bold mb-2 text-white">Your App / API</h3>
            <p className="text-[11px] text-arctic-powder/60 font-body leading-relaxed">
              Install the client SDK and trigger workflows via REST endpoints or function calls.
            </p>
          </div>

          {/* Block 2 */}
          <div className="flex flex-col items-center text-center relative z-10 w-full md:w-1/3 p-6 glass-panel rounded-2xl border-forsythia/20 shadow-lg shadow-forsythia/5">
            {/* Glowing tracer dot running on path */}
            <div className="absolute top-[-5px] left-1/2 -translate-x-1/2 w-2.5 h-2.5 bg-forsythia rounded-full animate-ping pointer-events-none" />
            <div className="w-10 h-10 rounded-xl bg-forsythia/10 border border-forsythia/30 flex items-center justify-center text-forsythia mb-4 font-bold text-sm">
              02
            </div>
            <h3 className="text-sm font-heading font-bold mb-2 text-white">Compositor Thread</h3>
            <p className="text-[11px] text-arctic-powder/60 font-body leading-relaxed">
              Your workflow execution context isolates into a separate high-speed thread loop.
            </p>
          </div>

          {/* Block 3 */}
          <div className="flex flex-col items-center text-center relative z-10 w-full md:w-1/3 p-6 glass-panel rounded-2xl">
            <div className="w-10 h-10 rounded-xl bg-nocturnal-expedition/60 border border-mystic-mint/20 flex items-center justify-center text-mystic-mint mb-4 font-bold text-sm">
              03
            </div>
            <h3 className="text-sm font-heading font-bold mb-2 text-white">Secure Output</h3>
            <p className="text-[11px] text-arctic-powder/60 font-body leading-relaxed">
              The agent loop completes, healing errors dynamically and executing final actions.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
