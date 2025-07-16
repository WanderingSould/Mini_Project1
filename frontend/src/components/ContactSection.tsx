"use client"

import { useState, type FormEvent, type ChangeEvent } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card"
import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { Textarea } from "./ui/textarea"
import { Label } from "./ui/label"
import { Mail, MessageSquare, Send, Github, Twitter } from "lucide-react"

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
  }

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-6">Get in Touch</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Have questions about CAGE? Want to contribute or provide feedback? We'd love to hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <Card className="bg-white/5 border-white/10">
            <CardHeader>
              <CardTitle className="text-white flex items-center">
                <MessageSquare className="mr-2 h-6 w-6" />
                Send us a Message
              </CardTitle>
              <CardDescription className="text-gray-300">
                Fill out the form below and we'll get back to you as soon as possible.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name" className="text-white">
                      Name
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                      placeholder="Your name"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="email" className="text-white">
                      Email
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                      placeholder="your@email.com"
                      required
                    />
                  </div>
                </div>
                <div>
                  <Label htmlFor="subject" className="text-white">
                    Subject
                  </Label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                    placeholder="What's this about?"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="message" className="text-white">
                    Message
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 min-h-[120px]"
                    placeholder="Tell us more about your inquiry..."
                    required
                  />
                </div>
                <Button type="submit" className="w-full bg-purple-600 hover:bg-purple-700">
                  <Send className="mr-2 h-4 w-4" />
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Info */}
          <div className="space-y-8">
            <Card className="bg-white/5 border-white/10">
              <CardHeader>
                <CardTitle className="text-white flex items-center">
                  <Mail className="mr-2 h-6 w-6" />
                  Project Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="text-purple-400 font-semibold mb-1">Presenter</h4>
                  <p className="text-gray-300">Swaroop Suresh</p>
                </div>
                <div>
                  <h4 className="text-purple-400 font-semibold mb-1">Guide</h4>
                  <p className="text-gray-300">Dr. Sowmya K Menon</p>
                </div>
                <div>
                  <h4 className="text-purple-400 font-semibold mb-1">Project Status</h4>
                  <p className="text-gray-300">In Development - Phase 1</p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/5 border-white/10">
              <CardHeader>
                <CardTitle className="text-white">Connect with Us</CardTitle>
                <CardDescription className="text-gray-300">
                  Follow our development progress and contribute to the project
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex space-x-4">
                  <Button variant="outline" className="border-purple-400/30 text-purple-300 bg-transparent">
                    <Github className="mr-2 h-4 w-4" />
                    GitHub
                  </Button>
                  <Button variant="outline" className="border-purple-400/30 text-purple-300 bg-transparent">
                    <Twitter className="mr-2 h-4 w-4" />
                    Twitter
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/5 border-white/10">
              <CardHeader>
                <CardTitle className="text-white">Interested in Contributing?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 mb-4">
                  CAGE is an open-source project. We welcome contributions from developers, gamers, and AI enthusiasts.
                </p>
                <ul className="space-y-2 text-gray-300 text-sm">
                  <li className="flex items-start space-x-2">
                    <div className="w-1.5 h-1.5 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Code contributions and bug fixes</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-1.5 h-1.5 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Testing and feedback</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-1.5 h-1.5 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Documentation improvements</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-1.5 h-1.5 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Feature suggestions</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
