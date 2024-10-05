import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Ficha } from '../Guards/ficha.model';

@Injectable({
  providedIn: 'root'
})
export class FichaService {

  private urlBase = "http://localhost:8080/api-ficha/ficha";

constructor(private clienteHttp: HttpClient) { }

obtenerFichas(): Observable<Ficha[]> {
  return this.clienteHttp.get<Ficha[]>(this.urlBase);
}

agregarFicha(ficha: Ficha): Observable<Object> {
  return this.clienteHttp.post(this.urlBase, ficha);
}

eliminarFicha(id: number): Observable<Object> {
  return this.clienteHttp.delete(`${this.urlBase}/${id}`);
}

obtenerFichaPorId(id: number): Observable<Ficha> {
  return this.clienteHttp.get<Ficha>(`${this.urlBase}/${id}`);
}

}
