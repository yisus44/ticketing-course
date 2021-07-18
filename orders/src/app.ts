import express from 'express';
import helmet from 'helmet';

import cors from 'cors';

import cookieSession from 'cookie-session';

import 'express-async-errors';

import {
  errorHandler,
  NotFoundError,
  currentUser,
} from '@yisus44tickets/common';
import { deleteOrderRouter } from './routes/delete';
import { newOrderRouter } from './routes/new';
import { indexOrderRouter } from './routes';
import { showOrderRouter } from './routes/show';
const app = express();

app.set('trust proxy', true);
app.use(cors());
app.use(express.json());
app.use(errorHandler);

app.use(
  cookieSession({
    signed: false,
    secure: false,
  })
);
app.use(currentUser);
app.use(helmet());

app.use(deleteOrderRouter);
app.use(indexOrderRouter);
app.use(newOrderRouter);
app.use(showOrderRouter);
app.all('*', async (req, res, next) => {
  throw new NotFoundError();
});

export { app };
