import { Component } from '@angular/core';
import { Courses } from '../../pages/home-courses/courses';
import { CoursesService } from '../../services/courses.service';
import { TeachersService } from '../../../teachers/service/teachers.service';
import { Teachers } from '../../../teachers/pages/home-teachers/teacher';

@Component({
  selector: 'app-listar-courses',
  templateUrl: './listar-courses.component.html',
  styleUrls: ['./listar-courses.component.css']
})
export class ListarCoursesComponent {
  selectedCourse: any; 
  Courses: Courses[] = [];
  
  router: any;
  constructor(private coursesService: CoursesService, private teacherService:TeachersService) {}

  ngOnInit(): void {
    this.loadCourses();
  }
  
  
  
  onDeleteCourses(_id: any) {
    if (confirm('¿Estás seguro de que deseas borrar el registro?')) {
      this.coursesService.deleteCoursesById(_id).subscribe(
        (res: any) => {
          // Manejar la respuesta de la eliminación (puede ser vacía o algún mensaje de confirmación)
          console.log('Materia eliminada con éxito');
          // También puedes actualizar la lista de docentes después de la eliminación
          this.loadCourses();
        },
        (error) => {
          console.error('Error al eliminar Materia:', error);
        }
      );
    }
  }

  loadCourses() {
    this.coursesService.getCourses().subscribe((data: Courses[]) => {
      this.Courses = data;
    });
  }
}
