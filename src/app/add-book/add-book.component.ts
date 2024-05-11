import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BookService } from '../services/book.service';
import { Book } from '../model/book.model';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent {
  bookForm!: FormGroup;
  book: Book = {
    title: '',
    author: '',
    genre: '',
    bookCondition: '',
    availability: ''
  };

  constructor(private fb: FormBuilder, private bookService: BookService, private snackBar: MatSnackBar) {
    this.createForm();
  }

  createForm() {
    this.bookForm = this.fb.group({
      title: ['', Validators.required],
      author: ['', Validators.required],
      genre: ['', Validators.required],
      bookCondition: ['', Validators.required],
      availability: ['', Validators.required]
    });
  }

  onSubmit() {
    const bookData = {
      title: this.bookForm.get('title')!.value,
      author: this.bookForm.get('author')!.value,
      genre: this.bookForm.get('genre')!.value,
      bookCondition: this.bookForm.get('bookCondition')!.value,
      availability: this.bookForm.get('availability')!.value,
    };
  
    this.bookService.saveBook(bookData).subscribe(
      (response: Book) => {
        console.log('Book saved successfully:', response);
        this.snackBar.open('Book saved successfully','Ok', {
          duration: 4000 // Duration in milliseconds
         
        });
        // Optionally, you can navigate to another page or show a success message here
      },
      (error: any) => {
        console.error('Error saving book:', error);
        // Handle error - show error message or log it
      }
    );
  }
  
    
}
