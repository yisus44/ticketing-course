import {
  Subjects,
  Publisher,
  PaymentCreatedEvent,
} from '@yisus44tickets/common';

export class PaymentCreatedPublisher extends Publisher<PaymentCreatedEvent> {
  subject: Subjects.PaymentCreated = Subjects.PaymentCreated;
}
