/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        ubuntu: ["Ubuntu", "sans-serif"],
      },
      screens: {
        mobile: "900px",
      },
      colors: {
        logo: {
          orange: "#f16236",
          yellow: {
            light: "#ffc033",
            dark: "#f88602",
          },
        },
      },
      animation: {
        alertAnimate: "alertAnimate 6s linear",
      },
    },
  },
  plugins: [],
};
