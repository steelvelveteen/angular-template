import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private _http: HttpClient) {}

  login({
    username,
    password,
  }: {
    username: string;
    password: string;
  }): Observable<any> {
    return this._http.post('login', { username, password });
  }
}
