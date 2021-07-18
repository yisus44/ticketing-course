import mongoose from 'mongoose';

import { OrderCreatedEvent, OrderStatus } from '@yisus44tickets/common';
import { natsWrapper } from '../../../nats-wrapper';
import { OrderCreatedListener } from '../order-created-listener';

import { Message } from 'node-nats-streaming';
import { Order } from '../../../models/order';

async function setUp() {
  const listener = new OrderCreatedListener(natsWrapper.client);
  const data: OrderCreatedEvent['data'] = {
    id: mongoose.Types.ObjectId().toHexString(),
    version: 0,
    expiresAt: 'ye',
    userId: 'ye',
    status: OrderStatus.Created,
    ticket: {
      id: 'yey',
      price: 10,
    },
  };

  //@ts-ignore
  const msg: Message = {
    ack: jest.fn(),
  };

  return { listener, data, msg };
}

it('replicates the order info', async function () {
  const { listener, data, msg } = await setUp();
  await listener.onMessage(data, msg);

  const order = await Order.findById(data.id);
  expect(order.price).toEqual(data.ticket.price);
});

it('acks the message', async function () {
  const { listener, data, msg } = await setUp();
  await listener.onMessage(data, msg);

  expect(msg.ack()).toHaveBeenCalled();
});
