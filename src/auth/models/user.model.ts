import { Schema, model } from "mongoose";

const userSchema = new Schema({
    name: {
        type: String,
        required: [true, 'name is required']
    },
    email: {
        type: String,
        required: [true, 'Email is required'],
        unique: true
    },
    password: {
        type: String,
        required: [true, 'name is required']
    },
    img: {
        type: String
    },
    role: {
        type: [String],
        default: ['USER_ROLE'],
        enum: ['USER_ROLE', 'ADMIN_ROLE', 'SUPERADMIN_ROLE']
    }
},{
    versionKey: false, 
    timestamps: true
})

export const UserModel = model('user', userSchema)