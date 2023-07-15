import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}

  get() {
    let users = this.http.get('https://loginapp-api-ra2l.onrender.com/users');
    users.subscribe((data) => console.log(data));
  }
}
