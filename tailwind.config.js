module.exports = {
  content: [
    "**/*.html"
  ],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Roboto']
      }
    },
    
    screens: {
      'pc': {'min': '1510px'},

      'laptop': {'min': '1024px'},
      // Laptop, PC, Tablet > 1024px

      'tablet': {'min': '740px', 'max': '1023px'},
      // Tablet

      'mobile': {'max': '739px'},
      // Mobile
    },

    color: {
      
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}