import { Publisher, Subjects, TicketCreatedEvent } from '@guimaraes.mahota/common';

export class TicketCreatedPublisher extends Publisher<TicketCreatedEvent> {
  subject: Subjects.TicketCreated = Subjects.TicketCreated;
}
