import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventDetailPageComponent } from './pages/event-detail-page/event-detail-page.component';
import { EventspageComponent } from './pages/events-page/eventspage.component';

const routes: Routes = [
  { path: '', component: EventspageComponent },
  { path: 'event/:id', component: EventDetailPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
