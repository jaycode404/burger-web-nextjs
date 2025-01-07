'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "¿Cuáles son sus horarios de atención?",
      answer: "Estamos abiertos de Lunes a Domingo, de 11:00 AM a 10:00 PM."
    },
    {
      question: "¿Tienen opciones vegetarianas?",
      answer: "¡Sí! Contamos con deliciosas hamburguesas vegetarianas elaboradas con ingredientes frescos y naturales."
    },
    {
      question: "¿Hacen entregas a domicilio?",
      answer: "Sí, realizamos entregas a través de nuestra página web y las principales plataformas de delivery."
    },
    {
      question: "¿Cuál es el tiempo promedio de espera?",
      answer: "Nuestras hamburguesas se preparan al momento. El tiempo promedio es de 15-20 minutos en restaurante y 30-40 minutos para delivery."
    },
    {
      question: "¿Tienen opciones sin gluten?",
      answer: "Sí, ofrecemos panes sin gluten para todas nuestras hamburguesas. Por favor, infórmanos de cualquier alergia o restricción dietética."
    }
  ];

  return (
    <section className="py-20 bg-zinc-900">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-12 text-white"
        >
          Preguntas Frecuentes
        </motion.h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              key={index} 
              className="border border-yellow-500/20 rounded-lg overflow-hidden bg-black/50 backdrop-blur-sm"
            >
              <button
                className="w-full text-left p-6 focus:outline-none flex justify-between items-center"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-semibold text-white">{faq.question}</span>
                <motion.span
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="text-yellow-500"
                >
                  ▼
                </motion.span>
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="p-6 pt-0 text-gray-400">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 