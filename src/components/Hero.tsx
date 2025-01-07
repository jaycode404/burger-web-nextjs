'use client'

import { motion } from "framer-motion"
import Image from 'next/image'
import Rotate from './Rotate'

export default function Hero() {
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.8,
        ease: "easeOut"
      }
    })
  }

  const words = ["LA", "MEJOR", "HAMBURGUESA", "DEL", "CONDADO"]

  return (
    <section className="relative min-h-screen flex flex-col bg-brand-dark border-2 border-red-500">
      <div className="flex-1 relative border-2 border-blue-500">
        {/* Background Image with Animation */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="absolute inset-0"
        >
          <Image
            src="/burger-hero.png"
            alt="Delicious burger"
            fill
            className="object-contain object-center"
            priority
          />
        </motion.div>

        {/* Animated Text */}
        <div className="relative z-20 pt-20">
          <div className="text-center">
            {words.map((word, i) => (
              <motion.div
                key={word}
                custom={i}
                initial="hidden"
                animate="visible"
                variants={textVariants}
                className="inline-block"
              >
                <h1 
                  className="text-white text-[130px] leading-tight font-black tracking-tighter"
                  style={{ 
                    textShadow: `
                      -1px -1px 0 #000,  
                      1px -1px 0 #000,
                      -1px 1px 0 #000,
                      1px 1px 0 #000,
                      4px 4px 0 #000
                    `
                  }}
                >
                  {word}{' '}
                </h1>
              </motion.div>
            ))}
          </div>
          
          <div className="relative z-30 mt-8 flex justify-center">
            <Rotate />
          </div>
        </div>
      </div>
    </section>
  )
}