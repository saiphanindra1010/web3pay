import User from "../models/userModel.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import {z} from "zod"
const registerUser = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    // if (!name || !email || !password) {
    //   return res.status(400).json({ error: "enter all details" });
    // }

    // input validation
    const requiredBody=z.object({
      email:z.string().email(),
      name:z.string().min(3).max(100),
      password:z.string().min(8).max(50)
    })
    const parsedDataWithSuccess=requiredBody.safeParse(req.body)
    if(!parsedDataWithSuccess.success)
    {
      return res.json({
        message:"incorrect format",
        errors:parsedDataWithSuccess.error
      })
    }

    const UserExist = await User.findOne({ email });
    if (UserExist) {
      return res.status(400).json({ error: "user exist" });
    }
    let hashedPassword = await bcrypt.hash(password, 5);
    const user = await User.create({
      name: name,
      email: email,
      password: hashedPassword,
    });
    if (user) {
      res.status(201).json({ status: "success", _id: user._id });
    }
  } catch (err) {
    return res.json({ error: err });
  }
};

const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (user && (await user.matchPassword(password))) {
      res.json({
        _id: user._id,
        name: user.name,
        email: user.email,
      });
    }
  } catch (err) {}
};
const forgotPassword = async (req, res) => {
  try {
  } catch (err) {}
};

export { loginUser, registerUser, forgotPassword };
