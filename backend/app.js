import express, { json } from "express";
import connectDB from "./src/config/db.js"
import sendTransactions from "./src/routes/sendTransactions.js"
const app=express()
import dotenv from "dotenv";
dotenv.config();
import cors from "cors"
// impo

const PORT=5000
app.use(express.json())
// Middleware
app.use(express.json())
app.use(cors({
  origin:"http://localhost:5173",
  methods:"GET,POST,PUT,DELETE",
  credentials:true
}))


app.use("/",sendTransactions)

connectDB()
app.listen(PORT,(req,res)=>
{
    console.log("server running ar port : "+PORT)
})