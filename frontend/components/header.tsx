"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, Gamepad2 } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Features", href: "/features" },
    { name: "Modules", href: "/modules" },
    { name: "Tech Stack", href: "/tech-stack" },
    { name: "Users", href: "/users" },
    { name: "About", href: "/about" },
  ]

  const isActive = (href: string) => {
    return pathname === href
  }

  return (
    <header className="fixed top-0 w-full bg-black/20 backdrop-blur-md border-b border-white/10 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <Link href="/" className="flex items-center space-x-2">
            <Gamepad2 className="h-8 w-8 text-purple-400" />
            <span className="text-2xl font-bold text-white">CAGE</span>
            <span className="text-sm text-purple-300">AI Game Assistant</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`transition-colors duration-200 ${
                  isActive(item.href) ? "text-purple-400 font-semibold" : "text-gray-300 hover:text-purple-400"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex space-x-4">
            <Link href="/demo">
              <Button
                variant="outline"
                className="border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white bg-transparent"
              >
                Demo
              </Button>
            </Link>
            <Link href="/contact">
              <Button className="bg-purple-600 hover:bg-purple-700">Get Started</Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-white/10">
            <nav className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`transition-colors duration-200 ${
                    isActive(item.href) ? "text-purple-400 font-semibold" : "text-gray-300 hover:text-purple-400"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="flex flex-col space-y-2 pt-4">
                <Link href="/demo">
                  <Button
                    variant="outline"
                    className="border-purple-400 text-purple-400 bg-transparent w-full"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Demo
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button className="bg-purple-600 hover:bg-purple-700 w-full" onClick={() => setIsMenuOpen(false)}>
                    Get Started
                  </Button>
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
