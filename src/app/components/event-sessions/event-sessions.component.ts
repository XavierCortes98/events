import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EventInfo } from 'src/app/models/eventInfo.model';
import { EventSession } from 'src/app/models/eventSessions.model';
import { GroupedCartItem } from 'src/app/models/groupedCartItem.model';
import { EventsService } from 'src/app/services/events.service';
import { ShoppingCartService } from 'src/app/services/shopping-cart.service';

@Component({
  selector: 'app-event-sessions',
  templateUrl: './event-sessions.component.html',
  styleUrls: ['./event-sessions.component.css'],
})
export class EventSessionsComponent implements OnInit {
  eventId!: string;
  eventInfo: EventInfo | null = null;
  eventSessions!: GroupedCartItem | undefined;
  constructor(
    private eventService: EventsService,
    private shoppingCartService: ShoppingCartService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.eventId = this.route.snapshot.paramMap.get('id')!;
    this.eventService.getEventInfo(this.eventId).subscribe((sessions) => {
      this.eventInfo = sessions;
    });
  }

  increase(sessionDate: string, availability: string) {
    this.shoppingCartService.increaseSessionTicket(
      this.eventId,
      this.eventInfo?.event.title || '',
      sessionDate,
      Number(availability)
    );
  }

  decrease(sessionDate: string) {
    this.shoppingCartService.decreaseSessionTicket(this.eventId, sessionDate);
  }

  getCartTickets(date: string) {
    const cart = this.shoppingCartService.getCartItems();
    const event = cart.find((item) => item.eventId === this.eventId);
    if (event) {
      const session = event.items.find((item) => item.sessionDate === date);
      return session ? session.quantity : 0;
    }
    return 0;
  }
}
