import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ExchangeRequest } from '../model/exchange-request.model';

@Injectable({
  providedIn: 'root'
})
export class ExchangeService {
  private apiUrl = 'http://localhost:8082/api'; // Adjust URL based on your backend API

  constructor(private http: HttpClient) { }

  sendExchangeRequest(requestData: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/exchange-requests`, requestData);
  }

  getExchangeRequests(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  getExchangeRequestsByUserId(userId: number): Observable<ExchangeRequest[]> {
    return this.http.get<ExchangeRequest[]>(`${this.apiUrl}/exchange-requests/${userId}`);
  }

  acceptExchangeRequest(requestId: number): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/exchange-requests/${requestId}/accept`, {});
  }

  completeExchangeRequest(requestId: number): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/exchange-requests/${requestId}/complete`, {});
  }
}
