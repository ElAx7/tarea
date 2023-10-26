import { Component } from '@angular/core';
import { Form } from '@angular/forms';

import{ FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  form: FormGroup = this.fb.group({
    correo: ['', Validators.required],
    contrasena: ['', Validators.required],
  });

constructor(
  private authService: AuthService, 
  private fb: FormBuilder,
  private router: Router
  ) { }

  login(){
    const user = this.authService.login(
      this.form.get('correo')?.value, 
      this.form.get('contrasena')?.value
    );

    if (user === undefined) {
      alert('Usuario o contraseña incorrectos');
    }else{
      this.router.navigateByUrl('/admin')
    }
  }
  
  register() {
    this.register();

  }
}
