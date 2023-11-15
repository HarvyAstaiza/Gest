import { NgModule, Component } from '@angular/core';
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
import { ListarStudentsComponent } from './students/components/listar-students/listar-students.component';
import { CreateStudentsComponent } from './students/components/create-students/create-students.component';
import { ActualizarStudentsComponent } from './students/components/actualizar-students/actualizar-students.component';
import { EliminarStudentsComponent } from './students/components/eliminar-students/eliminar-students.component';
import { ListarCoursesComponent } from './courses/components/listar-courses/listar-courses.component';
import { CreateCoursesComponent } from './courses/components/create-courses/create-courses.component';
import { ActualizarCoursesComponent } from './courses/components/actualizar-courses/actualizar-courses.component';
import { EliminarCoursesComponent } from './courses/components/eliminar-courses/eliminar-courses.component';
import { SingupComponent } from './signup/pages/singup/singup.component';


const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login',component:LoginComponent}, // Ruta inicial redirige al dashboard  
  {path:'home',component :HomeComponent,
  children:[
  
  { path:'dashboard',component: DashboardComponent},
  {
    path: 'students',
    component: HomeStudentsComponent,
    children: [
      { path: 'list', component: ListarStudentsComponent },
      { path: 'create', component: CreateStudentsComponent },
      { path: ':id/update', component: ActualizarStudentsComponent },
      { path: 'delete', component: EliminarStudentsComponent }
    ]
  },
  {path:'students',component:HomeStudentsComponent,children:[
    {path:'list',component :ListarStudentsComponent},
    {path:'create',component :CreateStudentsComponent},
    {path:':id/update',component :ActualizarStudentsComponent},
    {path:'delete',component :EliminarStudentsComponent}
  ]},
  { path:'evaluations',component:   HomeEvaluationsComponent},
  {path:'courses',component:HomeCoursesComponent,children:[
    {path:'list',component :ListarCoursesComponent},
    {path:'create',component :CreateCoursesComponent},
    {path:':id/update',component :ActualizarCoursesComponent},
    {path:'delete',component :EliminarCoursesComponent}

  ]},
  {path:'teachers',component:HomeTeachersComponent 
  ,children:[
    {path:'list',component :ListarTeachersComponent},
    {path:'create',component :CreateTeachersComponent},
    {path:':id/update',component :ActualizarTeachersComponent},
    {path:'delete',component :EliminarTeachersComponent}
  ]},
  {path:'singup',component:SingupComponent}

]
}// Agrega más rutas para otras secciones
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
