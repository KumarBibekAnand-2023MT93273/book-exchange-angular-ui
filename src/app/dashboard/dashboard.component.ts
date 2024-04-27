import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  constructor(public router: Router, private authService: AuthenticationService) {}

  bookListingNav(): void{
    if(this.authService.isLoggedIn){
      this.router.navigate(["/book-listing"]);
    }else{
      this.router.navigate(["/login"]);
    }
  }
}
