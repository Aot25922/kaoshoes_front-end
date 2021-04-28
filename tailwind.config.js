module.exports = {
  purge: { content: ['./public/**/*.html', './src/**/*.vue'] },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        cadet: {
          dark: "#22223B",
          DEFAULT: "#4A4E69",
        },
        helio: {
          dark: "#9A8C98",
          DEFAULT: "#C9ADA7",
          light: "#F2E9E4"
        },
        red: {
          salsa : "#F87060",
          DEFAULT: "#FF4040"
        },
        green:{
          light: "#56E39F"
        }
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
