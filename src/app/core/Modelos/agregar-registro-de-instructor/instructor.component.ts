import { Component } from '@angular/core';
import { Instructor } from '../../Guards/instructor.model';
import { InstructorService } from '../../Servicios/instructor.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-instructor',
  templateUrl: './instructor.component.html',
  styleUrls: ['./instructor.component.css']
})
export class InstructorComponent {
  instructor: Instructor = new Instructor();
  constructor(private instructorServicio:InstructorService, private enrutador: Router){}

  onSubmit(){
    this.guardarInstructor();
  }
  guardarInstructor(){
    this.instructorServicio.agregarInstructor(this.instructor).subscribe(
      {
        next: (datos) =>{
          this.irListaInstructor();
        },
        error: (error: any)=>{console.log(error)}
      }
    )
  }
  irListaInstructor(){
    this.enrutador.navigate(['/instructores']);
  }
}
