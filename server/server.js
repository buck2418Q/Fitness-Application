import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import { CreateAdmin, DeleteAdmin, FindAdminById, GetAdmin, UpdateAdmin } from "./controllers/Admin.js";
import { CreateUser, DeleteUser, FindUserById, GetUsers, UpdateUser, UserCount } from "./controllers/User.js";
import { CreateTrainer, DeleteTrainer, FindTrainerById, GetTrainers, TrainerCount, UpdateTrainer } from "./controllers/Trainer.js";
import { Login } from "./controllers/Login.js";
import { verifyToken } from "./middleWare/MiddleWare.js";
import { getTrainerDetails } from "./services/HomeService.js";
import { GetTrainerDetails } from "./controllers/Home.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const port = process.env.PORT || 3000;
const dbUrl = process.env.DB_URL;
const appName = "/fitness360";
const router = express.Router();

app.use(appName, router);


// all admins 
router.get("/admin", GetAdmin);
router.post("/admin", CreateAdmin);
router.put("/admin", UpdateAdmin);
router.delete("/admin", DeleteAdmin);
router.get("/findadminbyid", FindAdminById)

//user
router.get("/totaluser", UserCount)
router.get("/user", GetUsers);
router.post("/user", CreateUser);
router.put("/user", UpdateUser);
router.delete("/user", DeleteUser);
router.get("/finduserbyid", FindUserById);

//trainers
router.get("/trainercount", TrainerCount)
router.get("/trainer", verifyToken, GetTrainers);
router.post("/trainer", CreateTrainer);
router.put("/trainer", UpdateTrainer);
router.delete("/trainer", DeleteTrainer);
router.get("/findtrainerbyid", FindTrainerById);

//login
router.post("/login", Login);


// home page data
router.get("/knowtrainer", GetTrainerDetails)



mongoose.connect(dbUrl).then((d) => {
    app.listen(port, () => {
        console.log("Server running at port ", port);
    });
    console.log("DB Connected");
}).catch((e) => {
    console.log('DB connection error');
});
