/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        fade: {
          "0%": { transform: "translateX(-100%)", opacity: 0 },
          "75%": {
            opacity: 0.4,
          },
          "100%": { transform: "translateX(0%)", opacity: 1 },
        },
        drop: {
          "0%": { transform: "translateY(-100%)", opacity: 0 },
          "75%": {
            opacity: 0.4,
          },
          "100%": { transform: "translateY(0%)", opacity: 1 },
        },
        slit: {
          "0%": {
            transform: "translateZ(-800px) rotateY(90deg)",
            opacity: 0,
          },
          "54%": {
            transform: "(-160px) rotateY(87deg)",
            opacity: 0.5,
          },
          "100%": { transform: "translateZ(0) rotateY(0)", opacity: 1 },
        },
      },
      animation: {
        fade: "fade 0.3s ease-in-out",
        slit: "slit 0.5s ease-in",
        drop: "drop 0.3s ease-in",
      },
    },
    screens: {
      "2xl": { max: "1535px" },
      xl: { max: "1279px" },
      lg: { max: "1023px" },
      md: { max: "769px" },
      sm: { max: "639px" },
    },
  },
  plugins: [],
};
