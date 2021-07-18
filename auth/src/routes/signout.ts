import express, { Request, Response } from 'express';
const router = express.Router();

router.post('/api/users/signout', function (req: Request, res: Response) {
  req.session = null;
  res.send({ currentUser: null });
});

export { router as signoutRouter };
