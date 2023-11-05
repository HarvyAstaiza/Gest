import { Component } from '@angular/core';
import { StudentsService } from '../../service/students.service';
import { Students } from '../../pages/home-students/students';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-create-students',
  templateUrl: './create-students.component.html',
  styleUrls: ['./create-students.component.css']
})
export class CreateStudentsComponent {
  
  student: Students = {
    Identificacion:'',
    Nombre:'',
    Codigo:'',
    Pensum:'',
    Estado_Matricula:'Activo',
    Semestre:'Primero',
    Celular:'',
    Correo:'',
    Contraseña:'',
    Correo_institucional:'',
    Jornada:'Diurno',	
    Rol:'Estudiante',
  };
  constructor(private studentsService: StudentsService) {} // Inyecta tu servicio de API

  semestreOptions: string[] = ['Primero', 'Segundo', 'Tercero', 'Cuarto', 'Quinto', 'Sexto', 'Séptimo', 'Octavo', 'Noveno'];

  onCreateStudents() {
    // Llama al método de tu servicio API para enviar los datos a la API
    this.studentsService.postStudents(this.student).subscribe(
      response => {
        // Maneja la respuesta del servidor aquí si es necesario
        Swal.fire('Estudiante creado', 'Estudiante creado correctamente', 'success');
      },
      error => {
        // Maneja los errores aquí
        Swal.fire('Error al crear Estudiante', error.message, 'error');
      }
    );

  }
}
