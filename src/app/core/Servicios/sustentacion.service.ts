import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Sustentacion } from '../Guards/sustentacion.model';

@Injectable({
  providedIn: 'root'
})
export class SustentacionService {
// Define la URL base para las peticiones HTTP
private urlBase = 'http://localhost:8080/api-sustentacion/sustentacion';

constructor(private clienteHttp: HttpClient) { }

obtenerSustentaciones(): Observable<Sustentacion[]> {
  return this.clienteHttp.get<Sustentacion[]>(this.urlBase);
}
agregarSustentaciones(sesion: Sustentacion): Observable<Object> {
  return this.clienteHttp.post(this.urlBase, sesion);
}
eliminarSustentaciones(id: number): Observable<Object> {
  return this.clienteHttp.delete(`${this.urlBase}/${id}`);
}
obtenerSustentacionesPorId(id: number): Observable<Sustentacion> {
  return this.clienteHttp.get<Sustentacion>(`${this.urlBase}/${id}`);
}
}
