import { Publisher, OrderCreatedEvent, Subjects } from '@yisus44tickets/common';

export class OrderCreatedPublisher extends Publisher<OrderCreatedEvent> {
  subject: Subjects.OrderCreated = Subjects.OrderCreated;
}
