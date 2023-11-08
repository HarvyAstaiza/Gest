import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './Admin/components/home/home.component';
import { SidenavComponent } from './Admin/components/sidenav/sidenav.component';
import { BodyComponent } from './Admin/components/body/body.component';
import { LoginComponent } from './login/pages/login/login.component';
import { FormGroup, FormsModule } from '@angular/forms';
import { AuthenticationService } from './login/services/authentication.service';
import { HttpClientModule } from '@angular/common/http';

import { HomeCoursesComponent } from './courses/pages/home-courses/home-courses.component';
import { CommonModule } from '@angular/common';
import { HomeTeachersComponent } from './teachers/pages/home-teachers/home-teachers.component';
import { HomeEvaluationsComponent } from './evaluations/pages/home-evaluations/home-evaluations.component';
import { HomeStudentsComponent } from './students/pages/home-students/home-students.component';
import { ListarStudentsComponent } from './students/components/listar-students/listar-students.component';
import { ListarTeachersComponent } from './teachers/components/listar-teachers/listar-teachers.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { SublevelMenuComponent } from './Admin/components/sidenav/sublevel-menu.component';
import { ListarCoursesComponent } from './courses/components/listar-courses/listar-courses.component';
import { CreateCoursesComponent } from './courses/components/create-courses/create-courses.component';
import { ActualizarCoursesComponent } from './courses/components/actualizar-courses/actualizar-courses.component';
import { EliminarCoursesComponent } from './courses/components/eliminar-courses/eliminar-courses.component';
import { CreateTeachersComponent } from './teachers/components/create-teachers/create-teachers.component';
import { TeachersModule } from './teachers/teachers.module';
import { ActualizarTeachersComponent } from './teachers/components/actualizar-teachers/actualizar-teachers.component';
import { EliminarTeachersComponent } from './teachers/components/eliminar-teachers/eliminar-teachers.component';
import { CreateStudentsComponent } from './students/components/create-students/create-students.component';
import { ActualizarStudentsComponent } from './students/components/actualizar-students/actualizar-students.component';
import { SingupComponent } from './signup/pages/singup/singup.component';



@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    HomeComponent,
    BodyComponent,
    LoginComponent,
    HomeCoursesComponent,
    HomeTeachersComponent,
    HomeCoursesComponent,
    HomeEvaluationsComponent  ,
    HomeStudentsComponent ,
    ListarStudentsComponent,
    CreateStudentsComponent,
    ActualizarStudentsComponent,
    ListarTeachersComponent,
    SublevelMenuComponent,
    ListarCoursesComponent,
    CreateCoursesComponent,
    ActualizarCoursesComponent,
    EliminarCoursesComponent,
    CreateTeachersComponent,
    ActualizarTeachersComponent,
    EliminarTeachersComponent,
    SingupComponent,
  ],
  imports: [   
    BrowserModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    CommonModule,
    RouterModule,
    
  ],
  providers: [AuthenticationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
