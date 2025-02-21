/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './public/index.html',
    './public/**/*.html'
  ],
  theme: {
    extend: {
      colors: {
        orange: {
          primary: "#F38F00",
          secondary: "#E57600"
        },
        grayBg: "#383837"
      },
      fontFamily: {
        jockey: ["Jockey One", "serif"],
        spartan: ["League Spartan", "serif"],
        kodchasan: ["Kodchasan", "serif"],
        montserrat: ["Montserrat", "serif"],
        inter: ["Inter", "serif"],
        josefin: ["Josefin Sans", "serif"]
      }
    },
  },
  plugins: [],
}

