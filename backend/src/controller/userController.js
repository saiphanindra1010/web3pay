import User from "../models/userModel.js";
const registerUser = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    if (!name || !email || !password) {
      return res.status(400).json({ error: "enter all details" });
    }
    const UserExist = await User.findOne({ email });
    if (UserExist) {
      return res.status(400).json({ error: "user exist" });
    }
    const user = await User.create({
      name,
      email,
      password,
    });
    if (user) {
      res.status(201).json({ _id: user._id });
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
   
    }
  catch (err) {}
};

export { loginUser, registerUser,forgotPassword };
