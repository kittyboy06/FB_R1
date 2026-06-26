import { useState, useEffect, useRef } from 'react'

const LOG_STEPS = [
  { time: '0.00s', type: 'info', text: '🟢 Webhook trigger received with payload { action: "verify_payment" }' },
  { time: '0.10s', type: 'info', text: '⚡ Thread isolation initialized on compositor runner node-2' },
  { time: '0.22s', type: 'info', text: '🤖 Agent routing workflow state context: Webhook → Orchestrator' },
  { time: '0.35s', type: 'warn', text: '⚠️ ERROR: LLM Provider timeout (504 Gateway Timeout at step 3)' },
  { time: '0.38s', type: 'process', text: '🔄 Self-healing loop triggered: performing node state auto-recovery...' },
  { time: '0.60s', type: 'success', text: '🟢 RECOVERY COMPLETED in 220ms (switched backup model endpoint)' },
  { time: '0.72s', type: 'info', text: '🤖 Agent executing step 4: validating parameters & dispatching webhook' },
  { time: '0.85s', type: 'success', text: '✅ Pipeline execution completed successfully in 850ms' }
]

export function PlaygroundSection() {
  const [activeNode, setActiveNode] = useState(-1) // -1=idle, 0=trigger, 1=orchestrator, 2=validator, 3=action
  const [logs, setLogs] = useState([])
  const [isRunning, setIsRunning] = useState(false)
  const consoleEndRef = useRef(null)

  const runDemo = () => {
    if (isRunning) return
    setIsRunning(true)
    setLogs([])
    setActiveNode(0)

    let currentLogIndex = 0
    const sequence = [
      { node: 0, logCount: 2, delay: 0 },       // Trigger (webhook)
      { node: 1, logCount: 1, delay: 1000 },    // Orchestrator
      { node: 2, logCount: 3, delay: 2000 },    // LLM Validator (has error & recovery)
      { node: 3, logCount: 2, delay: 4200 }     // Action
    ]

    sequence.forEach((step, stepIdx) => {
      setTimeout(() => {
        setActiveNode(step.node)
        
        // Append logs for this step one by one
        for (let i = 0; i < step.logCount; i++) {
          const logItem = LOG_STEPS[currentLogIndex]
          if (logItem) {
            setTimeout(() => {
              setLogs(prev => [...prev, logItem])
            }, i * 400)
            currentLogIndex++
          }
        }

        // Reset to idle on completion
        if (stepIdx === sequence.length - 1) {
          setTimeout(() => {
            setIsRunning(false)
            setActiveNode(-1)
          }, 1800)
        }
      }, step.delay)
    })
  }

  useEffect(() => {
    if (logs.length > 0 && consoleEndRef.current) {
      consoleEndRef.current.scrollIntoView({ behavior: 'smooth' })
    }
  }, [logs])

  const nodes = [
    { title: "Webhook Trigger", subtitle: "REST Endpoint", icon: "⚡" },
    { title: "Orchestrator", subtitle: "Thread isolated", icon: "🤖" },
    { title: "LLM Validator", subtitle: "Self-healing loops", icon: "👁️" },
    { title: "Email Action", subtitle: "SMTP Webhook", icon: "✉️" }
  ]

  return (
    <section id="playground" aria-label="Playground" className="py-24 px-4 bg-oceanic-noir relative overflow-hidden border-b border-arctic-powder/5">
      {/* Radiant glow */}
      <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-nocturnal-expedition/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-up">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-nocturnal-expedition border border-mystic-mint/10 text-mystic-mint text-xs font-semibold mb-4">
            <span>Live Agent Sandbox</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4 tracking-tight text-white">
            Run a self-healing pipeline
          </h2>
          <p className="text-sm md:text-base text-arctic-powder/60 max-w-xl mx-auto font-body">
            Interact with the orchestration canvas below. Press run to inspect execution flows and watch the LLM validator recover dynamically.
          </p>
        </div>

        {/* Sandbox Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch select-none">
          {/* Left Canvas: 7 columns */}
          <div className="glass-panel p-8 rounded-3xl lg:col-span-7 flex flex-col justify-between min-h-[400px]">
            <div className="flex items-center justify-between mb-8 border-b border-arctic-powder/5 pb-4">
              <span className="text-xs font-heading font-bold text-white uppercase tracking-wider">Orchestration Canvas</span>
              <button
                onClick={runDemo}
                disabled={isRunning}
                className={`px-5 py-2 rounded-full font-bold text-xs transition-all duration-200 cursor-pointer ${
                  isRunning
                    ? 'bg-arctic-powder/5 border border-arctic-powder/10 text-arctic-powder/40 cursor-not-allowed'
                    : 'bg-forsythia text-oceanic-noir shadow-lg shadow-forsythia/15 hover:scale-[1.02] active:scale-[0.98]'
                }`}
              >
                {isRunning ? 'Running Pipeline...' : 'Run Mock Agent →'}
              </button>
            </div>

            {/* Visual Workflow Nodes */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-6 py-6 relative">
              {/* Connector lines (Desktop) */}
              <div className="absolute top-[35px] left-8 right-8 h-0.5 border-t border-dashed border-arctic-powder/10 hidden sm:block z-0" />
              
              {nodes.map((node, i) => {
                const isCurrent = activeNode === i
                // Special error state color for validator step (index 2) during timeout
                const isErrorState = isCurrent && i === 2 && logs.length >= 4 && logs.length < 6
                
                let borderClass = 'border-arctic-powder/10 bg-oceanic-noir/60'
                let textClass = 'text-arctic-powder/80'
                let iconWrapperClass = 'bg-nocturnal-expedition border-mystic-mint/10 text-mystic-mint/60'

                if (isCurrent) {
                  if (isErrorState) {
                    borderClass = 'border-deep-saffron bg-[#FF9932]/10 shadow-[0_0_15px_rgba(255,153,50,0.2)] animate-pulse'
                    textClass = 'text-white'
                    iconWrapperClass = 'bg-deep-saffron text-oceanic-noir border-none'
                  } else {
                    borderClass = 'border-forsythia bg-forsythia/5 shadow-[0_0_15px_rgba(255,200,1,0.2)]'
                    textClass = 'text-white'
                    iconWrapperClass = 'bg-forsythia text-oceanic-noir border-none'
                  }
                }

                return (
                  <div
                    key={i}
                    className={`flex flex-col items-center text-center relative z-10 w-full sm:w-1/4 p-4 border rounded-2xl transition-all duration-300 ${borderClass}`}
                  >
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center text-base mb-3 transition-colors duration-300 ${iconWrapperClass}`}>
                      {node.icon}
                    </div>
                    <span className={`text-xs font-bold font-heading mb-1 transition-colors duration-300 ${textClass}`}>
                      {node.title}
                    </span>
                    <span className="text-[9px] text-arctic-powder/40 font-body">
                      {node.subtitle}
                    </span>
                  </div>
                )
              })}
            </div>
            
            {/* Visual Canvas Info */}
            <div className="text-[10px] text-arctic-powder/55 leading-relaxed border-t border-arctic-powder/5 pt-4 mt-8 text-left font-body">
              ⚡ All agents are run thread-isolated on the browser compositor layer, preventing main-thread execution lag.
            </div>
          </div>

          {/* Right Console: 5 columns */}
          <div className="glass-panel p-6 rounded-3xl lg:col-span-5 flex flex-col justify-between bg-oceanic-noir/90 relative overflow-hidden min-h-[400px]">
            {/* Console Header */}
            <div className="flex gap-1.5 border-b border-arctic-powder/5 pb-3 mb-4 shrink-0">
              <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F56] inline-block" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E] inline-block" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#27C93F] inline-block" />
              <span className="text-[9px] text-arctic-powder/35 ml-2 font-mono">execution_log.sh</span>
            </div>

            {/* Console output stream */}
            <div className="flex-1 overflow-y-auto font-mono text-[9px] leading-relaxed text-left space-y-2 pr-2 h-[260px] scrollbar-thin">
              {logs.length === 0 ? (
                <div className="text-arctic-powder/30 italic">Console idle. Click Run Pipeline to start agent stream.</div>
              ) : (
                logs.map((log, idx) => {
                  let colorClass = 'text-arctic-powder/70'
                  if (log.type === 'warn') colorClass = 'text-deep-saffron font-semibold'
                  if (log.type === 'success') colorClass = 'text-mystic-mint font-semibold'
                  if (log.type === 'process') colorClass = 'text-forsythia'

                  return (
                    <div key={idx} className="flex gap-2">
                      <span className="text-arctic-powder/25 select-none shrink-0">{log.time}</span>
                      <span className={colorClass}>{log.text}</span>
                    </div>
                  )
                })
              )}
              <div ref={consoleEndRef} />
            </div>
            
            {/* Console Footer */}
            <div className="text-[8px] text-arctic-powder/20 font-mono mt-4 border-t border-arctic-powder/5 pt-2 flex justify-between shrink-0">
              <span>STATUS: {isRunning ? 'RUNNING' : 'IDLE'}</span>
              <span>COMPOSITOR REGION 0x2e</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
