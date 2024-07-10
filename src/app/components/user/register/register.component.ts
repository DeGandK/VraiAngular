import { Component } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { Router } from '@angular/router';
import { User } from '../../../models/user.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent {
  isConnected!: boolean;
  currentUser!: User;

  constructor(private authService: AuthService, private router: Router) {
    authService.isConnectedSubject.subscribe({
      next: (value: boolean) => (this.isConnected = value),
    });
    authService.isConnectedSubject.next(authService.isConnected);
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['home']);
  }
}
