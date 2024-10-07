import { Component } from '@angular/core';
import { RegistroAprendiz } from '../../Guards/aprendiz';
import { ReguistroAprendizService } from '../../Servicios/reguistro-aprendiz.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-regitro-de-aprendiz',
  templateUrl: './regitro-de-aprendiz.component.html',
  styleUrls: ['./regitro-de-aprendiz.component.css']
})
export class RegitroDeAprendizComponent {
  aprendiz: RegistroAprendiz = new RegistroAprendiz();
  constructor(private aprendizServicio:ReguistroAprendizService, private enrutador: Router){}

  onSubmit(){
    this.guardarAprendiz();
  }
  guardarAprendiz(){
    this.aprendizServicio.agregarAprendiz(this.aprendiz).subscribe(
      {
        next: (datos) =>{
          this.irListaAprendiz();
        },
        error: (error: any)=>{console.log(error)}
      }
    )
  }
  irListaAprendiz(){
    this.enrutador.navigate(['/aprendices']);
  }
}
