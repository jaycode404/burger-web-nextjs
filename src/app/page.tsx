'use client'

import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import FAQ from '@/components/FAQ'
import CTA from '@/components/CTA'

export default function Page() {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault()
    const target = document.getElementById(targetId)
    const navHeight = 80 // Height of your fixed navbar
    
    if (target) {
      const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - navHeight
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      })
    }
  }

  return (
    <div className="min-h-screen bg-black overflow-x-hidden">
      {/* Navigation */}
      <motion.nav 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="w-full flex justify-center fixed top-0 z-50 bg-black/80 backdrop-blur-sm"
      >
        <div className="w-[90%] max-w-7xl py-4 flex justify-between items-center">
          <motion.span 
            whileHover={{ scale: 1.1 }}
            className="text-white text-xl font-bold cursor-pointer"
            onClick={(e) => handleScroll(e as any, 'hero')}
          >
            Logo
          </motion.span>
          <div className="flex gap-8">
            <motion.a 
              whileHover={{ scale: 1.1 }}
              href="#nosotros"
              onClick={(e) => handleScroll(e, 'nosotros')}
              className="text-white hover:text-gray-300 cursor-pointer"
            >
              Nosotros
            </motion.a>
            <motion.a 
              whileHover={{ scale: 1.1 }}
              href="#platillos"
              onClick={(e) => handleScroll(e, 'platillos')}
              className="text-white hover:text-gray-300 cursor-pointer"
            >
              Platillos
            </motion.a>
          </div>
        </div>
      </motion.nav>
      
      {/* Hero Section */}
      <section id="hero" className="relative w-full flex justify-center min-h-screen">
        <div className="w-[90%] max-w-7xl relative">
          <div className="flex items-center justify-between h-screen">
            {/* Text Content */}
            <motion.div 
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="w-full max-w-xl pt-8"
            >
              <div className="text-left">
                <motion.span
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="inline-block text-yellow-500 font-bold text-sm mb-2 tracking-wide"
                >
                  DESCUBRE EL SABOR
                </motion.span>
                <div className="mb-4 max-w-3xl">
                  <h1 className="text-white text-[52px] leading-[1.1] font-black tracking-tight whitespace-nowrap" 
                      style={{ 
                        textShadow: `
                          -2px -2px 0 #000,  
                          2px -2px 0 #000,
                          -2px 2px 0 #000,
                          2px 2px 0 #000,
                          4px 4px 0 #000,
                          6px 6px 0 rgba(0,0,0,0.4)
                        `
                      }}>
                    CONVIERTE TUS ANTOJOS
                  </h1>
                  <h1 className="text-white text-[52px] leading-[1.1] font-black tracking-tight whitespace-nowrap" 
                      style={{ 
                        textShadow: `
                          -2px -2px 0 #000,  
                          2px -2px 0 #000,
                          -2px 2px 0 #000,
                          2px 2px 0 #000,
                          4px 4px 0 #000,
                          6px 6px 0 rgba(0,0,0,0.4)
                        `
                      }}>
                    EN UNA <span className="text-yellow-500">DELICIOSA</span>
                  </h1>
                  <h1 className="text-yellow-500 text-[52px] leading-[1.1] font-black tracking-tight whitespace-nowrap"
                      style={{ 
                        textShadow: `
                          -2px -2px 0 #000,  
                          2px -2px 0 #000,
                          -2px 2px 0 #000,
                          2px 2px 0 #000,
                          4px 4px 0 #000,
                          6px 6px 0 rgba(0,0,0,0.4)
                        `
                      }}>
                    SATISFACCIÓN
                  </h1>
                </div>
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="text-gray-300 text-base mb-8 max-w-xl leading-relaxed"
                >
                  Nuestra hamburguesa artesanal está preparada<br/>
                  con los mejores ingredientes<br/>
                  y con todo nuestro amor.
                  <span className="block mt-2 text-yellow-500 font-semibold">¡Cada bocado es una experiencia única!</span>
                </motion.p>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 }}
                  className="flex gap-4"
                >
                  <div className="relative inline-block">
                    {/* Smoke particles container */}
                    <div className="absolute -inset-x-10 -top-40 h-40 flex items-end justify-center overflow-hidden">
                      {[...Array(10)].map((_, i) => (
                        <motion.div
                          key={i}
                          initial={{ scale: 0, opacity: 0 }}
                          animate={{
                            scale: [0.3, 2, 3],
                            opacity: [0, 0.4, 0],
                            y: [0, -100],
                            x: [(i * 20 - 80), (i * 20 - 80) + (Math.random() > 0.5 ? 20 : -20)],
                            rotate: [0, Math.random() > 0.5 ? 90 : -90]
                          }}
                          transition={{
                            duration: 3,
                            delay: i * 0.2,
                            repeat: Infinity,
                            repeatDelay: Math.random() * 0.2,
                            ease: "easeOut"
                          }}
                          className="absolute bottom-0 w-8 h-8 rounded-full blur-xl"
                          style={{
                            background: 'radial-gradient(circle at center, rgba(253, 224, 71, 0.3), rgba(253, 224, 71, 0.2), transparent)',
                            filter: 'blur(8px)'
                          }}
                        />
                      ))}
                    </div>

                    {/* Button glow effect */}
                    <div className="absolute -inset-1 bg-yellow-500 rounded-xl opacity-60 group-hover:opacity-80 blur-lg transition duration-200"></div>
                    <div className="absolute -inset-1 bg-gradient-to-r from-yellow-500 via-orange-500 to-yellow-500 rounded-xl opacity-40 group-hover:opacity-70 blur-xl transition duration-200 animate-pulse"></div>

                    {/* Button */}
                    <motion.button
                      whileHover={{ 
                        scale: 1.05,
                        boxShadow: "0 20px 30px -10px rgba(234, 179, 8, 0.4)"
                      }}
                      whileTap={{ scale: 0.95 }}
                      className="relative bg-gradient-to-r from-yellow-500 via-yellow-400 to-yellow-500 text-black px-8 py-3 rounded-xl font-bold text-base shadow-lg shadow-yellow-500/30 hover:shadow-yellow-500/50 transition-all duration-300 group"
                    >
                      <span className="relative z-10 inline-flex items-center">
                        Ordenar Ahora
                        <motion.svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </motion.svg>
                      </span>
                      <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </motion.button>
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-transparent text-white border-2 border-white/30 px-6 py-3 rounded-xl font-bold text-base hover:bg-white/10 transition-colors"
                  >
                    Ver Menú
                  </motion.button>
                </motion.div>
              </div>
            </motion.div>

            {/* Burger Image with Glow */}
            <motion.div 
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ 
                duration: 0.8, 
                delay: 0.5,
                type: "spring",
                stiffness: 100
              }}
              className="absolute top-[15%] -translate-y-1/2 right-0 w-[45%] max-w-2xl pt-8"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-radial from-[#FFE600] via-[#FFE600]/30 to-transparent opacity-60 blur-[100px] rounded-full transform scale-150"></div>
                <Image
                  src="/burger.png"
                  alt="Delicious Hamburger"
                  width={800}
                  height={800}
                  className="relative w-full h-auto object-contain drop-shadow-2xl transform -rotate-12 hover:rotate-0 transition-transform duration-500"
                  priority
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="w-full flex justify-center py-20 bg-zinc-900">
        <motion.div 
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="w-[90%] max-w-7xl"
        >
          <h2 className="text-white text-3xl font-bold text-center mb-12">Lo Que Dicen Nuestros Clientes</h2>
          <div className="grid grid-cols-3 gap-8 items-start">
            {[
              {
                name: "María García",
                rating: 5,
                comment: "¡La mejor hamburguesa que he probado! Los ingredientes son frescos y el sabor es incomparable.",
                title: "Cliente Frecuente",
                featured: false
              },
              {
                name: "Juan Rodríguez",
                rating: 5,
                comment: "El servicio es excelente y las hamburguesas son espectaculares. La calidad de los ingredientes y la atención al detalle hacen que cada visita sea especial. ¡Volveré pronto!",
                title: "Food Blogger",
                featured: true
              },
              {
                name: "Ana Martínez",
                rating: 5,
                comment: "Me encanta la calidad de la carne y lo bien preparada que está. ¡100% recomendado!",
                title: "Chef Local",
                featured: false
              }
            ].map((review, index) => (
              <motion.div
                key={review.name}
                initial={{ opacity: 0, y: review.featured ? 40 : 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`${
                  review.featured 
                    ? 'bg-yellow-500/10 p-8 rounded-xl backdrop-blur-sm border-2 border-yellow-500/50 -mt-4 mb-4 shadow-2xl shadow-yellow-500/20' 
                    : 'bg-black/50 p-6 rounded-xl backdrop-blur-sm border border-gray-800'
                }`}
              >
                <div className="flex items-start gap-4">
                  <div className={`relative w-12 h-12 rounded-full overflow-hidden ${
                    review.featured ? 'bg-yellow-500/30' : 'bg-yellow-500/20'
                  }`}>
                    <div className={`absolute inset-0 flex items-center justify-center ${
                      review.featured ? 'text-yellow-300' : 'text-yellow-500'
                    } text-2xl font-bold`}>
                      {review.name.charAt(0)}
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className={`font-bold ${review.featured ? 'text-yellow-400' : 'text-white'}`}>
                      {review.name}
                    </h3>
                    <p className={`text-sm ${review.featured ? 'text-yellow-500' : 'text-yellow-500'}`}>
                      {review.title}
                    </p>
                    <div className="flex gap-1 my-2">
                      {[...Array(review.rating)].map((_, i) => (
                        <motion.span
                          key={i}
                          initial={{ opacity: 0, scale: 0 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: i * 0.1 }}
                          className={`${review.featured ? 'text-yellow-400' : 'text-yellow-500'}`}
                        >
                          ★
                        </motion.span>
                      ))}
                    </div>
                    <p className={`text-sm leading-relaxed ${
                      review.featured ? 'text-gray-300' : 'text-gray-400'
                    }`}>
                      "{review.comment}"
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Comparison Section */}
      <section id="nosotros" className="w-full flex justify-center py-20">
        <div className="w-[90%] max-w-7xl">
          <motion.h2 
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="text-white text-3xl font-bold text-center mb-12"
          >
            La Diferencia
          </motion.h2>
          <motion.div 
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="flex gap-8 justify-center items-start"
          >
            <div className="bg-zinc-900/50 p-6 rounded-lg w-[300px] backdrop-blur-sm">
              <h3 className="text-gray-400 text-xl font-bold mb-6">Hamburguesas Tradicionales</h3>
              <ul className="text-gray-500 space-y-4">
                <li className="flex items-center gap-2">
                  <span className="text-red-500">✕</span>
                  Carne congelada
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-red-500">✕</span>
                  Ingredientes procesados
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-red-500">✕</span>
                  Sabor artificial
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-red-500">✕</span>
                  Preparación industrial
                </li>
              </ul>
            </div>
            <motion.div 
              whileHover={{ y: -5 }}
              className="bg-gradient-to-b from-yellow-500/20 via-yellow-500/10 to-transparent p-8 rounded-xl w-[300px] border-2 border-yellow-500 shadow-2xl shadow-yellow-500/20 relative -mt-4"
            >
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-yellow-500 text-black px-4 py-1 rounded-full text-sm font-bold z-20 whitespace-nowrap">
                RECOMENDADO
              </div>
              <div className="relative z-10 mt-2">
                <h3 className="text-yellow-400 text-2xl font-bold mb-6">Nuestras Hamburguesas</h3>
                <ul className="text-gray-300 space-y-4">
                  <li className="flex items-center gap-2">
                    <span className="text-yellow-500 text-xl">✓</span>
                    Carne fresca diaria
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-yellow-500 text-xl">✓</span>
                    Ingredientes naturales
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-yellow-500 text-xl">✓</span>
                    Sabor auténtico
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-yellow-500 text-xl">✓</span>
                    Preparación artesanal
                  </li>
                </ul>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full bg-yellow-500 text-black font-bold py-3 px-6 rounded-lg mt-6 shadow-lg shadow-yellow-500/20"
                >
                  Probar Ahora
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* How it works Section */}
      <section className="w-full flex justify-center py-20 bg-black">
        <div className="w-[90%] max-w-7xl">
          <motion.h2 
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="text-white text-4xl font-bold text-center mb-4"
          >
            ¿Cómo lo hacemos?
          </motion.h2>
          <motion.p
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="text-gray-400 text-center mb-16 text-lg"
          >
            Nuestro proceso para crear la hamburguesa perfecta
          </motion.p>
          <motion.div 
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="grid grid-cols-3 gap-8"
          >
            {[
              {
                step: '1',
                title: 'Selección de Ingredientes',
                description: 'Seleccionamos carne premium, vegetales frescos, quesos artesanales y panes recién horneados cada mañana.',
                icon: '🥬🥬'
              },
              {
                step: '2',
                title: 'Preparación Artesanal',
                description: 'Preparamos cada hamburguesa al momento, siguiendo nuestra receta secreta.',
                icon: '👨‍🍳'
              },
              {
                step: '3',
                title: 'Entrega Rápida',
                description: 'Llevamos tu hamburguesa directamente a tu puerta, caliente y lista para disfrutar.',
                icon: '🛵'
              }
            ].map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="relative flex flex-col items-center text-center"
              >
                <div className="w-16 h-16 bg-yellow-500/20 rounded-full flex items-center justify-center mb-6 relative">
                  {item.step === '1' ? (
                    <div className="relative flex items-center justify-center">
                      <span className="text-2xl absolute -right-2">🥬</span>
                      <span className="text-3xl relative z-10">🥩</span>
                    </div>
                  ) : item.step === '2' ? (
                    <span className="text-3xl">👨‍🍳</span>
                  ) : (
                    <span className="text-3xl">🛵</span>
                  )}
                  <div className="absolute -right-2 -top-2 w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center text-black font-bold">
                    {item.step}
                  </div>
                </div>
                <h3 className="text-white text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-gray-400">{item.description}</p>
                {index < 2 && (
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: '100%' }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                    className="absolute top-8 left-[60%] w-full h-[2px] bg-gradient-to-r from-yellow-500/50 to-transparent"
                  />
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Menu/Pricing Section */}
      <section id="platillos" className="w-full flex justify-center py-20 bg-zinc-900">
        <div className="w-[90%] max-w-7xl">
          <motion.h2 
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="text-white text-4xl font-bold text-center mb-4"
          >
            Nuestras Hamburguesas
          </motion.h2>
          <motion.p
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="text-gray-400 text-center mb-16 text-lg"
          >
            Preparadas con ingredientes frescos y con todo nuestro amor
          </motion.p>
          <motion.div 
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="grid grid-cols-3 gap-12"
          >
            {[
              { 
                name: 'La Clásica', 
                price: '$99', 
                description: 'Nuestra hamburguesa tradicional con un toque especial que te hará volver por más',
                features: ['Carne 150g', 'Queso Cheddar', 'Lechuga Fresca', 'Tomate', 'Salsa Especial'],
                image: '/burger.png',
                popular: false
              },
              { 
                name: 'La Especial', 
                price: '$129', 
                description: 'Doble carne jugosa con bacon crujiente y nuestra salsa secreta',
                features: ['Doble Carne 300g', 'Doble Queso', 'Bacon Crujiente', 'Cebolla Caramelizada', 'Salsa Secreta'],
                image: '/burger.png',
                popular: true
              },
              { 
                name: 'La Suprema', 
                price: '$159', 
                description: 'Una experiencia gourmet con ingredientes premium y nuestra salsa de trufa',
                features: ['Triple Carne 450g', 'Queso Gouda', 'Champiñones Salteados', 'Cebolla Crujiente', 'Salsa Trufa'],
                image: '/burger.png',
                popular: false
              }
            ].map((item) => (
              <motion.div
                key={item.name}
                whileHover={{ y: -10 }}
                className={`relative ${
                  item.popular 
                    ? 'bg-gradient-to-b from-yellow-500/20 via-yellow-500/10 to-transparent border-2 border-yellow-500 shadow-2xl shadow-yellow-500/20' 
                    : 'bg-black/50 border border-gray-800'
                } rounded-2xl overflow-hidden`}
              >
                {item.popular && (
                  <div className="absolute top-4 right-4 bg-yellow-500 text-black px-3 py-1 rounded-full text-sm font-bold z-20">
                    FAVORITA
                  </div>
                )}
                <div className="relative h-28 overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                  <div className="absolute bottom-3 left-3 right-3 flex justify-between items-end">
                    <h3 className="text-white text-lg font-bold">{item.name}</h3>
                    <p className="text-yellow-500 text-lg font-bold">{item.price}</p>
                  </div>
                </div>
                <div className="p-3">
                  <p className="text-gray-400 text-xs mb-2">{item.description}</p>
                  <div className="space-y-0.5">
                    {item.features.map((feature, index) => (
                      <div key={index} className="flex items-center gap-1.5">
                        <span className="text-yellow-500 text-[10px]">•</span>
                        <span className="text-gray-300 text-[10px]">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <motion.button 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`w-full font-bold py-1.5 px-3 rounded-lg mt-3 text-sm ${
                      item.popular 
                        ? 'bg-yellow-500 text-black shadow-lg shadow-yellow-500/20' 
                        : 'bg-white/10 text-white hover:bg-white/20'
                    }`}
                  >
                    Ordenar Ahora
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQ />

      {/* CTA Section */}
      <CTA />

      {/* Footer */}
      <footer className="w-full flex justify-center py-8 bg-zinc-900">
        <div className="w-[90%] max-w-7xl text-center">
          <p className="text-gray-400">© 2024 La Mejor Hamburguesa. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  )
}
