module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors:{
        'light-green': '#3D6955',
        'medium-green': '#325244',
        'dark-green': '#2E473C',
        'biege-text': '#F8F2E3',
      }
    },
    },
  variants: {
    extend: {},
  },
  plugins: ['gatsby-plugin-postcss'],
}
