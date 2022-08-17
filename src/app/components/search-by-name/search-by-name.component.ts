import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CoursService } from 'src/app/services/cours.service';

@Component({
  selector: 'app-search-by-name',
  templateUrl: './search-by-name.component.html',
  styleUrls: ['./search-by-name.component.css']
})
export class SearchByNameComponent implements OnInit {
  course:any ={};
courses = [];
searchCourseForm : FormGroup;

  constructor(private formBuilder: FormBuilder,
    private courseService : CoursService) { }

  ngOnInit() {
    
    this.searchCourseForm = this.formBuilder.group({
      subject : ['']
    })
  }

  searchCourseBySubject(){
    console.log('chercher cette matiere ',this.course );
    
this.courseService.getCourseByname(this.course).subscribe((data)=>
{
console.log(data.coursesKey);
this.courses= data.coursesKey

})
  }
}
