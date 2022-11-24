/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './elements/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
    fontFamily: {
      Chivo: ['Chivo', 'sans-serif'],
      Satisfy: ['Satisfy', 'cursive'],
      Oxygen: ['Oxygen', 'sans-serif'],
    },
  },
  plugins: [],
};
