import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  login(): void {
    // Here you can implement the login logic, such as sending the credentials to the server for authentication
    console.log('Email:', this.email);
    console.log('Password:', this.password);
    // Example: Call a service to perform authentication
  }
}
