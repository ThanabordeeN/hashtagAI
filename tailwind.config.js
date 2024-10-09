/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'accent-color': {
          light: '#3182ce',
          dark: '#4fd1c5',
        },
      },
    },
  },
  plugins: [],
  darkMode: 'class',
}