module.exports = {
  purge: ['./src/pages/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: '#F29F05',
        heading: '#131214',
        text: '#716C65'
      },
      fontFamily: {
        heading: ['Roboto Slab', 'serif'],
        text: ['Poppins']
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
