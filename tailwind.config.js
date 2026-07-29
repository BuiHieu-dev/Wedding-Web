export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ivory: '#fffaf2',
        blush: '#f8dfe6',
        champagne: '#f4e4c1',
        gold: '#b68b45',
        charcoal: '#2f2f35',
      },
      fontFamily: {
        serif: ['Playfair Display', 'serif'],
        sans: ['Montserrat', 'sans-serif'],
      },
      boxShadow: {
        romantic: '0 24px 70px rgba(93, 64, 55, 0.12)',
      },
    },
  },
  plugins: [],
}
