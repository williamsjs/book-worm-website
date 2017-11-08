import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { CoreService } from './core.service';
import * as jwt_decode from 'jwt-decode';

@Injectable()
export class AuthService {
  private apiUrl: string;

  constructor(private http: HttpClient,
              private coreService: CoreService) {
                  this.apiUrl = coreService.API_URL;
              }

  authenticate(email: string, password: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/authenticate`, {
      email: email,
      password: password
    });
  }

  setToken(token: string): void {
    localStorage.setItem('token', token);
  }

  getToken(): string {
    return localStorage.getItem('token');
  }

  getTokenExpirationDate(token: string): Date {
    const decoded = jwt_decode(token);

    const date = new Date(0);
    date.setUTCSeconds(decoded['exp']);
    return date;
  }

  tokenExpired(): boolean {
    const token = this.getToken();

    if (!token) {
      return true;
    }

    const date = this.getTokenExpirationDate(token);

    return !(date.valueOf() > new Date().valueOf());
  }

  logOut(): void {
    localStorage.removeItem('token');
  }

}
