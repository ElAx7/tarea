import { Component } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  usuario = {
    nombre: '',
    correo: '',
    contrasena: '',
    confirmacion: '',
  };
  aceptaTerminos = false;

  constructor() { }

  submitRegistro() {
    if (this.aceptaTerminos) {
      
      console.log('Datos enviados:', this.usuario);
    } else {
      console.log('Debes aceptar los términos y condiciones');
    }
  }
}
