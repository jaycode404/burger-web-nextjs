import Image from 'next/image'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col bg-brand-dark">
      {/* Navigation */}
      <nav className="w-full py-6 px-8 flex justify-between items-center z-30">
        <div className="flex gap-20">
          <a href="#menu" className="text-white text-2xl font-bold hover:text-brand-lime">MENÚ</a>
          <a href="#ubicacion" className="text-white text-2xl font-bold hover:text-brand-lime">UBICACIÓN</a>
          <a href="#nosotros" className="text-white text-2xl font-bold hover:text-brand-lime">NOSOTROS</a>
          <a href="#contacto" className="text-white text-2xl font-bold hover:text-brand-lime">CONTACTO</a>
        </div>
        <button className="bg-[#FF6B00] text-white px-8 py-3 rounded-xl text-2xl font-bold">
          ORDENAR
        </button>
      </nav>

      {/* Hero Content */}
      <div className="flex-1 relative">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/burger.png"
            alt="Delicious burger"
            fill
            className="object-contain object-center"
            priority
          />
        </div>

        {/* Text Overlay */}
        <div className="relative z-20 pt-20">
          <h1 className="text-white text-[130px] leading-tight font-black tracking-tighter text-center" 
              style={{ 
                textShadow: `
                  -1px -1px 0 #000,  
                  1px -1px 0 #000,
                  -1px 1px 0 #000,
                  1px 1px 0 #000,
                  4px 4px 0 #000
                `
              }}>
            LA MEJOR<br />
            HAMBURGUESA<br />
            DEL<br />
            CONDADO
          </h1>
        </div>
      </div>
    </section>
  )
} 