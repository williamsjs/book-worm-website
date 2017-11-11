import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { AuthService } from './auth.service';

@Injectable()
export class BookWormHeaders extends HttpHeaders {
  constructor(private authService: AuthService) {
    super({
      'Content-Type': 'application/json',
      'Authorization': authService.getToken()
    });
  }
}
