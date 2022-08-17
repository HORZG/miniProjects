import { Component, OnInit } from '@angular/core';
import { EventService } from 'src/app/services/event.service';

@Component({
  selector: 'app-my-events-list',
  templateUrl: './my-events-list.component.html',
  styleUrls: ['./my-events-list.component.css']
})
export class MyEventsListComponent implements OnInit {
idConnectedUser = sessionStorage.getItem('id');
myEvents = [];

  constructor( private eventService : EventService) { }

  ngOnInit() {

    this.eventService.getAllMyEvents(this.idConnectedUser).subscribe((data)=> {
      this.myEvents = data.result
    })
  }

  goToDeleteById(id){
this.eventService.deleteImportantEvent(id).subscribe((data)=>{

})
this.eventService.getAllMyEvents(this.idConnectedUser).subscribe((data)=>{
  this.myEvents = data.result
})
  
  }

}
