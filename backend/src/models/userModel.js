import mongoose from "mongoose";
import bcrypt from "bcrypt"
const userSchema = mongoose.Schema(
  {
    name: { type: String, require: true },
    email: { type: String, require: true },
    password: { type: String, require: true },
  },

  { timestamp: true }
);



userSchema.methods.matchPassword = async function (uipassword) {
  console.log("thi upwd "+ uipassword)

  console.log("thi spwd "+ this.password)
  
  let z=await bcrypt.compare(uipassword,this.password)
  console.log("bcrypt pws "+ z)
  if (uipassword ) {
    
    return true;
  }
  return false;
};
// userSchema.methods.matchPassword = (uipwd)=>
//   {
//     console.log("pws payload "+uipwd)
//     console.log("fff"+ bcrypt.compare(uipwd,this.password))
//     return  bcrypt.compare(uipwd,this.password)
//   }
const User = mongoose.model("User", userSchema);
export default User;
