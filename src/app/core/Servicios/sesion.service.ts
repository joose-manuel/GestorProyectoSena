// sesion.service.ts
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

  autenticar(sesion: Sesion): Observable<Sesion> {
    return this.clienteHttp.post<Sesion>(`${this.urlBase}/autenticar`, sesion);
  }

  // Otros métodos como agregarSesion, obtenerSesiones, etc.
}
