import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './Admin/components/home/home.component';
import { SidenavComponent } from './Admin/components/sidenav/sidenav.component';
import { BodyComponent } from './Admin/components/body/body.component';
import { LoginComponent } from './login/pages/login/login.component';
import { FormsModule } from '@angular/forms';
import { AuthenticationService } from './login/services/authentication.service';
import { HttpClientModule } from '@angular/common/http';

import { HomeCoursesComponent } from './courses/pages/home-courses/home-courses.component';
import { CommonModule } from '@angular/common';
import { HomeTeachersComponent } from './teachers/pages/home-teachers/home-teachers.component';
import { HomeEvaluationsComponent } from './evaluations/pages/home-evaluations/home-evaluations.component';
import { HomeStudentsComponent } from './students/pages/home-students/home-students.component';
import { ListarStudentsComponent } from './students/components/listar-students/listar-students.component';
import { ListarTeachersComponent } from './teachers/components/listar-teachers/listar-teachers.component';

import { RouterModule } from '@angular/router';
import { OverlayModule } from '@angular/cdk/overlay'
import { CdkMenuModule } from '@angular/cdk/menu'
import { SublevelMenuComponent } from './Admin/components/sidenav/sublevel-menu.component';




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
    ListarTeachersComponent,
    SublevelMenuComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    CommonModule,
    RouterModule
  ],
  providers: [AuthenticationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
