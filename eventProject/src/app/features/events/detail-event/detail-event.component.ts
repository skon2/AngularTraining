import {Component, OnInit} from '@angular/core';
import {DataEventsService} from '../../../shared/services/data-events.service';
import {ActivatedRoute} from '@angular/router';
import {Eventy} from '../../../models/eventy';

@Component({
  selector: 'app-detail-event',
  templateUrl: './detail-event.component.html',
  styleUrl: './detail-event.component.css'
})
export class DetailEventComponent implements OnInit{
  event?:Eventy;
  constructor(private currentRoute:ActivatedRoute,
                private dataService: DataEventsService) {
  }
  ngOnInit() {
    this.event= this.dataService.getEventById(+this.currentRoute.snapshot.params['id']);
    console.log(this.event)
  }

}
