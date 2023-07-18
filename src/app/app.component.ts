import {Component, OnInit} from '@angular/core';
import {User} from './models/User';
import {UserService} from './services/user.service';
import {subscribeOn} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'loginApp';
  users: User[] = [];
  user: User = new User()

  constructor(private userService: UserService) {
  }

  ngOnInit() {
    this.userService.getAll().subscribe((users) => (this.users = users));
    this.userService.getOn('64b1af383689c6f83f595baa').subscribe((user) => (this.user=user))
  }
}
