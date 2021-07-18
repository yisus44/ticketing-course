import { natsWrapper } from '../../../nats-wrapper';
import { OrderCancelledListener } from '../order-cancelled-listener';
import { Ticket } from '../../../models/Ticket';
import { OrderCancelledEvent, OrderCreatedEvent } from '@yisus44tickets/common';
import { Message } from 'node-nats-streaming';
import mongoose from 'mongoose';

async function setUp() {
  const listener = new OrderCancelledListener(natsWrapper.client);
  const orderId = mongoose.Types.ObjectId().toHexString();
  const ticket = new Ticket({
    title: 'concert',
    price: 20,
    userId: 'yeye',
    orderId: undefined,
  });
  await ticket.save();
  const data: OrderCancelledEvent['data'] = {
    id: orderId,
    version: 0,
    ticket: {
      id: ticket.id,
      price: 3,
    },
  };
  //@ts-ignore
  const msg: Message = {
    ack: jest.fn(),
  };

  return { msg, data, listener, ticket };
}

it('updated the ticket, publishes an event and acks the message', async function () {
  const { msg, data, listener, ticket } = await setUp();

  await listener.onMessage(data, msg);

  const updatedTicket = await Ticket.findById(ticket.id);
  expect(updatedTicket!.orderId).not.toBeDefined();
  expect(msg.ack).toHaveBeenCalled();
  expect(natsWrapper.client.publish).toHaveBeenCalled();
});
