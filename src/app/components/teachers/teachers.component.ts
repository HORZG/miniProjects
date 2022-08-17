import { Component, OnInit } from '@angular/core';

import { TeacherService } from 'src/app/services/teacher.service';
import { userService } from 'src/app/services/user.service';

@Component({
  selector: 'app-teachers',
  templateUrl: './teachers.component.html',
  styleUrls: ['./teachers.component.css']
})
export class TeachersComponent implements OnInit {
teachers:any=[];
  constructor(private teacherService:TeacherService,
    private userService : userService) { }

  ngOnInit() {

    this.userService.getAllteachers().subscribe((data=>
      {this.teachers = data.teachersKey}
      ))
   
  }

}
