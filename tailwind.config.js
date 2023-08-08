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
        "pemandangan-1": "url('../src/assets/pemandangan1.jpg')",
      },
      fontFamily: {
        Satisfy: ["Satisfy"],
        Montserrat: ["Montserrat"],
        Inter: ["Inter"],
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-100%)" },
        },
        marquee2: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0%)" },
        },
      },
      animation: {
        "spin-slow-30": "spin 30s linear infinite",
        "spin-slow-25": "spin 25s linear infinite",
        "spin-slow-10": "spin 10s linear infinite",
        "marquee-infinite": "marquee 10s linear infinite",
      },
      colors: {
        basic: "#FFFDEC",
        "light-green": "#547758",
        "dark-green": "#365739",
        "light-blue": "#545B77",
        "dark-blue": "#374259",
      },
    },
  },
  plugins: [],
};
