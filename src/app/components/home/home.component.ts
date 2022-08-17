import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
x:any={id : 1, firstName:'Raed',lastName:'Raed', age: '30 yo', subject:'Maths', career :'professor since 2005'};
y:any=  {id : 1, subject:"Maths", duration :'60 min',price:'40USD', Lvl :'5', teacher:'Raed'};
  constructor() { }

  ngOnInit() {
    var ConnectedUserId = sessionStorage.getItem('id');
console.log('here connected User Id ', ConnectedUserId) ;
  }

}
