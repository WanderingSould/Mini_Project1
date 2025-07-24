import { Header } from "../components/Header"
import { AboutSection } from "../components/AboutSection"
import { FeaturesSection } from "../components/FeaturesSection"
import { ModulesSection } from "../components/ModulesSection"
import { TechStackSection } from "../components/TechStackSection"
import { UsersSection } from "../components/UsersSection"
import { Footer } from "../components/Footer"

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        <AboutSection />
        <FeaturesSection />
        <ModulesSection />
        <TechStackSection />
        <UsersSection />
      </main>
      <Footer />
    </>
  )
}
