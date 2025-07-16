import { Header } from "../components/Header"
import { DemoSection } from "../components/DemoSection"
import { Footer } from "../components/Footer"

export default function DemoPage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        <DemoSection />
      </main>
      <Footer />
    </>
  )
}
