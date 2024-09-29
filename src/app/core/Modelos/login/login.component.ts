import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  tiposDocumento = [
    { valor: 'cc', texto: 'Cédula de Ciudadanía' },
    { valor: 'ti', texto: 'Tarjeta de Identidad' },
    { valor: 'ce', texto: 'Tarjeta de Extranjería' }
  ];


  

}
