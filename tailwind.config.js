/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "baby-blue" : "#9ECCFA",
        "navy-blue" : "#0B1957",
        "light-cream" : "#F8F3EA",
        "cream" : "#E6D8C7",
      },
      fontFamily: {
        montseratt : ["Montseratt", "sans-serif"],
        roboto : [ "Roboto", "sans-serif" ],
        raleway : ["Raleway", "sans-serif"],
      }
    },
  },
  plugins: [],
};
