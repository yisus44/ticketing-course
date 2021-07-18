import { OrderCreatedEvent, OrderStatus } from '@yisus44tickets/common';
import { OrderCreatedListener } from '../order-created-listener';
import { natsWrapper } from '../../../nats-wrapper';
import { Ticket } from '../../../models/Ticket';
import { Message } from 'node-nats-streaming';
import mongoose from 'mongoose';

async function setUp() {
  const listener = new OrderCreatedListener(natsWrapper.client);
  const ticket = new Ticket({
    title: 'concert',
    price: 09,
    userId: 'yeye',
  });

  await ticket.save();

  const data: OrderCreatedEvent['data'] = {
    id: mongoose.Types.ObjectId().toHexString(),
    version: 0,
    status: OrderStatus.Created,
    userId: 'yeyey',
    expiresAt: 'mañana sin falta',
    ticket: {
      id: ticket.id,
      price: ticket.price,
    },
  };
  //@ts-ignore
  const msg: Message = {
    ack: jest.fn(),
  };
  return { listener, ticket, data, msg };
}

it('sets the user Id of the ticket', async function () {
  const { listener, ticket, data, msg } = await setUp();

  await listener.onMessage(data, msg);

  const updatedTicket = await Ticket.findById(ticket.id);

  expect(updatedTicket!.orderId).toEqual(data.id);
});
it('acts the message', async function () {
  const { listener, ticket, data, msg } = await setUp();

  await listener.onMessage(data, msg);

  expect(msg.ack).toHaveBeenCalled();
});

it('publishes a ticket updated event', async function () {
  const { listener, ticket, data, msg } = await setUp();

  await listener.onMessage(data, msg);
  expect(natsWrapper.client.publish).toHaveBeenCalled();

  const ticketUpdatedData = JSON.parse(
    (natsWrapper.client.publish as jest.Mock).mock.calls[0][1]
  );
  expect(data.id).toEqual(ticketUpdatedData.orderId);
});
