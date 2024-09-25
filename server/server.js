import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import { CreateAdmin, DeleteAdmin, FindAdminById, GetAdmin, UpdateAdmin } from "./controllers/Admin.js";
import { CreateUser, GetUsers } from "./controllers/User.js";



dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const port = process.env.PORT || 30000;
const dbUrl = process.env.DB_URL;
// const appName = "/fitness360";
// app.use(appName, express.Router());

// all admins 
app.get("/admin", GetAdmin);
app.post("/admin", CreateAdmin);
app.put("/admin", UpdateAdmin);
app.delete("/admin", DeleteAdmin);
app.get("/findadminbyid", FindAdminById)

//user
app.get("/user", GetUsers);
app.post("/user", CreateUser);

mongoose.connect(dbUrl).then((d) => {
    app.listen(port, () => {
        console.log("Server running at port ", port);
    });
    console.log("DB Connected");
}).catch((e) => {
    console.log('DB connection error');
});
