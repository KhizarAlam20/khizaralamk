/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        white: "#FFFFFF",
        yellowText: "#DEEF1F",
        grayLight: "#989898",
        blackSoft: "#0F0E0E",
        background: "#121212",
        highlight: "#282828",
        
      },
      fontFamily: {
        display: ["'Big Shoulders Display'", "cursive"],
        body: ["'Plus Jakarta Sans'", "sans-serif"],
      },
    },
  },
  plugins: [],
}
