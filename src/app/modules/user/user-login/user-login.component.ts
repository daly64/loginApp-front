import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../models/User';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css'],
})
export class UserLoginComponent {
  constructor(private userService: UserService, private router: Router) {}
  baseURL: String = 'https://loginapp-api-ra2l.onrender.com/';
  user: User = new User();
  responce: String = '';

  imageurl() {
    if (this.user.image)
      return this.baseURL + 'getUserImage/' + this.user.image;
    else return '';
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
    /*     if (this.responce == 'login Ok') {
      this.router.navigate(['detail']);
    } */
  }
}
