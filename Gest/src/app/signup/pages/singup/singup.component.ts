import { Component, OnInit } from "@angular/core";
import { SingupService } from "../../service/singup.service";
import { Usuarios } from "src/app/login/pages/login/user";
import { Teachers } from "src/app/teachers/pages/home-teachers/teacher";
import { TeachersService } from "src/app/teachers/service/teachers.service";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import Swal from "sweetalert2";
import { Students } from '../../../students/pages/home-students/students';
import { StudentsService } from "src/app/students/service/students.service";
@Component({
  selector: "app-singup",
  templateUrl: "./singup.component.html",
  styleUrls: ["./singup.component.css"],
})
export class SingupComponent implements OnInit {
  formulario: FormGroup;
  teachers: Teachers[] = [];
  students:Students[]=[];

  constructor(
    private formBuilder: FormBuilder,
    private singupService: SingupService,
    private teacherService: TeachersService,
    private studentService:StudentsService,
  ) {
    this.formulario = this.formBuilder.group({
      email: ["", [Validators.required, Validators.email]],
      password: ["", [Validators.required]],
      role: ["", [Validators.required]],
      code_User: ["", [Validators.required]],
    });
  }

  ngOnInit(): void {
    this.resetCodeUser();
    this.inicializarFormulario();
    
    this.obtenerDocentes();
    this.obtenerEstudiantes();
    
  }
  resetCodeUser() {
    const roleControl = this.formulario.get('role');
    const codeUserControl = this.formulario.get('code_User');
    
    if (roleControl && codeUserControl && roleControl.value === '') {
        codeUserControl.reset();
    }
}
  inicializarFormulario(): void {
    this.formulario = this.formBuilder.group({
      email: ["", [Validators.required, Validators.email]],
      password: ["", [Validators.required]],
      role: ["", [Validators.required]],
      code_User: ["", [Validators.required]],
    });
  }

  obtenerDocentes(): void {
    this.teacherService.getTeachers().subscribe(
      (data) => {
        this.teachers = data;
      },
      (error) => {
        console.error("Error al obtener docentes", error);
      }
    );
  }
  obtenerEstudiantes(): void {
    this.studentService.getStudents().subscribe(
      (data) => {
        this.students = data;
      },
      (error) => {
        console.error("Error al obtener estudiantes", error);
      }
    );
  }
  
  registrarUsuario(): void {
    if (this.formulario.valid) {
      const lowercaseEmail = this.formulario.get('email')?.value.toLowerCase();
      this.formulario.patchValue({ email: lowercaseEmail });
      this.singupService.singupUser(this.formulario.value).subscribe(
        (respuesta) => {
          Swal.fire("Usuario", "Usuario creado correctamente", "success");
        },
        (error) => {
          Swal.fire("Error al crear el Usuario", error.message, "error");
        }
      );
    }
  }
}
