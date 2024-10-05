import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Sesion } from '../Guards/sesion.model';

@Injectable({
  providedIn: 'root'
})
export class SesionService {

  private urlBase = "http://localhost:8080/api-sesion/sesion";

constructor(private clienteHttp: HttpClient) { }

obtenerSesiones(): Observable<Sesion[]> {
  return this.clienteHttp.get<Sesion[]>(this.urlBase);
}

agregarSesion(sesion: Sesion): Observable<Object> {
  return this.clienteHttp.post(this.urlBase, sesion);
}

eliminarSesion(id: number): Observable<Object> {
  return this.clienteHttp.delete(`${this.urlBase}/${id}`);
}

obtenerSesionPorId(id: number): Observable<Sesion> {
  return this.clienteHttp.get<Sesion>(`${this.urlBase}/${id}`);
}

}
