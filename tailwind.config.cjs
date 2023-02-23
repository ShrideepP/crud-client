/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'background-primary': '#030912',
        'background-secondary': '#061223',
        'accent': '#38bdf8',
        'accent-dark': '#0ea5e9',
        'dominant': '#f8fafc',
        'compliment': '#e2e8f0',
      }, fontFamily: {
        'montserrat': ['Montserrat', 'sans-serif'],
      }, fontSize: {
        'base': ['0.9rem', '1.5rem'],
      },
    },
  },
  plugins: [],
}