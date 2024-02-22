/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,ts}'],
  theme: {
    extend: {
      colors: {
        'text': '#374151',
        'background': '#f5f6ff',
        'primary': '#8aafff',
        'secondary': '#c0dafc',
        'accent': '#26c972',
      },
    },
  },
  plugins: [],
};
