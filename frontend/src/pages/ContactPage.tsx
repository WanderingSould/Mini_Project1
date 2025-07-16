import { Header } from "../components/Header"
import { ContactSection } from "../components/ContactSection"
import { Footer } from "../components/Footer"

export default function ContactPage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        <ContactSection />
      </main>
      <Footer />
    </>
  )
}
