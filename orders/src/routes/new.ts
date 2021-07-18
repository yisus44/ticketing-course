import express, { Request, Response } from 'express';
import { Ticket } from '../models/ticket';
import { Order } from '../models/order';
import {
  requireAuth,
  validateRequest,
  NotFoundError,
  OrderStatus,
  BadRequestError,
} from '@yisus44tickets/common';
import { body } from 'express-validator';

import { OrderCreatedPublisher } from '../events/publishers/order-created-publisher';
import { natsWrapper } from '../nats-wrapper';
const router = express.Router();

const EXPIRATION_WINDOW_SECONDS = 15 * 60;

router.post(
  '/api/orders',
  requireAuth,
  [body('ticketId').not().isEmpty().withMessage('TicketID must be provided')],
  validateRequest,
  async function (req: Request, res: Response) {
    //Find the ticket the user is trying to order in the database
    const { ticketId } = req.body;
    //Make sure that this ticket is not already reserved
    const ticket = await Ticket.findById(ticketId);
    if (!ticket) {
      throw new NotFoundError();
    }

    const existingOrder = await ticket.isReserved();

    if (existingOrder) {
      throw new BadRequestError('Ticket is already reserved');
    }
    //Calculate expiration

    const expirationDate = new Date();
    expirationDate.setSeconds(
      expirationDate.getSeconds() + EXPIRATION_WINDOW_SECONDS
    );

    const order = new Order({
      userId: req.currentUser!.id,
      status: OrderStatus.Created,
      expirestAt: expirationDate,
      ticket: ticket,
    });

    new OrderCreatedPublisher(natsWrapper.client).publish({
      id: order.id,
      version: order.version,
      status: order.status,
      userId: order.userId,
      expiresAt: order.expirestAt.toISOString(),
      ticket: {
        id: ticket.id,
        price: ticket.price,
      },
    });
    res.status(201).send(order);
  }
);

export { router as newOrderRouter };
