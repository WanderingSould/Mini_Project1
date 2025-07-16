import { Header } from "../components/Header"
import { FeaturesSection } from "../components/FeaturesSection"
import { Footer } from "../components/Footer"

export default function FeaturesPage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        <div className="container mx-auto px-4 py-12">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold text-white mb-4">Features</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover the powerful capabilities that make CAGE the ultimate AI gaming companion
            </p>
          </div>
        </div>
        <FeaturesSection />
      </main>
      <Footer />
    </>
  )
}
