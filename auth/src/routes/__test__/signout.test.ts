import request from 'supertest';
import { app } from '../../app';

it('test suit works', async function () {
  expect(60).toEqual(60);
});

// it('clears the cookie after signin out', async function () {
//   await request(app)
//     .post('/api/users/signup')
//     .send({
//       email: 'test@test.com',
//       password: 'password',
//     })
//     .expect(201);

//   const response = await request(app)
//     .post('/api/users/signout')
//     .send({})
//     .expect(200);
//   expect(response.get('Set-Cookie')).toBeDefined();
// });
