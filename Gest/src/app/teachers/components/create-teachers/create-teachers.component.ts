import { Component, OnInit } from '@angular/core';
import { Teachers } from '../../pages/home-teachers/teacher';
import { TeachersService } from '../../service/teachers.service';
import Swal from 'sweetalert2';




@Component({
  selector: 'app-create-teachers',
  templateUrl: './create-teachers.component.html',
  styleUrls: ['./create-teachers.component.css']
})
export class CreateTeachersComponent  {
  
  teacher: Teachers = {
    code_Teacher:'',
    identification:'',
    name: '',
    
  };

 
  constructor(private teachersService: TeachersService ) {} // Inyecta tu servicio de API


  onCreateTeacher() {
    // Llama al método de tu servicio API para enviar los datos a la API
    this.teachersService.postTeacher(this.teacher).subscribe(
      response => {
        // Maneja la respuesta del servidor aquí si es necesario
        Swal.fire('Usuario creado', 'Usuario creado correctamente', 'success');
      },
      error => {
        // Maneja los errores aquí
        Swal.fire('Error al crear usuario', error.message, 'error');
      }
    );

  }
  
}
