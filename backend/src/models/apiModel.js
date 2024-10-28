import mongoose from "mongoose";
const apiModelSchema=mongoose.Schema(
    {
        user_id:{type:String,require:true},
        token:{type:String,require:true},
        access:{type:String,require:true}, //blockchain name
    }
)
const apiModel= mongoose.model("apiModel",apiModelSchema);
export default apiModel