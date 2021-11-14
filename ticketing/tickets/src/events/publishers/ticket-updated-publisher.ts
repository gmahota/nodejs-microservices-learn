import { Publisher, Subjects, TicketUpdatedEvent } from '@guimaraes.mahota/common';

export class TicketUpdatedPublisher extends Publisher<TicketUpdatedEvent> {
  subject: Subjects.TicketUpdated = Subjects.TicketUpdated;
}
