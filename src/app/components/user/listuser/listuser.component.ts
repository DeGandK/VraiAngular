import { Component } from '@angular/core';
import { UserService } from '../../../services/user.service';
import { Router } from '@angular/router';
import { User } from '../../../models/user.model';

@Component({
  selector: 'app-listuser',
  templateUrl: './listuser.component.html',
  styleUrl: './listuser.component.css',
})
export class ListuserComponent {
  liste: User[] = [];

  constructor(private userService: UserService, private router: Router) {
    this.loadData();
  }

  loadData() {
    this.userService.getAll().subscribe({
      next: (data: User[]) => {
        this.liste = data;
        console.log(data);
      },

      error: (error) => {
        console.log(error);
      },
    });
  }

  selectUser(id: number) {
    this.router.navigate(['userdetails', id]);
  }

  deleteUser(id: number) {
    this.userService.delete(id).subscribe({
      next: () => this.loadData(),
    });
  }
}
