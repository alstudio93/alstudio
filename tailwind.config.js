/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'xs': { 'max': '370px' },
      'sm': '401px',
      'md': '768px',
      'lg': '1025px',
      'xl': '1236px',
      '2xl': '1536px'
    },
    extend: {
      boxShadow: {
        'lg': '2px 2px 10px -2px rgb(228, 228, 228)',
      },
      fontSize: {
        'hero-h1': 'clamp(2.2rem, 9vw, 4rem)',
        'hero-p': 'clamp(1.2rem, 4vw, 1.875rem)',
        'section-h2': 'clamp(2.2rem, 9vw, 4rem)',
        'contact-h3': 'clamp(1.6rem, 5vw, 3rem)',
        'contact-h4': 'clamp(1.1rem, 3vw, 1.6rem)'
      },
      maxWidth: {
        'section': '1400px'
      },
      textColor: {
        'paragraph': '#354e66'
      }
    },
    fontFamily: {
      'nunito': 'Nunito, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif',
      'quicksand': 'Quicksand, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif'
    },
  },
  darkMode: "class",
  plugins: [require("daisyui")],
  daisyui: {
    themes: false
  },
}