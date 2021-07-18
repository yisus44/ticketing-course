import { natsWrapper } from './nats-wrapper';
import { OrderCreatedListener } from './events/listeners/order-created-listener';

async function start() {
  try {
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

    new OrderCreatedListener(natsWrapper.client).listen();
  } catch (error) {
    console.error(error);
  }
}

start();
