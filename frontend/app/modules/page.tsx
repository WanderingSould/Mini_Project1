import { Header } from "@/components/header"
import { ModulesSection } from "@/components/modules-section"
import { Footer } from "@/components/footer"

export default function ModulesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Header />
      <main className="pt-20">
        <div className="container mx-auto px-4 py-12">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold text-white mb-4">System Modules</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Explore the modular architecture that powers CAGE's intelligent gaming assistance
            </p>
          </div>
        </div>
        <ModulesSection />
      </main>
      <Footer />
    </div>
  )
}
