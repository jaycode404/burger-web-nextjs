'use client'

import Image from 'next/image'

export default function Page() {
  return (
    <div className="min-h-screen bg-black">
      {/* Navigation */}
      <nav className="w-full py-4 px-8 flex justify-between items-center">
        <span className="text-white text-xl font-bold">Logo</span>
        <div className="flex gap-8">
          <a href="#nosotros" className="text-white hover:text-gray-300">Nosotros</a>
          <a href="#platillos" className="text-white hover:text-gray-300">Platillos</a>
          <a href="#contacto" className="text-white hover:text-gray-300">Contacto</a>
        </div>
      </nav>
      
      {/* Hero Section */}
      <main className="relative max-w-7xl mx-auto px-6">
        <div className="w-full flex justify-center mb-8">
          <div className="w-full max-w-4xl">
            <h1 className="text-white text-[40px] leading-none font-bold tracking-tight text-center" 
                style={{ 
                  textShadow: `
                    -2px -2px 0 #000,  
                    2px -2px 0 #000,
                    -2px 2px 0 #000,
                    2px 2px 0 #000,
                    4px 4px 0 #000
                  `
                }}>
              LA MEJOR HAMBURGUESA DEL CONDADO
            </h1>
          </div>
        </div>

        {/* Burger Image with Glow */}
        <div className="relative w-full max-w-3xl mx-auto">
          <div className="absolute inset-0 bg-[#1a4c1c] opacity-50 blur-3xl rounded-full transform -translate-y-1/4"></div>
          <Image
            src="/burguer-hero.png"
            alt="Delicious Hamburger"
            width={800}
            height={800}
            className="relative w-full h-auto object-contain"
            priority
          />
        </div>
      </main>
    </div>
  )
}
