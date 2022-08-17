import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { TeacherService } from 'src/app/services/teacher.service';
import { userService } from 'src/app/services/user.service';

@Component({
  selector: 'app-edit-teacher',
  templateUrl: './edit-teacher.component.html',
  styleUrls: ['./edit-teacher.component.css']
})
export class EditTeacherComponent implements OnInit {
  teacher:any;
  userId:any;
  editTeacherForm:FormGroup;
  constructor(private teacherService:TeacherService,
    private userService : userService,
    private activatedRoute:ActivatedRoute,
    private formBuilder:FormBuilder) { }

  ngOnInit() {

    this.editTeacherForm = this.formBuilder.group({
      firstName: [''],
      lastName: [''],
      email: [''],
      password: [''],
      phone: ['']
    })
    this.userId = this.activatedRoute.snapshot.paramMap.get('id');
    console.log('c est l id à chercher' ,this.userId );
    
    
    this.userService.getTeacherById(this.userId).subscribe((data)=>
    {
     this.teacher = data.teacherKey
 
    })
     }

  editTeacher(id){
    this.userService.editOldTeacher(id).subscribe((data)=>
    {
      console.log(data);
      
    }
    )
    
  }

}
