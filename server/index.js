import express from "express"
import mongoose from "mongoose";
import dotenv from "dotenv"

dotenv.config()

mongoose.connect(process.env.MONGODB_URL).then(()=>
{
    console.log("mongoDB Connected")
}).catch((err)=>
{
    console.log(err)
})

const app = express();

app.listen(3000, ()=>
{
    console.log("Server running on port 3000")
})
