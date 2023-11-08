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
    this.loading = true; // Muestra el elemento de carga
    this.errorMessage = '';
    this.authService.login(this.email, this.password).subscribe(
      (response: { token: any }) => {
        const token = response.token;

        // Almacena el token en el almacenamiento local o en una cookie para su posterior uso.
        localStorage.setItem('access_token', token);
        
        // Una vez que la operación de inicio de sesión se haya completado, oculta el elemento de carga.
        this.loading = false;
        this.router.navigate(['/home/dashboard']);
      },
      (error) => {
        // En caso de error, maneja el error de autenticación aquí y oculta el elemento de carga.
        
        this.loading = false;
        this.errorMessage = '!Verifica tus credenciales¡';
        // Puedes mostrar mensajes de error u otras acciones aquí.
      }
    );
  }
}

