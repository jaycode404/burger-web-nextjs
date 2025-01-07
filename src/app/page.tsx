'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

export default function Page() {
  return (
    <div className="min-h-screen bg-black">
      {/* Navigation */}
      <motion.nav 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="w-full flex justify-center"
      >
        <div className="w-[60%] py-4 flex justify-between items-center">
          <motion.span 
            whileHover={{ scale: 1.1 }}
            className="text-white text-xl font-bold"
          >
            Logo
          </motion.span>
          <div className="flex gap-8">
            <motion.a 
              whileHover={{ scale: 1.1 }}
              href="#nosotros" 
              className="text-white hover:text-gray-300"
            >
              Nosotros
            </motion.a>
            <motion.a 
              whileHover={{ scale: 1.1 }}
              href="#platillos" 
              className="text-white hover:text-gray-300"
            >
              Platillos
            </motion.a>
            <motion.a 
              whileHover={{ scale: 1.1 }}
              href="#contacto" 
              className="text-white hover:text-gray-300"
            >
              Contacto
            </motion.a>
          </div>
        </div>
      </motion.nav>
      
      {/* Hero Section */}
      <main className="relative w-full flex justify-center min-h-screen">
        <div className="w-[60%]">
          <motion.div 
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full flex justify-center mb-0"
          >
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
            className="relative w-full max-w-xl mx-auto -mt-20"
          >
            <div className="absolute inset-0 bg-gradient-radial from-[#FFE600] via-[#FFE600]/30 to-transparent opacity-60 blur-[100px] rounded-full transform scale-150"></div>
            <Image
              src="/burger.png"
              alt="Delicious Hamburger"
              width={600}
              height={225}
              className="relative w-full h-auto object-contain drop-shadow-2xl"
              priority
            />
          </motion.div>
        </div>
      </main>
    </div>
  )
}
