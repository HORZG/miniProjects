import { Component, OnInit } from '@angular/core';
import { EventService } from 'src/app/services/event.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {
  events = [];
  constructor( private eventService : EventService) { }

  ngOnInit() {
    this.eventService.getAllEvents().subscribe((data)=>
    {
      this.events = data.eventsKey
      console.log(this.events);
      
    }
    )
  }

}
