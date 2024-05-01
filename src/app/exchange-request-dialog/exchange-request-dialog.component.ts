import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-exchange-request-dialog',
  templateUrl: './exchange-request-dialog.component.html',
  styleUrls: ['./exchange-request-dialog.component.css']
})
export class ExchangeRequestDialogComponent implements OnInit {
  // Properties to hold book information
  bookTitle!: string;
  author!: string;

  constructor(
    public dialogRef: MatDialogRef<ExchangeRequestDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit(): void {
    // Populate book information
    this.bookTitle = this.data.book.title;
    this.author = this.data.book.author;
  }

  onCancelClick(): void {
    this.dialogRef.close();
  }

  onSendRequestClick(): void {
    // Implement logic to send the exchange request
    console.log('Sending exchange request for:', this.data.book);
    this.dialogRef.close();
  }
}
