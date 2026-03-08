/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/*index.html",
    "./src/**/*.{html,js}"
  ],
  theme: {
     
      screens: {
        sm: "350px",
        md: "668px",
        lg: "1000px",
        xl: "1280px",
        "2xl": "1400px"
      
    },

    extend: {
      colors: {
        primary: "#1e40af",
        secondary: "#f59e0b",
        accent: "#10b981"
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      spacing: {
        128: "32rem",
        144: "36rem"
      }
    },
  },
  plugins: [],
}