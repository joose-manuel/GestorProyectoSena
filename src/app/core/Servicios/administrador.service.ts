import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Administrador } from '../Guards/administrador.model';

@Injectable({
  providedIn: 'root'
})
export class AdministradorService {

  private urlBase="http://localhost:8080/api-administrador/administrador";  

  constructor(private clienteHttp: HttpClient) { }

  obtenerAdministradoresLista(): Observable<Administrador[]> {
    return this.clienteHttp.get<Administrador[]>(this.urlBase);
  }
  agregarAdministrador(administrador: Administrador): Observable<Object> {
    return this.clienteHttp.post(this.urlBase, administrador);
  }
  eliminarAministrador(id: number): Observable<Object> {
    return this.clienteHttp.delete(`${this.urlBase}/${id}`);
  }
  obtenerAdministradorPorId(id:number){
    return this.clienteHttp.get<Administrador>(`${this.urlBase}/${id}`);
  }




}
