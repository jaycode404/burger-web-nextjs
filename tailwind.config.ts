import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      keyframes: {
        'smoke-particles': {
          '0%': {
            transform: 'translate(-50%, -50%) scale(1)',
            opacity: '0'
          },
          '20%': {
            transform: 'translate(-50%, -100%) scale(1.2)',
            opacity: '0.5'
          },
          '40%': {
            transform: 'translate(-50%, -150%) scale(1.4)',
            opacity: '0.3'
          },
          '60%': {
            transform: 'translate(-50%, -200%) scale(1.6)',
            opacity: '0.2'
          },
          '80%': {
            transform: 'translate(-50%, -250%) scale(1.8)',
            opacity: '0.1'
          },
          '100%': {
            transform: 'translate(-50%, -300%) scale(2)',
            opacity: '0'
          },
        },
        'spin': {
          'from': {
            transform: 'rotate(0deg)'
          },
          'to': {
            transform: 'rotate(360deg)'
          }
        }
      },
      animation: {
        'smoke-particles': 'smoke-particles 2s ease-out infinite',
        'spin': 'spin 4s linear infinite',
      }
    },
  },
  plugins: [],
} satisfies Config;
