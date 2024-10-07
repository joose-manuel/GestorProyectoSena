import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Criterio } from '../../Guards/criterio.model';
import { CriterioService } from '../../Servicios/criterio.service';

@Component({
  selector: 'app-crieterios-evaluativos',
  templateUrl: './crieterios-evaluativos.component.html',
  styleUrls: ['./crieterios-evaluativos.component.css']
})
export class CrieteriosEvaluativosComponent {
  criterio: Criterio = new Criterio();
  criterios: Criterio[];

  constructor(private criterioServicio: CriterioService, private enrutador: Router) {}

  ngOnInit() {
    this.obtenerCriterios();
  }

  onSubmit() {
    this.guardarCriterio();
  }

  private guardarCriterio() {
    this.criterioServicio.agregarCriterio(this.criterio).subscribe({
      next: (datos) => {
        this.irListaCriterios();
      },
      error: (error: any) => {
        console.log(error);
      }
    });
  }

  private obtenerCriterios() {
    this.criterioServicio.obtenerCriterios().subscribe((datos) => {
      this.criterios = datos;
    });
  }

  editarCriterio(id: number) {
    this.enrutador.navigate(['editar-criterio', id]);
  }

  irListaCriterios() {
    this.enrutador.navigate(['/criterios']);
  }
}
