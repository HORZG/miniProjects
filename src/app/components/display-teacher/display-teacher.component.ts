import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TeacherService } from 'src/app/services/teacher.service';
import { userService } from 'src/app/services/user.service';

@Component({
  selector: 'app-display-teacher',
  templateUrl: './display-teacher.component.html',
  styleUrls: ['./display-teacher.component.css']
})
export class DisplayTeacherComponent implements OnInit {
teacherId:any;
findedTeacher:any;
  

  constructor(private activatedRoute:ActivatedRoute,
    private userService : userService) { }

  ngOnInit() {
this.teacherId = this.activatedRoute.snapshot.paramMap.get('id');
this.userService.getTeacherById(this.teacherId).subscribe((data)=>


this.findedTeacher = data.teacherKey

)



   
  }

}
