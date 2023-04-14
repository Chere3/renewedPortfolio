/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
     colors: {
      'primary': '#f6fafd',
      'secondary': '#000000',
      'tertiary': '#F2F2F2',

     }
    },
  },
  plugins: [],
}
