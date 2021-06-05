module.exports = {
  purge: ['./src/pages/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: '#F29F05',
        heading: '#131214',
        body: '#716C65'
      },
      fontFamily: {
        heading: ['Roboto Slab', 'serif'],
        text: ['Poppins']
      },
      minWidth: {
        '200': '156px'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
