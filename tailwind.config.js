/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './hooks/**/*.{js,ts}',
  ],
  theme: {
    listStyleType: {
      none: 'none',
      lower: 'lower-alpha',
      decimal: 'decimal',
    },
    extend: {
      colors: {
        'dark-grey': '#4A4661',
        'light-grey': '#F4F4F5',
        'bg-grey': '#F5F5F5',
        'light-brown': '#DFD7BF',
        'dark-brown': '#3F2305',
        pistachio: '#38E172',
        gold: '#FFCD3C',
      },
      content: {
        'arrow-left': 'url("../public/assets/LeftArrow.svg")',
        'arrow-right': 'url("../public/assets/RightArrow.svg")',
      },
      backgroundImage: {
        hero: "url('../public/assets/hero.png')",
      },
      dropShadow: {
        md: '0 4px 2px rgb(0 0 0 / 0.35)',
      },
    },
    screens: {
      xs: '480px',
      sm: '753px',
      md: '1060px',
      xl: '1400px',
    },
    animation: {
      loading: 'spin 1s infinite',
    },
  },
  plugins: [],
};
