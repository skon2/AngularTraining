import { Component, OnInit } from '@angular/core';
import { Eventy } from '../../../models/eventy';
import { EventsService } from '../../../shared/data/events.service';

@Component({
  selector: 'app-list-event',
  templateUrl: './list-event.component.html',
  styleUrls: ['./list-event.component.css']
})
export class ListEventComponent implements OnInit {

  // List of events
  listEvents: Eventy[] = [];

  // Search
  searchValue: string = '';

  // New event form model
  newEvent: Omit<Eventy, 'id'> = {
    title: '',
    description: '',
    date: new Date(),
    location: '',
    price: 0,
    organizerId: 0,
    imageUrl: '',
    nbPlaces: 0,
    nblikes: 0
  };

  constructor(private eventService: EventsService) { }

  ngOnInit() {
    this.loadEvents();
  }

  // Load all events from backend
  loadEvents() {
    this.eventService.getAllEvents().subscribe({
      next: (events) => this.listEvents = events,
      error: (err) => console.error('Error fetching events', err)
    });
  }

  // Add new event
  addEvent() {
    if (!this.newEvent.title || !this.newEvent.description || !this.newEvent.date || !this.newEvent.location) {
      alert('Please fill all required fields!');
      return;
    }

    this.eventService.createEvent(this.newEvent as Eventy).subscribe({
      next: (res) => {
        console.log('Event saved:', res);
        this.listEvents.push(res); // update displayed list
        this.resetForm();
      },
      error: (err) => console.error('Error saving event:', err)
    });
  }

  // Reset the form
  resetForm() {
    this.newEvent = {
      title: '',
      description: '',
      date: new Date(),
      location: '',
      price: 0,
      organizerId: 0,
      imageUrl: '',
      nbPlaces: 0,
      nblikes: 0
    };
  }

  // Decrease available places
  nbrPlaceDecr(e: Eventy) {
    if (e.nbPlaces > 0) {
      e.nbPlaces--;
    }
  }

  // Increase likes
  nbrLike(e: Eventy) {
    e.nblikes++;
  }

  // Search events by title
  search() {
    if (this.searchValue.trim() === '') {
      this.loadEvents(); // reload all if search empty
    } else {
      this.listEvents = this.listEvents.filter(event =>
        event.title.toLowerCase().includes(this.searchValue.toLowerCase())
      );
    }
  }
}
