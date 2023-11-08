import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_URL } from 'src/app/api-config';

@Injectable({
  providedIn: 'root'
})
export class SingupService {
  private apiUrl = `${API_URL}`; // URL del servidor para el registro

  constructor(private http: HttpClient) {}

  singupUser(user: any): Observable<any> {
    // Envia la información del usuario al servidor para el registro
    return this.http.post<any>(this.apiUrl+'signup', user);
  }
}
