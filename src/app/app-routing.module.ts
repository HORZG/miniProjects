import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddCourseComponent } from './components/add-course/add-course.component';
import { AddEventComponent } from './components/add-event/add-event.component';
import { AddTeacherComponent } from './components/add-teacher/add-teacher.component';
import { AdminComponent } from './components/admin/admin.component';
import { CoursesTableComponent } from './components/courses-table/courses-table.component';
import { CoursesComponent } from './components/courses/courses.component';
import { DisplayCourseComponent } from './components/display-course/display-course.component';
import { DisplayEventComponent } from './components/display-event/display-event.component';
import { DisplayTeacherComponent } from './components/display-teacher/display-teacher.component';
import { EditCourseComponent } from './components/edit-course/edit-course.component';
import { EditEventComponent } from './components/edit-event/edit-event.component';
import { EditStudentComponent } from './components/edit-student/edit-student.component';
import { EditTeacherComponent } from './components/edit-teacher/edit-teacher.component';
import { EventsTableComponent } from './components/events-table/events-table.component';
import { EventsComponent } from './components/events/events.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { MyCoursesListComponent } from './components/my-courses-list/my-courses-list.component';
import { MyEventsListComponent } from './components/my-events-list/my-events-list.component';
import { NewsComponent } from './components/news/news.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ScienceNewsComponent } from './components/science-news/science-news.component';
import { SearchByNameComponent } from './components/search-by-name/search-by-name.component';
import { SearchByPriceComponent } from './components/search-by-price/search-by-price.component';
import { SignupTeacherComponent } from './components/signup-teacher/signup-teacher.component';
import { SignupComponent } from './components/signup/signup.component';
import { StudentsTableComponent } from './components/students-table/students-table.component';
import { TeachersTableComponent } from './components/teachers-table/teachers-table.component';
import { TeachersComponent } from './components/teachers/teachers.component';
import { TechNewsComponent } from './components/tech-news/tech-news.component';
import { WeatherComponent } from './components/weather/weather.component';
import { PersonalInfoComponent } from './personal-info/personal-info.component';


const routes: Routes = [
{path:'', component:HomeComponent},
{path:'courses', component:CoursesComponent},
{path:'searchbyprice', component:SearchByPriceComponent},
{path:'searchbyname', component:SearchByNameComponent},
{path:'teachers',component:TeachersComponent},
{path:'events', component:EventsComponent},
{path:'news', component:NewsComponent},
{path:'techNews',component:TechNewsComponent},
{path:'sciNews',component:ScienceNewsComponent},
{path:'login',component:LoginComponent},
{path: 'signup',component:SignupComponent},
{path:'signUpTeacher',component:SignupComponent},
{path:'admin', component:AdminComponent},
{path:'coursesTable', component:CoursesTableComponent},
{path:'mycourses',component:MyCoursesListComponent},
{path:'myevents', component:MyEventsListComponent},
{path:'teachersTable',component:TeachersTableComponent},
{path:'eventsTable', component:EventsTableComponent},
{path:'studentsTable', component:StudentsTableComponent},
{path:'displayCourse/:id',component:DisplayCourseComponent},
{path:'displayteacher/:id',component:DisplayTeacherComponent},
{path:'displayEvent/:id', component:DisplayEventComponent},
{path:'editTeacher/:id', component:EditTeacherComponent},
{path:'editStudent/:id', component:EditStudentComponent},
{path:'editCourse/:id', component:EditCourseComponent},
{path:'editEvent/:id', component:EditEventComponent},
{path:'addcourse',component:AddCourseComponent},
{path:'addteacher', component:AddTeacherComponent},
{path:'addEvent', component:AddEventComponent},
{path:'weather', component:WeatherComponent},
{path:'profile', component:ProfileComponent},
{path:'personalInfo', component:PersonalInfoComponent}





];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
