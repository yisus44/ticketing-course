import {
  Publisher,
  Subjects,
  TicketUpdatedEvent,
} from '@yisus44tickets/common';

export class TicketUpdatedPublisher extends Publisher<TicketUpdatedEvent> {
  subject: Subjects.TicketUpdated = Subjects.TicketUpdated;
}
