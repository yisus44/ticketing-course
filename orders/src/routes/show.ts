import express, { Request, Response } from 'express';
import {
  NotFoundError,
  requireAuth,
  UnauthorizedError,
} from '@yisus44tickets/common';
import { Order } from '../models/order';

const router = express.Router();

router.get(
  '/api/orders/:orderId',
  requireAuth,
  async function (req: Request, res: Response) {
    const order = await Order.findById(req.params.orderId).populate('ticket');

    if (!order) {
      throw new NotFoundError();
    }
    if (order.userId !== req.currentUser!.id) {
      throw new UnauthorizedError();
    }
    res.send(order);
  }
);

export { router as showOrderRouter };
