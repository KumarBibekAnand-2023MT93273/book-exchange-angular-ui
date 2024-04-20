// book-listing.component.ts

import { Component } from '@angular/core';
import { BookService } from '../services/book.service';

@Component({
  selector: 'app-book-listing',
  templateUrl: './book-listing.component.html',
  styleUrls: ['./book-listing.component.css']
})
export class BookListingComponent {
  book: any = {};

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

  constructor(private bookService: BookService) { }

  onSubmit() {
    this.bookService.addBook(this.book);
    this.book = {}; // Clear form fields after submission
  }
}
