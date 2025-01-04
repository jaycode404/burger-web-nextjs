'use client'

import { useState } from 'react'

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "What are your opening hours?",
      answer: "We're open Monday to Sunday, 11:00 AM to 10:00 PM."
    },
    {
      question: "Do you offer vegetarian options?",
      answer: "Yes, we have several vegetarian burger options available."
    },
    {
      question: "Do you deliver?",
      answer: "Yes, we offer delivery through our website and major delivery platforms."
    }
  ];

  return (
    <section className="py-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border rounded-lg">
              <button
                className="w-full text-left p-4 focus:outline-none"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <div className="font-semibold">{faq.question}</div>
              </button>
              {openIndex === index && (
                <div className="p-4 pt-0 text-gray-600">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 