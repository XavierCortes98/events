import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { CartItem } from '../models/cartItem.model';
import { GroupedCartItem } from '../models/groupedCartItem.model';

@Injectable({
  providedIn: 'root',
})
export class ShoppingCartService {
  private cartItemsSubject = new BehaviorSubject<GroupedCartItem[]>([]);
  cartItems$: Observable<GroupedCartItem[]> =
    this.cartItemsSubject.asObservable();
  constructor() {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      this.cartItemsSubject.next(JSON.parse(savedCart));
    }
  }

  getCartItems(): GroupedCartItem[] {
    return this.cartItemsSubject.value;
  }

  increaseSessionTicket(
    eventId: string,
    title: string,
    sessionDate: string,
    availability: number
  ) {
    const cart = this.cartItemsSubject.value;
    let event = cart.find((item) => item.eventId === eventId);
    if (!event) {
      cart.push({
        eventId: eventId,
        title: title,
        items: [
          {
            sessionDate,
            quantity: 1,
          },
        ],
      });
    }
    let session = event?.items.find((item) => item.sessionDate === sessionDate);
    if (!session) {
      event?.items.push({
        sessionDate,
        quantity: 1,
      });
    }
    if (session && session.quantity < availability) {
      session.quantity++;
    }
    this.cartItemsSubject.next(cart);
    localStorage.setItem('cart', JSON.stringify(cart));
    console.log(cart);
  }

  decreaseSessionTicket(eventId: string, sessionDate: string) {
    const cart = this.cartItemsSubject.value;
    let event = cart.find((item) => item.eventId === eventId);
    if (!event) return;
    let session = event.items.find((item) => item.sessionDate === sessionDate);
    if (!session) return;
    session.quantity--;
    if (session.quantity <= 0) {
      event.items = event.items.filter(
        (item) => item.sessionDate !== sessionDate
      );
    }
    if (event.items.length === 0) {
      cart.splice(cart.indexOf(event), 1);
    }
    this.cartItemsSubject.next(cart);
    localStorage.setItem('cart', JSON.stringify(cart));
  }

  deleteSessionTicket(eventId: string, sessionDate: string) {
    const cart = this.cartItemsSubject.value;
    let event = cart.find((item) => item.eventId === eventId);
    if (!event) return;
    let session = event.items.find((item) => item.sessionDate === sessionDate);
    if (!session) return;
    event.items = event.items.filter(
      (item) => item.sessionDate !== sessionDate
    );

    if (event.items.length === 0) {
      cart.splice(cart.indexOf(event), 1);
    }
    this.cartItemsSubject.next(cart);
    localStorage.setItem('cart', JSON.stringify(cart));
  }

  getCartTickets(date: string) {
    return this.cartItemsSubject.pipe(
      map((cart) => {
        const event = cart.find((item) => item.eventId === date);
        if (event) {
          return event.items.reduce((acc, item) => acc + item.quantity, 0);
        }
        return 0;
      })
    );
  }
}
