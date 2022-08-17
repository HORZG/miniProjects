import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { $ } from 'protractor';
@Injectable({
  providedIn: 'root'
})
export class CoursService {
coursUrl : string = 'http://localhost:3000/courses' ;
bookedCourseUrl : string = 'http://localhost:3000/bookedCourses';
idConnectedUser = sessionStorage.getItem('id');
newStatus = 'confirmed'

  constructor(private httpClient:HttpClient) { }

// get all course
getAllCourses(){
 return this.httpClient.get<{coursesKey : any}>(this.coursUrl);
}
// get course by id
getCourseById (id){
 return this.httpClient.get<{courseKey : any}>(`${this.coursUrl}/${id}`);
}


joinCourse(course){
  return this.httpClient.post<{message : any}>(`${this.coursUrl}/join/${course.id}/${this.idConnectedUser}`,course);
}

deleteFromBookedCourses(c){
  return this.httpClient.delete<{result2 : any}>(`${this.bookedCourseUrl}/${c._id}/${c.idCourse}`,c)
}


getCourseByname (name){
  return this.httpClient.post<{coursesKey : any}>(`${this.coursUrl}/${name}`,name);
 }

// add course
addCourse(coursObj){
return this.httpClient.post<{message : any}>(this.coursUrl, coursObj);

}
//  edit course
editcourse(NewCours){
 return this.httpClient.put<{}>(this.coursUrl, NewCours);
}
// delete teacher
deteleCourseById(id){

 return this.httpClient.delete<{Message : any}>(this.coursUrl+'/'+id,id);

}

confirmCourse(id)
{
  return this.httpClient.put<{message : any}>(`${this.coursUrl}/confirm/${id}/${this.newStatus}`,id)
}
// deleteCourseFromBookedCourses(idBookedCourse)
// {
//   return this.httpClient.delete(`${this.coursUrl}/deletefrombooked/${this.idConnectedUser}`, idBookedCourse)}

getAllMyCourses (){
  return this.httpClient.get<{myCoursesKey : any}>(`${this.coursUrl}/${this.idConnectedUser}/mycourses`)
  
}

getAllMyOwnCourses (){
  return this.httpClient.get<{myCoursesKey : any}>(`${this.bookedCourseUrl}/myowncourses/${this.idConnectedUser}`)
  
}
}
