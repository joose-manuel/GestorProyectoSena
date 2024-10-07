import { Component } from '@angular/core';
import { RegistroAprendiz } from '../../Guards/aprendiz';
import { ReguistroAprendizService } from '../../Servicios/reguistro-aprendiz.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listar-aptendiz-administrador',
  templateUrl: './listar-aptendiz-administrador.component.html',
  styleUrls: ['./listar-aptendiz-administrador.component.css']
})
export class ListarAptendizAdministradorComponent {
  aprendiz:RegistroAprendiz[];

  constructor(private aprendizServicio: ReguistroAprendizService, private enrutador: Router){}
  
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
  editarAprendiz(id: number){
    this.enrutador.navigate(['editar-aprendiz',id]);
  }
  irListaAprendiz() {
    this.enrutador.navigate(['/aprendices']);
  }


  eliminarAprendiz(id:number){
   
    this.aprendizServicio.eliminarAprendiz(id).subscribe(
      {
        next:(datos) => this.irListaAprendiz(),
        error:(errores) =>console.log(errores),
        
      }
     
      );
      window.location.reload();
  }
}
