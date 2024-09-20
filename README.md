Project setup

FRONTEND
cd client
npm install
npm run dev

BACKEND
cd server
npm install
npm install express (if express is not installed)
node server.js

if tailwind is not working check 'vite.config.js' file update to
" export default defineConfig({
css: {
postcss: {
plugins: [tailwindcss()],
},
},
plugins: [react()],
}) "

Deploye react app on github

1. add this to package.json - "homepage": "https://github.com/KromaStone/Fitness-Application"
2. install gh-pages (npm i gh-pages)
3. past these commands in scripts of Package.json :
    "predeploy": "npm run build",
    "deploy": "gh-pages -d build",
