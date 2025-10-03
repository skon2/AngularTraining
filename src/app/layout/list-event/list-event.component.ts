import {Component, OnInit} from '@angular/core';
import {Event} from '../../models/event';

@Component({
  selector: 'app-list-event',
  templateUrl: './list-event.component.html',
  styleUrl: './list-event.component.css'
})
export class ListEventComponent implements OnInit {
  events: Event[];
  today = new Date();
  searchTerm = '';
  constructor() {
  }
  ngOnInit() {
    this.events = [
      {
        id: 1,
        title: 'Angular Summit',
        description: 'Conférence sur Angular et l’écosystème front-end.',
        date: new Date('2025-11-10'),
        location: 'Tunis',
        price: 50,
        organizerId: 101,
        imageUrl: 'https://m.media-amazon.com/images/I/71vC4ryHjOL._UF1000,1000_QL80_.jpg',
        nbPlaces: 25,
        nbrLike: 0
      },
      {
        id: 2,
        title: 'Web Dev Days',
        description: 'Journée dédiée aux frameworks web modernes.',
        date: new Date('2025-01-05'),
        location: 'Ariana',
        price: 30,
        organizerId: 102,
        imageUrl: 'https://cdn.dribbble.com/userupload/37287941/file/original-a59d13499667b765fb5aceb8b5d5bf0d.jpg',
        nbPlaces: 0,
        nbrLike: 3
      }
    ];
  }
  get filteredEvents(): Event[] {
    const q = this.searchTerm.trim().toLowerCase();
    return !q ? this.events : this.events.filter(e =>
      e.title.toLowerCase().includes(q) || e.location.toLowerCase().includes(q)
    );
  }

  isExpired(e: Event): boolean {
    return e.date < this.today;
  }

  like(e: Event): void {
    if (this.isExpired(e) || e.nbPlaces <= 0) return;
    e.nbrLike++;
  }
}
