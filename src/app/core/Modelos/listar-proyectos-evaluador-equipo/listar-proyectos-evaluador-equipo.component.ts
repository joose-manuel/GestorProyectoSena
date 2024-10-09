import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { Equipo } from "../../Guards/equipo.model";
import { EquipoService } from "../../Servicios/equipo.service";


@Component({
  selector: 'app-listar-proyectos-evaluador-equipo',
  templateUrl: './listar-proyectos-evaluador-equipo.component.html',
  styleUrls: ['./listar-proyectos-evaluador-equipo.component.css']
})
export class ListarProyectosEvaluadorEquipoComponent {
  equipo: Equipo = new Equipo();
  equipos: Equipo[];

  constructor(private equipoServicio: EquipoService, private enrutador: Router) {}

  ngOnInit() {
    this.obtenerEquipos();
  }

  onSubmit() {
    this.guardarEquipo();
  }

  private guardarEquipo() {
    this.equipoServicio.agregarEquipo(this.equipo).subscribe({
      next: (datos) => {
        this.irListaEquipos();
      },
      error: (error: any) => {
        console.log(error);
      }
    });
  }

  private obtenerEquipos() {
    this.equipoServicio.obtenerEquipos().subscribe((datos) => {
      this.equipos = datos;
    });
  }

  editarEquipo(id: number) {
    this.enrutador.navigate(['editar-equipo', id]);
  }

  irListaEquipos() {
    this.enrutador.navigate(['/equipos']);
  }
}