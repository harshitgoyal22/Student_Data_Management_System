const express = require("express");
const mongoose = require("mongoose");
const userRoute = require("./route/user");
const app = express();

app.use(express.json());
app.use("/api/user", userRoute)

mongoose.connect('mongodb+srv://harshit:harshit@cluster0.lqpvcrc.mongodb.net/student?retryWrites=true&w=majority').then(console.log('Connected to mongo')).catch(err=>console.log(err));

app.listen("5000", ()=>{
    console.log("Backend is running");
})