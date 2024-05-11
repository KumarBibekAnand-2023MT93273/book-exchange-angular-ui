import { Component } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
import { User } from '../model/user.model';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username!: string;
  password!: string;
  errorMessage!: string;

  constructor(private snackBar: MatSnackBar, private authService: AuthenticationService, private router:Router) {}
  login(): void {
    console.log(this.username);
    console.log(this.password);
  
    if (this.username && this.password) {
      this.authService.login(this.username, this.password).subscribe(
        response => {
            console.log('Login successful', response);
            this.snackBar.open('Login successful','Ok', {
              duration: 6000 // Duration in milliseconds
             
            });
            this.authService.setIsLoggedIn(true);
            this.authService.setLoggedInUser(response);
            this.router.navigate(['/dashboard']);
        },
        error => {
          console.error('Error occurred during login:', error);
          this.snackBar.open('Error occurred during login: '+error.error,'Cancel', {
            duration: 6000 // Duration in milliseconds
           
          });
          this.errorMessage = error.message;
          // Handle error (e.g., display error message)
        }
      );
    } else {
      console.error('Username and password are required');
      this.snackBar.open('Username and password are required','Ok', {
        duration: 6000 // Duration in milliseconds
       
      });
      // Handle empty username/password (e.g., display error message)
    }
  }
  
}
