/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    extend: {
      colors: {
        headBlue: "#00469D",
        descGray: "#1E1E1E",
        gridBlue: "#001D42",
        borderGray: "#B0C6E1",
        subHeadBlue: "#00408f",
        subHeadBorder: "#B0C6E1",
      },
      fontFamily: {
        sans: ["Barlow", "sans-serif"],
      },
      backgroundImage: {
        "header-bg": "url('/image/header/header-background-image.png')",
      },
    },
  },
  plugins: [require("@tailwindcss/aspect-ratio")],
};
