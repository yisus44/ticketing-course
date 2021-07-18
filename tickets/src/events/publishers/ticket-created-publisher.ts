import {
  Publisher,
  Subjects,
  TicketCreatedEvent,
} from '@yisus44tickets/common';

export class TicketCreatedPublisher extends Publisher<TicketCreatedEvent> {
  subject: Subjects.TicketCreated = Subjects.TicketCreated;
}
