import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent {
  correo: string = '';
  contrasena: string = '';

  onSubmit() {
    // Aquí puedes enviar los datos de inicio de sesión al servidor
    console.log('Correo: ' + this.correo);
    console.log('Contraseña: ' + this.contrasena);

    // Agrega tu lógica para enviar los datos al servidor y procesar la respuesta
  }
}
