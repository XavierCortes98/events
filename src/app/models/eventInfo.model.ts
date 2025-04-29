import { Events } from './event.model';
import { EventSession } from './eventSessions.model';

export interface EventInfo {
  event: Events;
  sessions: EventSession[];
}
