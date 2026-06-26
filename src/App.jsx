import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { MetricsBar } from './components/MetricsBar'
import { PlaygroundSection } from './components/PlaygroundSection'
import { FeaturesSection } from './components/FeaturesSection'
import { HowItWorks } from './components/HowItWorks'
import { QuickstartSection } from './components/QuickstartSection'
import { PricingSection } from './components/PricingSection'
import { ChangelogSection } from './components/ChangelogSection'
import { SocialProof } from './components/SocialProof'
import { EmailCapture } from './components/EmailCapture'
import { Footer } from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-oceanic-noir text-arctic-powder selection:bg-forsythia/25 selection:text-white">
      <Header />
      <main>
        <Hero />
        <MetricsBar />
        <PlaygroundSection />
        <FeaturesSection />
        <HowItWorks />
        <QuickstartSection />
        <PricingSection />
        <ChangelogSection />
        <SocialProof />
        <EmailCapture />
      </main>
      <Footer />
    </div>
  )
}

export default App

