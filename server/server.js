import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";


dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
const port = process.env.PORT;
const dbUrl = process.env.DB_URL;



mongoose.connect(dbUrl).then((d) => {
    app.listen(port, () => {
        console.log("Server running at port ", port);
    });
    console.log("DB Connected");
}).catch((e) => {
    console.log('DB connection error');
});
