import express from 'express';
import helmet from 'helmet';

import cors from 'cors';

import cookieSession from 'cookie-session';

import 'express-async-errors';

import { currentUserRouter } from './routes/current-user';
import { signInRouter } from './routes/signin';
import { signoutRouter } from './routes/signout';
import { signUpRouter } from './routes/signup';

import { errorHandler, NotFoundError } from '@yisus44tickets/common';

const app = express();

app.set('trust proxy', true);
app.use(cors());
app.use(express.json());
app.use(
  cookieSession({
    signed: false,
    secure: false,
  })
);
app.use(helmet());

app.use(currentUserRouter);
app.use(signUpRouter);
app.use(signInRouter);
app.use(signoutRouter);

app.all('*', async (req, res, next) => {
  throw new NotFoundError();
});
app.use(errorHandler);

export { app };
