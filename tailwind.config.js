/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
    screens: {
      'sm': '600px',
      'sm1': '730px',
      'sm2': '830px',
      'md': '900px',
      'md2': '1125px',
      'lg': '1200px',
      'xl': '1536px',
    },
  },
  plugins: [],
}
