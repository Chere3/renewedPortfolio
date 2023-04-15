// @ts-check
/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#df631b",
        secondary: "#fffff",
        "primary-light": "#f7b38c",
        "primary-dark": "#b23c0d",
        "secondary-light": "#ffffff",
        "secondary-dark": "#cccccc",
      },
      fontFamily: {
        sans: ["Roboto", "sans-serif"],
        serif: ["Roboto", "serif"],
        mono: ["Roboto", "monospace"],
      },
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
      },
      container: {
        center: true,
        padding: "1rem",
      },
    },
  },
  plugins: [],
};
