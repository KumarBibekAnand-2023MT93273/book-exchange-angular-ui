// exchange-request-dialog.component.ts

import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ExchangeService } from '../services/exchange.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-exchange-request-dialog',
  templateUrl: './exchange-request-dialog.component.html',
  styleUrls: ['./exchange-request-dialog.component.css']
})
export class ExchangeRequestDialogComponent {
  bookTitle: string;
  author: string;
  yourName!: string;
  yourEmail!: string;
  deliveryMethod!: string;
  duration!: string;

  constructor(
    public dialogRef: MatDialogRef<ExchangeRequestDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private exchangeRequestService: ExchangeService,
    private snackBar: MatSnackBar,
    private authService: AuthenticationService
  ) {
    this.bookTitle = data.book.title;
    this.author = data.book.author;
  }

  onCancelClick(): void {
    this.dialogRef.close();
  }

  onSendRequestClick(): void {
    const requestData = {
      bookTitle: this.bookTitle,
      author: this.author,
      yourName: this.yourName,
      yourEmail: this.yourEmail,
      deliveryMethod: this.deliveryMethod,
      duration: this.duration,
      status: 'Requested',
      user: this.authService.getLoggedInUser()
    };

    this.exchangeRequestService.sendExchangeRequest(requestData).subscribe(
      (response) => {
        console.log('Exchange request sent successfully:', response);
        // Optionally, you can handle success response here
        this.dialogRef.close();
        this.snackBar.open('Exchange Request Successful','Ok', {
          duration: 6000 // Duration in milliseconds
         
        });
      },
      (error) => {
        console.error('Error sending exchange request:', error);
        this.snackBar.open('Error sending exchange request, Retry!','Ok', {
          duration: 6000 // Duration in milliseconds
         
        });
      }
    );
  }
}
