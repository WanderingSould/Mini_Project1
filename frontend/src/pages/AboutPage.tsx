import { Header } from "../components/Header"
import { AboutSection } from "../components/AboutSection"
import { FeaturesSection } from "../components/FeaturesSection"
import { ModulesSection } from "../components/ModulesSection"
import { TechStackSection } from "../components/TechStackSection"
import { UsersSection } from "../components/UsersSection"
import { Footer } from "../components/Footer"
import { AnimatedSection } from "../components/ui/animated-section"

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="pt-20 space-y-32 flex flex-col items-center justify-center w-full">
        <AnimatedSection delay={0.1} className="min-h-[80vh] w-full flex items-center justify-center">
          <AboutSection />
        </AnimatedSection>
        <AnimatedSection delay={0.15} className="min-h-[80vh] w-full flex items-center justify-center">
          <FeaturesSection />
        </AnimatedSection>
        <AnimatedSection delay={0.2} className="min-h-[80vh] w-full flex items-center justify-center">
          <ModulesSection />
        </AnimatedSection>
        <AnimatedSection delay={0.25} className="min-h-[80vh] w-full flex items-center justify-center">
          <TechStackSection />
        </AnimatedSection>
        <AnimatedSection delay={0.3} className="min-h-[80vh] w-full flex items-center justify-center">
          <UsersSection />
        </AnimatedSection>
      </main>
      <Footer />
    </>
  )
}
