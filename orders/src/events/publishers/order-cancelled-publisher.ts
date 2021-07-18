import {
  Publisher,
  OrderCancelledEvent,
  Subjects,
} from '@yisus44tickets/common';

export class OrderCancelledPublisher extends Publisher<OrderCancelledEvent> {
  subject: Subjects.OrderCancelled = Subjects.OrderCancelled;
}
