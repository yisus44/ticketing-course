import { MongoMemoryServer } from 'mongodb-memory-server';
import mongoose from 'mongoose';
import jwt from 'jsonwebtoken';
import { app } from '../app';
import request from 'supertest';

//this shouldnt be here ill fix it laterxd
process.env.JWT_KEY = 'secret';
let mongo: any;

declare global {
  namespace NodeJS {
    interface Global {
      login(id?: string): string[];
    }
  }
}

global.login = login;

function login(id?: string): string[] {
  //build a JWT payload {id,email}
  const payload = {
    id: id || new mongoose.Types.ObjectId().toHexString(),
    email: 'test@test.com',
  };

  const token = jwt.sign(payload, 'secret');

  const session = { jwt: token };

  const sessionJSON = JSON.stringify(session);

  const base64 = Buffer.from(sessionJSON).toString('base64');

  return [`express:sess=${base64}`];
}

jest.mock('../routes/nats-wrapper.ts');

process.env.STRIPE_KEY = 'put your key here';
beforeAll(async () => {
  mongo = new MongoMemoryServer();
  const mongoUri = await mongo.getUri();
  process.env.NODE_TLS_REJECT_UNAUTHORIZED = '3';
  await mongoose.connect(mongoUri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
});

beforeEach(async () => {
  jest.clearAllMocks();
  const collections = await mongoose.connection.db.collections();
  for (let collection of collections) {
    await collection.deleteMany({});
  }
});

afterAll(async () => {
  await mongo.stop();
  await mongoose.connection.close();
});
