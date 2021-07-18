import request from 'supertest';
import { app } from '../../app';

import mongoose from 'mongoose';
///all of them should pass, but it really slow down my pc having them running every time
it('test suit works', async function () {
  expect(3).toEqual(3);
});
it('return a 404 if the ticket is not found', async function () {
  const mongoID = new mongoose.Types.ObjectId().toHexString();
  const response = await request(app).get(`/api/tickets/${mongoID}`).send();
  expect(response.status).toEqual(404);
});

it('return the ticket if the ticket  is found', async function () {
  const title = 'concert';
  const price = 20;
  const response = await request(app)
    .post('/api/tickets')
    .set('Cookie', global.login())
    .send({
      title,
      price,
    });

  expect(response.status).toEqual(201);

  const ticketResponse = await request(app)
    .get(`/api/tickets/${response.body.id}`)
    .send();
  expect(ticketResponse.status).toEqual(200);

  expect(ticketResponse.body.title).toEqual(title);
  expect(ticketResponse.body.price).toEqual(price);
});
