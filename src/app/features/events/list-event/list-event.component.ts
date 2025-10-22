import {Component, OnInit} from '@angular/core';
import {Eventy} from '../../../models/eventy';
import {DataEventsService} from '../../../shared/services/data-events.service';

@Component({
  selector: 'app-list-event',
  templateUrl: './list-event.component.html',
  styleUrl: './list-event.component.css',
 // providers:[DataEventsService]
})
export class ListEventComponent implements OnInit {
  list: Eventy[];
  constructor(private dataService:DataEventsService) {
  }
  ngOnInit() {
    this.list=this.dataService.getAllEvents();
  }

  likeEvent(event: Eventy){
    event.nbrLikes ++;
  }
}
