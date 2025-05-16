import React, { useState, useEffect } from 'react';
import { Mic, X, Menu, ChevronRight, Volume2, Eye, Brain, Shield } from 'lucide-react';
import FloatingAssistant from "../components/FloatingAssistant";

const HomePage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAssistantActive, setIsAssistantActive] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Floating Assistant */}
      <FloatingAssistant />
      {/* Navbar */}
      <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-gray-900 shadow-lg' : 'bg-transparent'}`}>
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center">
              <span className="font-bold text-xl">AI</span>
            </div>
            <span className="font-bold text-xl hidden sm:block">AI Game Assistant</span>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <a href="#" className="font-medium hover:text-purple-400 transition-colors">Home</a>
            <a href="#features" className="font-medium hover:text-purple-400 transition-colors">Features</a>
            <a href="#about" className="font-medium hover:text-purple-400 transition-colors">About</a>
            <a href="#contact" className="font-medium hover:text-purple-400 transition-colors">Contact</a>
          </div>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-gray-800 py-4">
            <div className="container mx-auto px-4 flex flex-col space-y-4">
              <a href="#" className="font-medium hover:text-purple-400 transition-colors" onClick={() => setIsMenuOpen(false)}>Home</a>
              <a href="#features" className="font-medium hover:text-purple-400 transition-colors" onClick={() => setIsMenuOpen(false)}>Features</a>
              <a href="#about" className="font-medium hover:text-purple-400 transition-colors" onClick={() => setIsMenuOpen(false)}>About</a>
              <a href="#contact" className="font-medium hover:text-purple-400 transition-colors" onClick={() => setIsMenuOpen(false)}>Contact</a>
            </div>
          </div>
        )}
      </nav>
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 bg-gradient-to-b from-gray-900 to-gray-800">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-500">
            AI Game Assistant
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto mb-10">
            Enhance your gaming experience with real-time AI overlays, voice commands, and adaptive coaching.
          </p>
          <button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-full text-lg font-medium transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
            Explore Now
          </button>
          
          <div className="mt-16 relative">
            <div className="bg-gray-800 rounded-xl overflow-hidden shadow-2xl max-w-4xl mx-auto">
              <div className="p-2 bg-gray-700">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
              </div>
              <div className="p-4 h-64 bg-gray-900 flex items-center justify-center">
                <div className="text-center">
                  <div className="mb-4 text-purple-400">
                    <Mic size={48} className="mx-auto" />
                  </div>
                  <p className="text-lg text-gray-300">
                    "Hey Assistant, show me my weapon stats"
                  </p>
                  <div className="mt-4 w-16 h-1 bg-purple-500 mx-auto animate-pulse"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Features Preview */}
      <section id="features" className="py-20 px-4 bg-gray-800">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-16">Key Features</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Voice Commands */}
            <div className="bg-gray-900 p-6 rounded-xl hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-purple-900 rounded-full flex items-center justify-center mb-6 mx-auto">
                <Volume2 size={32} className="text-purple-400" />
              </div>
              <h3 className="text-xl font-semibold text-center mb-3">🎙️ Voice Commands</h3>
              <p className="text-gray-400 text-center">
                Control your game hands-free with natural voice commands.
              </p>
            </div>
            
            {/* Real-Time HUD Overlay */}
            <div className="bg-gray-900 p-6 rounded-xl hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-blue-900 rounded-full flex items-center justify-center mb-6 mx-auto">
                <Eye size={32} className="text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold text-center mb-3">👁️ Real-Time HUD Overlay</h3>
              <p className="text-gray-400 text-center">
                Get instant information without interrupting gameplay.
              </p>
            </div>
            
            {/* Adaptive Coaching */}
            <div className="bg-gray-900 p-6 rounded-xl hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-green-900 rounded-full flex items-center justify-center mb-6 mx-auto">
                <Brain size={32} className="text-green-400" />
              </div>
              <h3 className="text-xl font-semibold text-center mb-3">🧠 Adaptive Coaching</h3>
              <p className="text-gray-400 text-center">
                Personalized tips and strategies based on your gameplay.
              </p>
            </div>
            
            {/* Offline Support */}
            <div className="bg-gray-900 p-6 rounded-xl hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-red-900 rounded-full flex items-center justify-center mb-6 mx-auto">
                <Shield size={32} className="text-red-400" />
              </div>
              <h3 className="text-xl font-semibold text-center mb-3">🔒 Offline Support</h3>
              <p className="text-gray-400 text-center">
                Core features available even without internet connection.
              </p>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <button className="bg-transparent border border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white px-6 py-2 rounded-full transition-colors duration-300 flex items-center mx-auto">
              View All Features 
              <ChevronRight size={20} className="ml-2" />
            </button>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="bg-gray-900 py-12 px-4">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center">
                  <span className="font-bold text-sm">AI</span>
                </div>
                <span className="font-bold">AI Game Assistant</span>
              </div>
              <p className="text-gray-500 mt-2 text-sm">
                © 2025 AI Game Assistant. All rights reserved.
              </p>
            </div>
            
            <div className="flex flex-wrap gap-8">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Terms</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Support</a>
            </div>
            
            <div className="mt-6 md:mt-0 flex space-x-4">
              {/* Social Media Icons */}
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd"></path>
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
      
      
      
      {/* CSS for pulse animation */}
      <style jsx>{`
        @keyframes pulse {
          0% {
            box-shadow: 0 0 0 0 rgba(147, 51, 234, 0.7);
          }
          70% {
            box-shadow: 0 0 0 10px rgba(147, 51, 234, 0);
          }
          100% {
            box-shadow: 0 0 0 0 rgba(147, 51, 234, 0);
          }
        }
        
        .pulse-animation {
          animation: pulse 2s infinite;
        }
      `}</style>
    </div>
  );
};

export default HomePage;