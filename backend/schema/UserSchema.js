import mongoose,{Schema} from "mongoose";
import bcrypt from "bcrypt";
const userSchema=new Schema({
    username: String,
    password: String,
    email: String,
    createdAt: Date
})

userSchema.pre("save",async()=>{
    this.password=await bcrypt.hash(RightSection.password,12);
});
export default userSchema;