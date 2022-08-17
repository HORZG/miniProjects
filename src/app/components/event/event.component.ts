import { Component, Input, OnInit } from '@angular/core';
import { EventService } from 'src/app/services/event.service';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {
@Input() event : any;
role : any;
  constructor(private eventService : EventService) { }

  ngOnInit() {
  this.role = sessionStorage.getItem('role')
  }

  participate (obj){
this.eventService.participateToEvent(this.event).subscribe((data)=>{


})

  }

}
