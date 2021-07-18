import nats from 'node-nats-streaming';
import { randomBytes } from 'crypto';

import { TicketCreatedListener } from './events/ticket-created-listener';

const stan = nats.connect('ticketing', randomBytes(4).toString('hex'), {
  url: 'http://localhost:4222',
});

stan.on('connect', () => {
  console.log('listener connnected to nats');
  stan.on('close', () => {
    console.log('Nats connection closed');
    process.exit();
  });

  new TicketCreatedListener(stan).listen();
});

process.on('SIGNIT', () => stan.close());
process.on('SIGNTERM', () => stan.close());
