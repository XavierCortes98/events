import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { GroupedCartItem } from 'src/app/models/groupedCartItem.model';
import { ShoppingCartService } from 'src/app/services/shopping-cart.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css'],
})
export class ShoppingCartComponent implements OnInit {
  groupedCartItems!: Observable<GroupedCartItem[]>;

  constructor(private shoppingCartService: ShoppingCartService) {}

  ngOnInit(): void {
    this.groupedCartItems = this.shoppingCartService.cartItems$;
  }

  delete(eventId: string, sessionDate: string) {
    this.shoppingCartService.deleteSessionTicket(eventId, sessionDate);
  }
}
