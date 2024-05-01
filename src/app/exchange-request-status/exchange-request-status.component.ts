import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exchange-request-status',
  templateUrl: './exchange-request-status.component.html',
  styleUrls: ['./exchange-request-status.component.css']
})
export class ExchangeRequestStatusComponent implements OnInit {
  exchangeRequests: any[] = [
    {
      id: 1,
      bookTitle: 'The Great Gatsby',
      requestedBy: 'John Doe',
      status: 'Pending'
    },
    {
      id: 2,
      bookTitle: 'To Kill a Mockingbird',
      requestedBy: 'Jane Smith',
      status: 'Accepted'
    },
    {
      id: 3,
      bookTitle: '1984',
      requestedBy: 'Alice Johnson',
      status: 'Declined'
    },
    {
      id: 4,
      bookTitle: 'Pride and Prejudice',
      requestedBy: 'Bob Williams',
      status: 'Pending'
    }
  ]; // Array to store exchange request statuses

  constructor() { }

  ngOnInit(): void {
    // This is called when the component initializes
  }
}
