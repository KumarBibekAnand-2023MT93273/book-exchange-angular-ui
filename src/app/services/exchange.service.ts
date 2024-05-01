import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExchangeService {
  private apiUrl = 'http://your-api-url/exchange-requests'; // Adjust URL based on your backend API

  constructor(private http: HttpClient) { }

  getExchangeRequests(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
}
