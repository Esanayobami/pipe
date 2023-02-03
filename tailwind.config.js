/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  theme: {
    extend: {
      colors:{
        grey: "#E3E5E888",
        bg: "#0d0e12",
        btn : "#22262f",
        shade : "#15181e",

      },
      fontFamily: {
        inter : ["Inter" , "sans-serif"],
      },
    },
  },
  plugins: [],
}
