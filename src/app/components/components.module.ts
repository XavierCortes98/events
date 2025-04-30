import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

import { EventCardComponent } from './event-card/event-card.component';
import { EventGridComponent } from './event-grid/event-grid.component';
import { EventSessionsComponent } from './event-sessions/event-sessions.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    EventCardComponent,
    EventGridComponent,
    EventSessionsComponent,
    ShoppingCartComponent,
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    RouterModule,
  ],
  exports: [
    EventCardComponent,
    EventGridComponent,
    EventSessionsComponent,
    ShoppingCartComponent,
  ],
})
export class ComponentsModule {}
