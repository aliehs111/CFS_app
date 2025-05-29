// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      colors: {
        // Theme 1: Slate-Burgundy
        primary: {
          DEFAULT: '#6C1D3F',   // deep burgundy
          light:   '#8B2A5B',   // lighter burgundy
          dark:    '#4D1331',   // darker burgundy
        },
        accent: {
          DEFAULT: '#2C3E50',   // slate blue
          light:   '#3D5566',   // lighter slate
          dark:    '#1A252F',   // darker slate
        },
        'neutral-light': '#F7F9FC',  // near-white slate
        'neutral-dark':  '#2D2D2D',  // charcoal text
      },
      fontFamily: {
        heading: ['Montserrat', 'sans-serif'],
        body:    ['Open Sans', 'sans-serif'],
      },
      container: {
        center: true,
        padding: '1rem',
      },
    },
  },
  plugins: [],
}


