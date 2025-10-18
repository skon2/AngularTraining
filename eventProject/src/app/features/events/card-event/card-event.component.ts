import { Component, Input } from '@angular/core';
import { Eventy } from '../../../../models/eventy'; // ← adjust path to your model

@Component({
  selector: 'app-card-event',
  templateUrl: './card-event.component.html',
  styleUrls: ['./card-event.component.css'] // ✅ correct property name is styleUrls
})
export class CardEventComponent {
  @Input() e!: Eventy; // now TS knows this is your model
 @Input() filteredEvents: Eventy[];
  title!: string;
  searchText: string = '';

  // Example methods, you can implement logic
  nbrLike(event: Eventy) {
    return event.nblikes;
  }

  nbrPlace(event: Eventy) {
    return event.nbplaces;
  }

  addLike(event: Eventy) {
    event.nblikes++;
  }

  buyPlace(event: Eventy) {
    event.nbplaces--;
  }

  searchEvents() {
    // This method may not be needed here; usually handled in ListEventComponent
  }
}
