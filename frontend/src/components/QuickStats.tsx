import { Card, CardContent } from "./ui/card"
import { Shield, Zap, Users, Code } from "lucide-react"

export function QuickStats() {
  const stats = [
    {
      icon: Shield,
      value: "100%",
      label: "Offline Capable",
      description: "Complete privacy protection",
    },
    {
      icon: Zap,
      value: "<1000ms",
      label: "Response Time",
      description: "Ultra-low latency AI",
    },
    {
      icon: Users,
      value: "6+",
      label: "User Types",
      description: "From casual to pro gamers",
    },
    {
      icon: Code,
      value: "7",
      label: "Core Modules",
      description: "Modular architecture",
    },
  ]

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-black/20">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <Card key={index} className="bg-white/5 border-white/10 text-center">
              <CardContent className="p-6">
                <stat.icon className="h-12 w-12 text-purple-400 mx-auto mb-4" />
                <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-lg font-semibold text-purple-400 mb-1">{stat.label}</div>
                <div className="text-sm text-gray-400">{stat.description}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
