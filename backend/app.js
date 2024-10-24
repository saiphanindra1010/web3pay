import express, { json } from "express";
import connectDB from "./src/config/db.js";
import sendTransactions from "./src/routes/sendTransactions.js";
import auth from "./src/routes/auth.js";
import tokenGenerator from "./src/routes/tokenGenerator.js"
import dotenv from "dotenv";
import cors from "cors";
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());

app.use(
  cors({
    origin: "http://localhost:5173",
    methods: "GET,POST,PUT,DELETE",
    credentials: true,
  })
);

// Routes
app.use("/auth", auth);
app.use("/v1", tokenGenerator);
app.use("/api", sendTransactions);


//config

connectDB();
app.listen(PORT, (req, res) => {
  console.log("server running ar port : " + PORT);
});
