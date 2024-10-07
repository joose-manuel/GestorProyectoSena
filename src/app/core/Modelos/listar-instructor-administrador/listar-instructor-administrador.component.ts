import { Component } from '@angular/core';
import { Instructor } from '../../Guards/instructor.model';
import { InstructorService } from '../../Servicios/instructor.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listar-instructor-administrador',
  templateUrl: './listar-instructor-administrador.component.html',
  styleUrls: ['./listar-instructor-administrador.component.css']
})
export class ListarInstructorAdministradorComponent {
  instructor : Instructor[];
  constructor(private instructorServicio:InstructorService, private enrutador: Router){}

  ngOnInit(){
    this.obtenerInstructor();
  }
  private obtenerInstructor(){
    this.instructorServicio.obtenerInstructores().subscribe(
      (datos => {
        this.instructor = datos;
      })
    )
  }
  editarInstructor(id: number){
    this.enrutador.navigate(['editar-instructor',id]);
  }

}
