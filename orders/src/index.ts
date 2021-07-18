import dotenv from 'dotenv';
dotenv.config();
import mongoose from 'mongoose';
import { app } from './app';
import { natsWrapper } from './nats-wrapper';

import { TicketCreatedListener } from './events/listeners/ticket-created-listener';
import { TicketUpdatedListener } from './events/listeners/ticket-updated-listener';
import { ExpirationCompleteListener } from './events/listeners/expiration-complete-listener';

import { PaymentCreatedListener } from './events/listeners/payment-created-listener';

async function start() {
  try {
    process.env.JWT_KEY = 'secret';
    if (!process.env.JWT_KEY) {
      throw new Error('JWT KEY INVALID OR NONEXISTENT');
    }

    if (!process.env.NATS_CLIENT_ID) {
      throw new Error('NATS_CLIENT_ID OR NONEXISTENT');
    }

    if (!process.env.NATS_URL) {
      throw new Error('NATS_URL INVALID OR NONEXISTENT');
    }

    if (!process.env.NATS_CLUSTER_ID) {
      throw new Error('JWT KEY INVALID OR NONEXISTENT');
    }
    await natsWrapper.connect(
      process.env.NATS_CLUSTER_ID,
      process.env.NATS_URL,
      process.env.NATS_CLIENT_ID
    );
    natsWrapper.client.on('close', () => {
      console.log('NATS connection clossed');
      process.exit();
    });

    process.on('SIGINT', () => {
      natsWrapper.client.close();
    });
    process.on('SIGTERM', () => {
      natsWrapper.client.close();
    });

    new TicketCreatedListener(natsWrapper.client).listen();
    new TicketUpdatedListener(natsWrapper.client).listen();
    new ExpirationCompleteListener(natsWrapper.client).listen();
    new PaymentCreatedListener(natsWrapper.client).listen();
    await mongoose.connect('mongodb://localhost:27017/tickets', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    });
    console.log('Connected to mongodb');
    const PORT = process.env.PORT || 3001;

    app.listen(PORT, function () {
      console.log('Server up and running on port 3001!!');
    });
  } catch (error) {
    console.error(error);
  }
}

start();
