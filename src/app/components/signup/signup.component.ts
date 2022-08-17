import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { userService } from 'src/app/services/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
signupForm : FormGroup;
path:string;

imagePreview:string;
  constructor(private formBuilder:FormBuilder , 
    private userService : userService,
    private router : Router
  ) { }

  ngOnInit() {
    this.path = this.router.url;
    console.log('here path', this.path);
    this.signupForm = this.formBuilder.group({
      firstName:['',[Validators.minLength(3), Validators.required]],
      lastName:['',[Validators.minLength(3), Validators.required]],
      email:['',[Validators.email, Validators.required]],
      password:['',[Validators.minLength(3),Validators.maxLength(20), Validators.required]],
      phone:['',[Validators.minLength(8), Validators.required]],
      img:['']
    })
  }

  signUp(){
    if (this.path == '/signup') {
      this.signupForm.value.role = 'student'
    } else {
      this.signupForm.value.role = 'teacher'
    }
    this.userService.signUp(this.signupForm.value,this.signupForm.value.img).subscribe((data)=>
    {
      console.log('user added with succes', this.signupForm.value);
      
    })

  }


  onImageSelected(event: Event) {
    const file = (event.target as HTMLInputElement).files[0];
    console.log('Here my selected file', file);

    this.signupForm.patchValue({ img: file });
    this.signupForm.updateValueAndValidity();
    const reader = new FileReader();
    reader.onload = () => {
      this.imagePreview = reader.result as string
    };
    reader.readAsDataURL(file);
  }



}

