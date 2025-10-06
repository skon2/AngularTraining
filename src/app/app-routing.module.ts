import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from './layout/home/home.component';
import {ListEventComponent} from './features/events/list-event/list-event.component';
import {NotFoundComponent} from './layout/not-found/not-found.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path: 'events', loadChildren: () => import('./features/events/events.module').then(m => m.EventsModule) },
  { path: 'users', loadChildren: () => import('./features/users/users.module').then(m => m.UsersModule) },
  { path: 'tickets', loadChildren: () => import('./features/tickets/tickets.module').then(m => m.TicketsModule) },
  { path: 'feedbacks', loadChildren: () => import('./features/feedbacks/feedbacks.module').then(m => m.FeedbacksModule) }, //Lazy Loading
  {path:'**',component:NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
