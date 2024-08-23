const { join } = require('path');

module.exports = {
  content: [join(__dirname, '/src/**/*.{ts,tsx,html}')],
  theme: {
    fontFamily: {
      'roboto': ['Roboto', 'sans-serif'],
    },
    extend: {},
  },
  plugins: [],
}
