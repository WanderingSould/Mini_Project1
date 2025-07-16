import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { FeaturesOverview } from "@/components/features-overview"
import { QuickStats } from "@/components/quick-stats"
import { CallToAction } from "@/components/call-to-action"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Header />
      <main>
        <HeroSection />
        <QuickStats />
        <FeaturesOverview />
        <CallToAction />
      </main>
      <Footer />
    </div>
  )
}
