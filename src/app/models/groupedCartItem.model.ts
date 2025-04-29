import { CartItem } from './cartItem.model';

export interface GroupedCartItem {
  eventId: string;
  title: string;
  items: CartItem[];
}
