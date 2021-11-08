module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors:{
        'light-green': '#3D6955',
        'medium-green': '#325244',
        'dark-green': '#2E473C',
        'regular-green': '#365E4C',
        'biege-text': '#F8F2E3',
        'dark-text': '#4A4A4A',
      }
    },
    },
  variants: {
    extend: {},
  },
  plugins: ['gatsby-plugin-postcss'],
}
