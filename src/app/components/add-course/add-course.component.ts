import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CoursService } from 'src/app/services/cours.service';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.css']
})
export class AddCourseComponent implements OnInit {
  newCourse:any= {};
  addCourseForm: FormGroup;
  idConnectedTeacher  = sessionStorage.getItem('id');

  constructor(private formBuilder:FormBuilder,
    private courseService : CoursService) { }

  ngOnInit() {
    this.addCourseForm = this.formBuilder.group ( {
      subject:[''],
      duration:[''],
      price:[''],
      lvl:[''],
      teacher:[''],
      idTeacher : [''],
      date : [''],
      placesLeft :['']

    })
  }

  addCourse(){

    


  this.courseService.addCourse(this.newCourse).subscribe((data)=>
  {

  console.log( data.message);
  
  })



  }

}
