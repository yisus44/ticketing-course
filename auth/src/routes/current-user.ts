import express, { Request, Response } from 'express';
import { currentUser } from '@yisus44tickets/common';

const router = express.Router();

router.get(
  '/api/users/currentuser',
  currentUser,
  function (req: Request, res: Response) {
    res.send({ currentUser: req.currentUser || null });
  }
);

export { router as currentUserRouter };
