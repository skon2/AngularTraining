import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FeedbackListComponent } from './feedback-list/feedback-list.component';
import { FeedbackAddComponent } from './feedback-add/feedback-add.component';
import { CardEventComponent } from '../events/card-event/card-event.component';


const routes: Routes = [
  { path: '', component: CardEventComponent },   // /feedback
  { path: 'add', component: FeedbackAddComponent } // /feedback/add
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeedbackRoutingModule { }
