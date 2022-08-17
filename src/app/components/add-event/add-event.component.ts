import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { EventService } from 'src/app/services/event.service';

@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.css']
})
export class AddEventComponent implements OnInit {
  addEventForm : FormGroup;
  event = {};
  imagePreview:string;
  constructor(private formBuilder : FormBuilder,
    private eventService : EventService
    ) { }

  ngOnInit() {
this.addEventForm = this.formBuilder.group({
title : [''],
date : [''],
description : [''],
price : [''],
img:['']
})

  }

  addEvent(){
console.log(this.event);

this.eventService.addEvent(this.event, this.addEventForm.value.img).subscribe((data)=>
{
console.log(this.addEventForm.value);
 
})


  }


  onImageSelected(event: Event) {
    const file = (event.target as HTMLInputElement).files[0];
    console.log('Here my selected file', file);

    this.addEventForm.patchValue({ img: file });
    this.addEventForm.updateValueAndValidity();
    const reader = new FileReader();
    reader.onload = () => {
      this.imagePreview = reader.result as string
    };
    reader.readAsDataURL(file);
  }

}
