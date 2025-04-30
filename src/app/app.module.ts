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
import { EventDetailPageComponent } from './pages/event-detail-page/event-detail-page.component';
import { ComponentsModule } from './components/components.module';
import { HeaderComponent } from './shared/header/header.component';
import { EventspageComponent } from './pages/events-page/eventspage.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    EventDetailPageComponent,
    EventspageComponent,
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
    ComponentsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
