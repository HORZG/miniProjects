import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup-teacher',
  templateUrl: './signup-teacher.component.html',
  styleUrls: ['./signup-teacher.component.css']
})
export class SignupTeacherComponent implements OnInit {
signupTeacherForm:  FormGroup;

  constructor(private formBuilder:FormBuilder) { }

  ngOnInit() {
    this.signupTeacherForm = this.formBuilder.group ( 
      {
firstName:['',[ Validators.minLength(3), Validators.required]],
lastName:['',[Validators.minLength(3), Validators.required]],
email:['',[Validators.email, Validators.required]],
password:['',[Validators.required,Validators.minLength(8),Validators.maxLength(20)]],
subject:['',[Validators.minLength(3), Validators.required]],
phone:['',[Validators.minLength(8), Validators.required]],
price:['', [Validators.required]]


      }
)
  }
  signUpTeacher()
  {};

}
