import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { TeacherService } from 'src/app/services/teacher.service';
import { userService } from 'src/app/services/user.service';

@Component({
  selector: 'app-add-teacher',
  templateUrl: './add-teacher.component.html',
  styleUrls: ['./add-teacher.component.css']
})
export class AddTeacherComponent implements OnInit {
  newTeacher:any={};
  addTeacherForm: FormGroup;

  imagePreview:string;
 
  constructor(private formBuilder:FormBuilder,
    private userService : userService) { }

  ngOnInit() {
    this.addTeacherForm = this.formBuilder.group ({
      firstName:[''],
      lastName:[''],
      email:[''],
      password:[''],
      phone:[''],
      role:[''],
      img:['']
      

    })
  }
  addTeacher(){
this.userService.signUp(this.newTeacher, this.addTeacherForm.value.img).subscribe((data)=>
{
  console.log(data.message);
  
})

  }

  onImageSelected(event: Event) {
    const file = (event.target as HTMLInputElement).files[0];
    console.log('Here my selected file', file);

    this.addTeacherForm.patchValue({ img: file });
    this.addTeacherForm.updateValueAndValidity();
    const reader = new FileReader();
    reader.onload = () => {
      this.imagePreview = reader.result as string
    };
    reader.readAsDataURL(file);
  }

}
