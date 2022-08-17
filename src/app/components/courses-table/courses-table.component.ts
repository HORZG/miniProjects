import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CoursService } from 'src/app/services/cours.service';

@Component({
  selector: 'app-courses-table',
  templateUrl: './courses-table.component.html',
  styleUrls: ['./courses-table.component.css']
})
export class CoursesTableComponent implements OnInit {

  courses: any = [];
  constructor(private router: Router,
    private coursService: CoursService) { }

  ngOnInit() {

    this.coursService.getAllCourses().subscribe((data) => {
      this.courses = data.coursesKey;
    })


  }


  goToDisplay(id: any) {

    this.router.navigate([`displayCourse/${id}`]);

  }

  goToEdit(id) {

    this.router.navigate([`editCourse/${id}`])
  }

  delete(id) {
    this.coursService.deteleCourseById(id).subscribe((data) => {

      this.coursService.getAllCourses().subscribe((data) => {
        this.courses = data.coursesKey
  
      })
    })
    
  }


  goToAddCourse() {
    console.log('helklo');

    this.router.navigate(['addcourse/']);
  }

}
