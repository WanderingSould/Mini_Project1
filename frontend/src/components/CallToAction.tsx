import { Button } from "./ui/button"
import { Card, CardContent } from "./ui/card"
import { Play, Download, Github } from "lucide-react"
import { Link } from "react-router-dom"

export function CallToAction() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <Card className="bg-white/5 border-white/10 hover:bg-white/10 transition-colors duration-300">
          <CardContent className="p-12 text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Ready to Transform Your Gaming?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Join the future of AI-assisted gaming with privacy-first design and cutting-edge technology. Start your
              journey with CAGE today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link to="/demo">
                <Button size="lg" className="bg-purple-600 hover:bg-purple-700 text-lg px-8 py-3">
                  <Play className="mr-2 h-5 w-5" />
                  Try Demo
                </Button>
              </Link>
              <Link to="/downloads">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white text-lg px-8 py-3 bg-transparent"
                >
                  <Download className="mr-2 h-5 w-5" />
                  Download Beta
                </Button>
              </Link>
              <a href="https://github.com/WanderingSould" target="_blank">
                <Button size="lg" variant="ghost" className="text-gray-300 hover:text-white text-lg px-8 py-3">
                  <Github className="mr-2 h-5 w-5" />
                  View Source
                </Button>
              </a>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
