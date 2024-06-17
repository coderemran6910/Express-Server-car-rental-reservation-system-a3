import express from "express";
import { userController } from "./Signup.controller";

const router = express.Router();


router.post("/", userController.signupController) 



export const userRouter = router