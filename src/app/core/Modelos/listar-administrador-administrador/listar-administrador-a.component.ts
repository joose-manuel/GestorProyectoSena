import { Component } from '@angular/core';
import { Administrador } from '../../Guards/administrador.model';
import { AdministradorService } from '../../Servicios/administrador.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listar-administrador-a',
  templateUrl: './listar-administrador-a.component.html',
  styleUrls: ['./listar-administrador-a.component.css']
})
export class ListarAdministradorAComponent {
  administrador : Administrador[];
  constructor(private administradorServicio: AdministradorService, private enrutador: Router){}

  ngOnInit(){
    this.obtenerAdministrador();
  }
  private obtenerAdministrador(){
    this.administradorServicio.obtenerAdministradoresLista().subscribe(
      (datos => {
        this.administrador = datos;
      })
    )
  }
  editarAdministrar(id: number){
    this.enrutador.navigate(['editar-administrador',id]);
  }

}
