import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { EventDetail } from '../models/eventDetail.model';
import { Events } from '../models/event.model';

@Injectable({
  providedIn: 'root',
})
export class EventsService {
  private apiUrl = 'assets/data/events.json';

  constructor(private http: HttpClient) {}

  getEvents(): Observable<Events[]> {
    return this.http.get<Events[]>(this.apiUrl);
  }

  getEventInfo(id: string): Observable<EventDetail | null> {
    return this.http
      .get<EventDetail>(`${this.apiUrl}/${id}`)
      .pipe(map((event: EventDetail) => (event.id === id ? event : null)));
  }
}
