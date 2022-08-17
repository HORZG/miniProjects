import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { EventService } from 'src/app/services/event.service';

@Component({
  selector: 'app-search-by-price',
  templateUrl: './search-by-price.component.html',
  styleUrls: ['./search-by-price.component.css']
})
export class SearchByPriceComponent implements OnInit {
event: any ={};
events = [];
searchEventForm : FormGroup;
  constructor( private eventService : EventService,
    private formBuilder : FormBuilder) { }

  ngOnInit() {
this.searchEventForm =this.formBuilder.group({
  price : ['']
})

  }

  searchEventByPrice(obj){
    console.log('here ammount to search', this.event);
    
this.eventService.getEventByPrice(this.event.price).subscribe((data)=>{
  console.log('here all events found',data.eventsKey);
this.events = data.eventsKey;



})

  }

}
