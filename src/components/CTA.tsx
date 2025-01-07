'use client'

import React from 'react'
import { motion } from 'framer-motion'

const SmokeParticle = ({ delay = 0, position = 0 }) => {
  const xOffset = position * 30 - 120 // Narrower distribution to match button width
  
  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{
        scale: [0.3, 2, 3],
        opacity: [0, 0.8, 0],
        y: [0, -100],
        x: [xOffset, xOffset + (Math.random() > 0.5 ? 30 : -30)],
        rotate: [0, Math.random() > 0.5 ? 90 : -90]
      }}
      transition={{
        duration: 3,
        delay,
        repeat: Infinity,
        repeatDelay: Math.random() * 0.2,
        ease: "easeOut"
      }}
      className="absolute bottom-0 w-10 h-10 rounded-full blur-xl"
      style={{
        background: 'radial-gradient(circle at center, rgba(253, 224, 71, 0.5), rgba(253, 224, 71, 0.3), transparent)',
        filter: 'blur(8px)'
      }}
    />
  )
}

export default function CTA() {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-zinc-900 to-black"></div>
      
      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.h2
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-white mb-6"
        >
          ¿Listo para probar la mejor hamburguesa?
        </motion.h2>
        
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto"
        >
          No esperes más para disfrutar de una experiencia gastronómica única.
          ¡Haz tu pedido ahora y déjanos sorprenderte!
        </motion.p>
        
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="relative inline-block"
        >
          {/* Glowing button with smoke */}
          <div className="relative">
            {/* Smoke particles container - positioned relative to button */}
            <div className="absolute -inset-x-20 -top-40 h-40 flex items-end justify-center overflow-hidden">
              {[...Array(10)].map((_, i) => (
                <SmokeParticle key={i} delay={i * 0.2} position={i} />
              ))}
            </div>

            {/* Button glow effect */}
            <div className="absolute -inset-1 bg-yellow-500 rounded-xl opacity-60 group-hover:opacity-80 blur-lg transition duration-200"></div>
            <div className="absolute -inset-1 bg-gradient-to-r from-yellow-500 via-orange-500 to-yellow-500 rounded-xl opacity-40 group-hover:opacity-70 blur-xl transition duration-200 animate-pulse"></div>
            
            {/* Button */}
            <motion.button
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 0 30px rgba(234, 179, 8, 0.6)"
              }}
              whileTap={{ scale: 0.95 }}
              className="relative bg-gradient-to-r from-yellow-500 via-orange-500 to-yellow-500 text-black px-12 py-6 rounded-xl font-bold text-xl shadow-lg shadow-yellow-500/50 hover:shadow-yellow-500/80 transition-all duration-300 group"
            >
              <span className="relative z-10 inline-flex items-center">
                Ordenar Ahora
                <motion.svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 ml-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  animate={{ x: [0, 5, 0] }}
                  transition={{ 
                    duration: 1.5, 
                    repeat: Infinity,
                    ease: "easeInOut" 
                  }}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </motion.svg>
              </span>
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 