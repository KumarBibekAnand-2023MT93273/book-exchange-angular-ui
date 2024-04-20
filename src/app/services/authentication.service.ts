import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
 public isLoggedIn: boolean = false;
  constructor() { }

  setIsLoggedIn(value: boolean): void {
    this.isLoggedIn = value; // Update the variable
  }
}
