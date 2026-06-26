import { useEffect, useState } from 'react'

export function MetricsBar() {
  const [agents, setAgents] = useState(12847)
  const [executions, setExecutions] = useState(2143580)
  const [latency, setLatency] = useState(38)

  useEffect(() => {
    // Increment active agents slightly every 4 seconds
    const agentsInterval = setInterval(() => {
      setAgents(prev => prev + Math.floor(Math.random() * 3) - 1)
    }, 4000)

    // Increment executions count dynamically every second
    const executionsInterval = setInterval(() => {
      setExecutions(prev => prev + Math.floor(Math.random() * 15) + 5)
    }, 1200)

    // Vary average latency slightly around 38ms
    const latencyInterval = setInterval(() => {
      setLatency(prev => {
        const delta = Math.floor(Math.random() * 3) - 1
        const next = prev + delta
        return next >= 35 && next <= 42 ? next : prev
      })
    }, 3000)

    return () => {
      clearInterval(agentsInterval)
      clearInterval(executionsInterval)
      clearInterval(latencyInterval)
    }
  }, [])

  return (
    <section id="metrics-bar" aria-label="Real-time Metrics" className="w-full bg-oceanic-noir/40 border-y border-arctic-powder/5 py-6 px-4 backdrop-blur-md relative z-10 select-none">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6 items-center text-center">
        {/* Metric 1 */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <span className="w-2 h-2 rounded-full bg-mystic-mint animate-pulse shrink-0" />
          <div className="flex items-baseline gap-2">
            <span className="font-heading font-bold text-lg md:text-xl text-white">
              {agents.toLocaleString()}
            </span>
            <span className="text-[10px] uppercase font-body text-arctic-powder/55 font-semibold tracking-wider">
              agents active now
            </span>
          </div>
        </div>

        {/* Metric 2 */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <span className="w-2 h-2 rounded-full bg-forsythia shrink-0 animate-pulse" />
          <div className="flex items-baseline gap-2">
            <span className="font-heading font-bold text-lg md:text-xl text-forsythia">
              {latency}ms
            </span>
            <span className="text-[10px] uppercase font-body text-arctic-powder/55 font-semibold tracking-wider">
              avg execution latency
            </span>
          </div>
        </div>

        {/* Metric 3 */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <span className="w-2 h-2 rounded-full bg-deep-saffron shrink-0 animate-pulse" />
          <div className="flex items-baseline gap-2">
            <span className="font-heading font-bold text-lg md:text-xl text-white">
              {executions.toLocaleString()}
            </span>
            <span className="text-[10px] uppercase font-body text-arctic-powder/55 font-semibold tracking-wider">
              executions today
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
