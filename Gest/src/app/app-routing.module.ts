import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Admin/components/home/home.component';
import { HomeTeachersComponent } from './teachers/pages/home-teachers/home-teachers.component';
import { HomeStudentsComponent } from './students/pages/home-students/home-students.component';
import { HomeDashboardComponent } from './dashboard/pages/home-dashboard/home-dashboard.component';
import { HomeEvaluationsComponent } from './evaluations/pages/home-evaluations/home-evaluations.component';
import { HomeCoursesComponent } from './courses/pages/home-courses/home-courses.component';
import { LoginComponent } from './login/pages/login/login.component';


const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' }, // Ruta inicial redirige al dashboard
  { path:'login', component:LoginComponent},
  { path:'home', component:HomeComponent},
  { path:'teachers',component: HomeTeachersComponent},
  { path:'students',component:HomeStudentsComponent},
  {path:'dashboard',component:HomeDashboardComponent},
  {path:'evaluations',component:HomeEvaluationsComponent},
  {path:'courses',component:HomeCoursesComponent}
  
  

  // Agrega más rutas para otras secciones
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
