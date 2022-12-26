/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: "480px",
      md: "760px",
      lg: "960px",
      xl: "1440px",
    },
    extend: {},
  },
  plugins: [],
};
