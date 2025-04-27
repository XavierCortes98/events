import { Component, OnInit } from '@angular/core';
import { Events } from 'src/app/models/event.model';
import { EventsService } from 'src/app/services/events.service';

@Component({
  selector: 'app-event-grid',
  templateUrl: './event-grid.component.html',
  styleUrls: ['./event-grid.component.css'],
})
export class EventGridComponent implements OnInit {
  eventsList!: Events[];

  constructor(private eventService: EventsService) {}

  ngOnInit(): void {
    this.eventService.getEvents().subscribe((data: Events[]) => {
      this.eventsList = data;
    });
  }
}
