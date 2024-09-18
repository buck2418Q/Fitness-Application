const express = require('express');
const app = express();
const port = 5000;

app.get('/', (req, res) => {
    res.send('Backend is working!');
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

// import mongoose from "mongoose";
// import dotenv from "dotenv";
// import express from "express";
// import cors from 'cors';
// dotenv.config();

// const app = express();
// app.use(cors());
// app.use(express.json());

// mongoose.connect(process.env.DB_URL).then((d) => {
//     console.log("DB Connected");
//     app.listen(process.env.PORT, () => {
//         console.log("server running at port : ", + process.env.PORT);
//     });
// }).catch((e) => {
//     console.log("DB Connection Error")
// })
