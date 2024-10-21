import express from "express";
const router = express.Router();

router.post("/login", (req, res) => {
  res.json({ route: "login" });
});
router.post("/signup", (req, res) => {
  res.json({ route: "signup" });
});
export default router;
