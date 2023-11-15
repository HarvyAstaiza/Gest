import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  placeholder_email='Usuario';
  placeholder_password='Contraseña';
  loading: boolean = false;
  errorMessage: string = '';
  
  constructor( private router:Router, private authService: AuthenticationService,) {}

  // Propiedades y constructor

  // Método para el inicio de sesión
  onLogin(): void {
    this.loading = true;
    this.errorMessage = '';
    this.authService.login(this.email.toLowerCase(), this.password).subscribe(
      (response: { token: any, id_user: any, role: any,code_User :any }) => {
        const token = response.token;
        const userId = response.id_user;
        const userRol = response.role;
        const codeuser= response.code_User;
  
        // Verifica si el rol es permitido
        if (this.isRoleAllowed(userRol)) {
          localStorage.setItem('access_token', token);
          this.authService.setUserId(codeuser);
          this.authService.setUserRol(userRol);

          this.loading = false;
          this.router.navigate(['/home/dashboard']);
        } else {
          this.loading = false;
          this.errorMessage = '¡No tienes permisos para iniciar sesión!';
        }
      },
      (error) => {
        this.loading = false;
        this.errorMessage = '¡Verifica tus credenciales!';
      }
    );
  }
  
  // Método para verificar si el rol está permitido
  private isRoleAllowed(role: string): boolean {
    // Lista de roles permitidos
    const allowedRoles = ['docente', 'estudiante', 'administrador', 'administrativo'];
  
    // Verifica si el rol está en la lista de roles permitidos
    return allowedRoles.includes(role.toLowerCase());
  }
}

