import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { BrowserModule } from '@angular/platform-browser';
import { MatInputModule } from '@angular/material/input';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

import { AppComponent } from './app.component';
import { EventCardComponent } from './components/event-card/event-card.component';
import { EventGridComponent } from './components/event-grid/event-grid.component';
import { EventSessionsComponent } from './components/event-sessions/event-sessions.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { EventDetailPageComponent } from './pages/event-detail-page/event-detail-page.component';

@NgModule({
  declarations: [
    AppComponent,
    EventCardComponent,
    EventGridComponent,
    EventSessionsComponent,
    ShoppingCartComponent,
    EventDetailPageComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    MatButtonModule,
    MatInputModule,
    BrowserModule,
    MatCardModule,
    MatIconModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
