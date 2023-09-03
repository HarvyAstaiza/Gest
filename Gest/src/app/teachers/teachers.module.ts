import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateTeachersComponent } from './components/create-teachers/create-teachers.component';
import { ListarTeachersComponent } from './components/listar-teachers/listar-teachers.component';
import { EliminarTeachersComponent } from './components/eliminar-teachers/eliminar-teachers.component';
import { ActualizarTeachersComponent } from './components/actualizar-teachers/actualizar-teachers.component';
import { HomeTeachersComponent } from './pages/home-teachers/home-teachers.component';



@NgModule({
  declarations: [
    CreateTeachersComponent,
    ListarTeachersComponent,
    EliminarTeachersComponent,
    ActualizarTeachersComponent,
    
  ],
  imports: [
    CommonModule
  ]
})
export class TeachersModule { }
