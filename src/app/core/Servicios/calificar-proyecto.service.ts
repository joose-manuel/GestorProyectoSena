import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CalificarProyecto } from '../Guards/calificar-proyecto.model';

@Injectable({
  providedIn: 'root'
})
export class CalificarProyectoService {

  private urlBase = "http://localhost:8080/api-calificarproyecto/calificarproyecto";

constructor(private clienteHttp: HttpClient) { }

obtenerCalificacionesProyecto(): Observable<CalificarProyecto[]> {
  return this.clienteHttp.get<CalificarProyecto[]>(this.urlBase);
}

agregarCalificacionProyecto(calificacion: CalificarProyecto): Observable<Object> {
  return this.clienteHttp.post(this.urlBase, calificacion);
}

eliminarCalificacionProyecto(id: number): Observable<Object> {
  return this.clienteHttp.delete(`${this.urlBase}/${id}`);
}

obtenerCalificacionProyectoPorId(id: number): Observable<CalificarProyecto> {
  return this.clienteHttp.get<CalificarProyecto>(`${this.urlBase}/${id}`);
}

}
