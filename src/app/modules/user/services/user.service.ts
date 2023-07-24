import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/User';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  baseURL: string = 'https://loginapp-api-ra2l.onrender.com/';
  obj = {
    name: 'med',
    password: '123123',
  };
  constructor(private http: HttpClient) {}

  getAll = () => this.http.get<User[]>(this.baseURL + 'users');
  getOn = (id: string): Observable<User> =>
    this.http.get<User>(this.baseURL + `users/get/${id}`);
  login = (user: User): Observable<any> =>
    this.http.post<User>(this.baseURL + `users/login/`, user);
}
