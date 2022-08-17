import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { userService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
loginForm:FormGroup;
user:any={};
msgError : string;


  constructor(private formBuilder:FormBuilder,
    private userService : userService,
    private router : Router) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group (
      {email:[''],
      password:['']

      })
}

  logIn() {
    console.log('here user to check', this.user);
    
    this.userService.logIn(this.user).subscribe((data)=>
    {
      console.log('', data);
      if ( data.message != '2') {
        this.msgError = 'please check email or password'
        
      } else {
        if (data.user.role =='student' || data.user.role =='teacher' ) {
          sessionStorage.setItem('id', data.user.id);
          sessionStorage.setItem('role', data.user.role);
         this.router.navigate(['']);
        
         
        }
        else {
          sessionStorage.setItem('id', data.user.id);
          sessionStorage.setItem('role', data.user.role);

          this.router.navigate(['admin'])
          
        }
      }
      
  
    })
    
  ;
  
    

  }

}
