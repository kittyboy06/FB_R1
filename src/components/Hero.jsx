import { useState } from 'react'
import { ThreeBg } from './ThreeBg'

export function Hero() {
  const [useCase, setUseCase] = useState('teams')

  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const useCaseDetails = {
    solo: "Automate side projects and API workflows with local agent runners.",
    teams: "Deploy self-healing pipelines across your entire engineering team.",
    enterprise: "SOC2-compliant, VPC-isolated orchestrations with dedicated support."
  }

  return (
    <section id="hero" aria-label="Hero" className="relative min-h-[90vh] flex items-center justify-center py-24 px-4 bg-oceanic-noir overflow-hidden">
      {/* 3D WebGL particle background */}
      <ThreeBg />

      {/* Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(241,246,244,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(241,246,244,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />

      {/* Radiant Glow */}
      <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-nocturnal-expedition/15 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-deep-saffron/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10 text-center">
        {/* Growth Stats Card (uses arrow-trending-up.svg) */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-nocturnal-expedition/50 border border-mystic-mint/10 text-mystic-mint text-xs font-semibold mb-6 animate-fade-in cursor-pointer hover:border-mystic-mint/30 transition-colors duration-150">
          {/* arrow-trending-up.svg */}
          <svg className="w-3.5 h-3.5 stroke-current fill-none text-forsythia" viewBox="0 0 24 24" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 0 1 5.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
          </svg>
          <span>Active Nodes Growing +42% MoM</span>
        </div>

        {/* Hero Title */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-heading font-bold text-white tracking-tight leading-[1.1] mb-6 animate-fade-up">
          Orchestrate Enterprise AI Agents on the <span className="text-forsythia drop-shadow-[0_0_15px_rgba(255,200,1,0.15)]">Compositor Thread</span>
        </h1>

        {/* Hero Subtitle (shortened & active) */}
        <p className="text-base sm:text-lg text-arctic-powder/70 font-body max-w-2xl mx-auto mb-8 leading-relaxed animate-fade-up [animation-delay:80ms]">
          Build and scale self-healing AI agents with microsecond latency. Run workflows directly on the compositor thread with zero state reflows.
        </p>

        {/* Use Case Switcher Tabs */}
        <div className="inline-flex bg-oceanic-noir/80 border border-arctic-powder/10 p-1 rounded-full items-center mb-6 animate-fade-up [animation-delay:120ms] backdrop-blur-md">
          <button
            onClick={() => setUseCase('solo')}
            className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 cursor-pointer ${
              useCase === 'solo'
                ? 'bg-forsythia text-oceanic-noir shadow-md font-bold'
                : 'text-arctic-powder/60 hover:text-arctic-powder'
            }`}
          >
            For Solo Devs
          </button>
          <button
            onClick={() => setUseCase('teams')}
            className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 cursor-pointer ${
              useCase === 'teams'
                ? 'bg-forsythia text-oceanic-noir shadow-md font-bold'
                : 'text-arctic-powder/60 hover:text-arctic-powder'
            }`}
          >
            For Teams
          </button>
          <button
            onClick={() => setUseCase('enterprise')}
            className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 cursor-pointer ${
              useCase === 'enterprise'
                ? 'bg-forsythia text-oceanic-noir shadow-md font-bold'
                : 'text-arctic-powder/60 hover:text-arctic-powder'
            }`}
          >
            For Enterprise
          </button>
        </div>

        {/* Use Case Description */}
        <div className="h-6 mb-10 text-xs sm:text-sm text-mystic-mint/80 font-heading font-medium animate-fade-up [animation-delay:140ms]">
          {useCaseDetails[useCase]}
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up [animation-delay:180ms]">
          <button
            onClick={() => scrollToSection('features')}
            className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-forsythia hover:bg-forsythia/90 text-oceanic-noir font-bold text-sm shadow-lg shadow-forsythia/15 hover:shadow-forsythia/25 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 ease-out cursor-pointer"
          >
            Build Your First Agent →
          </button>
          <button
            onClick={() => scrollToSection('pricing')}
            className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-transparent border border-arctic-powder/20 hover:border-arctic-powder/40 hover:bg-arctic-powder/5 text-white font-semibold text-sm hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 ease-out cursor-pointer"
          >
            See Plans
          </button>
        </div>
      </div>
    </section>
  )
}
