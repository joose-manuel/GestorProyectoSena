import { Component } from '@angular/core';
import { Evaluador } from '../../Guards/evaluador.model';
import { EvaluadorService } from '../../Servicios/evaluador.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listar-evaluador-administrador',
  templateUrl: './listar-evaluador-administrador.component.html',
  styleUrls: ['./listar-evaluador-administrador.component.css']
})
export class ListarEvaluadorAdministradorComponent {
  evaluadoress : Evaluador[];
  constructor(private evaluadorServicio: EvaluadorService, private enrutador: Router){}

  ngOnInit(){
    this.obtenerEvaluador();
  }
  private obtenerEvaluador(){
    this.evaluadorServicio.obtenerEvaluadores().subscribe(
      (datos => {
        this.evaluadoress = datos;
      })
    )
  }
  editarEvaluador(id: number){
    this.enrutador.navigate(['editar-evaluador',id]);
  }

}
