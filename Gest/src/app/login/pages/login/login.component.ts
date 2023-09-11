// login.component.ts
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../services/authentication.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  placeholder_email='Usuario';
  placeholder_password='Contraseña';

  constructor(private router:Router, private authService: AuthenticationService) {}

  onLogin(username: string, password: string): void {
    this.authService.login(username, password).subscribe(
      (response: { token: any; }) => {
        const token = response.token;

        // Almacena el token en el almacenamiento local o en una cookie para su posterior uso.
        localStorage.setItem('access_token', token);
        this.router.navigate(['/home']);
        // Redirige al usuario a la página de inicio o a la ubicación deseada.
        // Puedes utilizar el enrutador de Angular para hacer esto.
      },
      (error: any) => {
        // Maneja errores de autenticación aquí
      }
    );
  }
}

