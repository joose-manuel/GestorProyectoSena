import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Instructor } from '../Guards/instructor.model';

@Injectable({
  providedIn: 'root'
})
export class InstructorService {

  private urlBase = "http://localhost:8080/api-instructor/instructor";

constructor(private clienteHttp: HttpClient) { }

obtenerInstructores(): Observable<Instructor[]> {
  return this.clienteHttp.get<Instructor[]>(this.urlBase);
}

agregarInstructor(instructor: Instructor): Observable<Object> {
  return this.clienteHttp.post(this.urlBase, instructor);
}

eliminarInstructor(id: number): Observable<Object> {
  return this.clienteHttp.delete(`${this.urlBase}/${id}`);
}

obtenerInstructorPorId(id: number): Observable<Instructor> {
  return this.clienteHttp.get<Instructor>(`${this.urlBase}/${id}`);
}

}
