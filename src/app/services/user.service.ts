import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
@Injectable({
  providedIn: 'root'
})
export class userService {
userUrl:string = 'http://localhost:3000/users';
teacherUrl : string = 'http://localhost:3000/teachers';
studentUrl : string = 'http://localhost:3000/students';
connectedUser = sessionStorage.getItem('id');

  constructor( private httpClient : HttpClient) { }


  //weather search by city 
  searchWeather(city){
return this.httpClient.post<{result : any}>(`${this.userUrl}/weather`,city)
  }


  // add user / sign up
signUp(userObj, img:File){

  let formData = new FormData();
  formData.append('firstName', userObj.firstName);
  formData.append('lastName', userObj.lastName);
  formData.append('email', userObj.email);
  formData.append('password', userObj.password);
  formData.append('phone', userObj.phone);
  formData.append('role', userObj.role);
  formData.append('img',img);


  return this.httpClient.post<{message : any}>(this.userUrl, formData);

}



logIn(userObj){
  return this.httpClient.post<{message : any, user : any}>(`${this.userUrl}/login`, userObj);

}
// addTeacher(teacherObj){
//   return this.httpClient.post<{message : any}>(this.teacherUrl, teacherObj);

// }

// addUser(userObj){
//   return this.httpClient.post<{message : any}>(this.userUrl, userObj);

// }
// get all users
getAllusers(){
  return this.httpClient.get<{usersKey:any}>(this.userUrl);
}

getAllteachers(){
  return this.httpClient.get<{teachersKey:any}>(this.teacherUrl);
}

getAllStudents(){
  return this.httpClient.get<{studentsKey:any}>(this.studentUrl);

}



//  //////////////////// student BY ID
getStudentById(id){

  return this.httpClient.get<{student : any}>(`${this.studentUrl}/${id}`)
}

editOldStudent(obj){
  return this.httpClient.put<{message :any }>(`${this.studentUrl}/edit/${obj._id}`, obj);
}

deleteStudent(id){
  return this.httpClient.delete<{message : any}>(`${this.studentUrl}/delete/${id}`,id)
}



// get user by id
getUserById (id){
return this.httpClient.get<{userKey : any}>(`${this.userUrl}/${id}`);
}

getTeacherById (id){
  return this.httpClient.get<{teacherKey : any}>(`${this.teacherUrl}/${id}`);
  }
//  edit user
editUser(newUser){
  return this.httpClient.put<{message : any}>(`${this.userUrl}/profile/${this.connectedUser}`,newUser);
}




editOldTeacher(obj){
  return this.httpClient.put<{message :any }>(`${this.teacherUrl}/${obj._id}`, obj);
}

// delete user
deteleUserById(userObj){

  return this.httpClient.delete(this.userUrl, userObj)

}

// DELETE teacher By Id
deteleTeacherById(id){

  return this.httpClient.delete<{Message : any}>(`${this.teacherUrl}/${id}`)

}
}
