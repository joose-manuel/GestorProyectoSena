import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  usuario: string = '';
  contrasena: string = '';
  error: string = '';

  constructor(private enrutador: Router) {}

  onSubmit() {
    // Datos de login predeterminados
    const usuarioValido = 'admin';
    const contrasenaValida = 'admin';

    // Validar credenciales
    if (this.usuario === usuarioValido && this.contrasena === contrasenaValida) {
      this.enrutador.navigate(['/registro-de-aprendiz']); // Redirigir a la ruta de administrador
    } else if ((this.usuario === 'Jose' && this.contrasena === 'a1234') || (this.usuario === 'aprendiz' && this.contrasena === 'aprendiz')    ) {
      this.enrutador.navigate(['/centro-ayuda-aprendiz']); // Redirigir a la ruta de aprendiz
    } else if (this.usuario === 'evaluador' && this.contrasena === 'evaluador') {
      this.enrutador.navigate(['/centro-evaluador']); // Redirigir a la ruta de evaluador
    } else if (this.usuario === 'instructor' && this.contrasena === 'instructor') {
      this.enrutador.navigate(['/centro-instructor']); // Redirigir a la ruta de evaluador
    } 
    else {
      this.error = 'Usuario o contraseña incorrectos';
    }
  }
}


