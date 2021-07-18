import { Listener } from './base-listener';
import { Message } from 'node-nats-streaming';

import { TicketCreatedEvent } from './ticket-created-event';
import { Subjects } from './subject';

class TicketCreatedListener extends Listener<TicketCreatedEvent> {
  readonly subject: Subjects.TicketCreated = Subjects.TicketCreated;
  queueGroupName = 'payment-service';

  onMessage(data: TicketCreatedEvent['data'], msg: Message) {
    console.log('Event data', data.id);
    msg.ack();
  }
}

export { TicketCreatedListener };
