import { Component } from '@angular/core';

@Component({
  selector: 'app-ventana-emergente-editar-instructor',
  templateUrl: './ventana-emergente-editar-instructor.component.html',
  styleUrls: ['./ventana-emergente-editar-instructor.component.css']
})
export class VentanaEmergenteEditarInstructorComponent {
  isVisible = false;

  showPopup() {
    this.isVisible = true;
  }

  closePopup() {
    this.isVisible = false;
  }
}
