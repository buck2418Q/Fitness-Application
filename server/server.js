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

dotenv.config();

// Initialize Express app and middleware
const app = express();
app.use(cors());
app.use(express.json());

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
router.post("/user", CreateUser);
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
