import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../models/User';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css'],
})
export class UserLoginComponent implements OnInit {
  constructor(private userService: UserService, private router: Router) {}

  title = 'User Login Page';
  user: User = new User();
  testUser: User = new User();
  responce: String = '';

  ngOnInit(): void {
    this.userService.getOn('64beca17ef980cff64c42fa1').subscribe({
      next: (user: User) => (this.testUser = user),
      error: (error: any) => {
        throw error;
      },
    });
  }

  login() {
    this.userService.login(this.user).subscribe({
      next: (data) => {
        this.responce = data.message;
        this.router.navigate(['detail']);
      },
      error: (error) => {
        this.responce = error.error.message;
      },
    });
  }
}
