import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-tutor',
  templateUrl: './tutor.component.html',
  styleUrls: ['./tutor.component.css']
})
export class TutorComponent implements OnInit {
@Input () tutor:any;
  constructor() { }

  ngOnInit() {
  
  }

}
