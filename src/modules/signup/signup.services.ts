import { TSignUp } from "./signup.interface"
import { User } from "./user.model"


const signupUser = async(payload: TSignUp) => {

    const result = await User.create(payload)
    return result
}


export const userServices = {
    signupUser
}