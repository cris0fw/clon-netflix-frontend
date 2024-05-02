/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        rojo: "#E50914",
        bordo: "#C11119",
        negro: "#1b1b1b",
        azul: "#1967D2",
      },
      fontFamily: {
        suezOne: "Suez One, sefif",
        lato: "Lato, sans-serif",
      },
    },
  },
  plugins: [],
};
