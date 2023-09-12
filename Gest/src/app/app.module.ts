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
import { DashboardModule } from './dashboard/dashboard.module';
import { HomeCoursesComponent } from './courses/pages/home-courses/home-courses.component';



@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    HomeComponent,
    BodyComponent,
    LoginComponent,
    HomeCoursesComponent,   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgbModule,
    FormsModule,
    HttpClientModule,
    

  ],
  providers: [AuthenticationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
