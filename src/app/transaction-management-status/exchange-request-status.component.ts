import { Component, OnInit } from '@angular/core';
import { ExchangeService } from '../services/exchange.service';
import { ExchangeRequest } from '../model/exchange-request.model';
import { AuthenticationService } from '../services/authentication.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-exchange-request-status',
  templateUrl: './exchange-request-status.component.html',
  styleUrls: ['./exchange-request-status.component.css']
})
export class ExchangeRequestStatusComponent implements OnInit {

  exchangeRequests: ExchangeRequest[] = [];
  user: any;

  constructor(private exchangeRequestService: ExchangeService, private authService: AuthenticationService, private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.user = this.authService.getLoggedInUser();
    console.log('Logged in user:', this.user); // Check the value of this.user
    if (this.user && this.user.id != null) {
      this.getExchangeRequests();
    }
  }

  getExchangeRequests(): void {
    this.exchangeRequestService.getExchangeRequestsByUserId(this.user.id).subscribe(
      (response: ExchangeRequest[]) => {
        this.exchangeRequests = response;
      },
      (error: any) => {
        console.error('Error fetching exchange requests:', error);
      }
    );
    }
  

  acceptRequest(requestId: number): void {
    // Assuming you have a method in your service to accept an exchange request
    this.exchangeRequestService.acceptExchangeRequest(requestId).subscribe(
      (response) => {
        console.log('Request accepted:', response);
        this.snackBar.open('Exchange Request Accepted', 'Ok', {
          duration: 6000 // Duration in milliseconds
         
        });
        this.getExchangeRequests();
        
        // Optionally, you can update the UI to reflect the change
      },
      (error) => {
        console.error('Error accepting request:', error);
        this.snackBar.open('Error accepting request', 'Ok', {
          duration: 6000 // Duration in milliseconds
         
        });
      }
    );
  }

  completeRequest(requestId: number): void {
    // Assuming you have a method in your service to mark an exchange request as complete
    this.exchangeRequestService.completeExchangeRequest(requestId).subscribe(
      (response) => {
        console.log('Request completed:', response);
        this.snackBar.open('Exchange Request Completed', 'Ok', {
          duration: 6000 // Duration in milliseconds
         
        });
        this.getExchangeRequests();
        // Optionally, you can update the UI to reflect the change
      },
      (error) => {
        console.error('Error completing request:', error);
        this.snackBar.open('Error completing request', 'Ok', {
          duration: 6000 // Duration in milliseconds
         
        });
      }
    );
  }
}
