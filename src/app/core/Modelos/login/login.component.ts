import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Sesion } from '../../Guards/sesion.model';
import { SesionService } from '../../Servicios/sesion.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  sesion: Sesion = new Sesion();
  sesiones: Sesion[];

  constructor(private sesionServicio: SesionService, private enrutador: Router) {}

  ngOnInit() {
    this.obtenerSesiones();
  }

  onSubmit() {
    this.guardarSesion();
  }

  private guardarSesion() {
    this.sesionServicio.agregarSesion(this.sesion).subscribe({
      next: (datos) => {
        this.irListaSesiones();
      },
      error: (error: any) => {
        console.log(error);
      }
    });
  }

  private obtenerSesiones() {
    this.sesionServicio.obtenerSesiones().subscribe((datos) => {
      this.sesiones = datos;
    });
  }

  editarSesion(id: number) {
    this.enrutador.navigate(['editar-sesion', id]);
  }

  irListaSesiones() {
    this.enrutador.navigate(['/sesiones']);
  }
}
