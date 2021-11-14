import { Publisher, OrderCreatedEvent, Subjects } from '@guimaraes.mahota/common';

export class OrderCreatedPublisher extends Publisher<OrderCreatedEvent> {
  subject: Subjects.OrderCreated = Subjects.OrderCreated;
}
