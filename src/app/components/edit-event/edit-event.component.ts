import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { EventService } from 'src/app/services/event.service';

@Component({
  selector: 'app-edit-event',
  templateUrl: './edit-event.component.html',
  styleUrls: ['./edit-event.component.css']
})
export class EditEventComponent implements OnInit {
  editEventForm : FormGroup;
  eventId : any;
  event = {};
  constructor(
    private formBuilder : FormBuilder,
    private activatedRoute : ActivatedRoute,
    private eventService : EventService
  ) { }

  ngOnInit() {
    this.editEventForm = this.formBuilder.group(
      {
        title : [''],
        date : [''],
        description : ['']

      }

      
    )

    this.eventId = this.activatedRoute.snapshot.paramMap.get('id');
    alert(this.eventId)
    this.eventService.getEventById(this.eventId).subscribe((data)=>
    
    (
      this.event = data.eventKey
    )
    )
  }

  editEvent(id){
this.eventService.editEvent(id).subscribe((data)=>
{
console.log(data.message);

})

  }

}
