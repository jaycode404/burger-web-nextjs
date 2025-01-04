'use client'

import { useState, useEffect } from 'react'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null // Return null on first render to avoid hydration mismatch
  }

  return (
    <nav className="fixed w-full bg-black/90 backdrop-blur-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0">
            <h1 className="text-3xl font-bold text-white">
              BURGER<span className="text-orange-500">HOUSE</span>
            </h1>
          </div>
          
          {/* Mobile menu button */}
          <button 
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>

          {/* Desktop menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              <a href="#menu" className="text-white hover:text-orange-500 font-bold">MENÚ</a>
              <a href="#locations" className="text-white hover:text-orange-500 font-bold">UBICACIÓN</a>
              <a href="#about" className="text-white hover:text-orange-500 font-bold">NOSOTROS</a>
              <a href="#contact" className="text-white hover:text-orange-500 font-bold">CONTACTO</a>
            </div>
          </div>
          
          <button className="hidden md:block bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-md font-bold transition-all">
            ORDENAR
          </button>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <a href="#menu" className="block text-white hover:text-orange-500 py-2 font-bold">MENÚ</a>
              <a href="#locations" className="block text-white hover:text-orange-500 py-2 font-bold">UBICACIÓN</a>
              <a href="#about" className="block text-white hover:text-orange-500 py-2 font-bold">NOSOTROS</a>
              <a href="#contact" className="block text-white hover:text-orange-500 py-2 font-bold">CONTACTO</a>
              <button className="w-full bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-md font-bold mt-4">
                ORDENAR
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
} 