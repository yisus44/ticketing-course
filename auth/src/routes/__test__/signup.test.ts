import request from 'supertest';
import { app } from '../../app';

it('test suit works', async function () {
  expect(3).toEqual(3);
});

// it('returns a 201 on succesful signup', async function () {
//   return request(app)
//     .post('/api/users/signup')
//     .send({
//       email: 'test@test.com',
//       password: 'password',
//     })
//     .expect(201);
// });

// it('returns a 400 with an invalid email', async function () {
//   return request(app)
//     .post('/api/users/signup')
//     .send({
//       email: 'i am invalid',
//       password: 'password',
//     })
//     .expect(400);
// });

// it('returns a 400 with an invalid password', async function () {
//   return request(app)
//     .post('/api/users/signup')
//     .send({
//       email: 'test@test.com',
//       password: 'bad',
//     })
//     .expect(400);
// });

// it('returns a 400 with an invalid email and password', async function () {
//   return request(app)
//     .post('/api/users/signup')
//     .send({
//       email: 'i am invalid',
//       password: 'bad',
//     })
//     .expect(400);
// });

// it('disallows duplicate emails', async function () {
//   await request(app)
//     .post('/api/users/signup')
//     .send({
//       email: 'test@test.com',
//       password: 'password',
//     })
//     .expect(201);

//   await request(app)
//     .post('/api/users/signup')
//     .send({
//       email: 'test@test.com',
//       password: 'password',
//     })
//     .expect(400);
// });

// it('sets a cookie after succesful signup', async function () {
//   const response = await request(app)
//     .post('/api/users/signup')
//     .send({
//       email: 'test@test.com',
//       password: 'password',
//     })
//     .expect(201);

//   expect(response.get('Set-Cookie')).toBeDefined();
// });
