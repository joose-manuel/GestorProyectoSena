import { Component } from '@angular/core';
import { Administrador } from '../../Guards/administrador.model';
import { AdministradorService } from '../../Servicios/administrador.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-administrador',
  templateUrl: './administrador.component.html',
  styleUrls: ['./administrador.component.css']
})
export class AdministradorComponent {
  administrador: Administrador = new Administrador();
  constructor(private administradorServicio:AdministradorService, private enrutador: Router){}

  onSubmit(){
    this.guardarAdministrador();
  }
  guardarAdministrador(){
    this.administradorServicio.agregarAdministrador(this.administrador).subscribe(
      {
        next: (datos) =>{
          this.irListaAdministrador();
        },
        error: (error: any)=>{console.log(error)}
      }
    )
  }
  irListaAdministrador(){
    this.enrutador.navigate(['/administrador']);
  }
}
