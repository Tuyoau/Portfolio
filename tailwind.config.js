/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        lg: '1280px',
      },
    },
    extend: {
      colors: {
      
      },
      backgroundImage: {
        'black-to-purple': 'linear-gradient(to bottom, black, #281745 )',
      },
    },
  },
  plugins: [],
};
