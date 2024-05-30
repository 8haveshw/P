/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode:"class",
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      screens:{
        "sm":"480px"
      },
      spacing:{
        "big":"48rem"
      },
      animation: {
        'pulse-slow': 'pulse 1s cubic-bezier(0.4, 0, 0.6, 1) infinite',
       }
    },
    
    fontFamily:{
      nunito:['Nunito','sans-serif']
    }
  },
  plugins: [],
}

