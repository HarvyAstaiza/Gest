import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  islogin=true;
  private apiUrl = 'http://localhost:4000/api'; // Reemplaza con la URL de tu API

  constructor(private http: HttpClient) {}

  login(email: string, password: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/signin`, { email, password });
  }
}