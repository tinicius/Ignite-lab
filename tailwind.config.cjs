/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx'
  ],
  theme: {

    fontSize: {
      xs: 14,    // extra small
      sm: 16,    // small
      md: 18,    // medium
      lg: 20,    // large
      xl: 24,    // extra large
      '2xl': 32, // two extra large
    },

    colors: {
      'gray-900': '#121214',
      'gray-800': '#202024',
      'gray-400': '#7c7c8a',
      'gray-200': '#c4c4cc',
      'gray-100': '#e1e1e6',

      'cyan-500': '#81d8f7', 
      'cyan-300': '#a7e8ff', 
    },
    extend: {
      fontFamily: {
        sans: 'Inter, sans-serif'
      }
    },
  },
  plugins: [],
}
