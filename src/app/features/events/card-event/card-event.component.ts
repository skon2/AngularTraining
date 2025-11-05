import { Component, EventEmitter, Input, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Eventy } from '../../../models/eventy';

@Component({
  selector: 'app-card-event',
  templateUrl: './card-event.component.html',
  styleUrls: ['./card-event.component.css']
})
export class CardEventComponent {
  @Input() e!: Eventy;
  @Input() searchValue!: string;
  @Output() notificationLike = new EventEmitter<Eventy>();

  constructor(private http: HttpClient) {}

  likeEvent(e: Eventy) {
    this.http.put<Eventy>(`http://localhost:8088/api/events/${e.id}/like`, {})
      .subscribe({
        next: (updatedEvent) => {
          e.nblikes = updatedEvent.nblikes; // on récupère la valeur serveur
          this.notificationLike.emit(e);
        },
        error: (err) => console.error('Error saving like:', err)
      });
  }
  
  dislikeEvent(e: Eventy) {
    this.http.put<Eventy>(`http://localhost:8088/api/events/${e.id}/dislike`, {})
      .subscribe({
        next: (updatedEvent) => {
          e.nblikes = updatedEvent.nblikes; // récupère la valeur serveur
          this.notificationLike.emit(e);
        },
        error: (err) => console.error('Error saving dislike:', err)
      });
  }
  

  // Buy ticket 🎟️
  nbrPlaceDecr(e: Eventy) {
    if (e.nbPlaces > 0) {
      e.nbPlaces -= 1;
      this.http.put(`http://localhost:8088/api/events/${e.id}/places`, {})
        .subscribe({
          next: res => console.log('Places updated', res),
          error: err => console.error('Error updating places:', err)
        });
    }
  }
}
