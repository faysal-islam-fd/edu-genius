import mongoose from "mongoose";

export interface Iuser extends mongoose.Document {
    name: string;
    email: string;
    password: string;
    isMember: boolean;
}



const UserSchema = new mongoose.Schema({
    name: {type: String, required: true},
    email: {type: String,unique: true ,required: true},
    password: {type: String, required: true},
    isMember: {type: Boolean, required: true}
})

const User = mongoose.models.User || mongoose.model<Iuser>("User", UserSchema)

export default User