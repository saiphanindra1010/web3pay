import mongoose from "mongoose";
import dotenv from "dotenv";
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.DB)
    console.log("db connected")
  } catch (error) {
    console.error(error);
    process.exit();
  }
};

export default connectDB;