import { Component, OnInit } from '@angular/core';
import { CoursService } from 'src/app/services/cours.service';

@Component({
  selector: 'app-my-courses-list',
  templateUrl: './my-courses-list.component.html',
  styleUrls: ['./my-courses-list.component.css']
})
export class MyCoursesListComponent implements OnInit {
c = {};
myCourses = [];
role :any;
message : any;

  constructor(
    private courseService : CoursService
  ) { }

  ngOnInit() {
   this.role = sessionStorage.getItem('role');

   if (this.role == 'student') {
    this.courseService.getAllMyCourses().subscribe((data)=>
    {
      this.myCourses= data.myCoursesKey
    })
   }

   else {
    if (this.role == 'teacher') {

      this.courseService.getAllMyOwnCourses().subscribe((data)=>
    {
      this.myCourses= data.myCoursesKey
    })
    }
   }
    
    }

    goToDeleteById(c){
this.courseService.deleteFromBookedCourses(c).subscribe((data)=>{

console.log('cours annulé');
this.role = sessionStorage.getItem('role');

   if (this.role == 'student') {
    this.courseService.getAllMyCourses().subscribe((data)=>
    {
      this.myCourses= data.myCoursesKey
    })
   }

   else {
    if (this.role == 'teacher') {

      this.courseService.getAllMyOwnCourses().subscribe((data)=>
    {
      this.myCourses= data.myCoursesKey
    })
    }
   }
})

    }


    confirm(id){
this.courseService.confirmCourse(id).subscribe((data)=>{

})
    }
  }

