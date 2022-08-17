import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TeacherService } from 'src/app/services/teacher.service';
import { userService } from 'src/app/services/user.service';

@Component({
  selector: 'app-teachers-table',
  templateUrl: './teachers-table.component.html',
  styleUrls: ['./teachers-table.component.css']
})
export class TeachersTableComponent implements OnInit {
  
  teachers =[];
  mssage = '';
    constructor(private router:Router, 
    private teacherService: TeacherService,
    private userService : userService) { }

  ngOnInit() {
    this.userService.getAllteachers().subscribe((data)=>
{this.teachers= data.teachersKey}
    )
  }

  goToDisplay(id) {
    this.router.navigate([`displayteacher/${id}`])


  }

  goToEdit(id) {
this.router.navigate([`editTeacher/${id}`])

  }

  goToDeleteById(id) {
    // this.router.navigate([`editTeacher/${id}`])
    this.userService.deteleTeacherById(id).subscribe((data)=> 
    {
      console.log(data);
      this.teacherService.getAllTeachers().subscribe((data)=>
{this.teachers= data.teachersKey}
    )
      
    }
    )

      }
}
