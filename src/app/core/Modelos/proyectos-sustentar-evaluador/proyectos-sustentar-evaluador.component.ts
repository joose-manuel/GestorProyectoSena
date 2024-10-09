import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CalificarProyecto } from '../../Guards/calificar-proyecto.model';
import { CalificarProyectoService } from '../../Servicios/calificar-proyecto.service';

@Component({
  selector: 'app-proyectos-sustentar-evaluador',
  templateUrl: './proyectos-sustentar-evaluador.component.html',
  styleUrls: ['./proyectos-sustentar-evaluador.component.css']
})
export class ProyectosSustentarEvaluadorComponent {

  



  // calificarProyecto: CalificarProyecto = new CalificarProyecto();
  // calificacionesProyecto: CalificarProyecto[];

  // constructor(private calificarProyectoServicio: CalificarProyectoService, private enrutador: Router) {}

  // ngOnInit() {
  //   this.obtenerCalificacionesProyecto();
  // }

  // onSubmit() {
  //   this.guardarCalificacionProyecto();
  // }

  // private guardarCalificacionProyecto() {
  //   this.calificarProyectoServicio.agregarCalificacionProyecto(this.calificarProyecto).subscribe({
  //     next: (datos) => {
  //       this.irListaCalificacionesProyecto();
  //     },
  //     error: (error: any) => {
  //       console.log(error);
  //     }
  //   });
  // }

  // private obtenerCalificacionesProyecto() {
  //   this.calificarProyectoServicio.obtenerCalificacionesProyecto().subscribe((datos) => {
  //     this.calificacionesProyecto = datos;
  //   });
  // }

  // editarCalificacionProyecto(id: number) {
  //   this.enrutador.navigate(['editar-calificacion-proyecto', id]);
  // }

  // irListaCalificacionesProyecto() {
  //   this.enrutador.navigate(['/calificaciones-proyecto']);
  // }

  


}
