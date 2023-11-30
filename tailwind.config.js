/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/index.html"],
  theme: {
    colors: {
      primary: '#3f67ea',
      secondary: '#1d3ba1',
      white: '#fff',
      black: '#000'
    },
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif']
      }
    },
  },
  plugins: [],
}

