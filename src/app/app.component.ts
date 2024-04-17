import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'book-exchange';
  constructor(public router: Router, private route: ActivatedRoute) {}

  navigation = [
    {
      name: 'Dashboard',
      link: '',
    },
    {
      name: 'Login',
      link: '/login',
    },
    {
      name: 'Register',
      link: '/register',
    },
    {
      name: 'Profile',
      link: '/profile',
    }
  ];


  navigateToLogin(): void {
    console.log('Navigating to login page');
    this.router.navigate(['/login']);
  }
  
}
