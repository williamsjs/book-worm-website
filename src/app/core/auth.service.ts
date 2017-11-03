import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { JwtHelperService } from '@auth0/angular-jwt';

import { CoreService } from './core.service';

@Injectable()
export class AuthService {
  private apiUrl: string;

  constructor(private http: HttpClient,
              private coreService: CoreService) {
              // private jwtHelperService: JwtHelperService) {
                  this.apiUrl = coreService.API_URL;
              }

  authenticate(email: string, password: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/authenticate`, {
      email: email,
      password: password
    });
  }

}
