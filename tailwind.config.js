/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      maxHeight: {
        0: "0",
        full: "1000px", // Adjust this value based on the maximum height of your filter content
      },
      transitionProperty: {
        "max-height": "max-height",
      },
      colors: {
        "custom-start": "#cdfbff",
        "custom-end": "#c4e0fd",
      },
      boxShadow: {
        "glow-blue": "0 0 130px 35px rgba(59, 130, 246, 0.75)", // Increased size and spread
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        lato: ["Lato"],
        papyrus: ["papyrus"],
      },
    },
  },
  plugins: [],
};
