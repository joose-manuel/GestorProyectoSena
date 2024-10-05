import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RegistroAprendiz } from '../Guards/aprendiz';
@Injectable({
  providedIn: 'root'
})
export class ReguistroAprendizService {

  private urlBase="http://localhost:8080/api-aprendiz/aprendiz";  
    
  constructor( private clienteHttp:HttpClient ) { }
  
  obtenerAprendiz():Observable<RegistroAprendiz[]>{
    return this.clienteHttp.get<RegistroAprendiz[]>(this.urlBase);
  }

  agregarAprendiz(aprendiz: RegistroAprendiz): Observable<Object> {
    return this.clienteHttp.post(this.urlBase, aprendiz);
  }

  eliminarAprendiz(id: number): Observable<Object> {
    return this.clienteHttp.delete(`${this.urlBase}/${id}`);
  }
  obtenerAprendizPorId(id:number){
    return this.clienteHttp.get<RegistroAprendiz>(`${this.urlBase}/${id}`);
  }
}
