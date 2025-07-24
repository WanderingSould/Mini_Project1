import { Header } from "../components/Header"
import { DownloadsSection } from "../components/DownloadsSection"
import { Footer } from "../components/Footer"

export default function DownloadsPage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        <DownloadsSection />
      </main>
      <Footer />
    </>
  )
}