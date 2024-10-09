import { Component } from '@angular/core';

import { Router } from '@angular/router';
import { Evaluador } from '../../Guards/evaluador.model';
import { EvaluadorService } from '../../Servicios/evaluador.service';

@Component({
  selector: 'app-evaluador',
  templateUrl: './evaluador.component.html',
  styleUrls: ['./evaluador.component.css']
})
export class EvaluadorComponent {
  evaluador: Evaluador = new Evaluador();
  mensajeExito: string = '';
  mensajeError: string = '';

  constructor(private evaluadorServicio: EvaluadorService, private enrutador: Router) {}

  onSubmit() {
    this.guardarEvaluador();
  }

  guardarEvaluador() {
    this.evaluadorServicio.agregarEvaluador(this.evaluador).subscribe({
      next: (datos) => {
        this.mensajeExito = 'El evaluador ha sido guardado correctamente';
        this.mensajeError = '';
        
        console.log(this.mensajeExito); // Muestra el mensaje en la consola
        
        // Reiniciar el formulario
        this.reiniciarFormulario();
        
        // Mostrar mensaje de éxito por 2 segundos antes de redirigir
        setTimeout(() => {
          this.irListaEvaluador();
        }, 2000);
      },
      error: (error: any) => {
        console.error("Error al guardar evaluador:", error);
        this.mensajeError = 'No se pudo guardar el evaluador';
        this.mensajeExito = '';
      }
    });
  }

  reiniciarFormulario() {
    // Reinicia el objeto evaluador
    this.evaluador = new Evaluador();
    
    // Si estás usando Reactive Forms, puedes reiniciar así:
    // this.evaluadorForm.reset();
  }

  irListaEvaluador() {
    this.enrutador.navigate(['/evaluadores']);
  }
}