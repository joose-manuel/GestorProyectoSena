import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Evaluador } from '../Guards/evaluador.model';

@Injectable({
  providedIn: 'root'
})
export class EvaluadorService {

  private urlBase = "http://localhost:8080/api-evaluador/evauador";

constructor(private clienteHttp: HttpClient) { }

obtenerEvaluadores(): Observable<Evaluador[]> {
  return this.clienteHttp.get<Evaluador[]>(this.urlBase);
}

agregarEvaluador(evaluador: Evaluador): Observable<Object> {
  return this.clienteHttp.post(this.urlBase, evaluador);
}

eliminarEvaluador(id: number): Observable<Object> {
  return this.clienteHttp.delete(`${this.urlBase}/${id}`);
}

obtenerEvaluadorPorId(id: number): Observable<Evaluador> {
  return this.clienteHttp.get<Evaluador>(`${this.urlBase}/${id}`);
}

}
