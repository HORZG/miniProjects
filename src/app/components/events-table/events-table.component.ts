import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EventService } from 'src/app/services/event.service';

@Component({
  selector: 'app-events-table',
  templateUrl: './events-table.component.html',
  styleUrls: ['./events-table.component.css']
})
export class EventsTableComponent implements OnInit {
events = [];
  constructor(private eventService : EventService,
    private router : Router) { }

  ngOnInit() {

    this.eventService.getAllEvents().subscribe((data)=>
    {

this.events = data.eventsKey
    }
    )
  }

  goToDisplay(id){
this.router.navigate([`displayEvent/${id}`])
  }

  goToEdit(id){
this.router.navigate([`editEvent/${id}`])

  }

  goToDeleteById(id){
    this.eventService.deleteEventById(id).subscribe((data)=>{
})
    this.eventService.getAllEvents().subscribe((data)=> {
     this.events = data.eventsKey
    }) }

}
