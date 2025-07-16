import { Header } from "../components/Header"
import { HeroSection } from "../components/HeroSection"
import { FeaturesOverview } from "../components/FeaturesOverview"
import { QuickStats } from "../components/QuickStats"
import { CallToAction } from "../components/CallToAction"
import { Footer } from "../components/Footer"

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <QuickStats />
        <FeaturesOverview />
        <CallToAction />
      </main>
      <Footer />
    </>
  )
}
