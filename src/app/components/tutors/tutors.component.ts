import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tutors',
  templateUrl: './tutors.component.html',
  styleUrls: ['./tutors.component.css']
})
export class TutorsComponent implements OnInit {
tutors:any=[];
  constructor() { }

  ngOnInit() {
  this.tutors = [
    {id : 1, firstName : 'Houssem' , lastName:'Ben Rezgui', subject : 'data sience', price : "12USD"},
    {id : 1, firstName : 'Ahmed' , lastName:'ahmed', subject : 'maths', price : "12USD"},
    {id : 1, firstName : 'Mohamed' , lastName:'mohamed', subject : 'physics', price : "12USD"}
  
  
  
  ]
  }

}
