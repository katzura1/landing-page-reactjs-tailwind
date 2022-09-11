/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      primary: '#FE5E44',
      primaryLight: '#FE5E4433',
      primaryExtraLight: 'rgba(254, 94, 68, 0.05)',
      shadowPrimary: '#FE5E441A',
      dark: '#0C1B4D',
      darkLight: '#0E144A99',
      secondary: 'rgba(0, 0, 0, 0.5)',
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      emerald: colors.emerald,
      indigo: colors.indigo,
      yellow: colors.yellow,
    },
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
      poppins: ['Poppins', 'normal'],
      sansPro: ['Source Sans Pro'],
      patuaOne: ['Patua One'],
      inter: ['Inter'],
    },
    extend: {
      spacing: {
        '8xl': '96rem',
        '9xl': '128rem',
      },
      borderRadius: {
        '4xl': '2rem',
      },
    },
    container: {
      center: true,
      padding: '2rem',
    },
  },
  plugins: [],
}
