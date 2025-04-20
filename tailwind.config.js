// /** @type {import('tailwindcss').Config} */
// export default {
//   content: [
//     "./index.html",
//     "./src/**/*.{js,ts,jsx,tsx}",
//   ],
//   theme: {
//     extend: {
//       colors: {
//         white: "#FFFFFF",
//         yellowText: "#DEEF1F",
//         grayLight: "#989898",
//         blackSoft: "#0F0E0E",
//         background: "#121212",
//         highlight: "#282828",
        
//       },
//       fontFamily: {
//         display: ["'Big Shoulders Display'", "cursive"],
//         body: ["'Plus Jakarta Sans'", "sans-serif"],
//       },
//     },
//   },
//   plugins: [],
// }


// Updated tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'theme-primary': 'var(--color-primary)',
        'theme-text': 'var(--color-text)',
        'theme-gray': 'var(--color-gray)',
        'theme-bg': 'var(--color-bg)',
        'theme-highlight': 'var(--color-highlight)',
        'theme-bg-card': 'var(--color-bg-card)',
        'theme-bg-input': 'var(--color-bg-input)',
        'theme-bg-opposite': 'var(--color-bg-opposite)',
        
        // Keep original named colors for backward compatibility
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