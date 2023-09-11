import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavbarComponent } from './Admin/components/navbar/navbar.component';
import { HomeComponent } from './Admin/components/home/home.component';
import { SidenavComponent } from './Admin/components/sidenav/sidenav.component';
import { BodyComponent } from './Admin/components/body/body.component';
import { HomeTeachersComponent } from './teachers/pages/home-teachers/home-teachers.component';
import { HomeStudentsComponent } from './students/pages/home-students/home-students.component';
import { HomeEvaluationsComponent } from './evaluations/pages/home-evaluations/home-evaluations.component';
import { LoginComponent } from './login/pages/login/login.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    HomeComponent,
    NavbarComponent,
    BodyComponent,
    HomeTeachersComponent,
    HomeStudentsComponent,
    HomeEvaluationsComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgbModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
