import { Component, OnInit } from '@angular/core';
import { Eventy } from '../../../models/eventy';
import { DataEventsService } from '../../../shared/services/data-events.service';

@Component({
  selector: 'app-list-event',
  templateUrl: './list-event.component.html',
  styleUrls: ['./list-event.component.css'], // fixed typo: styleUrl → styleUrls
})
export class ListEventComponent implements OnInit {
  list: Eventy[] = [];
  searchTerm: string = ''; // <-- new property

  constructor(private dataService: DataEventsService) {}

  ngOnInit() {
    this.list = this.dataService.getAllEvents();
  }

  likeEvent(event: Eventy) {
    event.nbrLikes++;
  }

  // Getter to return filtered events
  get filteredList(): Eventy[] {
    if (!this.searchTerm) return this.list;
    return this.list.filter(event =>
      event.title.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }
}
