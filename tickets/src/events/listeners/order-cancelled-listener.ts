import {
  Listener,
  NotFoundError,
  OrderCancelledEvent,
  Subjects,
} from '@yisus44tickets/common';

import { Message } from 'node-nats-streaming';

import { queueGroupName } from './queue-group-name';
import { Ticket } from '../../models/Ticket';
import { TicketUpdatedPublisher } from '../publishers/ticket-updated-publisher';

export class OrderCancelledListener extends Listener<OrderCancelledEvent> {
  subject: Subjects.OrderCancelled = Subjects.OrderCancelled;
  queueGroupName = queueGroupName;

  async onMessage(data: OrderCancelledEvent['data'], msg: Message) {
    const ticket = await Ticket.findById(data.ticket.id);

    if (!ticket) {
      throw new NotFoundError();
    }

    ticket.set({ orderId: undefined });

    await ticket.save();
    await new TicketUpdatedPublisher(this.client).publish({
      id: ticket.id,
      orderId: ticket.orderId,
      userId: ticket.userId,
      version: ticket.version,
      price: ticket.price,
      title: ticket.title,
    });

    msg.ack();
  }
}
