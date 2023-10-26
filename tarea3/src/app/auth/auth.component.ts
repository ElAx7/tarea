import { Component } from '@angular/core';
import { Injectable } from '@angular/core';

import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})

@Injectable({
  providedIn: 'root'
})
export class AuthComponent {
  private isAuthenticated= false;

  users: any [] = [
    {
      id: 1,
      name: 'Axel',
      username: 'Axel',
      password: '123'
    },
    {
      id: 1,
      name: 'pepe',
      username: 'pepe',
      password: '123'
    },
  ];
  sessionUser: any;
  
  login(username: string, password: string) {
      let user = this.users.find(
        (u) => u.username === username && u.password === password
        );
        if (user) {
          this.sessionUser= user;
          localStorage.setItem('session', JSON.stringify(this.sessionUser));
        } 
        return user;
  }
    logout() {
      this.sessionUser = undefined;
      localStorage.removeItem('session');
      this.router.navigate(['/']);
  }

  isAthenticatedUser() {
    return this.isAuthenticated;
  } 

  constructor(private router: Router) { 
    this.isAuthenticated = false;
    let session: any = localStorage.getItem('session');
    if(session){
      session = JSON.parse(session);
    }
  }
}
