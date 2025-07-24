import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card"
import { Badge } from "./ui/badge"
import { User, GraduationCap, Target, Lightbulb } from "lucide-react"

export function AboutSection() {
  return (
    <section className="min-h-screen flex items-center justify-center py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-24 [perspective:1000px] relative before:absolute before:inset-0 before:bg-purple-500/20 before:blur-3xl before:scale-150 before:-z-10">
          <h1 className="text-7xl font-bold text-white mb-8 [text-shadow:0_4px_8px_rgba(0,0,0,0.5)]">About CAGE</h1>
          <p className="text-2xl text-gray-300 max-w-3xl mx-auto tracking-wide">
            C - Carefully  A - Analysed  G - Game  E - Enthusiast!
          </p>
        </div>

        {/* Project Overview */}
        <div className="mb-24">
          <Card className="bg-white/5 border-white/10 backdrop-blur-sm motion-safe:transition-all motion-safe:duration-300 hover:scale-[1.02] hover:bg-white/10">
            <CardHeader>
              <CardTitle className="text-white text-2xl">Project Overview</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-300 leading-relaxed">
                CAGE (AI Game Assistant) is a revolutionary browser-based AI assistant designed to help gamers by
                providing real-time insights, voice interaction, and game analysis while they play. The project
                prioritizes privacy and performance by starting as a fully offline solution, ensuring low latency,
                privacy, and no internet dependency.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Our vision is to create an AI companion that enhances gaming experiences without compromising user
                privacy or requiring constant internet connectivity. The modular architecture allows for easy expansion
                from offline-first to hybrid cloud integration.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Team */}
        <div className="mb-24 relative before:absolute before:inset-0 before:bg-purple-500/10 before:blur-3xl before:-z-10">
          <h2 className="text-4xl font-bold text-white mb-12 text-center [text-shadow:0_4px_8px_rgba(0,0,0,0.5)]">Project Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <Card className="bg-white/5 border-white/10 backdrop-blur-sm motion-safe:transition-all motion-safe:duration-500 hover:scale-105 hover:bg-white/10 hover:[transform-style:preserve-3d] hover:shadow-2xl">
              <CardHeader className="text-center">
                <User className="h-16 w-16 text-purple-400 mx-auto mb-4" />
                <CardTitle className="text-white">Swaroop Suresh</CardTitle>
                <CardDescription className="text-purple-300">Project Presenter</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 text-center">
                  Lead developer and researcher responsible for the design and implementation of CAGE's AI gaming
                  assistant capabilities.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/5 border-white/10 backdrop-blur-sm motion-safe:transition-all motion-safe:duration-500 hover:scale-105 hover:bg-white/10 hover:[transform-style:preserve-3d] hover:shadow-2xl">
              <CardHeader className="text-center">
                <GraduationCap className="h-16 w-16 text-purple-400 mx-auto mb-4" />
                <CardTitle className="text-white">Dr. Sowmya K Menon</CardTitle>
                <CardDescription className="text-purple-300">Project Guide</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 text-center">
                  Academic supervisor providing guidance on AI implementation, research methodology, and project
                  development best practices.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Project Goals */}
        <div className="mb-24 relative before:absolute before:inset-0 before:bg-purple-500/10 before:blur-3xl before:-z-10">
          <h2 className="text-4xl font-bold text-white mb-12 text-center [text-shadow:0_4px_8px_rgba(0,0,0,0.5)]">Project Goals</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <Card className="bg-white/5 border-white/10 backdrop-blur-sm motion-safe:transition-all motion-safe:duration-500 hover:scale-105 hover:bg-white/10 hover:[transform-style:preserve-3d] hover:shadow-2xl">
              <CardHeader>
                <Target className="h-8 w-8 text-purple-400 mb-2" />
                <CardTitle className="text-white">Primary Objectives</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Provide real-time game assistance without internet dependence</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Ensure low-latency AI processing using local models</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Offer seamless UI integration with overlay-based HUD</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Maintain privacy-first design philosophy</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-white/5 border-white/10  hover:bg-white/10 transition-all duration-300 hover:scale-105">
              <CardHeader>
                <Lightbulb className="h-8 w-8 text-purple-400 mb-2" />
                <CardTitle className="text-white">Innovation Focus</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Offline-first AI gaming assistance</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Modular architecture for easy scaling</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Multi-modal interaction (voice, text, visual)</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Cross-platform compatibility</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Development Phases */}
        <div className="relative before:absolute before:inset-0 before:bg-purple-500/10 before:blur-3xl before:-z-10">
          <h2 className="text-4xl font-bold text-white mb-12 text-center [text-shadow:0_4px_8px_rgba(0,0,0,0.5)]">Development Phases</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <Card className="bg-white/5 border-white/10 backdrop-blur-sm motion-safe:transition-all motion-safe:duration-500 hover:scale-105 hover:bg-white/10 hover:[transform-style:preserve-3d] hover:shadow-2xl">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-white text-xl">Phase 1: Offline Foundation</CardTitle>
                  <Badge className="bg-green-500/20 text-green-300">Current</Badge>
                </div>
                <CardDescription className="text-gray-300">
                  Building the core offline capabilities with local AI processing
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2 ">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    <span className="text-gray-300 text-sm">Local LLM integration (Ollama)</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    <span className="text-gray-300 text-sm">Voice recognition (Vosk-WASM)</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    <span className="text-gray-300 text-sm">OCR game data extraction</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    <span className="text-gray-300 text-sm">HUD overlay system</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/5 border-white/10  hover:bg-white/10 transition-all duration-300 hover:scale-105">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-white text-xl">Phase 2: Hybrid Integration</CardTitle>
                  <Badge className="bg-purple-500/20 text-purple-300">Planned</Badge>
                </div>
                <CardDescription className="text-gray-300">
                  Expanding with cloud AI and game API integrations
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                    <span className="text-gray-300 text-sm">Game API integration (Riot, Steam)</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                    <span className="text-gray-300 text-sm">Cloud AI models (GPT-4 API)</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                    <span className="text-gray-300 text-sm">Enhanced voice recognition</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                    <span className="text-gray-300 text-sm">Cloud synchronization</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
