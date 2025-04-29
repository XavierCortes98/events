import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, of } from 'rxjs';
import { EventInfo } from '../models/eventInfo.model';
import { Events } from '../models/event.model';

@Injectable({
  providedIn: 'root',
})
export class EventsService {
  private apiUrlEvents = 'assets/data/events.json';
  private apiUrlSessions = 'assets/data/event-info';

  constructor(private http: HttpClient) {}

  getEvents(): Observable<Events[]> {
    return this.http
      .get<Events[]>(this.apiUrlEvents)
      .pipe(
        map((events) =>
          events.sort((a, b) => (a.endDate ?? 0) - (b.endDate ?? 0))
        )
      );
  }

  getEventInfo(id: string): Observable<EventInfo | null> {
    return this.http.get<EventInfo>(`${this.apiUrlSessions}-${id}.json`).pipe(
      map((info: EventInfo) => ({
        ...info,
        sessions: info.sessions.sort((a, b) => Number(a.date) - Number(b.date)),
      })),
      catchError((error) => {
        console.error('Error loading event info:', error);
        return of(null); // Devuelve null en caso de error
      })
    );
  }
}
