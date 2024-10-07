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
        this.mensajeExito = 'Cargo correctamente'; 
        this.mensajeError = '';
        
        // Redirigir después de mostrar el mensaje
        setTimeout(() => {
          this.irListaAprendiz();
        }, 2000); // Espera 2 segundos antes de redirigir
      },
      error: (error: any) => {
        console.error("Error al guardar aprendiz:", error);
        this.mensajeError = 'No se pudo guardar'; 
        this.mensajeExito = ''; 
      }
    });
  }

  irListaAprendiz() {
    this.enrutador.navigate(['/aprendices']);
  }

  eliminarAprendiz(id:number){
    this.aprendizServicio.eliminarAprendiz(id).subscribe(
      {
        next:(datos) => this.irListaAprendiz(),
        error:(errores) =>console.log(errores)
      }
     
      );

  }


}
