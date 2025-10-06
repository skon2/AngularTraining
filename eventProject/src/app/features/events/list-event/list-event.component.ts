import { Component , OnInit } from '@angular/core';
import { Eventy } from '../../../../models/eventy';
import { FormsModule } from '@angular/forms';   
import { EventsService } from '../../../shared/data/events.service';


@Component({
  selector: 'app-list-event',
  templateUrl: './list-event.component.html',
  styleUrl: './list-event.component.css'
  

})
export class ListEventComponent implements OnInit {

  title: string;
  listEvents: Eventy[];
  filteredEvents: Eventy[]; // Liste filtrée pour affichage
  searchText: string = '';   // Texte de recherche

  constructor(private data: EventsService) { 

  }

  ngOnInit(): void {
    this.listEvents = this.data.getallEvents();

    // 🔹 Au départ, la liste filtrée = la liste complète
    this.filteredEvents = [...this.listEvents];
  }

  // Fonction pour augmenter les likes
  addLike(event: Eventy) {
    event.nblikes++;
  }

  buyPlace(event: Eventy) {
    event.nbplaces--;
  }

  // Fonction de recherche
  searchEvents() {
    const text = this.searchText.toLowerCase();
    if (!text) {
      // Si la barre est vide, on affiche toute la liste
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



