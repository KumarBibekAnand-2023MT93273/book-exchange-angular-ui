import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Book } from '../model/book.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private apiUrl = 'http://localhost:8082/api';

  constructor(private http: HttpClient) { }

  saveBook(book: Book): Observable<Book> {
    return this.http.post<Book>(`${this.apiUrl}/books`, book);
  }
  getAllBooks(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/books`);
  }

}
