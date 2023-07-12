/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      "white": "#ffffff",
      "primary": "#00725E",
      "black": "#1010101",
      "dark": "#000000",
      "footerbg":"#00C99C14",
      "textblack":"#454545"
    },
    screens: {
      'sm': '640px',

      'md': '768px',

      'lg': '1024px',

      'xl': '1280px',

      '2xl': '1536px',
    },
    fontFamily: {
      WorkSans: ["Work Sans"]
    },
    extend: {},
  },
  plugins: [],
}
