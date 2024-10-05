import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Reporte } from '../Guards/reporte.model';

@Injectable({
  providedIn: 'root'
})
export class ReporteService {

  private urlBase = "http://localhost:8080/api-reporte/reporte";

constructor(private clienteHttp: HttpClient) { }

obtenerReportes(): Observable<Reporte[]> {
  return this.clienteHttp.get<Reporte[]>(this.urlBase);
}

agregarReporte(reporte: Reporte): Observable<Object> {
  return this.clienteHttp.post(this.urlBase, reporte);
}

eliminarReporte(id: number): Observable<Object> {
  return this.clienteHttp.delete(`${this.urlBase}/${id}`);
}

obtenerReportePorId(id: number): Observable<Reporte> {
  return this.clienteHttp.get<Reporte>(`${this.urlBase}/${id}`);
}

}
