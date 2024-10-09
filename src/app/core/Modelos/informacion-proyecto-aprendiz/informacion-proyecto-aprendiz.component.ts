import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Equipo } from '../../Guards/equipo.model';
import { EquipoService } from '../../Servicios/equipo.service';

@Component({
  selector: 'app-informacion-proyecto-aprendiz',
  templateUrl: './informacion-proyecto-aprendiz.component.html',
  styleUrls: ['./informacion-proyecto-aprendiz.component.css']
})
export class InformacionProyectoAprendizComponent implements OnInit {
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
        console.log('Equipo guardado exitosamente', datos);
        this.refrescarFormulario();
      },
      error: (error: any) => {
        console.error('Error al guardar el equipo', error);
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

  refrescarFormulario() {
    // Reiniciar los valores del objeto equipo
    this.equipo = new Equipo();
    
    // Opcional: Mostrar un mensaje de éxito
    alert('Formulario enviado con éxito. Los campos han sido reiniciados.');
    
    // Opcional: Si estás usando formularios reactivos, puedes resetear el formulario así:
    // this.formulario.reset();
  }

  limpiarFormulario() {
    this.refrescarFormulario();
  }
}