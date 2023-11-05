import { Component, OnInit } from '@angular/core';
import { Students } from '../../pages/home-students/students';
import { StudentsService } from '../../service/students.service';

@Component({
  selector: 'app-listar-students',
  templateUrl: './listar-students.component.html',
  styleUrls: ['./listar-students.component.css']
})
export class ListarStudentsComponent implements OnInit{
  Students: Students[] = [];

  constructor(private studentsService: StudentsService) {}

  ngOnInit(): void {
    this.loadStudents();
  }

  onDeleteStudents(_id: any) {
    if (confirm('¿Estás seguro de que deseas borrar el registro?')) {
      this.studentsService.deleteStudentsById(_id).subscribe(
        (res: any) => {
          // Manejar la respuesta de la eliminación (puede ser vacía o algún mensaje de confirmación)
          console.log('Estudiante eliminado con éxito');
          // También puedes actualizar la lista de docentes después de la eliminación
          this.loadStudents();
        },
        (error) => {
          console.error('Error al eliminar Estudiante:', error);
        }
      );
    }
  }

  loadStudents() {
    this.studentsService.getStudents().subscribe((data: Students[]) => {
      this.Students = data;
    });
  }
}
