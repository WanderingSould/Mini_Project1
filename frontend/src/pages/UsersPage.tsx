import { Header } from "../components/Header"
import { UsersSection } from "../components/UsersSection"
import { Footer } from "../components/Footer"

export default function UsersPage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        <div className="container mx-auto px-4 py-12">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold text-white mb-4">Target Users</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              CAGE is designed for gamers of all levels and backgrounds
            </p>
          </div>
        </div>
        <UsersSection />
      </main>
      <Footer />
    </>
  )
}
