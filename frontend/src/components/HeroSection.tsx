import { Button } from "./ui/button"
import { Badge } from "./ui/badge"
import { Play, Download, Github } from "lucide-react"
import { Link } from "react-router-dom"

export function HeroSection() {
  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto text-center">
        <Badge className="mb-6 bg-purple-600/20 text-purple-300 border-purple-400/30">
          AI-Powered Gaming Assistant
        </Badge>

        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
          CAGE
          <span className="block text-3xl md:text-4xl text-purple-400 font-normal mt-2">Your AI Game Companion</span>
        </h1>

        <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
          A revolutionary browser-based AI assistant that provides real-time insights, voice interaction, and game
          analysis while you play. Start offline, upgrade to hybrid mode.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Link to="/demo">
            <Button size="lg" className="bg-purple-600 hover:bg-purple-700 text-lg px-8 py-3">
              <Play className="mr-2 h-5 w-5" />
              Try Demo
            </Button>
          </Link>
          <Button
            size="lg"
            variant="outline"
            className="border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white text-lg px-8 py-3 bg-transparent"
          >
            <Download className="mr-2 h-5 w-5" />
            Download
          </Button>
          <Button size="lg" variant="ghost" className="text-gray-300 hover:text-white text-lg px-8 py-3">
            <Github className="mr-2 h-5 w-5" />
            GitHub
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="text-3xl font-bold text-purple-400 mb-2">100%</div>
            <div className="text-gray-300">Offline Capable</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-purple-400 mb-2">Real-time</div>
            <div className="text-gray-300">AI Insights</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-purple-400 mb-2">Voice</div>
            <div className="text-gray-300">Commands</div>
          </div>
        </div>
      </div>
    </section>
  )
}
