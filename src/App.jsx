import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { FeaturesSection } from './components/FeaturesSection'
import { PricingSection } from './components/PricingSection'
import { SocialProof } from './components/SocialProof'
import { Footer } from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-oceanic-noir text-arctic-powder selection:bg-forsythia/25 selection:text-white">
      <Header />
      <main>
        <Hero />
        <FeaturesSection />
        <PricingSection />
        <SocialProof />
      </main>
      <Footer />
    </div>
  )
}

export default App
