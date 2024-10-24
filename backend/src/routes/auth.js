import express from "express";
import { loginUser, registerUser,forgotPassword } from "../controller/userController.js";
const router = express.Router();

router.post("/login", loginUser);
router.post("/forgot", forgotPassword);
router.post("/signup", registerUser);
export default router;
