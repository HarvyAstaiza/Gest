import { Component } from '@angular/core';
import { Courses } from '../../pages/home-courses/courses';
import { CoursesService } from '../../services/courses.service';
import { TeachersService } from '../../../teachers/service/teachers.service';
import { Teachers } from '../../../teachers/pages/home-teachers/teacher';
import { AuthenticationService } from '../../../login/services/authentication.service';
import { Admin } from 'mongodb';

@Component({
  selector: 'app-listar-courses',
  templateUrl: './listar-courses.component.html',
  styleUrls: ['./listar-courses.component.css']
})
export class ListarCoursesComponent {
  selectedCourse: any; 
  Courses: Courses[] = [];
  teachers: Teachers[] = [];
  userid: string = '';
  userRol: string = '';
  constructor(private coursesService: CoursesService, private teacherService:TeachersService,private authenticationService:AuthenticationService) {

    const storedUserId = this.authenticationService.getUserId();
    const storedUserRol = this.authenticationService.getUserRol();
  
    // Asigna los valores solo si no son null
    if (storedUserId !== null) {
      this.userid = storedUserId;
    }
    if (storedUserRol !== null) {
      this.userRol = storedUserRol;
    }
  }
  

  ngOnInit(): void {
    if(this.userRol ==='Administrador'){
      this.loadCourses();
    }
    if(this.userRol ==='Docente'){
      this.loadCoursepordocente();
    }
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

  loadCoursepordocente(){
    
      this.coursesService.getCoursesByCodeUser(this.userid).subscribe(
        (data) => {
          this.Courses = data;
          this.loadTeacherNamesForCourses();
        },
        (error) => {
          console.error('Error al cargar los cursos por code_User:', error);
        }
      );
    
  }
  
  loadCourses(): void {
    this.coursesService.getCourses().subscribe(
      (data) => {
        
        this.Courses = data;
        // Obtener el nombre del profesor después de cargar los cursos
        this.loadTeacherNamesForCourses();
      },
      (error) => {
        console.error("Error al obtener cursos", error);
      }
    );
  }
  
  loadTeacherNamesForCourses(): void {
    // Iterar sobre cada curso y obtener el nombre del profesor
    for (const course of this.Courses) {
      this.teacherService.getTeacherbyid(course.id_teacher).subscribe(
        (teacher) => {
          // Asignar el nombre del profesor al curso correspondiente
          course.teacher_Name = teacher.name;
        },
        (error) => {
          console.error(`Error al obtener el nombre del profesor para el curso ${course._id}`, error);
        }
      );
    }
  }
}
