import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private readonly loggedInKey = 'isLoggedIn';

  constructor() { }

  get isLoggedIn(): boolean {
    return localStorage.getItem(this.loggedInKey) === 'true';
  }

  setIsLoggedIn(value: boolean): void {
    localStorage.setItem(this.loggedInKey, value ? 'true' : 'false'); // Update local storage
  }

  logout(): void {
    localStorage.removeItem(this.loggedInKey); // Clear login status
  }
}
