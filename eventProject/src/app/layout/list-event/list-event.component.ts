import { Component , OnInit } from '@angular/core';
import { Eventy } from '../../../models/eventy';


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

  constructor() { }

  ngOnInit(): void {
    this.title = "List of events";
    this.listEvents = [
      {
        id: 1,
        title: "Angular",
        description: "Formation Angular",
        date: new Date("2024-06-20"),
        location: "Tunis",
        price: 300,
        organizerid: 1,
        imageUrl: "https://angular.io/assets/images/logos/angular/angular.png",
        nbplaces: 50,
        nblikes: 10
      },
      {
        id: 2,
        title: "React",
        description: "Formation React",
        date: new Date("2024-07-15"),
        location: "Sfax",
        price: 250,
        organizerid: 2,
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
        nbplaces: 40,
        nblikes: 20
      },
      {
        id: 3,
        title: "Vue.js",
        description: "Formation Vue.js",
        date: new Date("2024-08-10"),
        location: "Sousse",
        price: 200,
        organizerid: 3,
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/9/95/Vue.js_Logo_2.svg",
        nbplaces: 30,
        nblikes: 15
      }
    ];

    // 🔹 Au départ, la liste filtrée = la liste complète
    this.filteredEvents = [...this.listEvents];
  }

  // Fonction pour augmenter les likes
  addLike(event: Eventy) {
    event.nblikes++;
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



