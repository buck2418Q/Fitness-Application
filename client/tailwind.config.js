/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */

const { nextui } = require("@nextui-org/react");

export default {
  content: [
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Custom colors
        background: "#111419",  // Main dark 
        secondary: "#1d2029",  // Secondary dark 
        light: "#ffffff",      // Light
        secondlight:"#dddddd",
        primary: "#16b650",    // Green 
        "hover-primary": "#13a048", // Slightly darker green for hover effects
      },
      backgroundImage: {
        'callbanner': "url('./src/assets/images/call-banner.png')",
        'footer-texture': "url('/img/footer-texture.png')",
        'custom-gradient': 'linear-gradient(90deg, rgba(23,26,33,1) 33%, rgba(29,32,41,1) 100%)',
      },
      dropShadow: {
        '3xl': '0 25px 25px rgba(0, 0, 0, 0.4)',
        '4xl': [
          '0 35px 35px rgba(0, 0, 0, 0.25)',
          '0 45px 65px rgba(0, 0, 0, 0.15)',
        ],
        'myshadow': '0 45px 65px rgba(0,0,0,0.5)',
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};
