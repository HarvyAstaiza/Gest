import { Component, OnInit } from '@angular/core';
import { SingupService } from '../../service/singup.service';
import {Usuarios} from 'src/app/login/pages/login/user';
import { Teachers } from 'src/app/teachers/pages/home-teachers/teacher';
import { TeachersService } from 'src/app/teachers/service/teachers.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-singup',
  templateUrl: './singup.component.html',
  styleUrls: ['./singup.component.css']
})
export class SingupComponent implements OnInit{
  formulario: FormGroup;
  teachers: Teachers[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private singupService: SingupService,
    private teacherService: TeachersService
  ) {this.formulario = this.formBuilder.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required]],
    role: ['', [Validators.required]],
    code_User: ['', [Validators.required]]
  });}

  ngOnInit(): void {
    this.inicializarFormulario();
    this.obtenerDocentes();
  }

  inicializarFormulario(): void {
    this.formulario = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
      role: ['', [Validators.required]],
      code_User: ['', [Validators.required]]
    });
  }

  obtenerDocentes(): void {
    this.teacherService.getTeachers().subscribe(
      (data) => {
        this.teachers = data;
      },
      (error) => {
        console.error('Error al obtener docentes', error);
      }
    );
  }

  registrarUsuario(): void {
    if (this.formulario.valid) {
      this.singupService.singupUser(this.formulario.value).subscribe(
        (respuesta) => {
          Swal.fire('Usuario registrado con éxito', respuesta);
        },
        (error) => {
          Swal.fire('Error en el registro', error);
        }
      );
    } else {
      console.log('Formulario inválido');
    }
  }
}


