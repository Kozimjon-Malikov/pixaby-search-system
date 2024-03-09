/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    container:{
      screens:{
        lg:'1440px',
        xl:'1700px'
      }
    }
  },
  plugins: [],
}