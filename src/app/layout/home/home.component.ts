import { Component, OnInit } from '@angular/core';
import { Eventy } from '../../models/eventy';
import { EventsService } from '../../shared/data/events.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']   // styleUrls, not styleUrl
})
export class HomeComponent implements OnInit {
  list: Eventy[] = [];

  constructor(private service: EventsService) {}

  ngOnInit(): void {
    this.service.getAllEvents().subscribe(
      (events: Eventy[]) => {
        // Sort events by nblikes descending
        events.sort((a, b) => b.nblikes - a.nblikes);
        // Take the top 3
        this.list = events.slice(0, 3);
      },
      (error) => {
        console.error('Error fetching events', error);
      }
    );
  }
}
