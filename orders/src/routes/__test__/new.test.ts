import request from 'supertest';
import { app } from '../../app';
import mongoose from 'mongoose';
import { Order, OrderStatus } from '../../models/order';
import { Ticket } from '../../models/ticket';

import { natsWrapper } from '../../nats-wrapper';

it('return an error if the ticket does not exist', async function () {
  const ticketId = mongoose.Types.ObjectId();
  await request(app)
    .post('/api/orders')
    .set('Cookie', global.login())
    .send({ ticketId })
    .expect(404);
});

it('return an error if the tickes is already reserved', async function () {
  const ticket = await new Ticket({
    title: 'concert',
    price: 20,
    id: mongoose.Types.ObjectId().toHexString(),
  });

  await ticket.save();

  const order = new Order({
    ticket: ticket,

    userId: 'yeye',
    status: OrderStatus.Created,
    expiresAt: new Date(),
  });

  await order.save();

  await request(app)
    .post('/api/orders')
    .set('Cookie', global.login())
    .send({
      ticketId: ticket.id,
    })
    .expect(400);
});

it('reserves a ticket', async function () {
  const ticket = await new Ticket({
    title: 'concert',
    price: 20,
    id: mongoose.Types.ObjectId().toHexString(),
  });

  await ticket.save();

  await request(app)
    .post('/api/orders')
    .set('Cookie', global.login())
    .send({ ticketId: ticket.id })
    .expect(201);
});

it('emits an order created event', async function () {
  const ticket = await new Ticket({
    title: 'concert',
    price: 20,
    id: mongoose.Types.ObjectId().toHexString(),
  });

  await ticket.save();

  await request(app)
    .post('/api/orders')
    .set('Cookie', global.login())
    .send({ ticketId: ticket.id })
    .expect(201);

  expect(natsWrapper.client.publish).toHaveBeenCalled();
});
