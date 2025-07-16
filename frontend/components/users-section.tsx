import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Gamepad2, Trophy, Video, Users, Code, Accessibility } from "lucide-react"

export function UsersSection() {
  const userTypes = [
    {
      icon: Gamepad2,
      title: "Casual Gamers",
      description: "Players who enjoy single-player & multiplayer games but aren't heavily competitive",
      benefits: [
        "Easy-to-use AI assistance",
        "Learn new strategies",
        "Improve gameplay skills",
        "Offline functionality",
      ],
    },
    {
      icon: Trophy,
      title: "Competitive Gamers & Esports Players",
      description: "Players focused on ranked matches, leaderboards, and esports competitions",
      benefits: ["Advanced strategy analysis", "Performance tracking", "Real-time insights", "Match history analysis"],
    },
    {
      icon: Video,
      title: "Streamers & Content Creators",
      description: "Gamers who stream content on Twitch, YouTube, and social media",
      benefits: ["Interactive AI for viewers", "Content enhancement", "Real-time commentary", "Audience engagement"],
    },
    {
      icon: Users,
      title: "Game Analysts & Coaches",
      description: "Coaches, analysts, and esports trainers who help players improve",
      benefits: ["Player performance analysis", "Training assistance", "Strategy development", "Data-driven insights"],
    },
    {
      icon: Code,
      title: "Game Developers & AI Enthusiasts",
      description: "Developers who want to explore AI integration in gaming",
      benefits: ["Open-source components", "API integrations", "AI model experimentation", "Development insights"],
    },
    {
      icon: Accessibility,
      title: "Accessibility-Focused Users",
      description: "Players who rely on voice commands & AI guidance for gaming",
      benefits: [
        "Voice command support",
        "Text-to-speech guidance",
        "Hands-free interaction",
        "Inclusive gaming experience",
      ],
    },
  ]

  return (
    <section id="users" className="py-20 px-4 sm:px-6 lg:px-8 bg-black/20">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Who Benefits from CAGE?</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Designed for gamers of all levels, from casual players to professional esports teams
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {userTypes.map((user, index) => (
            <Card
              key={index}
              className="bg-white/5 border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105"
            >
              <CardHeader>
                <div className="flex items-center space-x-3 mb-3">
                  <div className="p-3 bg-purple-600/20 rounded-lg">
                    <user.icon className="h-6 w-6 text-purple-400" />
                  </div>
                  <CardTitle className="text-white text-lg">{user.title}</CardTitle>
                </div>
                <CardDescription className="text-gray-300 text-sm">{user.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <h4 className="text-purple-400 font-semibold text-sm mb-3">Key Benefits:</h4>
                  <ul className="space-y-2">
                    {user.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-start space-x-2">
                        <div className="w-1.5 h-1.5 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-300 text-sm">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
