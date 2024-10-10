import { Component } from '@angular/core';

@Component({
  selector: 'app-ventana-emergente-sustentacion',
  templateUrl: './ventana-emergente-sustentacion.component.html',
  styleUrls: ['./ventana-emergente-sustentacion.component.css']
})
export class VentanaEmergenteSustentacionComponent {
  isVisible = false;

  showPopup() {
    this.isVisible = true;
  }

  closePopup() {
    this.isVisible = false;
  }
}
