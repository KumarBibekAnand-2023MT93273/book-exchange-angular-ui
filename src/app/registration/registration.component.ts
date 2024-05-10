import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from '../services/authentication.service';
import { User } from '../model/user.model';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  registrationForm!: FormGroup;
  errorMessage!: string;

  constructor(private formBuilder: FormBuilder,  private authService: AuthenticationService, private snackBar: MatSnackBar, private router: Router) { }

  ngOnInit(): void {
    this.registrationForm = this.formBuilder.group({
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required]
    }, { validators: this.passwordsMatchValidator });
  }

  passwordsMatchValidator(formGroup: FormGroup) {
    const passwordControl = formGroup.get('password');
    const confirmPasswordControl = formGroup.get('confirmPassword');
  
    if (passwordControl && confirmPasswordControl) {
      const password = passwordControl.value;
      const confirmPassword = confirmPasswordControl.value;
  
      if (password !== confirmPassword) {
        confirmPasswordControl.setErrors({ mismatch: true });
      } else {
        confirmPasswordControl.setErrors(null);
      }
    }
  }
  
  onSubmit() {
    if (this.registrationForm.valid) {
      const { username, email, password } = this.registrationForm.value;
      const formData: User = { username, email, password }; // Create a User object
  
      this.authService.register(formData).subscribe(
        response => {
          console.log('Registration successful:', response);
          // Show error message in snackbar
      this.snackBar.open('Registration successful. Login with username and password', 'Ok', {
        duration: 6000 // Duration in milliseconds
       
      });
      this.router.navigate(['/login']);
          // Optionally, redirect the user to a different page
        },
        error => {
          console.error('Registration failed:', error);
          // Show error message in snackbar
      this.snackBar.open(error.error + ' Registration failed. Please try again.' , 'Close', {
        duration: 6000 // Duration in milliseconds
      });
          this.errorMessage = error.message; // Display error message to the user
        }
      );
    }
  }
  
  
}
