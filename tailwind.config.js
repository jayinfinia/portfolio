/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'jeton-orange': '#f73b20',
        'jeton-dark': '#1a1a1a',
        'jeton-light': '#f8f8f8',
        'jeton-gray': '#6b6b6b',
      },
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
      },
      fontSize: {
        'fluid-sm': 'clamp(0.875rem, 0.8rem + 0.375vw, 1rem)',
        'fluid-base': 'clamp(1rem, 0.9rem + 0.5vw, 1.25rem)',
        'fluid-lg': 'clamp(1.25rem, 1.1rem + 0.75vw, 1.75rem)',
        'fluid-xl': 'clamp(1.5rem, 1.3rem + 1vw, 2.25rem)',
        'fluid-2xl': 'clamp(2rem, 1.7rem + 1.5vw, 3rem)',
        'fluid-3xl': 'clamp(2.5rem, 2rem + 2.5vw, 4rem)',
        'fluid-4xl': 'clamp(3rem, 2.5rem + 2.5vw, 5rem)',
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '26': '6.5rem',
        '30': '7.5rem',
      },
    },
  },
  plugins: [],
}