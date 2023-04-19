// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/navigators/**/*.{js,jsx,ts,tsx}',
    './src/components/**/*.{js,jsx,ts,tsx}',
    './src/screens/**/*.{js,jsx,ts,tsx}',
    './src/app.js',
  ],
  theme: {
    extend: {
      colors: {
        rmate: {
          blue: '#003DA5',
          black: '#424242',
          yellow: '#FFB81C',
          brown: '#DE783F',
          gray: '#8F8F8F',
          white: '#FFFFFF',
          lightgray: '#CDCDCD',
          offwhite: '#F5F5F5',
          lightblue: '#ADD8E6',
        },
      },
    },
  },
  plugins: [],
};
