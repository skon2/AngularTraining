import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Eventy } from '../../models/eventy';
import { EventsService } from '../../shared/data/events.service';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule, RouterModule, SharedModule],
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  @Input() e!: Eventy;
  @Output() notificationLike = new EventEmitter<Eventy>();

  constructor(private eventService: EventsService) {}

  likeEvent(e: Eventy) {
    e.nblikes++;
    this.eventService.updateEvent(e.id!, e).subscribe();
    this.notificationLike.emit(e);
  }

  nbrPlaceDecr(e: Eventy) {
    if(e.nbPlaces > 0) {
      e.nbPlaces--;
      this.eventService.updateEvent(e.id!, e).subscribe();
    }
  }

  deleteEvent(e: Eventy) {
    if(e.id) {
      this.eventService.deleteEvent(e.id).subscribe();
    }
  }
}
