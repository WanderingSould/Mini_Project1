import { Header } from "@/components/header"
import { DemoSection } from "@/components/demo-section"
import { Footer } from "@/components/footer"

export default function DemoPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Header />
      <main className="pt-20">
        <DemoSection />
      </main>
      <Footer />
    </div>
  )
}
