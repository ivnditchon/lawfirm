module.exports = {
  purge: {
    enabled: true,
    content: ['./dist/**/*.{html, js}']
  },
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
        'softGreen': '#447c31',
        'veryDarkCyan': '#003233',
        'lightGreen': '#57a33e'
      },
      fontFamily: {
        primary: ['Poppins'],
        secondary: ['Stoke']
      },
      animation: {
        'modal': 'modal 0.8s ease-in-out forwards'
      },
      keyframes: {
        modal: {  
          'from': {
            top: '-50%'
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
    extend: {
      transitionDuration: ['hover'],
    },
  },
  plugins: [],
}
