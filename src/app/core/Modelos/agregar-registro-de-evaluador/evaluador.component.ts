import { Component } from '@angular/core';
import { Evaluador } from '../../Guards/evaluador.model';
import { EvaluadorService } from '../../Servicios/evaluador.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-evaluador',
  templateUrl: './evaluador.component.html',
  styleUrls: ['./evaluador.component.css']
})
export class EvaluadorComponent {
  evaluador: Evaluador = new Evaluador();
  constructor(private evaluadorServicio:EvaluadorService, private enrutador: Router){}

  onSubmit(){
    this.guardarEvaluador();
  }
  guardarEvaluador(){
    this.evaluadorServicio.agregarEvaluador(this.evaluador).subscribe(
      {
        next: (datos) =>{
          this.irListaEvaluador();
        },
        error: (error: any)=>{console.log(error)}
      }
    )
  }
  irListaEvaluador(){
    this.enrutador.navigate(['/evalaudores']);
  }
}
