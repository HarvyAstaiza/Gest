import { Component, OnInit } from '@angular/core';
import { Teachers } from '../../pages/home-teachers/teacher';
import { TeachersService } from '../../service/teachers.service';
import Swal from 'sweetalert2';



@Component({
  selector: 'app-listar-teachers',
  templateUrl: './listar-teachers.component.html',
  styleUrls: ['./listar-teachers.component.css']
})
export class ListarTeachersComponent implements OnInit {
  Teachers: Teachers[] = [];


  constructor(private teachersService: TeachersService) {}

  ngOnInit(): void {
    this.loadTeachers();
  }

  onDeleteTeacher(_id: any) {
    if (confirm('¿Estás seguro de que deseas borrar el registro?')) {
      this.teachersService.deleteTeacherById(_id).subscribe(
        (res: any) => {
          // Manejar la respuesta de la eliminación (puede ser vacía o algún mensaje de confirmación)
          console.log('Docente eliminado con éxito');
          // También puedes actualizar la lista de docentes después de la eliminación
          this.loadTeachers();
        },
        (error) => {
          console.error('Error al eliminar Docente:', error);
        }
      );
    }
  }

  loadTeachers() {
    this.teachersService.getTeachers().subscribe((data: Teachers[]) => {
      this.Teachers = data;
    });
  }
}
