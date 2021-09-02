module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Lobster Two', 'Helvetica', 'Arial', 'sans-serif'],
        'serif': ['Lato', 'serif']
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

// backgroundColor: theme => ({
      //   'primary': '#EFEFEF',
      // })