import Image from 'next/image'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center bg-black">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/30 z-10" />
        <Image
          src="/burger-bg.jpg"
          alt="Juicy burger background"
          fill
          className="object-cover opacity-50"
          priority
        />
      </div>
      
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
        <div className="text-center">
          <h1 className="text-6xl md:text-8xl font-extrabold mb-6 uppercase tracking-tight text-shadow">
            LA MEJOR HAMBURGUESA DEL CONDADO
          </h1>
          <h2 className="text-2xl md:text-3xl mb-12 text-orange-500 font-semibold">
            Sabor artesanal en cada bocado
          </h2>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-md text-xl font-bold transition-all transform hover:scale-105">
              ORDENAR AHORA
            </button>
            <button className="border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white px-8 py-4 rounded-md text-xl font-bold transition-all">
              VER MENÚ
            </button>
          </div>
        </div>
      </div>
    </section>
  )
} 