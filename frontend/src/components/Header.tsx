"use client"

import { useState } from "react"
import { Link, useLocation, useNavigate } from "react-router-dom"
import{ Button } from "./ui/button"
import { Menu, X, Gamepad2 } from "lucide-react"
import { useAuthStore } from "../lib/store"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()
  const { isAuthenticated, logout } = useAuthStore()

  const handleLogout = () => {
    logout()
    navigate('/')
  }

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    // { name: "Downloads", href: "/downloads" },
    ...(isAuthenticated 
      ? [] 
      : [
          { name: "Login", href: "/login", public: true },
          { name: "Sign Up", href: "/signup", public: true }
        ]
    )
  ]

  const isActive = (href: string) => {
    return location.pathname === href
  }

  return (
    <header className="fixed top-0 w-full bg-black/20 backdrop-blur-md border-b border-white/10 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="flex items-center space-x-2">
            <Gamepad2 className="h-8 w-8 text-purple-400" />
            <span className="text-2xl font-bold text-white">CAGE</span>
            <span className="text-sm text-purple-300">AI Game Assistant</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`transition-colors duration-200 ${
                  isActive(item.href) ? "text-purple-400 font-semibold" : "text-gray-300 hover:text-purple-400"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex space-x-4">
            <Button
              variant="outline"
              className="border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white bg-transparent"
              onClick={() => {
                if (!isAuthenticated) {
                  navigate('/login');
                } else {
                  navigate('/demo');
                }
              }}
            >
            Demo
            </Button>
            <Link to="/contact">
              <Button className="bg-purple-600 hover:bg-purple-700">Get Started</Button>
            </Link>
            {isAuthenticated && (
              <Button
                variant="outline"
                className="border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white bg-transparent"
                onClick={handleLogout}
              >
                Logout
              </Button>
            )}
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
                  to={item.href}
                  className={`transition-colors duration-200 ${
                    isActive(item.href) ? "text-purple-400 font-semibold" : "text-gray-300 hover:text-purple-400"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="flex flex-col space-y-2 pt-4">
                <Button
                  variant="outline"
                  className="border-purple-400 text-purple-400 bg-transparent w-full"
                  onClick={() => {
                    setIsMenuOpen(false);
                    if (!isAuthenticated) {
                      navigate('/login');
                    } else {
                      navigate('/demo');
                    }
                  }}
                >
                  Demo
                </Button>
                <Link to="/contact">
                  <Button 
                    className="bg-purple-600 hover:bg-purple-700 w-full" 
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Get Started
                  </Button>
                </Link>
                {isAuthenticated && (
                  <Button
                    variant="outline"
                    className="border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white bg-transparent w-full"
                    onClick={() => {
                      handleLogout();
                      setIsMenuOpen(false);
                    }}
                  >
                    Logout
                  </Button>
                )}
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
