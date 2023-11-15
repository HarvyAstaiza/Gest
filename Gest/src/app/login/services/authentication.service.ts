import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { API_URL } from 'src/app/api-config';
import { Usuarios } from 'src/app/login/pages/login/user';
import { Route, Router } from '@angular/router';
@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  islogin = true;
  private apiUrl = `${API_URL}`; // Reemplaza con la URL de tu API
  private userId:string = '';
  private userRol:string='';
  
  constructor(private http: HttpClient,private router: Router) {
    
  }
  setUserId(userId: string): void {
    this.userId = userId;
    localStorage.setItem('code_User', userId);
  }

  getUserId(): string | null {
    return localStorage.getItem('code_User');
  }

  setUserRol(userRol: string): void {
    this.userRol = userRol;
    localStorage.setItem('user_role', userRol);
  }

  getUserRol(): string | null {
    return localStorage.getItem('user_role');
  }

  login(email: string, password: string): Observable<any> {
    return this.http.post(`${this.apiUrl}signin`, { email, password });
  }

  // Método para obtener el rol del usuario desde la API
  getUserRole(userId: string): Observable<any> {
    // Aquí realizas la solicitud HTTP para obtener el rol del usuario según su ID u otra información que identifique al usuario.
    return this.http.get(`${this.apiUrl}list-users/${userId}/role`);
  }

  // Verificar si el usuario es administrador basado en su rol obtenido desde la API
  isUserAdmin(userId: string): Observable<boolean> {
    return this.getUserRole(userId).pipe(
      map((response: any) => {
        // Analizar la respuesta para verificar si el usuario es administrador.
        const isAdmin = response.role === 'admin';
        if (isAdmin) {
          this.setUserRol('Administrador');
        }
        return isAdmin;
      })
    );
  }

  isUserTeacher(userId: string): Observable<boolean> {
    return this.getUserRole(userId).pipe(
      map((response: any) => {
        const isTeacher = response.role === 'teacher';
        if (isTeacher) {
          this.setUserRol('Docente');
        }
        return isTeacher;
      })
    );
  }

  // Verificar si el usuario es un estudiante
  isUserStudent(userId: string): Observable<boolean> {
    return this.getUserRole(userId).pipe(
      map((response: any) => {
        const isStudent = response.role === 'student';
        if (isStudent) {
          this.setUserRol('Estudiante');
        }
        return isStudent;
      })
    );
  }
  logout(): void {
    // Elimina todos los datos almacenados en localStorage
    localStorage.removeItem('user_id');
    localStorage.removeItem('user_role');
    // Puedes agregar más elementos si es necesario

    // También podrías querer desvincular otras variables y realizar otras tareas de cierre de sesión aquí.

    // Luego, redirige al usuario a la página de inicio de sesión o a donde prefieras
    // Ejemplo:
     this.router.navigate(['/login']);
  }
}