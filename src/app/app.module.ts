import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { TeachersComponent } from './components/teachers/teachers.component';
import { EventsComponent } from './components/events/events.component';
import { CoursesComponent } from './components/courses/courses.component';
import { NewsComponent } from './components/news/news.component';
import { TeacherComponent } from './components/teacher/teacher.component';
import { CourseComponent } from './components/course/course.component';
import { TutorsComponent } from './components/tutors/tutors.component';
import { ArticleComponent } from './components/article/article.component';
import { TutorComponent } from './components/tutor/tutor.component';
import { SignupComponent } from './components/signup/signup.component';
import { LoginComponent } from './components/login/login.component';
import { SignupTeacherComponent } from './components/signup-teacher/signup-teacher.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DisplayCourseComponent } from './components/display-course/display-course.component';
import { AdminComponent } from './components/admin/admin.component';
import { DisplayTeacherComponent } from './components/display-teacher/display-teacher.component';
import { CoursesTableComponent } from './components/courses-table/courses-table.component';
import { TeachersTableComponent } from './components/teachers-table/teachers-table.component';
import { NewsTableComponent } from './components/news-table/news-table.component';
import { AddCourseComponent } from './components/add-course/add-course.component';
import { AddTeacherComponent } from './components/add-teacher/add-teacher.component';
import { HttpClientModule } from '@angular/common/http';
import { EditTeacherComponent } from './components/edit-teacher/edit-teacher.component';
import { SearchByPriceComponent } from './components/search-by-price/search-by-price.component';
import { SearchByNameComponent } from './components/search-by-name/search-by-name.component';
import { WeatherComponent } from './components/weather/weather.component';
import { EditCourseComponent } from './components/edit-course/edit-course.component';
import { NewsapiService } from "./services/newsapi.service";
import { AddEventComponent } from './components/add-event/add-event.component';
import { EventsTableComponent } from './components/events-table/events-table.component';
import { EventComponent } from './components/event/event.component';
import { DisplayEventComponent } from './components/display-event/display-event.component';
import { EditEventComponent } from './components/edit-event/edit-event.component';
import { ProfileComponent } from './components/profile/profile.component';
import { MyCoursesListComponent } from './components/my-courses-list/my-courses-list.component';
import { MyEventsListComponent } from './components/my-events-list/my-events-list.component';
import { PersonalInfoComponent } from './personal-info/personal-info.component';
import { PersonalInformationsComponent } from './components/personal-informations/personal-informations.component';
import { StudentsTableComponent } from './components/students-table/students-table.component';
import { EditStudentComponent } from './components/edit-student/edit-student.component';
import { TechNewsComponent } from './components/tech-news/tech-news.component';
import { ScienceNewsComponent } from './components/science-news/science-news.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    TeachersComponent,
    EventsComponent,
    CoursesComponent,
    NewsComponent,
    TeacherComponent,
    CourseComponent,
    TutorsComponent,
    ArticleComponent,
    TutorComponent,
    SignupComponent,
    LoginComponent,
    SignupTeacherComponent,
    DisplayCourseComponent,
    AdminComponent,
    DisplayTeacherComponent,
    CoursesTableComponent,
    TeachersTableComponent,
    NewsTableComponent,
    AddCourseComponent,
    AddTeacherComponent,
    EditTeacherComponent,
    SearchByPriceComponent,
    SearchByNameComponent,
    WeatherComponent,
    EditCourseComponent,
    AddEventComponent,
    EventsTableComponent,
    EventComponent,
    DisplayEventComponent,
    EditEventComponent,
    ProfileComponent,
    MyCoursesListComponent,
    MyEventsListComponent,
    PersonalInfoComponent,
    PersonalInformationsComponent,
    StudentsTableComponent,
    EditStudentComponent,
    TechNewsComponent,
    ScienceNewsComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [NewsapiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
