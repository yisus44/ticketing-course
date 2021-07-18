import request from 'supertest';
import { app } from '../../app';

it('test suit works', async function () {
  expect(3).toEqual(3);
});
///all of them should pass, but it really slow down my pc having them running every time

function createTicket() {
  return request(app).post('/api/tickets').set('Cookie', global.login()).send({
    title: 'yeyey',
    price: '22',
  });
}

it('can fetch a list of tickets', async function () {
  await createTicket();
  await createTicket();
  await createTicket();

  const response = await request(app).get('/api/tickets').send();

  expect(response.status).toEqual(200);
  expect(response.body.length).toEqual(3);
});
