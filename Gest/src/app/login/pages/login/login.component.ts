import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private router: Router) {}

  // Esta función se llama cuando el usuario inicia sesión
  onLogin() {
    // Realiza el proceso de inicio de sesión aquí

    // Después de iniciar sesión, redirige al usuario a la página de inicio
    this.router.navigate(['/home']);
}
}