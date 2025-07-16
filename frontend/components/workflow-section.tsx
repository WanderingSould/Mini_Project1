import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, MessageSquare, ScanLine, Brain, Volume2 } from "lucide-react"

export function WorkflowSection() {
  const workflowSteps = [
    {
      icon: MessageSquare,
      title: "User Input",
      description: "Player interacts via text chat, voice commands, or UI buttons",
      color: "text-blue-400",
    },
    {
      icon: ScanLine,
      title: "Game Data Processing",
      description: "Assistant extracts game stats, player actions, and match details using OCR & APIs",
      color: "text-green-400",
    },
    {
      icon: Brain,
      title: "AI Analysis & Response",
      description: "Local AI models provide strategies, tips, and insights based on game data",
      color: "text-purple-400",
    },
    {
      icon: Volume2,
      title: "Feedback Delivery",
      description: "Response displayed in HUD overlay or read aloud via text-to-speech",
      color: "text-orange-400",
    },
  ]

  return (
    <section id="workflow" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">How CAGE Works</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A seamless workflow that provides real-time AI assistance without disrupting your gameplay
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {workflowSteps.map((step, index) => (
              <div key={index} className="relative">
                <Card className="bg-white/5 border-white/10 hover:bg-white/10 transition-all duration-300 h-full">
                  <CardHeader className="text-center">
                    <div className="mx-auto mb-4 p-4 bg-white/10 rounded-full w-fit">
                      <step.icon className={`h-8 w-8 ${step.color}`} />
                    </div>
                    <div className="text-sm text-purple-400 font-semibold mb-2">Step {index + 1}</div>
                    <CardTitle className="text-white text-lg">{step.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-300 text-sm text-center">{step.description}</p>
                  </CardContent>
                </Card>

                {/* Arrow for desktop */}
                {index < workflowSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                    <ArrowRight className="h-6 w-6 text-purple-400" />
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Key Features */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-gradient-to-br from-purple-600/20 to-blue-600/20 border-purple-400/30">
              <CardHeader>
                <CardTitle className="text-white text-center">Privacy-First Design</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 text-sm text-center">
                  All core features work offline, ensuring your gaming data stays private and secure
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-green-600/20 to-purple-600/20 border-green-400/30">
              <CardHeader>
                <CardTitle className="text-white text-center">Low Latency</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 text-sm text-center">
                  Local AI processing ensures minimal delay between your actions and AI responses
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-blue-600/20 to-purple-600/20 border-blue-400/30">
              <CardHeader>
                <CardTitle className="text-white text-center">Seamless Integration</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 text-sm text-center">
                  Non-intrusive overlay design that enhances your gaming without disruption
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
