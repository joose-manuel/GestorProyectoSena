import { Component } from '@angular/core';
import { Administrador } from '../../Guards/administrador.model';
import { AdministradorService } from '../../Servicios/administrador.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-administrador',
  templateUrl: './administrador.component.html',
  styleUrls: ['./administrador.component.css']
})
export class AdministradorComponent {
  administrador: Administrador = new Administrador();
  mensajeExito: string = '';
  mensajeError: string = '';

  constructor(private administradorServicio: AdministradorService, private enrutador: Router) {}

  onSubmit() {
    this.guardarAdministrador();
  }

  guardarAdministrador() {
    this.administradorServicio.agregarAdministrador(this.administrador).subscribe({
      next: (datos) => {
        this.mensajeExito = 'El administrador ha sido guardado correctamente';
        this.mensajeError = '';
        
        console.log(this.mensajeExito); // Muestra el mensaje en la consola
        
        // Reiniciar el formulario
        this.reiniciarFormulario();
        
        // Mostrar mensaje de éxito por 2 segundos antes de redirigir
        setTimeout(() => {
          this.irListaAdministrador();
        }, 2000);
      },
      error: (error: any) => {
        console.error("Error al guardar administrador:", error);
        this.mensajeError = 'No se pudo guardar el administrador';
        this.mensajeExito = '';
      }
    });
  }

  reiniciarFormulario() {
    // Reinicia el objeto administrador
    this.administrador = new Administrador();
    
    // Si estás usando Reactive Forms, puedes reiniciar así:
    // this.administradorForm.reset();
  }

  irListaAdministrador() {
    this.enrutador.navigate(['/administradores']);
  }
}