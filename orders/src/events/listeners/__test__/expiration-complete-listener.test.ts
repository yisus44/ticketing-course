import { ExpirationCompleteListener } from '../expiration-complete-listener';
import { natsWrapper } from '../../../nats-wrapper';

import { Message } from 'node-nats-streaming';

import { OrderStatus, ExpirationCompleteEvent } from '@yisus44tickets/common';
import { Ticket } from '../../../models/ticket';
import { Order } from '../../../models/order';

import mongoose from 'mongoose';

async function setUp() {
  const listener = new ExpirationCompleteListener(natsWrapper.client);
  const ticket = new Ticket({
    title: 'concert',
    price: 300,
    id: mongoose.Types.ObjectId().toHexString(),
  });

  await ticket.save();

  const order = new Order({
    status: OrderStatus.Created,
    userId: '5234',
    expiresAt: new Date(),
    ticket,
  });

  await order.save();

  const data: ExpirationCompleteEvent['data'] = {
    orderId: order.id,
  };
  //@ts-ignore
  const msg: Message = {
    ack: jest.fn(),
  };

  return { listener, order, ticket, data, msg };
}

it('updates the order status to cancelled', async function () {
  const { listener, order, ticket, data, msg } = await setUp();
  await listener.onMessage(data, msg);

  const updatedOrder = await Order.findById(order.id);
  expect(updatedOrder.status).toEqual(OrderStatus.Cancelled);
});

it('emits an orderCancelled event', async function () {
  const { listener, order, ticket, data, msg } = await setUp();
  await listener.onMessage(data, msg);

  expect(natsWrapper.client.publish).toHaveBeenCalled();
  const eventData = JSON.parse(
    (natsWrapper.client.publish as jest.Mock).mock.calls[0][1]
  );

  expect(eventData.id).toEqual(order.id);
});

it('acks the message', async function () {
  const { listener, order, ticket, data, msg } = await setUp();
  await listener.onMessage(data, msg);

  expect(msg.ack).toHaveBeenCalled();
});
