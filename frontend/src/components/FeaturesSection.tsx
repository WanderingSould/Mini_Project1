import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card"
import { Badge } from "./ui/badge"
import { Brain, Mic, Eye, Monitor, Volume2, Database, Cloud, Zap } from "lucide-react"

export function FeaturesSection() {
  const offlineFeatures = [
    {
      icon: Brain,
      title: "AI Chatbot",
      description: "Local LLM powered by Ollama for intelligent game assistance",
      tech: "Ollama",
    },
    {
      icon: Mic,
      title: "Voice Commands",
      description: "Hands-free interaction with offline voice recognition",
      tech: "Vosk-WASM",
    },
    {
      icon: Eye,
      title: "Game Data Extraction",
      description: "OCR-based real-time game statistics reading",
      tech: "Tesseract.js",
    },
    {
      icon: Monitor,
      title: "HUD Overlay",
      description: "Non-intrusive popup chatbot and game overlay",
      tech: "React.js",
    },
    {
      icon: Volume2,
      title: "Text-to-Speech",
      description: "AI-powered voice guidance for gameplay",
      tech: "Coqui TTS",
    },
    {
      icon: Database,
      title: "Local Storage",
      description: "Fast, secure local data storage",
      tech: "SQLite",
    },
  ]

  const hybridFeatures = [
    {
      icon: Cloud,
      title: "Game API Integration",
      description: "Connect to Riot API, Steam API, Overwolf API",
      tech: "Multiple APIs",
    },
    {
      icon: Brain,
      title: "Cloud AI",
      description: "Enhanced AI capabilities with GPT-4 integration",
      tech: "GPT-4 API",
    },
    {
      icon: Mic,
      title: "Online Voice Recognition",
      description: "Faster, more accurate voice processing",
      tech: "Web Speech API",
    },
    {
      icon: Zap,
      title: "Cloud Syncing",
      description: "Sync data across all your devices",
      tech: "MongoDB Atlas",
    },
  ]

  return (
    <section id="features" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Powerful Features</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Start with full offline functionality, then upgrade to hybrid mode for enhanced capabilities
          </p>
        </div>

        {/* Offline Features */}
        <div className="mb-16">
          <div className="flex items-center justify-center mb-8">
            <Badge className="bg-green-600/20 text-green-300 border-green-400/30 text-lg px-4 py-2">
              Phase 1: Offline Features
            </Badge>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {offlineFeatures.map((feature, index) => (
              <Card key={index} className="bg-white/5 border-white/10 hover:bg-white/10 transition-colors duration-300">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <feature.icon className="h-8 w-8 text-purple-400" />
                    <div>
                      <CardTitle className="text-white">{feature.title}</CardTitle>
                      <Badge variant="outline" className="text-xs mt-1 border-purple-400/30 text-purple-300">
                        {feature.tech}
                      </Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-300">{feature.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Hybrid Features */}
        <div>
          <div className="flex items-center justify-center mb-8">
            <Badge className="bg-blue-600/20 text-blue-300 border-blue-400/30 text-lg px-4 py-2">
              Phase 2: Hybrid Features
            </Badge>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {hybridFeatures.map((feature, index) => (
              <Card key={index} className="bg-white/5 border-white/10 hover:bg-white/10 transition-colors duration-300">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <feature.icon className="h-8 w-8 text-blue-400" />
                    <div>
                      <CardTitle className="text-white text-sm">{feature.title}</CardTitle>
                      <Badge variant="outline" className="text-xs mt-1 border-blue-400/30 text-blue-300">
                        {feature.tech}
                      </Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-300 text-sm">{feature.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
