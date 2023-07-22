import { Component, OnInit, OnChanges } from '@angular/core';
import { User } from './models/User';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'loginApp';
  // users: User[] = [];
  user: User = new User();
  loginUser: User = new User();
  responce: String = '';
  baseURL: String = 'https://loginapp-api-ra2l.onrender.com/';
  imageurl() {
    if (this.user.image)
      return this.baseURL + 'getUserImage/' + this.user.image;
    else return '';
  }
  constructor(private userService: UserService) {}
  ngOnInit() {
    /*     this.userService.getAll().subscribe((users) => (this.users = users));*/
    this.userService
      .getOn('64bbdd15d1a719dd8a7fc59e')
      .subscribe((user) => (this.user = user));
  }
  login() {
    this.userService.login(this.loginUser).subscribe({
      next: (data) => {
        this.responce = data.message;
      },
      error: (error) => {
        this.responce = error.error.message;
      },
    });
  }
}
