import { Component, OnInit } from '@angular/core';
import { FeedbackService } from '../../../shared/data/feedback.service';
import { Feedback } from '../../../models/feedback';

@Component({
  selector: 'app-feedback-list',
  templateUrl: './feedback-list.component.html',
  styleUrls: ['./feedback-list.component.css']
})
export class FeedbackListComponent implements OnInit {
  feedbacks: Feedback[] = [];

  constructor(private fbService: FeedbackService) {}

  ngOnInit(): void {
    this.fbService.getAllFeedbacks().subscribe({
      next: data => this.feedbacks = data,
      error: err => console.error(err)
    });
  }
}
