import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EventsService } from '../../../shared/data/events.service';
import { Eventy } from '../../../models/eventy';

@Component({
  selector: 'app-detail-event',
  templateUrl: './detail-event.component.html',
  styleUrls: ['./detail-event.component.css'] // ❌ was styleUrl → should be styleUrls
})
export class DetailEventComponent implements OnInit {
  event?: Eventy; // optional because it may load asynchronously

  constructor(
    private route: ActivatedRoute,
    private eventService: EventsService
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    // Subscribe to Observable to get events
    this.eventService.getAllEvents().subscribe({
      next: (events) => {
        this.event = events.find(e => e.id === id);
      },
      error: (err) => console.error('Error fetching events:', err)
    });
  }

  nbPlace(event: Eventy) {
    if (event.nbPlaces > 0) {
      event.nbPlaces--;
    }
  }
}
