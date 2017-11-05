import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AuthService } from '../core/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  public error: boolean;
  constructor(private authService: AuthService) { }

  login(email: string, password: string): void {
    this.authService.authenticate(email, password).subscribe(res => {
      this.error = false;
      this.authService.setToken(res['auth_token']);
    }, err => {
      this.error = true;
    });
  }

}
