import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable, throwError } from "rxjs";
import { Courses } from "../pages/home-courses/courses";
import { API_URL } from "src/app/api-config";

@Injectable({
  providedIn: "root",
})
export class CoursesService {
  private apiUrl = `${API_URL}`; // Reemplaza con la URL de tu API

  private selectedCourse = new BehaviorSubject<any>(null);
  
  selectedCourse$ = this.selectedCourse.asObservable();
  
  constructor(private http: HttpClient) {}
  
  getCourses(): Observable<any[]> {
    const token = localStorage.getItem("access_token");
    if (token) {
      const headers = new HttpHeaders({
        Authorization: `Bearer ${token}`,
      });
      return this.http.get<any[]>(this.apiUrl + "List-Subject", { headers });
    } else {
      // Manejar el caso en que no se encuentre el token
      return throwError("Token no encontrado");
    }
  }
  
  deleteCoursesById(_id: string): Observable<any> {
    const token = localStorage.getItem("access_token");
    if (token) {
      const headers = new HttpHeaders({
        Authorization: `Bearer ${token}`,
      });
      const deleteUrl = `${this.apiUrl}/eliminar-materia/${_id}`; // URL para eliminar un usuario por ID
      return this.http.delete(deleteUrl, { headers });
    } else {
      return throwError("Token no encontrado");
    }
  }

  postCourses(newCourse: any): Observable<any> {
    const token = localStorage.getItem("access_token");
    if (token) {
      const headers = new HttpHeaders({
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json", // Especifica el tipo de contenido
      });
      return this.http.post<any>(this.apiUrl + "create-Subject", newCourse, {headers,});
    } else {
      // Manejar el caso en que no se encuentre el token
      return throwError("Token no encontrado");
    }
  }
  
 
  
}
