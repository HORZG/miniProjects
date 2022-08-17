import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { CoursService } from 'src/app/services/cours.service';

@Component({
  selector: 'app-edit-course',
  templateUrl: './edit-course.component.html',
  styleUrls: ['./edit-course.component.css']
})
export class EditCourseComponent implements OnInit {
  course = {};
  editCourseForm: FormGroup;
  courseId : any;
  constructor(
    private formBuilder: FormBuilder,
    private coursService: CoursService, 
    private activatedRoute : ActivatedRoute
  ) { }

  ngOnInit() {
    this.editCourseForm = this.formBuilder.group(
      {
        subject: [''],
        duration: [''],
        price: [''],
        lvl: [''],
        teacher: [''],
        placesLeft: ['']
      }
    )
this.courseId = this.activatedRoute.snapshot.paramMap.get('id')
    this.coursService.getCourseById(this.courseId).subscribe((data)=>
    {
this.course = data.courseKey

    })
  }


  editCourse(id){
    this.coursService.editcourse(id).subscribe((data)=>
     {
      console.log(data);
      
     }
    )
  }

}
