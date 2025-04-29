import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventGridComponent } from './components/event-grid/event-grid.component';
import { EventSessionsComponent } from './components/event-sessions/event-sessions.component';
import { EventDetailPageComponent } from './pages/event-detail-page/event-detail-page.component';

const routes: Routes = [
  { path: '', component: EventGridComponent },
  { path: 'event/:id', component: EventDetailPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
