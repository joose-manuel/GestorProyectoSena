import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Administrador } from '../../Guards/administrador.model';
import { Reporte } from '../../Guards/reporte.model';
import { ReporteService } from '../../Servicios/reporte.service';

@Component({
  selector: 'app-crear-reportes',
  templateUrl: './crear-reportes.component.html',
  styleUrls: ['./crear-reportes.component.css']
})
export class CrearReportesComponent  {
  reportes: Reporte[] = []; // Arreglo para almacenar los reportes
  nuevoReporte: Reporte = { idReporte: 0, descripcion: '', titulo: '' }; // Inicializa un nuevo reporte

  constructor(private reporteService: ReporteService, private router: Router) { }

  ngOnInit(): void {
    this.obtenerReportes(); // Cargar reportes al iniciar el componente
  }

  obtenerReportes(): void {
    this.reporteService.obtenerReportes().subscribe(
      (data: Reporte[]) => {
        this.reportes = data;
      },
      (error) => {
        console.error('Error al obtener reportes:', error);
      }
    );
  }

  agregarReporte(): void {
    this.reporteService.agregarReporte(this.nuevoReporte).subscribe(
      (response) => {
        console.log('Reporte agregado:', response);
        this.obtenerReportes(); // Actualizar la lista de reportes después de agregar uno nuevo
        this.nuevoReporte = { idReporte: 0, descripcion: '', titulo: '' }; // Reiniciar el formulario
      },
      (error) => {
        console.error('Error al agregar reporte:', error);
      }
    );
  }

  eliminarReporte(id: number): void {
    this.reporteService.eliminarReporte(id).subscribe(
      (response) => {
        console.log('Reporte eliminado:', response);
        this.obtenerReportes(); // Actualizar la lista de reportes después de eliminar
      },
      (error) => {
        console.error('Error al eliminar reporte:', error);
      }
    );
  }

  obtenerReportePorId(id: number): void {
    this.reporteService.obtenerReportePorId(id).subscribe(
      (data: Reporte) => {
        console.log('Reporte encontrado:', data);
        // Aquí puedes realizar cualquier acción con el reporte encontrado
      },
      (error) => {
        console.error('Error al obtener el reporte por ID:', error);
      }
    );
  }
}
