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

use sm:, md:, and lg: responsive classes to adjust the text sizes, padding, and layout.


------------------- card design -------------------------------------


              <a className="relative block max-w-xs bg-[#f2f8f9] rounded-lg p-8 m-3 text-decoration-none z-0 overflow-hidden before:content-[''] before:absolute before:top-[-16px] before:right-[-16px] before:bg-[#00838d] before:h-8 before:w-8 before:rounded-full before:z-[-1] before:transition-transform before:duration-300 hover:before:scale-[21]" href="#">
                <h3 className="text-black transition-all duration-300 hover:text-white">Name</h3>
                <p className="text-gray-600 transition-all duration-300 hover:text-white/80">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                </p>
                <div className="flex items-center justify-center absolute top-0 right-0 w-8 h-8 overflow-hidden bg-[#00838d] rounded-bl-[32px] rounded-tl-sm">
                  <div className="go-arrow">
                    →
                  </div>
                </div>
              </a>
