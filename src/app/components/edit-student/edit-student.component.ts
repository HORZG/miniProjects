import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { userService } from 'src/app/services/user.service';

@Component({
  selector: 'app-edit-student',
  templateUrl: './edit-student.component.html',
  styleUrls: ['./edit-student.component.css']
})
export class EditStudentComponent implements OnInit {
  editStudentForm : FormGroup;
  student = {};


  constructor(
    private userService : userService,
    private activatedRoute : ActivatedRoute,
    private formBuilder : FormBuilder
  ) { }

  ngOnInit() {
    let idStudent = this.activatedRoute.snapshot.paramMap.get('id');
    this.userService.getStudentById(idStudent).subscribe((data)=>
    {
      this.student = data.student
    })
}

editStudent(student) {
this.userService.editOldStudent(this.student).subscribe((data)=>{
  console.log(data);
  
})

}

}
