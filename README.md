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

-------------------------------------backend--------------------------
----------------------------- Admin Object -----------------------------
{
"firstName": "String",
"lastName": "String",
"email": "String",
"password": "String",
"role": "String",
"createdAt": "String",
"updatedAt": "String"
}

------------------------------- User Object -----------------------------------
{
"\_id": ObjectId(),
"firstName": "Alice",
"lastName": "Smith",
"email": "user@example.com",
"password": "hashed_password",
"profilePicture": "image_url",
"age": 25,
"gender": "female",
"height": 170,
"weight": 65,
"fitnessGoals": "weight loss",
"location": {
"city": "Los Angeles",
"postalCode": "90001"
},
"workoutHistory": [
{
"workoutId": ObjectId(),
"workoutName": "Yoga",
"caloriesBurned": 300,
"date": ISODate()
}
],
"goalProgress": {
"currentWeight": 63,
"targetWeight": 60
},
"bookedSessions": [
{
"sessionId": ObjectId(),
"partnerId": ObjectId(),
"status": "confirmed",
"date": ISODate()
}
],
"paymentMethod": "PayPal",
"paymentHistory": [
{
"paymentId": ObjectId(),
"amount": 30,
"paymentMethod": "PayPal",
"transactionDate": ISODate(),
"status": "completed"
}
],
"subscriptionType": "free",
"userNotifications": [
{
"notificationId": ObjectId(),
"title": "Workout Reminder",
"message": "You have a workout tomorrow at 10:00 AM",
"isRead": false,
"createdAt": ISODate()
}
]
}

Table used AG Grid

// test

Routes ---------------
users:
http://localhost:8080/fitness360/user

trainers:
http://localhost:8080/fitness360/trainer
