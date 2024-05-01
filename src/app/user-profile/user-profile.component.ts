import { Component } from '@angular/core';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent {
  user = {
    readingPreferences: '',
    favoriteGenres: '',
    booksOwned: '',
    booksToAcquire: ''
  };

  saveProfile() {
    // Logic to save user profile data
    console.log(this.user);
  }
}
