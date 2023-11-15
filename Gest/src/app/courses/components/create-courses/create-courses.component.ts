import { Component, OnInit } from "@angular/core";
import { Courses } from "../../pages/home-courses/courses";
import { CoursesService } from "../../services/courses.service";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import Swal from "sweetalert2";
import { Router } from '@angular/router';

import { TeachersService } from "src/app/teachers/service/teachers.service";
@Component({
  selector: "app-create-courses",
  templateUrl: "./create-courses.component.html",
  styleUrls: ["./create-courses.component.css"],
})
export class CreateCoursesComponent  implements OnInit{
  coursesForm: FormGroup;
  teachers: any[] = [];
  years: number[] = [];
  periodosOptions: string[] = [];
  constructor(private coursesService: CoursesService,
     private fb: FormBuilder,private teachersService:TeachersService,private router: Router) {
      this.coursesForm = this.fb.group({
        code_Subjects: ['', Validators.required],
        name: ['', Validators.required],
        semester: ['', Validators.required],
        type_of_matter: ['', Validators.required],
        id_teacher: ['', Validators.required],
        methodology:['',Validators.required],
        year:['',Validators.required],
        period:['',Validators.required],
        // Add more form controls as needed
      });   
      this.coursesForm.get('year')?.valueChanges.subscribe(() => {
        this.generatePeriodos();
      });
    
  }
  generateYears() {
    const currentYear = new Date().getFullYear();
    this.years = Array.from({ length: 100 }, (_, index) => currentYear + index);
  }

  generatePeriodos() {
    const selectedYear = this.coursesForm.get('year')?.value;
    if (selectedYear) {
      this.periodosOptions = Array.from({ length: 2 }, (_, index) => `${selectedYear}-${index + 1}`);
    } else {
      this.periodosOptions = [];
    }
  }
  ngOnInit() {
    
    this.loadTeachers();
    this.generateYears();
    this.generatePeriodos();
  }  
  
  
  
  type_matterOptions:string[]=[
    "Teorica",
    "Practica",
    "Teorica-Practica"
  ]
  
  semestreOptions: string[] = [
    "Primero",
    "Segundo",
    "Tercero",
    "Cuarto",
    "Quinto",
    "Sexto",
    "Séptimo",
    "Octavo",
    "Noveno",
  ];

  onCreateCourses() {
    if (this.coursesForm.valid) {
      this.coursesService.postCourses(this.coursesForm.value).subscribe(
        (response) => {
          Swal.fire(
            "Materia creado",
            "Materia creado correctamente",
            "success"
          ).then(() => {
            // Navigate to the list of courses
            this.router.navigate(['/home/courses/list']);
          });;

        },
        (error) => {
          Swal.fire("Error al crear Materia", error.message, "error");
        }
      );
    } else {
      Swal.fire(
        "Formulario incompleto",
        "Completa todos los campos obligatorios",
        "error"
      );
    }
  }
  
  loadTeachers() {
    this.teachersService.getTeachers().subscribe(
      (data) => {
        this.teachers = data;
      },
      (error) => {
        console.error('Error fetching teachers:', error);
      }
    );
  }

}
