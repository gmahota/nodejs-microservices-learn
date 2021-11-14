import { Subjects, Publisher, OrderCancelledEvent } from '@guimaraes.mahota/common';

export class OrderCancelledPublisher extends Publisher<OrderCancelledEvent> {
  subject: Subjects.OrderCancelled = Subjects.OrderCancelled;
}
