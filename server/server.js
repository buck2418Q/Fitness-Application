import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import { CreateAdmin, DeleteAdmin, FindAdminById, GetAdmin, UpdateAdmin } from "./controllers/Admin.js";
import { CreateUser, DeleteUser, FindUserById, GetUsers, UpdateUser, UserCount } from "./controllers/User.js";
import { CreateTrainer, DeleteTrainer, FindTrainerById, GetTrainers, TrainerCount, UpdateTrainer } from "./controllers/Trainer.js";
import { Login, oAuth } from "./controllers/Login.js";
import { GetTrainerDetails } from "./controllers/Home.js";
import { verifyAndCheckRole } from "./middleWare/VarifyTokenMiddleWare.js";
import multer from "multer";
import path from "path";
import fs from "fs";
dotenv.config();
const appUser = process.env.APP_USER


const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        // Define user-specific folder path
        const userFolder = `uploads/userProfilePicture/`;

        // Check if the folder exists; if not, create it
        if (!fs.existsSync(userFolder)) {
            fs.mkdirSync(userFolder, { recursive: true }); // Create folder dynamically
        }

        cb(null, userFolder); // Set destination folder
    },
    filename: (req, file, cb) => {
        // Generate timestamp in DDMMYYYYHHMM format
        const timestamp = new Date().toISOString().replace(/[-:T]/g, "").slice(0, 12);

        // Get file extension
        const fileExt = path.extname(file.originalname);

        // Set file name (email + timestamp + extension)
        const email = req.body.email?.replace(/[@.]/g, "") || "unknown";
        const fileName = `${email}${timestamp}${fileExt}`;

        cb(null, fileName);
    },
});

const upload = multer({ storage });

// cors 
var whitelist = ['http://localhost:5173', 'https://fitness360.vercel.app/']
var corsOptions = {
    // origin: function (origin, callback) {
    //     if (whitelist.indexOf(origin) !== -1) {
    //         callback(null, true)
    //     } else {
    //         callback(new Error('Not allowed by CORS'))
    //     }
    // },
    origin: appUser,
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"]
}

// Initialize Express app and middleware
const app = express();
app.use(cors(corsOptions));
app.use(express.json());
app.use("/uploads", cors(), express.static("uploads"));

// Configurations and variables
const port = process.env.PORT || 3000;
const dbUrl = process.env.DB_URL;
const appName = "/fitness360";





// Validate Environment Variables
if (!dbUrl) {
    console.error("Error: DB_URL is not defined in environment variables.");
    process.exit(1); // Exit the process if DB_URL is not set
}

// Routes
const router = express.Router();
app.use(appName, router);


// all admins 
router.get("/admin", verifyAndCheckRole(['admin']), GetAdmin);
router.post("/admin", CreateAdmin);
router.put("/admin", verifyAndCheckRole(['admin']), UpdateAdmin);
router.delete("/admin", verifyAndCheckRole(['admin']), DeleteAdmin);
router.get("/findadminbyid", verifyAndCheckRole(['admin']), FindAdminById)

//user
router.get("/totaluser", verifyAndCheckRole(['admin']), UserCount)
router.get("/user", verifyAndCheckRole(['admin']), GetUsers);
router.post("/user", upload.single("profilePicture"), CreateUser);
router.put("/user", verifyAndCheckRole(['admin', 'user']), UpdateUser);
router.delete("/user", verifyAndCheckRole(['admin', 'user']), DeleteUser);
router.get("/finduserbyid", verifyAndCheckRole(['admin', 'trainer', 'user']), FindUserById);

//trainers
router.get("/trainercount", verifyAndCheckRole(['admin']), TrainerCount)
router.get("/trainer", verifyAndCheckRole(['admin']), GetTrainers);
router.post("/trainer", CreateTrainer);
router.put("/trainer", verifyAndCheckRole(['admin', 'trainer']), UpdateTrainer);
router.delete("/trainer", verifyAndCheckRole(['admin', 'trainer']), DeleteTrainer);
router.get("/findtrainerbyid", verifyAndCheckRole(['admin', 'trainer']), FindTrainerById);

//login
router.post("/login", Login);
router.post("/oauth", oAuth);

// home page data
router.get("/knowtrainer", GetTrainerDetails)



// Database connection
const connectDB = async () => {
    try {
        await mongoose.connect(dbUrl); // No need for deprecated options
        console.log("DB Connected");

        app.listen(port, () => {
            console.log(`Server running at port ${port}`);
        });
    } catch (error) {
        console.error("DB connection error:", error.message);
        process.exit(1); // Exit the process on DB connection failure
    }
};
// Connect to database
connectDB();
