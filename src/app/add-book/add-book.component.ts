// add-book.component.ts
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {
  bookForm!: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.bookForm = this.formBuilder.group({
      title: ['', Validators.required],
      author: ['', Validators.required],
      genre: ['', Validators.required],
      condition: ['', Validators.required],
      availability: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.bookForm.valid) {
      // Process the form data here, such as sending it to a service
      console.log(this.bookForm.value);
      // Reset the form after submission
      this.bookForm.reset();
    } else {
      // Handle form validation errors
      console.log("Form is invalid. Please fill in all required fields.");
    }
  }
}
