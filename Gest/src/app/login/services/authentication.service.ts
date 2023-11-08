import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { API_URL } from 'src/app/api-config';
import { Usuarios } from 'src/app/login/pages/login/user';
@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  islogin = true;
  private apiUrl = `${API_URL}`; // Reemplaza con la URL de tu API
  private userId:string = '';
  private userRol:string='';
  constructor(private http: HttpClient) {
    
  }
  setUserId(userId: string) {
    this.userId = userId;
  }

  getUserId() {
    return this.userId;
  }
  setUserRol(userRol: string) {
    this.userRol = userRol;
  }

  getUserRol() {
    return this.userRol;
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
        return response.role === 'admin';
      })
    );
  }
  isUserTeacher(userId: string): Observable<boolean> {
    return this.getUserRole(userId).pipe(
      map((response: any) => {
        return response.role === 'teacher';
      })
    );
  }

  // Verificar si el usuario es un estudiante
  isUserStudent(userId: string): Observable<boolean> {
    return this.getUserRole(userId).pipe(
      map((response: any) => {
        return response.role === 'student';
      })
    );
  }
}
