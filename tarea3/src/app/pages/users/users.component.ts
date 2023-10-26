import { Component } from '@angular/core';
import { AuthService } from 'src/app/auth.service';

import { User } from 'src/app/shared/interfaces/user';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent {
  constructor(private authService: AuthService) { 
  }
  logout() {
    this.authService.logout();
  }

  selectedUser: User = { name: '', email: '' };

  doOnUserSelected(user: User) {
    this.selectedUser = {...user};
  }

  doOnUserReset() {
    this.selectedUser = { name: '', email: '' }
  }

}
