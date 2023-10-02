import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Admin/components/home/home.component';
import { LoginComponent } from './login/pages/login/login.component';
import { DashboardComponent } from './Admin/components/dashboard/dashboard.component';
import { HomeStudentsComponent } from './students/pages/home-students/home-students.component';
import { HomeEvaluationsComponent } from './evaluations/pages/home-evaluations/home-evaluations.component';
import { HomeCoursesComponent } from './courses/pages/home-courses/home-courses.component';
import { HomeTeachersComponent } from './teachers/pages/home-teachers/home-teachers.component';
import { ListarTeachersComponent } from './teachers/components/listar-teachers/listar-teachers.component';
import { EliminarTeachersComponent } from './teachers/components/eliminar-teachers/eliminar-teachers.component';
import { ActualizarTeachersComponent } from './teachers/components/actualizar-teachers/actualizar-teachers.component';
import { CreateTeachersComponent } from './teachers/components/create-teachers/create-teachers.component';


const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login',component:LoginComponent}, // Ruta inicial redirige al dashboard  
  {path:'home',component :HomeComponent,
  children:[
  { path:'dashboard',component: DashboardComponent},
  {path:'students',component:HomeStudentsComponent},
  { path:'evaluations',component:   HomeEvaluationsComponent},
  {path:'courses',component:HomeCoursesComponent},
  {path:'teachers',component:HomeTeachersComponent 
  ,children:[
    {path:'list',component :ListarTeachersComponent},
    {path:'create',component :CreateTeachersComponent},
    {path:'update',component :ActualizarTeachersComponent},
    {path:'delete',component :EliminarTeachersComponent}
  ]},

]
}// Agrega más rutas para otras secciones
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
