import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeedbackRoutingModule } from './feedback-routing.module';
import { FeedbackComponent } from './feedback.component';
import { FeedbackListComponent } from './feedback-list/feedback-list.component';
import { FeedbackAddComponent } from './feedback-add/feedback-add.component';
import { FormsModule } from '@angular/forms';  // <-- import this



@NgModule({
  declarations: [
    FeedbackComponent,
    FeedbackListComponent,
    FeedbackAddComponent
  ],
  imports: [
    CommonModule,
    FeedbackRoutingModule,
    FormsModule  
  ]
})
export class FeedbackModule { }
