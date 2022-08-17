import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EventService } from 'src/app/services/event.service';

@Component({
  selector: 'app-display-event',
  templateUrl: './display-event.component.html',
  styleUrls: ['./display-event.component.css']
})
export class DisplayEventComponent implements OnInit {
eventId : any;
findedEvent : any = {};
  constructor(private eventService : EventService,
    private activatedRoute : ActivatedRoute) { }

  ngOnInit() {
    this.eventId = this.activatedRoute.snapshot.paramMap.get('id');

    this.eventService.getEventById(this.eventId).subscribe((data)=>
    {
      this.findedEvent = data.eventKey
    })

  }

}
