// navigation.component.ts
import { Component } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent {
  constructor(private authService: AuthenticationService) {}

  isSubmenuOpen: boolean = false;

  toggleSubmenu() {
      this.isSubmenuOpen = !this.isSubmenuOpen;
  }
  isLoggedIn(): boolean {
    console.log("in navigation", this.authService.isLoggedIn)
    return this.authService.isLoggedIn;
  }
}
