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
  mensajeExito: string = '';
  mensajeError: string = '';

  constructor(private aprendizServicio: ReguistroAprendizService, private enrutador: Router) {}

  onSubmit() {
    this.guardarAprendiz();
  }

  guardarAprendiz() {
    this.aprendizServicio.agregarAprendiz(this.aprendiz).subscribe({
      next: (datos) => {
        this.mensajeExito = 'El aprendiz ha sido guardado correctamente';
        this.mensajeError = '';
        
        console.log(this.mensajeExito); // Muestra el mensaje en la consola
        
        // Reiniciar el formulario
        this.reiniciarFormulario();
        
        // Si aún quieres redirigir después de un tiempo, puedes usar esto:
        // setTimeout(() => {
        //   this.irListaAprendiz();
        // }, 2000);
      },
      error: (error: any) => {
        console.error("Error al guardar aprendiz:", error);
        this.mensajeError = 'No se pudo guardar el aprendiz';
        this.mensajeExito = '';
      }
    });
  }

  reiniciarFormulario() {
    // Reinicia el objeto aprendiz
    this.aprendiz = new RegistroAprendiz();
    
    // Si estás usando Reactive Forms, puedes reiniciar así:
    // this.aprendizForm.reset();
  }

  irListaAprendiz() {
    this.enrutador.navigate(['/aprendices']);
  }

  eliminarAprendiz(id: number) {
    this.aprendizServicio.eliminarAprendiz(id).subscribe({
      next: (datos) => this.irListaAprendiz(),
      error: (errores) => console.log(errores)
    });
  }
}