import { Component, Input, OnInit } from '@angular/core';
import { Events } from '../../models/event.model';

@Component({
  selector: 'app-event-card',
  templateUrl: './event-card.component.html',
  styleUrls: ['./event-card.component.css'],
})
export class EventCardComponent implements OnInit {
  @Input() event: Events = {
    id: '',
    title: '',
    subtitle: '',
    image: '',
    place: '',
    startDate: 0,
    endDate: 0,
    description: '',
  };

  constructor() {}

  ngOnInit() {}
}
