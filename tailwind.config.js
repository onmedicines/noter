/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      width: {
        wide: "30rem",
      },
      gridAutoColumns: {
        31: "31%",
        23: "23%",
        39: "39%",
      },
    },
  },
  plugins: [],
};
