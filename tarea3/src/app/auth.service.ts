import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  session: any;
  users: any;
  sessionUser: any;
  router: any;
    login(username: string, password: string) {
      let user = this.users.find(
        (u: any) => u.username === username && u.password === password
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

  constructor() { }
}
