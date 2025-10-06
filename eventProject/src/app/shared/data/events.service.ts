import { Injectable } from '@angular/core';
import { Eventy } from '../../../models/eventy';

@Injectable({
  providedIn: 'root'
})
export class EventsService {


  list: Eventy[] = [
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


  ]

  constructor() { }

  getallEvents(): Eventy[] {
    return this.list;
  }
}
