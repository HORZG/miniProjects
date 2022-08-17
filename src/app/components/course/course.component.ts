import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CoursService } from 'src/app/services/cours.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {
  @Input() course: any;
idConnectedUser: any = sessionStorage.getItem('id');
role = sessionStorage.getItem('role')
  
 
  constructor(
    private coursService: CoursService,
    private router: Router
  ) { }

  ngOnInit() {


  }

  goToDisplay(id: any) {

    this.router.navigate([`displayCourse/${id}`]);

  }

  joinCourse(obj) {
    if (this.course.placesLeft >= 1 ) {
      console.log('places avail',this.course.placesLeft );
  
      this.coursService.joinCourse(this.course).subscribe((data) => {
        console.log('here id course to book',  'with',  'available');
      console.log(data.message)
      this.course = data.message

      })

    } else {
      console.log('not avail');
      alert('No Places Left')

    }
   

  }

  placesColor(p){
    let color;
    if (p>0) {
      color = 1
    } else if (p == 0 ) {
      color = 0
    }
    return color
  }

}
