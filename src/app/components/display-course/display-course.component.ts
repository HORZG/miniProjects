import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CoursService } from 'src/app/services/cours.service';

@Component({
  selector: 'app-display-course',
  templateUrl: './display-course.component.html',
  styleUrls: ['./display-course.component.css']
})
export class DisplayCourseComponent implements OnInit {
courseId:any;
findedCourse:any;
btView :string = ''
 

  constructor(private activatedRoute:ActivatedRoute,
    private coursService : CoursService) { }

  ngOnInit() {



 this.courseId = this.activatedRoute.snapshot.paramMap.get('id') ;

 

 console.log('course id ', this.courseId);
 
    this.coursService.getCourseById(this.courseId).subscribe((data)=>
    {
      this.findedCourse = data.courseKey

    })

  
  }
 
   
    

}


