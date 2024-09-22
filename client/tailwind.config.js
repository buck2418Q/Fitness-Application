/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'callbanner': "url('./src/assets/images/call-banner.png')",
        'footer-texture': "url('/img/footer-texture.png')",
        'custom-gradient': 'linear-gradient(90deg, rgba(255,255,255,1) 33%, rgba(255,255,255,0) 100%)',
      },
      dropShadow: {
        '3xl': '0 25px 25px rgba(0, 0, 0, 0.4)',
        '4xl': [
          '0 35px 35px rgba(0, 0, 0, 0.25)',
          '0 45px 65px rgba(0, 0, 0, 0.15)'
        ],
        'myshadow': '0 45px 65px rgba(0,0,0,0.5)'
      }
    },
  },
  plugins: [],
}

