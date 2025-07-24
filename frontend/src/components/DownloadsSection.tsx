import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card"
import { Button } from "./ui/button"
import { Download, Gamepad2 } from "lucide-react"
import { Badge } from "./ui/badge"

export function DownloadsSection() {
  const handleDownload = () => {
    // Dummy download logic
    alert("Downloading CAGE v1.0.0 Beta...")
  }

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-6">Downloads</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Get the latest version of CAGE - Your AI Game Assistant.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <Card className="bg-white/5 border-white/10">
            <CardHeader>
              <div className="flex items-center space-x-4">
                <Gamepad2 className="h-12 w-12 text-purple-400" />
                <div>
                  <CardTitle className="text-white">CAGE - AI Game Assistant</CardTitle>
                  <CardDescription className="text-gray-300">
                    The revolutionary browser-based AI assistant for gamers.
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">Version:</span>
                  <Badge variant="outline" className="border-green-400/30 text-green-300">
                    1.0.0 Beta
                  </Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">Release Date:</span>
                  <span className="text-white">July 20, 2024</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">Platform:</span>
                  <span className="text-white">Windows (PWA)</span>
                </div>
                <p className="text-gray-400 text-sm pt-4">
                  CAGE is currently available as a Progressive Web App (PWA) for Windows. Install it directly from your browser for an app-like experience.
                </p>
                <Button onClick={handleDownload} size="lg" className="w-full bg-purple-600 hover:bg-purple-700 text-lg mt-6">
                  <Download className="mr-2 h-5 w-5" />
                  Download Coming Soon!
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}