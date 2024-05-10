// book-listing.component.ts

import { Component } from '@angular/core';
import { BookService } from '../services/book.service';
import { MatDialog } from '@angular/material/dialog';
import { ExchangeRequestDialogComponent } from '../exchange-request-dialog/exchange-request-dialog.component';


@Component({
  selector: 'app-book-listing',
  templateUrl: './book-listing.component.html',
  styleUrls: ['./book-listing.component.css']
})
export class BookListingComponent {
  book: any = {};
  searchText: string = '';

  books = [
    { 
      title: 'Book 1', 
      author: 'Author 1', 
      genre: 'Genre 1', 
      condition: 'Good', 
      availability: 'Available',
      imageUrl: 'book1.JPG' // Replace with actual image URL
    },
    { 
      title: 'Book 2', 
      author: 'Author 2', 
      genre: 'Genre 2', 
      condition: 'Fair', 
      availability: 'Not Available',
      imageUrl: 'book2.JPG' // Replace with actual image URL
    },
    { 
      title: 'Book 3', 
      author: 'Author 1', 
      genre: 'Genre 1', 
      condition: 'Good', 
      availability: 'Available',
      imageUrl: 'book3.JPG' // Replace with actual image URL
    },
    { 
      title: 'Book 4', 
      author: 'Author 2', 
      genre: 'Genre 2', 
      condition: 'Fair', 
      availability: 'Not Available',
      imageUrl: 'book4.JPG' // Replace with actual image URL
    },
    

    { 
      title: 'Book 1', 
      author: 'Author 1', 
      genre: 'Genre 1', 
      condition: 'Good', 
      availability: 'Available',
      imageUrl: 'book1.JPG' // Replace with actual image URL
    },
    { 
      title: 'Book 2', 
      author: 'Author 2', 
      genre: 'Genre 2', 
      condition: 'Fair', 
      availability: 'Not Available',
      imageUrl: 'book2.JPG' // Replace with actual image URL
    },
    { 
      title: 'Book 3', 
      author: 'Author 1', 
      genre: 'Genre 1', 
      condition: 'Good', 
      availability: 'Available',
      imageUrl: 'book3.JPG' // Replace with actual image URL
    },
    { 
      title: 'Book 4', 
      author: 'Author 2', 
      genre: 'Genre 2', 
      condition: 'Fair', 
      availability: 'Not Available',
      imageUrl: 'book4.JPG' // Replace with actual image URL
    },
    // Add more book objects as needed
  ];


  constructor(private bookService: BookService, private dialog: MatDialog) { }
  onSubmit() {
    // this.bookService.addBook(this.book);
    this.book = {}; // Clear form fields after submission
  }

  get filteredBooks() {
    return this.books.filter(book =>
      book.title.toLowerCase().includes(this.searchText.toLowerCase()) ||
      book.author.toLowerCase().includes(this.searchText.toLowerCase()) ||
      book.genre.toLowerCase().includes(this.searchText.toLowerCase())
    );
  }

  clearSearch() {
    this.searchText = ''; // Clear the search input
  }

  openExchangeRequestDialog(book: any): void {
    const dialogRef = this.dialog.open(ExchangeRequestDialogComponent, {
      width: '500px', // Set the width of the dialog
      data: { book: book } // Pass data to the dialog
    });
  
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      // You can handle dialog close actions here if needed
    });
  }
  
}
