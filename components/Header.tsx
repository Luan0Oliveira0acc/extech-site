'use client'

import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

export default function Header() {
  const [isVisible, setIsVisible] = useState(false)
  const [lastScrollY, setLastScrollY] = useState(0)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      
      // Mostra o header quando scrollar para baixo
      if (currentScrollY > 100) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
      
      setLastScrollY(currentScrollY)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScrollY])

  const closeMenu = () => setIsMobileMenuOpen(false)

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 glass-dark border-b border-gray-700/50 transition-all duration-300 ${
        isVisible ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div>
              <h1 className="text-xl font-bold text-white">EX.TECH</h1>
              <p className="text-xs text-gray-400">Marketing Digital & Desenvolvimento</p>
            </div>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#beneficios" className="text-gray-300 hover:text-yellow-400 transition-all duration-300 hover:scale-105 font-medium">Benefícios</a>
            <a href="#servicos" className="text-gray-300 hover:text-yellow-400 transition-all duration-300 hover:scale-105 font-medium">Serviços</a>
            <a href="#faq" className="text-gray-300 hover:text-yellow-400 transition-all duration-300 hover:scale-105 font-medium">FAQ</a>
            <a href="#formulario" className="text-gray-300 hover:text-yellow-400 transition-all duration-300 hover:scale-105 font-medium">Contato</a>
          </nav>
          
          {/* Desktop Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <a href="https://wa.me/5511973822215" target="_blank" className="btn-secondary text-green-400 hover:text-green-300 border-green-400/50 hover:border-green-400">WhatsApp</a>
            <a href="#formulario" className="btn-primary text-sm">QUERO MEU SITE</a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-white hover:text-yellow-400 transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 glass-dark border-b border-gray-700/50 py-4 px-4">
            <nav className="flex flex-col space-y-4">
              <a 
                href="#beneficios" 
                onClick={closeMenu}
                className="text-gray-300 hover:text-yellow-400 transition-colors font-medium py-2 px-4 rounded hover:bg-gray-800/50"
              >
                Benefícios
              </a>
              <a 
                href="#servicos" 
                onClick={closeMenu}
                className="text-gray-300 hover:text-yellow-400 transition-colors font-medium py-2 px-4 rounded hover:bg-gray-800/50"
              >
                Serviços
              </a>
              <a 
                href="#faq" 
                onClick={closeMenu}
                className="text-gray-300 hover:text-yellow-400 transition-colors font-medium py-2 px-4 rounded hover:bg-gray-800/50"
              >
                FAQ
              </a>
              <a 
                href="#formulario" 
                onClick={closeMenu}
                className="text-gray-300 hover:text-yellow-400 transition-colors font-medium py-2 px-4 rounded hover:bg-gray-800/50"
              >
                Contato
              </a>
              
              {/* Mobile Buttons */}
              <div className="flex flex-col space-y-3 pt-4 border-t border-gray-700/50">
                <a 
                  href="https://wa.me/5511973822215" 
                  target="_blank"
                  onClick={closeMenu}
                  className="btn-secondary text-center text-green-400 hover:text-green-300 border-green-400/50 hover:border-green-400"
                >
                  WhatsApp
                </a>
                <a 
                  href="#formulario" 
                  onClick={closeMenu}
                  className="btn-primary text-center text-sm"
                >
                  QUERO MEU SITE
                </a>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}


