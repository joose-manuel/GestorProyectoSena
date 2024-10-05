import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Equipo } from '../Guards/equipo.model';

@Injectable({
  providedIn: 'root'
})
export class EquipoService {

  private urlBase = "http://localhost:8080/api-equipo/equipo";

constructor(private clienteHttp: HttpClient) { }

obtenerEquipos(): Observable<Equipo[]> {
  return this.clienteHttp.get<Equipo[]>(this.urlBase);
}

agregarEquipo(equipo: Equipo): Observable<Object> {
  return this.clienteHttp.post(this.urlBase, equipo);
}

eliminarEquipo(id: number): Observable<Object> {
  return this.clienteHttp.delete(`${this.urlBase}/${id}`);
}

obtenerEquipoPorId(id: number): Observable<Equipo> {
  return this.clienteHttp.get<Equipo>(`${this.urlBase}/${id}`);
}

}
