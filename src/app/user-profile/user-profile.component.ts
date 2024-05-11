import { Component, OnInit } from '@angular/core';
import { Profile } from '../model/profile.model';

import { AuthenticationService } from '../services/authentication.service';
import { ProfileService } from '../services/profile.service.';
import { User } from '../model/user.model';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  profile: Profile = {
    profileId: 0,
    readingPreference: 'None',
    favouriteGenre: 'None',
    booksOwned: 'None',
    wishList: 'None',
  };

  constructor(private snackBar: MatSnackBar,private profileService: ProfileService, private authService: AuthenticationService) { }

  ngOnInit(): void {
    const user = this.authService.getLoggedInUser();
    
    if (user) {
      this.profile.user = user;
      this.getProfile(user); // Pass userId to getProfile method
    } else {
      console.error('User ID is undefined or null');
    }
  }

  getProfile(user: User) {
    if (user.id){
    this.profileService.getProfileByUserId(user.id)
      .subscribe(
        (profile: Profile) => {
          if(profile != null){
          this.profile = profile;
          console.log('Profile:', profile);
          } 
        },
        error => {
          console.error('Error fetching profile:', error);
        }
      );
    }
  }

  saveProfile() {
    if (this.profile) {
      this.profileService.saveProfile(this.profile)
        .subscribe(
          (savedProfile: Profile) => {
            console.log('Profile saved successfully:', savedProfile);
            this.snackBar.open('Profile updated successfully','Ok', {
              duration: 4000 // Duration in milliseconds
             
            });
            // Update the profile with the saved data
            this.profile = savedProfile;
          },
          error => {
            console.error('Error saving profile:', error);
          }
        );
    } else {
      console.error('Profile is null or undefined');
    }
  }
}
