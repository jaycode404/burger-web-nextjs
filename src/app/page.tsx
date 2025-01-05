'use client'

import Image from 'next/image'

export default function Page() {
  return (
    <div className="min-h-screen bg-black">
      {/* Navigation */}
      <nav className="w-full flex justify-center">
        <div className="w-[60%] py-4 flex justify-between items-center">
          <span className="text-white text-xl font-bold">Logo</span>
          <div className="flex gap-8">
            <a href="#nosotros" className="text-white hover:text-gray-300">Nosotros</a>
            <a href="#platillos" className="text-white hover:text-gray-300">Platillos</a>
            <a href="#contacto" className="text-white hover:text-gray-300">Contacto</a>
          </div>
        </div>
      </nav>
      
      {/* Hero Section */}
      <main className="relative w-full flex justify-center min-h-screen">
        <div className="w-[60%]">
          <div className="w-full flex justify-center mb-0">
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
          <div className="relative w-full max-w-xl mx-auto -mt-20">
            <div className="absolute inset-0 bg-gradient-radial from-[#FFE600] via-[#FFE600]/30 to-transparent opacity-60 blur-[100px] rounded-full transform scale-150"></div>
            <Image
              src="/burger.png"
              alt="Delicious Hamburger"
              width={600}
              height={225}
              className="relative w-full h-auto object-contain drop-shadow-2xl"
              priority
            />
          </div>
        </div>
      </main>
    </div>
  )
}
