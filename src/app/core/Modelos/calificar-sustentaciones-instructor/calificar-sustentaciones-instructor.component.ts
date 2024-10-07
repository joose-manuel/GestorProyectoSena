import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Sustentacion } from '../../Guards/sustentacion.model';
import { SustentacionService } from '../../Servicios/sustentacion.service';

@Component({
  selector: 'app-calificar-sustentaciones-instructor',
  templateUrl: './calificar-sustentaciones-instructor.component.html',
  styleUrls: ['./calificar-sustentaciones-instructor.component.css']
})
export class CalificarSustentacionesInstructorComponent {
  sustentacion: Sustentacion = new Sustentacion();
  sustentaciones: Sustentacion[];

  constructor(private sustentacionServicio:SustentacionService, private enrutador: Router) {}

  ngOnInit() {
    this.obtenerSustentaciones();
  }

  onSubmit() {
    this.guardarSustentacion();
  }

  private guardarSustentacion() {
    this.sustentacionServicio.agregarSustentaciones(this.sustentacion).subscribe({
      next: (datos) => {
        this.irListaSustentaciones();
      },
      error: (error: any) => {
        console.log(error);
      }
    });
  }

  private obtenerSustentaciones() {
    this.sustentacionServicio.obtenerSustentaciones().subscribe((datos) => {
      this.sustentaciones = datos;
    });
  }

  editarSustentacion(id: number) {
    this.enrutador.navigate(['editar-sustentacion', id]);
  }

  irListaSustentaciones() {
    this.enrutador.navigate(['/sustentaciones']);
  }
}
