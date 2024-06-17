import { Request, Response } from 'express';
import { userServices } from './signup.services'; 
const signupController = async (req: Request, res: Response) => {
  try {
    const userData = req.body; 
    if (!userData.name || !userData.email || !userData.password) {
      return res.status(400).json({
        success: false,
        message: 'Missing required fields: name, email, and password',
      });
    }

    res.json({
      success: true,
      message: 'User registered successfully',
      data: userData,
    });
  } catch (error) {
    console.error('Error during signup:', error);
    res.status(500).json({
      success: false,
      message: 'An error occurred during signup. Please try again later.',
    });
  }
};

export const userController = {
  signupController,
};