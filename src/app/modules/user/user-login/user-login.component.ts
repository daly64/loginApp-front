import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../models/User';
import { UserService } from '../services/user.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css'],
})
export class UserLoginComponent {
  constructor(
    private userService: UserService,
    private router: Router,
    private toastr: ToastrService
  ) {}
  title = 'User Login Page';
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
        this.toastr.success(this.responce.trim(), 'success');
        this.router.navigate(['detail']);
      },
      error: (error) => {
        this.responce = error.error.message;
        this.toastr.error(this.responce.trim());
      },
    });
  }
}
