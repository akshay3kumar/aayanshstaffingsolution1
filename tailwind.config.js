/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1E40AF', // Royal Blue
        secondary: '#1F2937', // Dark Grey
        accent: '#F97316', // Bright Orange
        ocean: '#005563', // Dark Teal/Cyan
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
