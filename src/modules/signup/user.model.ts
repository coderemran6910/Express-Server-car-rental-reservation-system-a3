import { Schema, model } from "mongoose";
import { TSignUp } from "./signup.interface";

const userSchema = new Schema<TSignUp>({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    role: {
        type: String,
        required: true,
        enum: ['user', 'admin'] 
    },
    password: {
        type: String,
        required: true
    },
    phone: {
        type: String
    },
    address: {
        type: String
    }

})

export const User = model('User', userSchema)