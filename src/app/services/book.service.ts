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

  addBook(book: Book, file: File): Observable<Book> {
    const formData: FormData = new FormData();
    formData.append('file', file, file.name);
    formData.append('title', book.title);
    formData.append('author', book.author);
    formData.append('genre', book.genre);
    formData.append('condition', book.condition);
    formData.append('availability', book.availability);
    // You can append more form data fields as needed

    return this.http.post<Book>(`${this.apiUrl}/books`, formData);
  }
}
