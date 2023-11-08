import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, catchError, of, throwError } from 'rxjs';

import { API_URL } from 'src/app/api-config';

@Injectable({
  providedIn: "root",
})
export class TeachersService {
  
  private apiUrl = `${API_URL}`; // Reemplaza con la URL de tu API
  constructor(private http: HttpClient) {}
  getTeachers(): Observable<any[]> {
    const token = localStorage.getItem("access_token");
    if (token) {
      const headers = new HttpHeaders({
        Authorization: `Bearer ${token}`,
      });
      return this.http.get<any[]>(this.apiUrl + "/list-Teacher", { headers });
    } else {
      // Manejar el caso en que no se encuentre el token
      return throwError("Token no encontrado");
    }
  }
  getTeacherbyid(teacherId: string): Observable<any> {
    const token = localStorage.getItem("access_token");
    if (token) {
      const headers = new HttpHeaders({
        Authorization: `Bearer ${token}`,
      });
      const url = `${this.apiUrl}list-teacher/${teacherId}`; // Ajusta la URL de la API según tu estructura de enrutamiento
      return this.http.get(url, { headers }).pipe(
        catchError((error: any) => {
          console.error('Error al obtener los datos del docente', error);
          return throwError(error);
        })
      );
    } else {
      // Manejar el caso en que no se encuentre el token
      return throwError("Token no encontrado");
    }
  }
  postTeacher(newTeacher: any): Observable<any> {
    const token = localStorage.getItem("access_token");

    if (token) {
      const headers = new HttpHeaders({
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json", // Especifica el tipo de contenido
      });

      return this.http.post<any>(this.apiUrl +"/create-Teacher" , newTeacher, { headers });
    } else {
      // Manejar el caso en que no se encuentre el token
      return throwError("Token no encontrado");
    }
  }
  deleteTeacherById(_id: string): Observable<any> {
    const token = localStorage.getItem("access_token");
    if (token) {
      const headers = new HttpHeaders({
        Authorization: `Bearer ${token}`,
      });

      const deleteUrl = `${this.apiUrl}eliminar-docente/${_id}`; // URL para eliminar un usuario por ID

      return this.http.delete(deleteUrl, { headers });
    } else {
      return throwError("Token no encontrado");
    }

  }
  
}
