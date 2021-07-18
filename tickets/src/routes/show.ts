import express, { Request, Response } from 'express';
import { Ticket } from '../models/Ticket';
import { NotFoundError } from '@yisus44tickets/common';

const router = express.Router();

router.get('/api/tickets/:id', async function (req: Request, res: Response) {
  const ticket = await Ticket.findById(req.params.id);
  if (!ticket) {
    throw new NotFoundError();
  }

  res.send(ticket);
});

export { router as showTicketRouter };
