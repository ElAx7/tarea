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

  login() { 
    this.isAuthenticated = true;
  }
    logout() {
    this.isAuthenticated = false;
  }

  isAthenticatedUser() {
    return this.isAuthenticated;
  } 

  constructor(private router: Router) { 
    this.isAuthenticated = false;
  }


}
