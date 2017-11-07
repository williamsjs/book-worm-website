import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import { AuthService } from '../core/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  public error: boolean;
  constructor(private authService: AuthService, private router: Router) { }

  login(email: string, password: string): void {
    this.authService.authenticate(email, password).subscribe(res => {
      this.error = false;
      this.authService.setToken(res['auth_token']);
      this.router.navigate(['']);
    }, err => {
      this.error = true;
    });
  }

}
