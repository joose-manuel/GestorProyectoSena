import { Component } from '@angular/core';
import { Ficha } from '../../Guards/ficha.model';
import { FichaService } from '../../Servicios/ficha.service';

@Component({
  selector: 'app-registro-ficha',
  templateUrl: './registro-ficha.component.html',
  styleUrls: ['./registro-ficha.component.css']
})
export class RegistroFichaComponent {
  ficha: Ficha = new Ficha();
  fichas: Ficha[] = [];
  mensajeExito: string = '';
  mensajeError: string = '';

  constructor(private fichaService: FichaService) {}

  ngOnInit() {
    this.obtenerFichas(); // Cargar las fichas al iniciar el componente
  }

  // Método para agregar una nueva ficha
  onSubmit() {
    this.agregarFicha();
  }

  // Método para llamar al servicio y agregar una nueva ficha
  agregarFicha() {
    this.fichaService.agregarFicha(this.ficha).subscribe({
      next: (datos) => {
        this.mensajeExito = 'La ficha ha sido guardada correctamente';
        this.mensajeError = '';
        
        // Reiniciar el formulario
        this.reiniciarFormulario();
        
        // Actualizar la lista de fichas después de agregar una nueva
        this.obtenerFichas();
      },
      error: (error: any) => {
        console.error("Error al guardar ficha:", error);
        this.mensajeError = 'No se pudo guardar la ficha';
        this.mensajeExito = '';
      }
    });
  }

  // Método para obtener la lista de fichas existentes
  obtenerFichas() {
    this.fichaService.obtenerFichas().subscribe({
      next: (data) => {
        this.fichas = data;
      },
      error: (error) => {
        console.error("Error al obtener fichas:", error);
      }
    });
  }

  // Método para reiniciar el formulario
  reiniciarFormulario() {
    this.ficha = new Ficha();
  }
}
