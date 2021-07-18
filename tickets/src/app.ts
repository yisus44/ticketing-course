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
import { createTicketRouter } from './routes/new';
import { showTicketRouter } from './routes/show';
import { indexTicketRouter } from './routes';
import { UpdateTicketRouter } from './routes/update';
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

app.use(createTicketRouter);
app.use(showTicketRouter);
app.use(indexTicketRouter);
app.use(UpdateTicketRouter);
app.all('*', async (req, res, next) => {
  throw new NotFoundError();
});

export { app };
