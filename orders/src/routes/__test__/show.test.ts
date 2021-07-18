import request from 'supertest';
import { app } from '../../app';

import { Ticket } from '../../models/ticket';
import { Order } from '../../models/order';

import mongoose from 'mongoose';

it('fetches the order', async function () {
  const ticket = new Ticket({
    title: 'concert',
    price: 56,
    id: mongoose.Types.ObjectId().toHexString(),
  });

  await ticket.save();

  const user = global.login();

  const { body: order } = await request(app)
    .post('/api/orders')
    .set('Cookie', user)
    .send({ ticketId: ticket.id })
    .expect(201);

  const { body: fetchedOrder } = await request(app)
    .get(`/api/orders/${order.id}`)
    .send()
    .expect(200);
  expect(fetchedOrder.id).toEqual(order.id);
});

it('returns an error if one user tries to fetch another users order', async function () {
  const ticket = new Ticket({
    title: 'concert',
    price: 56,
    id: mongoose.Types.ObjectId().toHexString(),
  });

  await ticket.save();

  const user = global.login();

  const { body: order } = await request(app)
    .post('/api/orders')
    .set('Cookie', global.login())
    .send({ ticketId: ticket.id })
    .expect(201);

  const { body: fetchedOrder } = await request(app)
    .get(`/api/orders/${order.id}`)
    .send()
    .expect(401);
  expect(fetchedOrder.id).toEqual(order.id);
});
