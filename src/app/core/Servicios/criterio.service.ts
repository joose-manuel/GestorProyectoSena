import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Criterio } from '../Guards/criterio.model';

@Injectable({
  providedIn: 'root'
})
export class CriterioService {

  private urlBase = "http://localhost:8080/api-criterio/criterio";

constructor(private clienteHttp: HttpClient) { }

obtenerCriterios(): Observable<Criterio[]> {
  return this.clienteHttp.get<Criterio[]>(this.urlBase);
}

agregarCriterio(criterio: Criterio): Observable<Object> {
  return this.clienteHttp.post(this.urlBase, criterio);
}

eliminarCriterio(id: number): Observable<Object> {
  return this.clienteHttp.delete(`${this.urlBase}/${id}`);
}

obtenerCriterioPorId(id: number): Observable<Criterio> {
  return this.clienteHttp.get<Criterio>(`${this.urlBase}/${id}`);
}

}
