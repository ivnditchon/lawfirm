module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      'xs': '475px',
      'sm': '640px',
      'md': '768px',
      'ls': '800px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    extend: {
      colors: {
        'softGreen': '#3b6f29',
        'veryDarkCyan': '#003233',
        'lightGreen': '#4A8A34'
      },
      fontFamily: {
        primary: ['Poppins'],
        secondary: ['Stoke']
      },
      animation: {
        'animate-modal': 'modal 1s ease-in-out forwards'
      },
      keyframes: {
        modal: {  
          'from': {
            top: '-100%'
          },
          'to': {
            top: '50%'
          }
        }
      },
      backgroundImage: theme => ({
        'bg-image': "url('../images/banner.jpg')",
        'rhd': "url('../images/rhd.jpg')"
      })
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
