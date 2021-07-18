import request from 'supertest';

import { app } from '../../app';
import { Ticket } from '../../models/Ticket';
import { natsWrapper } from '../../nats-wrapper';

it('test suit works', async function () {
  expect(3).toEqual(3);
});

///all of them should pass, but it really slow down my pc having them running every time

it('has a route handler listening to api/tickets for post request', async function () {
  const response = await request(app).post('/api/tickets').send({});
  expect(response.status).not.toEqual(404);
});

it('can only be accessed if the user is signed in', async function () {
  const response = await request(app).post('/api/tickets').send({});
  expect(response.status).toEqual(401);
});

it('returns a status other than 401 if the user is signed in', async function () {
  const response = await request(app)
    .post('/api/tickets')
    .set('Cookie', global.login())
    .send({});
  expect(response.status).not.toEqual(401);
});

it('returns an error if an empty title is provided', async function () {
  const response = await request(app)
    .post('/api/tickets')
    .set('Cookie', global.login())
    .send({
      title: '',
      price: '100',
    });
  expect(response.status).toEqual(400);
});

it('returns an error if an no title is provided', async function () {
  const response = await request(app)
    .post('/api/tickets')
    .set('Cookie', global.login())
    .send({
      price: '100',
    });
  expect(response.status).toEqual(400);
});

it('returns an error if an empty price is provided', async function () {
  const response = await request(app)
    .post('/api/tickets')
    .set('Cookie', global.login())
    .send({
      title: 'title2',
      price: '',
    });
  expect(response.status).toEqual(400);
});

it('returns an error if an negative price is provided', async function () {
  const response = await request(app)
    .post('/api/tickets')
    .set('Cookie', global.login())
    .send({
      title: 'title2',
      price: '-10',
    });
  expect(response.status).toEqual(400);
});

it('returns an error if an no price is provided', async function () {
  const response = await request(app)
    .post('/api/tickets')
    .set('Cookie', global.login())
    .send({
      title: 'title2',
    });
  expect(response.status).toEqual(400);
});

it('create a ticket when valid input is provided', async function () {
  let tickets = await Ticket.find({});
  expect(tickets.length).toEqual(0);
  //add in a check to make sure a ticket was saved
  await request(app)
    .post('/api/tickets')
    .set('Cookie', global.login())
    .send({
      title: 'title 3',
      price: 20,
    })
    .expect(201);
  tickets = await Ticket.find({});
  expect(tickets.length).toEqual(1);
});

it('publishes an event', async () => {
  let tickets = await Ticket.find({});
  expect(tickets.length).toEqual(0);
  //add in a check to make sure a ticket was saved
  await request(app)
    .post('/api/tickets')
    .set('Cookie', global.login())
    .send({
      title: 'title 3',
      price: 20,
    })
    .expect(201);
  expect(natsWrapper.client.publish).toHaveBeenCalled();
});
