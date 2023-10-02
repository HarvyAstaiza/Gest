import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {
  private apiUrl = 'http://localhost:4000/api'; // Reemplaza con la URL de tu API
  constructor(private http: HttpClient) {}
  getEstudiantes(): Observable<any[]> {
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
  postEstudiantes(): Observable<any[]> {
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
deleteEstudiantes(): Observable<any[]> {
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
}

