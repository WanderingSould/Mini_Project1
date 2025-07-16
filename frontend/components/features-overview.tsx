import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Brain, Mic, Eye, Monitor, ArrowRight } from "lucide-react"
import Link from "next/link"

export function FeaturesOverview() {
  const keyFeatures = [
    {
      icon: Brain,
      title: "AI Chatbot",
      description: "Local LLM powered assistance for intelligent game strategies",
    },
    {
      icon: Mic,
      title: "Voice Commands",
      description: "Hands-free interaction with offline voice recognition",
    },
    {
      icon: Eye,
      title: "OCR Data Extraction",
      description: "Real-time game statistics reading and analysis",
    },
    {
      icon: Monitor,
      title: "HUD Overlay",
      description: "Non-intrusive AI insights during gameplay",
    },
  ]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Key Features</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Experience the power of AI-assisted gaming with our core features
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {keyFeatures.map((feature, index) => (
            <Card key={index} className="bg-white/5 border-white/10 hover:bg-white/10 transition-colors duration-300">
              <CardHeader className="text-center">
                <feature.icon className="h-12 w-12 text-purple-400 mx-auto mb-4" />
                <CardTitle className="text-white">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-300 text-center">{feature.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Link href="/features">
            <Button size="lg" className="bg-purple-600 hover:bg-purple-700">
              Explore All Features
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
