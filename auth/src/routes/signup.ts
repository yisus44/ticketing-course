import express, { Request, Response } from 'express';
import { body } from 'express-validator';

import jwt from 'jsonwebtoken';
import { validateRequest, BadRequestError } from '@yisus44tickets/common';

import { User } from '../models/User';
const router = express.Router();

router.post(
  '/api/users/signup',
  [
    body('email').isEmail().withMessage('Invalid email!'),
    body('password')
      .trim()
      .isLength({ min: 4, max: 20 })
      .withMessage('Password must be between 4 and 20 characters long!'),
  ],
  validateRequest,
  async (req: Request, res: Response) => {
    const { email, password } = req.body;

    const exisistingUser = await User.findOne({ email });
    if (exisistingUser) {
      throw new BadRequestError('Email taken');
    }

    const user = new User({ email, password });

    await user.save();
    //generate jwt

    const userJWT = await jwt.sign(
      {
        id: user.id,
        email: user.email,
      },
      process.env.JWT_KEY!
    );
    //store it on the session
    req.session = {
      jwt: userJWT,
    };
    return res.status(201).send(user);
  }
);

export { router as signUpRouter };
