const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['**/*.tsx'],
  mode: 'jit',
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        orange: colors.orange
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: [require('@tailwindcss/forms')]
}
