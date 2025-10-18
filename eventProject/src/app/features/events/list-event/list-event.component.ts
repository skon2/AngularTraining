import { Component, OnInit } from '@angular/core';
import { Eventy } from '../../../../models/eventy'; // ← make sure this path is correct
import { EventsService } from '../../../shared/data/events.service';

@Component({
  selector: 'app-list-event',
  templateUrl: './list-event.component.html',
  styleUrls: ['./list-event.component.css']
})
export class ListEventComponent implements OnInit {
  title!: string;
  listEvents: Eventy[] = [];
  filteredEvents: Eventy[] = [];
  searchText: string = '';

  constructor(private data: EventsService) {}

  ngOnInit(): void {
    this.listEvents = this.data.getallEvents();
    this.filteredEvents = [...this.listEvents];
  }

  addLike(event: Eventy) { event.nblikes++; }
  buyPlace(event: Eventy) { event.nbplaces--; }

  searchEvents() {
    const text = this.searchText.toLowerCase();
    if (!text) {
      this.filteredEvents = [...this.listEvents];
    } else {
      this.filteredEvents = this.listEvents.filter(event =>
        event.title.toLowerCase().includes(text) ||
        event.description.toLowerCase().includes(text) ||
        event.location.toLowerCase().includes(text)
      );
    }
  }
}
