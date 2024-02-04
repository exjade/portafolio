
module.exports = {
  future: {
    removeDeprecatedGapUtilities: true
  },
  fill: (theme) => ({
    'red': theme('colors.red.500'),
  }),
  content: [
    "./src/**/*.{html, js, ts, vue}", 
  "./src/**/*"
],
  theme: {
    colors: {
      white: {
        normal: "#ffffff",

      },
      black: {
        default: '#000000',
        background: '#010C15',
      },
      blue: {
        title: '#607B96',
      }
    },
    fontFamily: {
      'fira-code': ['"Fira Code"', 'monospace'],
    }
  },
  variants: {
    extend: {
      display: ['group-hover'],
    }
  }
};

