export interface ExchangeRequest {
    exchangeRequestId: number;
    bookTitle: string;
    author: string;
    yourName: string;
    yourEmail: string;
    deliveryMethod: string;
    duration: string;
    status: string;
    user: any; // Assuming you have a User model/interface
  }
  