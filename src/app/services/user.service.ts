import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/User';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  // baseURL: string = 'https://loginapp-api-ra2l.onrender.com/';
  baseURL: string = 'http://localhost:3000/';
  constructor(private http: HttpClient) {}

  getAll(): Observable<User[]> {
    return this.http.get<User[]>(this.baseURL + 'users');
  }
}
