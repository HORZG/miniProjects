import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { userService } from 'src/app/services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
user = {};
idConnectedUser: any ;
role : any;
  constructor(
    private router : Router,
    private userService : userService
  ) {
     
   }

  ngOnInit() {

  this.idConnectedUser = sessionStorage.getItem('id');
this.role = sessionStorage.getItem('role')
  this.userService.getUserById(this.idConnectedUser).subscribe((data)=>
  {
    this.user = data.userKey
  }
  )
}


logOut(){


sessionStorage.removeItem('id');
sessionStorage.removeItem('role');

}

}
