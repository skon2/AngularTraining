import {Component, OnInit} from '@angular/core';
import {Eventy} from '../../../models/eventy';

@Component({
  selector: 'app-list-event',
  templateUrl: './list-event.component.html',
  styleUrl: './list-event.component.css'
})
export class ListEventComponent implements OnInit {
    //attributes =>  var , values
  title:string;
  //title="hello" => we can do this :/ but its not a best practice
  listEvents:Eventy[];
  searchValue:string;
  constructor() {
    //this.title = 'Hello World'; we can do this but its not a best practice
  }
  //methods => action
  ngOnInit() {
    this.title="Hello World!"; // this is the best practice
    //cnx Backend
    this.listEvents=[
      {
        id:1,
        title: 'Angular Trainning',
        description: 'Angular v18',
        date: new Date('2025-11-10'),
        location: 'Tunis',
        price: 50,
        organizerId: 10,
        imageUrl: 'https://th.bing.com/th/id/OIP.58BA6h6N8hyKCe2O9S5NwAHaD4?w=329&h=180&c=7&r=0&o=7&pid=1.7&rm=3',
        nbPlaces:5,
        nbrLike: 30,
      },
      {
        id:2,
        title: 'Symfony Training',
        description: 'Symfony Training V6',
        date: new Date('2025-12-10'),
        location: 'Tunis',
        price: 50,
        organizerId: 10,
        imageUrl: 'https://th.bing.com/th/id/OIP.58BA6h6N8hyKCe2O9S5NwAHaD4?w=329&h=180&c=7&r=0&o=7&pid=1.7&rm=3',
        nbPlaces:0,
        nbrLike: 0,
      }
    ]
  }
  //method to buy ticket => click on the button buy ticket
  //Haider
  nbrPlaceDecr(e:Eventy){
    e.nbPlaces --
  }
  //Marwa
  nbrLike(e:Eventy){
    e.nbrLike ++
  }
  search(){}
}
