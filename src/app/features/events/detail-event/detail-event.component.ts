import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EventsService } from '../../../shared/data/events.service';
import { FeedbackService } from '../../../shared/data/feedback.service';
import { Eventy } from '../../../models/eventy';
import { Feedback } from '../../../models/feedback';

@Component({
  selector: 'app-detail-event',
  templateUrl: './detail-event.component.html',
  styleUrls: ['./detail-event.component.css']
})
export class DetailEventComponent implements OnInit {
  event?: Eventy; // event details
  feedbacks: Feedback[] = []; // feedbacks for this event

  constructor(
    private route: ActivatedRoute,
    private eventService: EventsService,
    private feedbackService: FeedbackService
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    // Load event
    this.eventService.getAllEvents().subscribe({
      next: (events) => {
        this.event = events.find(e => e.id === id);
      },
      error: (err) => console.error('Error fetching events:', err)
    });

    // Load feedbacks
    this.feedbackService.getFeedbacksForEvent(id).subscribe({
      next: (fb) => {
        this.feedbacks = fb;
      },
      error: (err) => console.error('Error fetching feedbacks:', err)
    });
  }

  nbPlace(event: Eventy) {
    if (event.nbPlaces > 0) {
      event.nbPlaces--;
    }
  }
}
