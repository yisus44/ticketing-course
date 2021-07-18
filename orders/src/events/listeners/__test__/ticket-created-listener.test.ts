import { Message } from 'node-nats-streaming';
import { TicketCreatedEvent } from '@yisus44tickets/common';
import { TicketCreatedListener } from '../ticket-created-listener';
import { natsWrapper } from '../../../nats-wrapper';
import { Ticket } from '../../../models/ticket';
import mongoose from 'mongoose';

async function setUp() {
  const listener = new TicketCreatedListener(natsWrapper.client);
  const data: TicketCreatedEvent['data'] = {
    title: 'concert',
    version: 0,
    id: new mongoose.Types.ObjectId().toHexString(),
    price: 10,
    userId: new mongoose.Types.ObjectId().toHexString(),
  };
  //@ts-ignore
  const msg: Message = {
    ack: jest.fn(),
  };

  return { listener, data, msg };
}

it('creates and saves a ticket', async function () {
  const { listener, data, msg } = await setUp();

  await listener.onMessage(data, msg);

  const ticket = await Ticket.findById(data.id);

  expect(ticket).toBeDefined();
  expect(ticket.title).toEqual(data.title);
  expect(ticket.price).toEqual(data.price);
});

it('ack the message', async function () {
  const { data, listener, msg } = await setUp();

  await listener.onMessage(data, msg);

  expect(msg.ack).toHaveBeenCalled();
});
