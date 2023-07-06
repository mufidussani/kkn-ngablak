/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        mobile: { MIN: "360px", max: "639px" },
        navbar1: { MIN: "1280px", max: "1400px" },
        xsm: "400px",
      },
      backgroundImage: {
        pattern: "url('../src/assets/navbar-hover.svg')",
        "homepage-cover": "url('../src/assets/home/header_homepage.jpg')",
      },
      fontFamily: {
        Satisfy: ["Satisfy"],
        Montserrat: ["Montserrat"],
        Inter: ["Inter"],
      },
    },
  },
  plugins: [],
};
