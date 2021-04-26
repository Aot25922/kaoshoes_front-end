module.exports = {
  purge: { content: ['./public/**/*.html', './src/**/*.vue'] },
  darkMode: false,
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
        }
      }
    },
    backgroundColor: theme => ({
      ...theme('colors'),
      'primary': '#22223B',
    }),
  },
  variants: {
    extend: {
      backgroundColor: ['active'],
    },
  },
  plugins: [],
}
