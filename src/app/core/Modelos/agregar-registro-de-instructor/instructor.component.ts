import { Component } from '@angular/core';
import { Instructor } from '../../Guards/instructor.model';
import { InstructorService } from '../../Servicios/instructor.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-instructor',
  templateUrl: './instructor.component.html',
  styleUrls: ['./instructor.component.css']
})
export class InstructorComponent {
  instructor: Instructor = new Instructor();
  mensajeExito: string = '';
  mensajeError: string = '';

  constructor(private instructorServicio: InstructorService, private enrutador: Router) {}

  onSubmit() {
    this.guardarInstructor();
  }

  guardarInstructor() {
    this.instructorServicio.agregarInstructor(this.instructor).subscribe({
      next: (datos) => {
        this.mensajeExito = 'El instructor ha sido guardado correctamente';
        this.mensajeError = '';
        
        console.log(this.mensajeExito); // Muestra el mensaje en la consola
        
        // Reiniciar el formulario
        this.reiniciarFormulario();
        
        // Si quieres mostrar el mensaje por un tiempo antes de redirigir, puedes usar:
        setTimeout(() => {
          this.irListaInstructor();
        }, 2000); // Espera 2 segundos antes de redirigir
      },
      error: (error: any) => {
        console.error("Error al guardar instructor:", error);
        this.mensajeError = 'No se pudo guardar el instructor';
        this.mensajeExito = '';
      }
    });
  }

  reiniciarFormulario() {
    // Reinicia el objeto instructor
    this.instructor = new Instructor();
    
    // Si estás usando Reactive Forms, puedes reiniciar así:
    // this.instructorForm.reset();
  }

  irListaInstructor() {
    this.enrutador.navigate(['/instructores']);
  }
}