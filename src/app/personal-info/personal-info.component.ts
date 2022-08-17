import { Component, OnInit } from '@angular/core';
import { userService } from '../services/user.service';

@Component({
  selector: 'app-personal-info',
  templateUrl: './personal-info.component.html',
  styleUrls: ['./personal-info.component.css']
})
export class PersonalInfoComponent implements OnInit {
id : any;
user = {};
  constructor(private userService : userService) { }

  ngOnInit() {
this.id = sessionStorage.getItem('id')
    this.userService.getUserById(this.id).subscribe((data)=>
    {
this.user = data.userKey

    })


  }

}
