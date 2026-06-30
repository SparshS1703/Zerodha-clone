import { model, Model } from "mongoose";
import  userSchema  from "../schema/UserSchema.js";

export const userModel=new model("user",userSchema);