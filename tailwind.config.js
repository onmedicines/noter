/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      width: {
        wide: "30rem",
        wider: "40rem",
        widest: "50rem",
      },
      gridAutoColumns: {
        23: "23%",
        27: "27%",
        29: "29%",
        30: "30%",
        31: "31%",
        39: "39%",
      },
    },
  },
  plugins: [],
};
