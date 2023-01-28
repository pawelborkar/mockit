/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'light-cyan': '#DFF5FF',
      },
    },
  },
  plugins: [require('daisyui')],
};
