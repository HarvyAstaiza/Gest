import { Component } from '@angular/core';
import { Courses } from '../../pages/home-courses/courses';
import { CoursesService } from '../../services/courses.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-create-courses',
  templateUrl: './create-courses.component.html',
  styleUrls: ['./create-courses.component.css']
})
export class CreateCoursesComponent {
  courses: Courses = {
  
    code_Subjects:'',
    name:'',
    semester:'',
    type_of_matter:'',
    id_teacher:'',
    id_thematic:'',
    id_bibliography:'',
    id_cybergraphy:'',
  };
  constructor(private coursesService: CoursesService) {} // Inyecta tu servicio de API

  semestreOptions: string[] = ['Primero', 'Segundo', 'Tercero', 'Cuarto', 'Quinto', 'Sexto', 'Séptimo', 'Octavo', 'Noveno'];
  

  onCreateCourses() {
    // Llama al método de tu servicio API para enviar los datos a la API
    this.coursesService.postCourses(this.courses).subscribe(
      response => {
        // Maneja la respuesta del servidor aquí si es necesario
        Swal.fire('Materia creado', 'Materia creado correctamente', 'success');
      },
      error => {
        // Maneja los errores aquí
        Swal.fire('Error al crear Materia', error.message, 'error');
      }
    );

  }
  }

