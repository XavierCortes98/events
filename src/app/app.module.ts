import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { MatCardModule } from '@angular/material/card';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EventCardComponent } from './components/event-card/event-card.component';
import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { EventGridComponent } from './components/event-grid/event-grid.component';

@NgModule({
  declarations: [AppComponent, EventCardComponent, EventGridComponent],
  imports: [
    AppRoutingModule,
    HttpClientModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatCardModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
