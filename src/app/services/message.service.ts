import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Message } from '../model/message.model';


@Injectable({
  providedIn: 'root'
})
export class MessageService {
  private apiUrl = 'http://localhost:8082/api/message';

  constructor(private http: HttpClient) { }

  sendMessage(message: Message): Observable<Message> {
    return this.http.post<Message>(`${this.apiUrl}`, message);
  }

  getMessages(recepientId: string): Observable<Message[]> {
    return this.http.get<Message[]>(`${this.apiUrl}/${recepientId}`);
  }
}
