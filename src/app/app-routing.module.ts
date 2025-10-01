import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from './layout/home/home.component';
import {ListTicketComponent} from './layout/list-ticket/list-ticket.component';
import {NotFoundComponent} from './layout/not-found/not-found.component';
import {ListEventComponent} from './layout/list-event/list-event.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'home',redirectTo:'', pathMatch:'full'},
  {path:'tickets', component: ListTicketComponent},
  {path:'events', component: ListEventComponent},
  {path:'**', component: NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
