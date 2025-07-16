import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card"
import { Brain, Mic, ScanLine, Monitor, Volume2, Database, Plug } from "lucide-react"

export function ModulesSection() {
  const modules = [
    {
      icon: Brain,
      title: "Core AI Module",
      description: "Handles game strategy, chatbot responses, and AI decision-making",
      features: [
        "Local AI Processing (Llama, Mistral, Phi-3)",
        "Contextual Game Strategies & Tips",
        "Hybrid Mode: GPT-4 API for Advanced Insights",
      ],
    },
    {
      icon: Mic,
      title: "Voice Recognition Module",
      description: "Enables hands-free interaction with the AI assistant",
      features: [
        "Local voice command processing",
        "Basic in-game queries support",
        "Hybrid Mode: Faster Web Speech API",
      ],
    },
    {
      icon: ScanLine,
      title: "Game Data Extraction Module",
      description: "Extracts real-time game stats using OCR or game APIs",
      features: [
        "OCR-based text & number reading",
        "Works with single-player games offline",
        "Hybrid Mode: Live data from game APIs",
      ],
    },
    {
      icon: Monitor,
      title: "HUD Overlay & Chat UI Module",
      description: "Displays real-time AI insights without disrupting gameplay",
      features: [
        "Floating expandable Chat UI",
        "Lightweight, minimal distraction overlay",
        "Hybrid Mode: Real-time API updates",
      ],
    },
    {
      icon: Volume2,
      title: "Text-to-Speech Module",
      description: "Reads AI-generated insights aloud for hands-free experience",
      features: ["Offline pre-trained voices", "Hands-free interaction support", "Hybrid Mode: Realistic AI voices"],
    },
    {
      icon: Database,
      title: "Data Storage & Syncing Module",
      description: "Manages user preferences, chat history, and game data",
      features: ["Local SQLite storage", "Strategy & gameplay data tracking", "Hybrid Mode: Cloud sync via MongoDB"],
    },
    {
      icon: Plug,
      title: "API & Integration Module",
      description: "Connects to online game data & external AI services",
      features: [
        "Riot API, Steam API, Overwolf API support",
        "Cloud-based AI query capabilities",
        "Live game data & match history access",
      ],
    },
  ]

  return (
    <section id="modules" className="py-20 px-4 sm:px-6 lg:px-8 bg-black/20">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">System Modules</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Modular architecture designed for scalability and easy hybrid mode upgrades
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {modules.map((module, index) => (
            <Card
              key={index}
              className="bg-white/5 border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105"
            >
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-purple-600/20 rounded-lg">
                    <module.icon className="h-8 w-8 text-purple-400" />
                  </div>
                  <div>
                    <CardTitle className="text-white text-xl">{module.title}</CardTitle>
                    <CardDescription className="text-gray-300 mt-1">{module.description}</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {module.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-300 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
