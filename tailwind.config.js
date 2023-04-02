/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      spacing: {
        "4.6rem": "4.6rem",
        "4.5rem": "4.5rem",
        "8.88rem": "8.88rem",
      },
      flex: {
        3: "3 3 0",
      },
    },
    colors: {
      customYellow: "#FEF08A",
      morazul: "#150E3D",
      transparent: "transparent",
      current: "currentColor",
      primary: "#150E3D",
      info: "#EB816C",
      secondary: "#FAE8BB",
      danger: "#D63B6C",
      success: "#EB816C",
      alert: "#FDF5BF",
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      emerald: colors.emerald,
      indigo: colors.indigo,
      yellow: colors.yellow,
      blue: colors.blue,
      orange: colors.orange,
      red: colors.red,
      green: colors.green,
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("tailwind-scrollbar")({ nocompatible: true }),
  ],
};
