import request from 'supertest';
import { app } from '../../app';

it('test suit works', async function () {
  expect(60).toEqual(60);
});

it('responds with details about the current user', async function () {
  const cookie = await global.login();
  const response = await request(app)
    .get('/api/users/currentuser')
    .send()
    .set('Cookie', cookie)
    .expect(200);

  expect(response.body.currentUser.email).toEqual('test@test.com');
});

it('respond with null if not authenticated', async function () {
  const response = await request(app)
    .get('/api/users/currentuser')
    .send()
    .expect(200);

  expect(response.body.currentUser).toEqual(null);
});
