const express=require("express")
const app=express()
const dotenv=require("dotenv")
dotenv.config()
const DB_URL=process.env.DB_URL
const PORT=process.env.PORT
const mongoose=require("mongoose")
const router = require("./routes/route")

mongoose.connect(DB_URL)
app.use(express.json())
app.use(router)
app.listen(PORT,()=>{
    console.log("listened to",PORT)
})