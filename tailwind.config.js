/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,jsx,js}"],
  theme: {
    extend: {
      fontFamily: {
        mon: ["Montserrat, sans-serif"],
        osw: ["Oswald, sans-serif"],
      },
      screens: {
        sm: "700px",
        lg: "1000px",
      },
      colors: {
        b: "#2E323F",
        bl: "#3B4050",
        bll: "#6F737F",
        br: "#A59678"
      },
    },
  },
  plugins: [],
};
