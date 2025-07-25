import { Gamepad2, Github, Twitter, Mail } from "lucide-react"
import { Button } from "./ui/button"

export function Footer() {
  return (
    <footer className="bg-black/40 border-t border-white/10 py-12 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Gamepad2 className="h-8 w-8 text-purple-400" />
              <span className="text-2xl font-bold text-white">CAGE</span>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              The revolutionary AI Game Assistant that provides real-time insights, voice interaction, and game analysis
              while maintaining privacy and performance.
            </p>
            <div className="flex space-x-4">
              <a href="https://github.com/WanderingSould" target="_blank">
                <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white">
                  <Github className="h-5 w-5" />
                </Button>
              </a>
              <a href="https://x.com/Shenoy_Scripts" target="_blank">
                <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white">
                  <Twitter className="h-5 w-5" />
                </Button>
              </a>
              <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white">
                <Mail className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          {/* <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="/features" className="text-gray-400 hover:text-purple-400 transition-colors">
                  Features
                </a>
              </li>
              <li>
                <a href="/modules" className="text-gray-400 hover:text-purple-400 transition-colors">
                  Modules
                </a>
              </li>
              <li>
                <a href="/tech-stack" className="text-gray-400 hover:text-purple-400 transition-colors">
                  Tech Stack
                </a>
              </li>
              <li>
                <a href="/users" className="text-gray-400 hover:text-purple-400 transition-colors">
                  Users
                </a>
              </li>
              <li>
                <a href="/demo" className="text-gray-400 hover:text-purple-400 transition-colors">
                  Demo
                </a>
              </li>
            </ul>
          </div> */}

          {/* Project Info */}
          <div className="md:col-start-4 md:text-right">
            <h3 className="text-white font-semibold mb-4">Project</h3>
            <ul className="space-y-2">
              <li>
                <span className="text-gray-400">Presenter:</span> <span className="text-white">Swaroop Suresh</span>
              </li>
              <li>
                <span className="text-gray-400">Guide:</span> <span className="text-white">Dr. Sowmya K Menon</span>
              </li>
              <li>
                <span className="text-gray-400">Status:</span> <span className="text-purple-400">In Development</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-8 pt-8 text-center">
          <p className="text-gray-400">© 2025 CAGE - AI Game Assistant. Built with privacy and performance in mind.</p>
        </div>
      </div>
    </footer>
  )
}
