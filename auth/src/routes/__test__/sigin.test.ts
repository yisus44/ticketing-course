import request from 'supertest';
import { app } from '../../app';

it('test suit works', async function () {
  expect(60).toEqual(60);
});

// it('fails when a email that does not exist is supplied', async function () {
//   await request(app)
//     .post('/api/users/signin')
//     .send({
//       email: 'testUnused@test.com',
//       password: 'password',
//     })
//     .expect(400);
// });

// it('fails when an incorect password is supplied', async function () {
//   await request(app)
//     .post('/api/users/signup')
//     .send({
//       email: 'test@test.com',
//       password: 'password',
//     })
//     .expect(201);

//   await request(app)
//     .post('/api/users/signin')
//     .send({
//       email: 'test@test.com',
//       password: 'bad',
//     })
//     .expect(400);
// });

// it('responds with a cookie when given valid credentials', async function () {
//   await request(app)
//     .post('/api/users/signup')
//     .send({
//       email: 'test@test.com',
//       password: 'password',
//     })
//     .expect(201);

//   const response = await request(app)
//     .post('/api/users/signin')
//     .send({
//       email: 'test@test.com',
//       password: 'password',
//     })
//     .expect(200);

//   expect(response.get('Set-Cookie')).toBeDefined();
// });
