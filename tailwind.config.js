/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "primary": "#005F73"
      },
      fontFamily: {
        Jost: "'Jost', sans-serif",
        Bubblegum: "'Bubblegum Sans', cursive",
      }
    },
  },
  plugins: [require("daisyui")],
}

