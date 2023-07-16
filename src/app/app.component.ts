import { Component, OnInit } from '@angular/core';
import { User } from '././models/User';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'loginApp';
  users: User[] = [];
  constructor(private userService: UserService) {}

  ngOnInit() {
    this.userService.getAll().subscribe((users) => (this.users = users));
  }
}
