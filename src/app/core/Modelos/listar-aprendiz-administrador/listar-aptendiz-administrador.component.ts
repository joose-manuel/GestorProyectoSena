import { Component } from '@angular/core';
import { RegistroAprendiz } from '../../Guards/aprendiz';
import { ReguistroAprendizService } from '../../Servicios/reguistro-aprendiz.service';

@Component({
  selector: 'app-listar-aptendiz-administrador',
  templateUrl: './listar-aptendiz-administrador.component.html',
  styleUrls: ['./listar-aptendiz-administrador.component.css']
})
export class ListarAptendizAdministradorComponent {
  aprendiz:RegistroAprendiz[];

  constructor(private aprendizServicio: ReguistroAprendizService){}
  
  ngOnInit(): void {

    this.obtenerAprendices();
  }
  private obtenerAprendices (){
    this.aprendizServicio.obtenerAprendiz().subscribe(
      ( datos => {
        this.aprendiz = datos;
      }
      )
    );

  }


}
