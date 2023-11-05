import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { API_URL } from 'src/app/api-config';
@Injectable({
  providedIn: 'root'
})
export class StudentsService {
  private apiUrl = `${API_URL}`; // Reemplaza con la URL de tu API
  constructor(private http: HttpClient) {}
  getStudents(): Observable<any[]> {
    const token = localStorage.getItem('access_token');
    if (token) {
      const headers = new HttpHeaders({
        'Authorization': `Bearer ${token}`
      });
      return this.http.get<any[]>(this.apiUrl+'/list-estudiante', { headers });
    } else {
      // Manejar el caso en que no se encuentre el token
      return throwError('Token no encontrado');
    }
}
postStudents(newStudent: any): Observable<any> {
  const token = localStorage.getItem("access_token");

  if (token) {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json", // Especifica el tipo de contenido
    });

    return this.http.post<any>(this.apiUrl +"/crear-estudiante" , newStudent, { headers });
  } else {
    // Manejar el caso en que no se encuentre el token
    return throwError("Token no encontrado");
  }
}
putEstudiantes(): Observable<any[]> {
  const token = localStorage.getItem('access_token');
  if (token) {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    return this.http.get<any[]>(this.apiUrl+'/list-estudiante', { headers });
  } else {
    // Manejar el caso en que no se encuentre el token
    return throwError('Token no encontrado');
  }
}
deleteStudentsById(_id: string): Observable<any> {
  const token = localStorage.getItem("access_token");
  if (token) {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });

    const deleteUrl = `${this.apiUrl}/eliminar-estudiante/${_id}`; // URL para eliminar un usuario por ID

    return this.http.delete(deleteUrl, { headers });
  } else {
    return throwError("Token no encontrado");
  }
}
}

