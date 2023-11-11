/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],

  theme: {
    extend: {
      animation: {
        opening: "opening 0.3s ease-in-out",
      },
      aspectRatio: {
        project: "3 / 2",
      },
      boxShadow: {
        buttonShadow: "0 0.25rem 0.25rem 0 #4a4a4af1",
      },
      fontSize: {
        h1Size: ["5rem", "5.5rem"],
        h1Size_md: ["3.75rem", "4.125rem"],
        h1Size_sm: ["2.5rem", "2.75rem"],
        h2Size: ["4.25rem", "4.625rem"],
        h2Size_md: ["3.175rem", "3.5rem"],
        h2Size_sm: ["2.125rem", "2.375rem"],
        h3Size: ["2.75rem", "3.125rem"],
        h3Size_md: ["2rem", "2.375rem"],
        h3Size_sm: ["1.75rem", "1.875rem"],
        pSize: ["1.5rem", "1.875rem"],
        pSize_md: ["1.175rem", "1.375rem"],
        pSize_sm: ["1rem", "1.0625rem"],
      },
      keyframes: {
        opening: {
          from: { transform: "scale(1.1)", opacity: "0" },
          to: { transform: "scale(1)", opacity: "1" },
        },
      },
      translate: {
        screenOutY: "50dvh",
        screenOutX: "50dvw",
      },
      width: {
        section: ["min(100%, 65rem)"],
        burgerMenu: ["min(100%, 15rem)"],
      },
    },
  },
  plugins: [],
};
