module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      current: 'currentColor',
      transparent: 'transparent',
      white: '#FFFFFF',
      black: '#000000',
      primary: {
        light: '#D73755',
        DEFAULT: '#bd1d3b',
        dark: '#A40422'
      },
      secondary: {
        light: '#81DAA2',
        DEFAULT: '#67c088',
        dark: '#4EA76F'
      }
    },
    extend: {
      boxShadow: {
        'button-homepage': '0 2px 0 0 #47ad6d',
        'button-homepage-hover': '0 6px 6px -4px rgba(0, 0, 0, 0.25), 0 6px 16px 0 rgba(150, 150, 150, 0.15)'
      },
      gridTemplateRows: {
        'homepage-layout': 'repeat(6, auto)'
      }
    }
  },
  plugins: []
};
