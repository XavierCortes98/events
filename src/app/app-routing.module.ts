import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventGridComponent } from './components/event-grid/event-grid.component';

const routes: Routes = [{ path: '', component: EventGridComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
