import express from "express";
import apiModel from "../models/apiModel.js"
const router = express.Router();

router.post("/generatetoken", (req, res) => {
    

  let token = Math.floor(Math.random() * 1000000);
  console.log("token " + token);
  let user_id="idofuser"
  let access="dfg"
    const token1=apiModel.create({
        user_id:"1",
        token,
        access:"sol,eth"
    })
  return res.json({
    "route": token,
  });
});

export default router;
