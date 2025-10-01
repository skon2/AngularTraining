import {Component, OnInit} from '@angular/core';
import {Eventy} from '../../models/eventy';

@Component({
  selector: 'app-list-event',
  templateUrl: './list-event.component.html',
  styleUrl: './list-event.component.css'
})
export class ListEventComponent implements OnInit {
  list: Eventy[];
  constructor() {
  }
  ngOnInit() {
    this.list=[
      { id:1,
        title: 'Angular Summit',
        description: 'welocme to our Angular Event',
        price: 50,
        organizerId: 101,
        imageUrl: 'https://m.media-amazon.com/images/I/71vC4ryHjOL._UF1000,1000_QL80_.jpg',
        nbrPlaces: 25,
        nbrLikes: 0,
        date: new Date('2025-11-10'),
        location: 'Tunis',},
      { id:2,
        title: 'Symfony Summit',
        description: 'welocme to our Symfony Event',
        price: 50,
        organizerId: 101,
        imageUrl: 'https://cdn.dribbble.com/userupload/37287941/file/original-a59d13499667b765fb5aceb8b5d5bf0d.jpg',
        nbrPlaces: 25,
        nbrLikes: 0,
        date: new Date('2025-11-10'),
        location: 'Tunis',}
    ]
  }
}
