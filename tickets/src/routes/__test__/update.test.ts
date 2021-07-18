import request from 'supertest';
import { app } from '../../app';
import mongoose from 'mongoose';
import { Ticket } from '../../models/Ticket';
import { natsWrapper } from '../../nats-wrapper';

it('test suit works', async function () {
  expect(3).toEqual(3);
});

it('return a 404 if the provided it does not exists', async function () {
  const fakeID = new mongoose.Types.ObjectId().toHexString();
  const response = await request(app)
    .put(`/api/tickets/${fakeID}`)
    .set('Cookie', global.login())
    .send({
      title: 'valid title',
      price: 33,
    });
  expect(response.status).toEqual(404);
});

it('return a 401 if the user is not authenticated', async function () {
  const fakeID = new mongoose.Types.ObjectId().toHexString();
  const response = await request(app).put(`/api/tickets/${fakeID}`).send({
    title: 'valid title',
    price: 33,
  });
  expect(response.status).toEqual(401);
});

it('return a 401 if the user does not own the ticket', async function () {
  const response = await request(app)
    .post('/api/tickets')
    .set('Cookie', global.login())
    .send({ title: 'valid title', price: 20 });

  await request(app)
    .put(`/api/tickets/${response.body.id}`)
    .set('Cookie', global.login())
    .send({
      title: 'valid title',
      price: 100,
    })
    .expect(401);
});

it('return a 400 if the user provides an invalid title or price', async function () {
  const cookie = global.login();
  const response = await request(app)
    .post('/api/tickets')
    .set('Cookie', cookie)
    .send({ title: 'valid title', price: 20 });

  await request(app)
    .put(`/api/tickets/${response.body.id}`)
    .set('Cookie', cookie)
    .send({
      title: '',
      price: 200,
    })

    .expect(400);

  await request(app)
    .put(`/api/tickets/${response.body.id}`)
    .set('Cookie', cookie)
    .send({
      title: 'valid title',
      price: -200,
    })
    .expect(400);
});

it('updated the ticket provided valid inputs', async function () {
  const cookie = global.login();
  const response = await request(app)
    .post('/api/tickets')
    .set('Cookie', cookie)
    .send({ title: 'valid title', price: 20 });

  await request(app)
    .put(`/api/tickets/${response.body.id}`)
    .set('Cookie', cookie)
    .send({
      title: 'valid title',
      price: 100,
    })
    .expect(200);

  const ticketResponse = await request(app)
    .get(`/api/tickets/${response.body.id}`)
    .send();

  expect(ticketResponse.body.title).toEqual('valid title');
  expect(ticketResponse.body.price).toEqual(100);
});

it('publish an event', async () => {
  const cookie = global.login();
  const response = await request(app)
    .post('/api/tickets')
    .set('Cookie', cookie)
    .send({ title: 'valid title', price: 20 });

  await request(app)
    .put(`/api/tickets/${response.body.id}`)
    .set('Cookie', cookie)
    .send({
      title: 'valid title',
      price: 100,
    })
    .expect(200);

  expect(natsWrapper.client.publish).toHaveBeenCalled();
});

it('rejects updates if the ticket is reserved', async function () {
  const cookie = global.login();
  const response = await request(app)
    .post('/api/tickets')
    .set('Cookie', cookie)
    .send({ title: 'valid title', price: 20 });

  const ticket = await Ticket.findById(response.body.id);
  ticket.set({ orderId: mongoose.Types.ObjectId().toHexString() });
  await ticket!.save();
  await request(app)
    .put(`/api/tickets/${response.body.id}`)
    .set('Cookie', cookie)
    .send({
      title: 'valid title',
      price: 100,
    })
    .expect(400);
});
