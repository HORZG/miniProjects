import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { userService } from 'src/app/services/user.service';

@Component({
  selector: 'app-personal-informations',
  templateUrl: './personal-informations.component.html',
  styleUrls: ['./personal-informations.component.css']
})
export class PersonalInformationsComponent implements OnInit {
  id : any;
  user = {};
  editProfileForm : FormGroup;
    constructor(private userService : userService,
      private formBuilder : FormBuilder) { }
  
    ngOnInit() {
this.editProfileForm = this.formBuilder.group({
firstName : [''],
lastName : [''],
email : [''],
password : [''],
phone : ['']

})



  this.id = sessionStorage.getItem('id')
      this.userService.getUserById(this.id).subscribe((data)=>
      {
  this.user = data.userKey
  
      })
  
  
    }

    editProfile(user){
      this.userService.editUser(this.user).subscribe((data)=>
      {
        
      })
    }
  
  }
  