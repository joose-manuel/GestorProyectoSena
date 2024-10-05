import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RegistroAprendiz } from '../Guards/aprendiz';
@Injectable({
  providedIn: 'root'
})
export class ReguistroAprendizService {


  
  private urlbase="http://localhost:8080/api-aprendiz/aprendiz";  
    
   
  constructor( private clienteHttp:HttpClient ) { }
  
  obtenerAprendiz():Observable<RegistroAprendiz[]>{
    return this.clienteHttp.get<RegistroAprendiz[]>(this.urlbase);
  }


  agregarAprendiz(aprendiz: RegistroAprendiz): Observable<Object> {
    return this.clienteHttp.post(this.urlbase, aprendiz);
  }

}
