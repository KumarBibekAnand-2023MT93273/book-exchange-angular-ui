// book-listing.component.ts

import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ExchangeRequestDialogComponent } from '../exchange-request-dialog/exchange-request-dialog.component';
import { BookService } from '../services/book.service';

@Component({
  selector: 'app-book-listing',
  templateUrl: './book-listing.component.html',
  styleUrls: ['./book-listing.component.css']
})
export class BookListingComponent implements OnInit {
  searchText: string = '';
  books: any[] = [];
  randomImageUrl!: string;

  constructor(private bookService: BookService, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.getBooks();
  }


  getBooks() {
    this.bookService.getAllBooks().subscribe(
      (response: any) => {
        this.books = response;
      },
      (error: any) => {
        console.error('Error fetching books:', error);
      }
    );
  }

  filterBooks(): any[] {
    return this.books.filter(book =>
      (book.title && book.title.toLowerCase().includes(this.searchText.toLowerCase())) ||
      (book.author && book.author.toLowerCase().includes(this.searchText.toLowerCase())) ||
      (book.bookCondition && book.bookCondition.toLowerCase().includes(this.searchText.toLowerCase())) ||
      (book.genre && book.genre.toLowerCase().includes(this.searchText.toLowerCase()))
    );
  }
  
  

  clearSearch() {
    this.searchText = '';
  }

  openExchangeRequestDialog(book: any): void {
    const dialogRef = this.dialog.open(ExchangeRequestDialogComponent, {
      width: '500px',
      data: { book: book }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      // Handle dialog close actions if needed
    });
  }

  getRandomImageUrl(book: any): string {
    const randomNumber = Math.floor(Math.random() * 4) + 1; 
    return `../../assets/book1.JPG`;
  }

}
