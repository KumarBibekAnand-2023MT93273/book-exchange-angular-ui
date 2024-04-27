import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from './services/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'book-exchange';
  constructor(public router: Router, private authService: AuthenticationService) {}

  navigateToLogin(): void {
    console.log('Navigating to login page');
    this.router.navigate(['/login']);
  }
  goToMyAccount(): void {}

  logout(): void {
    this.authService.logout(); // Call logout method
    this.router.navigateByUrl('/login'); // Navigate to default page after logout
  }
  
  isLoggedIn(): boolean {
    return this.authService.isLoggedIn;;
  }
}
