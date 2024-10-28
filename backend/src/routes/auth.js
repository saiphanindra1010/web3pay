import express from "express";
import { loginUser, registerUser,forgotPassword } from "../controller/userController.js";
const router = express.Router();

router.post("/signup", registerUser);
router.post("/login", loginUser);
// router.post("/forgot", forgotPassword);

export default router;
