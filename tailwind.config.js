/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand': {
          'lime': '#CCFF33',      // The bright lime green from the top section
          'dark': '#1A1A1A',      // The dark background
          'brown': '#8B4513',     // The brown from the cards
          'purple': '#9D8DF1',    // The contact button color
          'white': '#FFFFFF',     // White text
        }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
} 