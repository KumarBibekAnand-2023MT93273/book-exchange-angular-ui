import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  constructor(public router: Router, private authService: AuthenticationService) {}

  login(): void {
    // Here you can implement the login logic, such as sending the credentials to the server for authentication
    console.log('Email:', this.email);
    console.log('Password:', this.password);
    // Example: Call a service to perform authentication
    this.authService.setIsLoggedIn(true);
    console.log(this.authService.isLoggedIn);
    this.router.navigate(["/dashboard"]);
  }
}
