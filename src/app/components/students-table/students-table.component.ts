import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { userService } from 'src/app/services/user.service';

@Component({
  selector: 'app-students-table',
  templateUrl: './students-table.component.html',
  styleUrls: ['./students-table.component.css']
})
export class StudentsTableComponent implements OnInit {
students =[];
student= {};
  constructor(
    private userService : userService,
    private router : Router
  ) { }

  ngOnInit() {
  this.userService.getAllStudents().subscribe((data)=>{
this.students= data.studentsKey

  })

  }


  goToEdit(id){
    this.router.navigate([`editStudent/${id}`])

  }

  goToDeleteById(id)
{
  this.userService.deleteStudent(id).subscribe((data)=>{
    console.log(data);
    this.userService.getAllStudents().subscribe((data)=>{ 
      this.students = data.studentsKey
    })
    
  })
  
}

}
