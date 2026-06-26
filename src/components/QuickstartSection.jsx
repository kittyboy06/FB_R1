import { useState } from 'react'

export function QuickstartSection() {
  const [activeTab, setActiveTab] = useState('npm')
  const [copied, setCopied] = useState(false)

  const commands = {
    npm: 'npm install @armory/sdk\narmory init my-workflow\narmory deploy',
    yarn: 'yarn add @armory/sdk\narmory init my-workflow\narmory deploy',
    pnpm: 'pnpm add @armory/sdk\narmory init my-workflow\narmory deploy'
  }

  const handleCopy = () => {
    navigator.clipboard.writeText(commands[activeTab])
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <section id="quickstart-section" aria-label="Quickstart" className="py-24 px-4 bg-oceanic-noir relative overflow-hidden border-b border-arctic-powder/5">
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Quickstart terminal (5 cols) */}
          <div className="lg:col-span-5 text-left animate-fade-up">
            <span className="text-xs uppercase font-heading font-bold text-mystic-mint mb-4 inline-block">Developer Quickstart</span>
            <h2 className="text-3xl font-heading font-bold mb-4 text-white">Build in 5 minutes</h2>
            <p className="text-xs sm:text-sm text-arctic-powder/60 mb-8 font-body leading-relaxed">
              Install the SDK, initialize a template workflow, and deploy to your isolated compositor thread. Most devs ship their first agent in under 8 minutes.
            </p>

            {/* Terminal Window */}
            <div className="glass-panel rounded-3xl overflow-hidden bg-oceanic-noir/95 border border-arctic-powder/10 shadow-xl relative select-text">
              {/* Terminal Title Bar */}
              <div className="flex items-center justify-between border-b border-arctic-powder/5 px-5 py-3.5 select-none">
                <div className="flex gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#27C93F]" />
                  <span className="text-[9px] text-arctic-powder/35 ml-2 font-mono">quickstart.sh</span>
                </div>
                <button
                  onClick={handleCopy}
                  className="px-2.5 py-1 rounded bg-arctic-powder/5 hover:bg-arctic-powder/10 border border-arctic-powder/10 text-[9px] text-arctic-powder/60 hover:text-white font-heading font-bold transition-all duration-150 cursor-pointer"
                >
                  {copied ? 'Copied ✓' : 'Copy'}
                </button>
              </div>

              {/* Package Selector Tabs */}
              <div className="flex border-b border-arctic-powder/5 select-none bg-oceanic-noir/40">
                {['npm', 'yarn', 'pnpm'].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`px-5 py-2.5 text-[9px] font-heading uppercase tracking-wider font-semibold border-b transition-all duration-150 cursor-pointer ${
                      activeTab === tab
                        ? 'border-forsythia text-forsythia bg-oceanic-noir/10 font-bold'
                        : 'border-transparent text-arctic-powder/40 hover:text-arctic-powder/70'
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>

              {/* Commands Content */}
              <div className="p-5 font-mono text-[10px] leading-relaxed text-mystic-mint/90">
                <div className="flex gap-2">
                  <span className="text-arctic-powder/20 select-none">$</span>
                  <span>{commands[activeTab].split('\n')[0]}</span>
                </div>
                <div className="flex gap-2 mt-1.5">
                  <span className="text-arctic-powder/20 select-none">$</span>
                  <span>{commands[activeTab].split('\n')[1]}</span>
                </div>
                <div className="flex gap-2 mt-1.5">
                  <span className="text-arctic-powder/20 select-none">$</span>
                  <span>{commands[activeTab].split('\n')[2]}</span>
                </div>
                <div className="text-arctic-powder/20 mt-4 select-none"># → Live on thread-isolated compositor nodes in 23s</div>
              </div>
            </div>
          </div>

          {/* Right Column: Comparison Table (7 cols) */}
          <div className="lg:col-span-7 animate-fade-up [animation-delay:100ms] text-left">
            <span className="text-xs uppercase font-heading font-bold text-mystic-mint mb-4 inline-block">Architecture Audit</span>
            <h2 className="text-3xl font-heading font-bold mb-4 text-white">Compare alternative stacks</h2>
            <p className="text-xs sm:text-sm text-arctic-powder/60 mb-8 font-body leading-relaxed">
              We invite comparison. Check how Armory's compositor thread isolation stacks up against LangChain, Temporal, and cloud functions.
            </p>

            {/* Table wrapper */}
            <div className="overflow-x-auto glass-panel rounded-3xl border border-arctic-powder/5 shadow-xl select-none">
              <table className="w-full text-left border-collapse text-[10px] sm:text-xs">
                <thead>
                  <tr className="border-b border-arctic-powder/5 bg-oceanic-noir/40">
                    <th className="p-4 font-heading font-bold text-white">Capabilities</th>
                    <th className="p-4 font-heading font-bold text-forsythia">Armory</th>
                    <th className="p-4 font-heading font-bold text-white/50">LangChain</th>
                    <th className="p-4 font-heading font-bold text-white/50">Temporal</th>
                    <th className="p-4 font-heading font-bold text-white/50">AWS Steps</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-arctic-powder/5 text-arctic-powder/80 font-body font-medium">
                  <tr>
                    <td className="p-4 font-heading font-semibold text-white">Zero-reflow state</td>
                    <td className="p-4 text-lg">✅</td>
                    <td className="p-4 text-lg">❌</td>
                    <td className="p-4 text-lg">⚠️</td>
                    <td className="p-4 text-lg">❌</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-heading font-semibold text-white">Sub-ms latency</td>
                    <td className="p-4 text-lg">✅</td>
                    <td className="p-4 text-lg">❌</td>
                    <td className="p-4 text-lg">❌</td>
                    <td className="p-4 text-lg">❌</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-heading font-semibold text-white">Compositor canvas</td>
                    <td className="p-4 text-lg">✅</td>
                    <td className="p-4 text-lg">❌</td>
                    <td className="p-4 text-lg">❌</td>
                    <td className="p-4 text-lg">❌</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-heading font-semibold text-white">Pricing isolation</td>
                    <td className="p-4 text-lg">✅</td>
                    <td className="p-4 text-lg">❌</td>
                    <td className="p-4 text-lg">⚠️</td>
                    <td className="p-4 text-lg">❌</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
