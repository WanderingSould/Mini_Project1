import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function TechStackSection() {
  const frontendTech = [
    { name: "HTML + CSS", description: "Chat UI, HUD overlay, and animations" },
    { name: "JavaScript", description: "Frontend logic and React.js integration" },
    { name: "React.js", description: "Chatbot UI & HUD overlay components" },
    { name: "TensorFlow.js", description: "Client-side machine learning" },
    { name: "Web Speech API", description: "Voice recognition capabilities" },
    { name: "Tesseract.js", description: "OCR for game data extraction" },
  ]

  const backendTech = [
    { name: "Python + Flask", description: "Local AI server and API endpoints" },
    { name: "Ollama", description: "Local LLM hosting and management" },
    { name: "Tesseract OCR", description: "Server-side text recognition" },
  ]

  const aiModels = [
    { name: "Llama", description: "Meta's large language model" },
    { name: "Mistral", description: "Efficient multilingual model" },
    { name: "Phi-3", description: "Microsoft's compact AI model" },
    { name: "GPT-4 API", description: "Advanced cloud AI (Hybrid mode)" },
  ]

  const databases = [
    { name: "SQLite", description: "Local data storage" },
    { name: "MongoDB Atlas", description: "Cloud syncing (Hybrid mode)" },
  ]

  return (
    <section id="tech" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Technology Stack</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Built with modern technologies for optimal performance and scalability
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Frontend Technologies */}
          <Card className="bg-white/5 border-white/10">
            <CardHeader>
              <CardTitle className="text-white text-2xl flex items-center">
                <div className="w-4 h-4 bg-blue-400 rounded-full mr-3"></div>
                Frontend Technologies
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {frontendTech.map((tech, index) => (
                <div key={index} className="flex flex-col space-y-1">
                  <div className="flex items-center space-x-2">
                    <Badge variant="outline" className="border-blue-400/30 text-blue-300">
                      {tech.name}
                    </Badge>
                  </div>
                  <p className="text-gray-400 text-sm ml-2">{tech.description}</p>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Backend Technologies */}
          <Card className="bg-white/5 border-white/10">
            <CardHeader>
              <CardTitle className="text-white text-2xl flex items-center">
                <div className="w-4 h-4 bg-green-400 rounded-full mr-3"></div>
                Backend Technologies
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {backendTech.map((tech, index) => (
                <div key={index} className="flex flex-col space-y-1">
                  <div className="flex items-center space-x-2">
                    <Badge variant="outline" className="border-green-400/30 text-green-300">
                      {tech.name}
                    </Badge>
                  </div>
                  <p className="text-gray-400 text-sm ml-2">{tech.description}</p>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* AI Models */}
          <Card className="bg-white/5 border-white/10">
            <CardHeader>
              <CardTitle className="text-white text-2xl flex items-center">
                <div className="w-4 h-4 bg-purple-400 rounded-full mr-3"></div>
                AI Models
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {aiModels.map((model, index) => (
                <div key={index} className="flex flex-col space-y-1">
                  <div className="flex items-center space-x-2">
                    <Badge variant="outline" className="border-purple-400/30 text-purple-300">
                      {model.name}
                    </Badge>
                  </div>
                  <p className="text-gray-400 text-sm ml-2">{model.description}</p>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Databases */}
          <Card className="bg-white/5 border-white/10">
            <CardHeader>
              <CardTitle className="text-white text-2xl flex items-center">
                <div className="w-4 h-4 bg-orange-400 rounded-full mr-3"></div>
                Data Storage
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {databases.map((db, index) => (
                <div key={index} className="flex flex-col space-y-1">
                  <div className="flex items-center space-x-2">
                    <Badge variant="outline" className="border-orange-400/30 text-orange-300">
                      {db.name}
                    </Badge>
                  </div>
                  <p className="text-gray-400 text-sm ml-2">{db.description}</p>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
