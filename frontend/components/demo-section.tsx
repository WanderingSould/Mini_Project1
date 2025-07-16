"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Play, Pause, Volume2, Mic, Brain, Eye } from "lucide-react"

export function DemoSection() {
  const [activeDemo, setActiveDemo] = useState("chatbot")
  const [isPlaying, setIsPlaying] = useState(false)

  const demoFeatures = [
    {
      id: "chatbot",
      title: "AI Chatbot Demo",
      description: "Experience intelligent game assistance",
      icon: Brain,
    },
    {
      id: "voice",
      title: "Voice Commands",
      description: "Try hands-free interaction",
      icon: Mic,
    },
    {
      id: "ocr",
      title: "OCR Recognition",
      description: "See real-time game data extraction",
      icon: Eye,
    },
    {
      id: "tts",
      title: "Text-to-Speech",
      description: "Listen to AI guidance",
      icon: Volume2,
    },
  ]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-6">Interactive Demo</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Experience CAGE's capabilities firsthand with our interactive demonstrations
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Demo Selection */}
          <div className="lg:col-span-1">
            <Card className="bg-white/5 border-white/10">
              <CardHeader>
                <CardTitle className="text-white">Choose a Demo</CardTitle>
                <CardDescription className="text-gray-300">Select a feature to see it in action</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                {demoFeatures.map((feature) => (
                  <Button
                    key={feature.id}
                    variant={activeDemo === feature.id ? "default" : "ghost"}
                    className={`w-full justify-start ${
                      activeDemo === feature.id
                        ? "bg-purple-600 hover:bg-purple-700"
                        : "text-gray-300 hover:text-white hover:bg-white/10"
                    }`}
                    onClick={() => setActiveDemo(feature.id)}
                  >
                    <feature.icon className="mr-3 h-5 w-5" />
                    <div className="text-left">
                      <div className="font-semibold">{feature.title}</div>
                      <div className="text-xs opacity-70">{feature.description}</div>
                    </div>
                  </Button>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Demo Display */}
          <div className="lg:col-span-2">
            <Card className="bg-white/5 border-white/10 h-full">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="text-white">{demoFeatures.find((f) => f.id === activeDemo)?.title}</CardTitle>
                    <CardDescription className="text-gray-300">
                      {demoFeatures.find((f) => f.id === activeDemo)?.description}
                    </CardDescription>
                  </div>
                  <Badge className="bg-green-600/20 text-green-300 border-green-400/30">Live Demo</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="bg-black/40 rounded-lg p-6 mb-6 min-h-[300px] flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-6xl mb-4">
                      {activeDemo === "chatbot" && "🤖"}
                      {activeDemo === "voice" && "🎤"}
                      {activeDemo === "ocr" && "👁️"}
                      {activeDemo === "tts" && "🔊"}
                    </div>
                    <p className="text-gray-400 mb-4">
                      {activeDemo === "chatbot" && "AI chatbot interface would appear here"}
                      {activeDemo === "voice" && "Voice recognition interface would appear here"}
                      {activeDemo === "ocr" && "OCR game data extraction would appear here"}
                      {activeDemo === "tts" && "Text-to-speech controls would appear here"}
                    </p>
                    <Badge variant="outline" className="border-purple-400/30 text-purple-300">
                      Demo Placeholder
                    </Badge>
                  </div>
                </div>

                <div className="flex items-center justify-center space-x-4">
                  <Button onClick={() => setIsPlaying(!isPlaying)} className="bg-purple-600 hover:bg-purple-700">
                    {isPlaying ? <Pause className="mr-2 h-4 w-4" /> : <Play className="mr-2 h-4 w-4" />}
                    {isPlaying ? "Pause Demo" : "Start Demo"}
                  </Button>
                  <Button variant="outline" className="border-purple-400/30 text-purple-300 bg-transparent">
                    Reset
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Demo Info */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="bg-white/5 border-white/10">
            <CardContent className="p-6 text-center">
              <div className="text-2xl font-bold text-purple-400 mb-2">Phase 1</div>
              <div className="text-white font-semibold mb-1">Offline Ready</div>
              <div className="text-gray-400 text-sm">All demos work without internet</div>
            </CardContent>
          </Card>
          <Card className="bg-white/5 border-white/10">
            <CardContent className="p-6 text-center">
              <div className="text-2xl font-bold text-purple-400 mb-2">Real-time</div>
              <div className="text-white font-semibold mb-1">Instant Response</div>
              <div className="text-gray-400 text-sm">Low latency AI processing</div>
            </CardContent>
          </Card>
          <Card className="bg-white/5 border-white/10">
            <CardContent className="p-6 text-center">
              <div className="text-2xl font-bold text-purple-400 mb-2">Privacy</div>
              <div className="text-white font-semibold mb-1">Local Processing</div>
              <div className="text-gray-400 text-sm">Your data stays on your device</div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
