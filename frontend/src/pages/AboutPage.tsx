import { Header } from "../components/Header"
import { AboutSection } from "../components/AboutSection"
import { Footer } from "../components/Footer"

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        <AboutSection />
      </main>
      <Footer />
    </>
  )
}
