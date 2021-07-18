import request from 'supertest';
import { app } from '../../app';
import { Order, OrderStatus } from '../../models/order';
import { Ticket } from '../../models/ticket';

import mongoose from 'mongoose';
import { natsWrapper } from '../../nats-wrapper';

it('marks an order as cancelled', async function () {
  const ticket = new Ticket({
    title: 'concert',
    price: 20,
    id: mongoose.Types.ObjectId().toHexString(),
  });

  await ticket.save();

  const user = global.login();

  const { body: order } = await request(app)
    .post('/api/order')
    .set('Cookie', user)
    .send({ ticketId: ticket.id })
    .expect(201);

  await request(app)
    .delete(`/api/orders/${order.id}`)
    .set('Cookie', user)
    .send()
    .expect(204);

  const updatedOrder = await Order.findById(order.id);
  expect(updatedOrder.status).toEqual(OrderStatus.Cancelled);
});

it('emits a order cancelled event', async function () {
  const ticket = new Ticket({
    title: 'concert',
    price: 20,
    id: mongoose.Types.ObjectId().toHexString(),
  });

  await ticket.save();

  const user = global.login();

  const { body: order } = await request(app)
    .post('/api/order')
    .set('Cookie', user)
    .send({ ticketId: ticket.id })
    .expect(201);

  await request(app)
    .delete(`/api/orders/${order.id}`)
    .set('Cookie', user)
    .send()
    .expect(204);

  expect(natsWrapper.client.publish).toHaveBeenCalled();
});
