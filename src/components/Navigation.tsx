import { Menu, X } from 'lucide-react'
import { useState } from 'react'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: 'smooth' })
    setIsOpen(false)
  }

  return (
    <nav className="fixed w-full bg-gradient-to-r from-slate-900 to-slate-800 shadow-lg z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">N</span>
            </div>
            <span className="text-white font-bold text-xl">Nexora</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection('home')}
              className="text-gray-300 hover:text-white transition-colors"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('services')}
              className="text-gray-300 hover:text-white transition-colors"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection('portfolio')}
              className="text-gray-300 hover:text-white transition-colors"
            >
              Portfolio
            </button>
            <button
              onClick={() => scrollToSection('team')}
              className="text-gray-300 hover:text-white transition-colors"
            >
              Team
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 py-2 rounded-lg hover:shadow-lg transition-shadow"
            >
              Get Started
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-2">
            <button
              onClick={() => scrollToSection('home')}
              className="block w-full text-left px-4 py-2 text-gray-300 hover:text-white hover:bg-slate-700 rounded transition-colors"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('services')}
              className="block w-full text-left px-4 py-2 text-gray-300 hover:text-white hover:bg-slate-700 rounded transition-colors"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection('portfolio')}
              className="block w-full text-left px-4 py-2 text-gray-300 hover:text-white hover:bg-slate-700 rounded transition-colors"
            >
              Portfolio
            </button>
            <button
              onClick={() => scrollToSection('team')}
              className="block w-full text-left px-4 py-2 text-gray-300 hover:text-white hover:bg-slate-700 rounded transition-colors"
            >
              Team
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="block w-full px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded hover:shadow-lg transition-shadow"
            >
              Get Started
            </button>
          </div>
        )}
      </div>
    </nav>
  )
}
