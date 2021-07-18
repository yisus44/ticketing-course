import mongoose from 'mongoose';
import request from 'supertest';
import { app } from '../../app';
import { Order } from '../../models/order';
import { Payment } from '../../models/payment';
import { stripe } from '../../stripe';

jest.mock('../../stripe');

import { OrderStatus } from '@yisus44tickets/common';
it('returns a 404 when paying for an order that does not exists', async function () {
  await request(app)
    .post('/api/payments')
    .set('Cookie', global.login())
    .send({ token: 'yey', orderId: 'yeye' })
    .send({
      token: 'yeye',
      orderId: mongoose.Types.ObjectId().toHexString(),
    })
    .expect(401);
});

it('returns a 401 when purchasing an order that doesnt belong to the user', async function () {
  const order = new Order({
    id: mongoose.Types.ObjectId().toHexString(),
    userId: mongoose.Types.ObjectId().toHexString(),
    version: 0,
    price: 2,
    status: OrderStatus.Created,
  });

  await order.save();
  await request(app)
    .post('/api/payments')
    .set('Cookie', global.login())
    .send({ token: 'yey', orderId: 'yeye' })
    .send({
      token: 'yeye',
      orderId: order.id,
    })
    .expect(401);
});
it('returns a 400 when purchasing a cancelled order', async function () {
  const userId = mongoose.Types.ObjectId().toHexString();
  const order = new Order({
    id: mongoose.Types.ObjectId().toHexString(),
    userId,
    version: 0,
    price: 2,
    status: OrderStatus.Cancelled,
  });

  await order.save();

  await request(app)
    .post('/api/payments')
    .set('Cookie', global.login(userId))
    .send({
      orderId: order.id,
      token: 'yesa',
    })
    .expect(400);
});

it('returns a 204 with valid inputs', async function () {
  const userId = mongoose.Types.ObjectId().toHexString();
  const order = new Order({
    id: mongoose.Types.ObjectId().toHexString(),
    userId,
    version: 0,
    price: 2,
    status: OrderStatus.Created,
  });

  await order.save();

  await request(app)
    .post('/api/payments')
    .set('Cookie', global.login(userId))
    .send({
      token: 'tok_visa',
      orderId: order.id,
    })
    .expect(201);

  const chargeOptions = (stripe.charges.create as jest.Mock).mock.calls[0][1];
  expect(chargeOptions.source).toEqual('tok_visa');
  expect(chargeOptions.source).toEqual(2 * 100);
  expect(chargeOptions.source).toEqual('mxn');
});

it('returns a 204 with valid inputs', async function () {
  const userId = mongoose.Types.ObjectId().toHexString();
  const order = new Order({
    id: mongoose.Types.ObjectId().toHexString(),
    userId,
    version: 0,
    price: 2,
    status: OrderStatus.Created,
  });

  await order.save();

  await request(app)
    .post('/api/payments')
    .set('Cookie', global.login(userId))
    .send({
      token: 'tok_visa',
      orderId: order.id,
    })
    .expect(201);

  const chargeOptions = (stripe.charges.create as jest.Mock).mock.calls[0][1];
  expect(chargeOptions.source).toEqual('tok_visa');
  expect(chargeOptions.source).toEqual(2 * 100);
  expect(chargeOptions.source).toEqual('mxn');
});

it('returns a 204 with valid inputs but true', async function () {
  const userId = mongoose.Types.ObjectId().toHexString();
  const price = Math.floor(Math.random() * 1000000);
  const order = new Order({
    id: mongoose.Types.ObjectId().toHexString(),
    userId,
    version: 0,
    price,
    status: OrderStatus.Created,
  });

  await order.save();

  await request(app)
    .post('/api/payments')
    .set('Cookie', global.login(userId))
    .send({
      token: 'tok_visa',
      orderId: order.id,
    })
    .expect(201);

  const stripeCharges = await stripe.charges.list({ limit: 10 });
  const stripeCharge = stripeCharges.data.find(
    (charge) => charge.amount === price * 100
  );

  expect(stripeCharge).toBeDefined();
  expect(stripeCharge!.currency).toEqual('mxn');

  const payment = await Payment.findOne({
    orderId: order.id,
    stripeId: stripeCharge!.id,
  });

  expect(payment).not.toBeNull();
});

it('', async function () {});
it('', async function () {});
it('', async function () {});
