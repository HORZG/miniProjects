import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
@Injectable({
  providedIn: 'root'
})
export class TeacherService {
teacherUrl:string = 'http://localhost:3000/teachers';
  constructor( private httpClient : HttpClient) { }

  // add teacher
addTeacher(teacherObj){
  return this.httpClient.post<{message : any}>(this.teacherUrl, teacherObj);

}
// get all teacher
getAllTeachers(){
  return this.httpClient.get<{teachersKey:any}>(this.teacherUrl);
}
// get teacher by id
getTeacherById (id){
return this.httpClient.get<{teacherKey}>(`${this.teacherUrl}/${id}`);
}

//  edit teacher
editTeacher(newTeacher){
  return this.httpClient.put(this.teacherUrl, newTeacher);
}
// delete teacher
deteleTeacherById(teacherObj){

  return this.httpClient.delete(this.teacherUrl, teacherObj)

}
}
